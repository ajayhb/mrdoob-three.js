/*
 * @author zz85 / http://twitter.com/blurspline / http://www.lab4games.net/zz85/blog 
 * Smooth Geometry (SmoothMesh) using Catmull-Clark Subdivision Surfaces
 * Readings: 
 *	http://en.wikipedia.org/wiki/Catmull%E2%80%93Clark_subdivision_surface
 *	http://www.rorydriscoll.com/2008/08/01/catmull-clark-subdivision-the-basics/
 */
// 
THREE.SubdivisionGeometry = function( oldGeometry ) {
	THREE.Geometry.call( this );

	var scope = this;
	
	function v( x, y, z ) {
		scope.vertices.push( new THREE.Vertex( new THREE.Vector3( x, y, z ) ) );
	}

	function f4( a, b, c, d, color, material ) {
		
		scope.faces.push( new THREE.Face4( a, b, c, d, null, color, material) );
		
		if (!supportUVs || uvForVertices.length!=0) {
			scope.faceVertexUvs[ 0 ].push( [
				uvForVertices[a],
				uvForVertices[b],
				uvForVertices[c],
				uvForVertices[d]
			] );
			
		}
	}
	
	function edge_hash( a, b ) {

		return Math.min( a, b ) + "_" + Math.max( a, b );

	};
	
	function computeEdgeFaces( geometry ) {

		function addToMap( map, hash, i ) {

			if ( map[ hash ] === undefined ) {

				map[ hash ] = { "set": {}, "array": [] };
				
			} 
			
			map[ hash ].set[ i ] = 1;
			map[ hash ].array.push( i );

		};

		var i, il, v1, v2, j, k,
			face, faceIndices, faceIndex,
			edge,
			hash,
			vfMap = {};

		// construct vertex -> face map

		for( i = 0, il = geometry.faces.length; i < il; i ++ ) {

			face = geometry.faces[ i ];

			if ( face instanceof THREE.Face3 ) {

				hash = edge_hash( face.a, face.b );
				addToMap( vfMap, hash, i );

				hash = edge_hash( face.b, face.c );
				addToMap( vfMap, hash, i );

				hash = edge_hash( face.c, face.a );
				addToMap( vfMap, hash, i );

			} else if ( face instanceof THREE.Face4 ) {

				// in WebGLRenderer quad is tesselated
				// to triangles: a,b,d / b,c,d
				// shared edge is: b,d

				// add edge B-D only if you wish to slice a face4
				// hash = edge_hash( face.b, face.d ); 
				// addToMap( vfMap, hash, i );

				hash = edge_hash( face.a, face.b );
				addToMap( vfMap, hash, i );

				hash = edge_hash( face.b, face.c );
				addToMap( vfMap, hash, i );

				hash = edge_hash( face.c, face.d );
				addToMap( vfMap, hash, i );
				
				hash = edge_hash( face.d, face.a );
				addToMap( vfMap, hash, i );

			}

		}

		// extract faces
		
	
		geometry.vfMap = vfMap;
		geometry.edges = [];
		
		var numOfEdges = 0;
		for (i in vfMap) {
			numOfEdges++;
			
			edge = vfMap[i];
			geometry.edges.push(edge.array);
			
		}
		
		//console.log('vfMap', vfMap, 'geometry.edges',geometry.edges, 'numOfEdges', numOfEdges);

		return vfMap;

	};
	
	var originalPoints = oldGeometry.vertices;
	var originalFaces = oldGeometry.faces;
	
	var newPoints = originalPoints.concat(); // Vertices
		
	var facePoints = [], edgePoints = {};
	
	var uvForVertices = [];
	
	var supportUVs = true;
		
	// Step 1
	//	For each face, add a face point
	//	Set each face point to be the centroid of all original points for the respective face.
	
	var i, il, j, jl, face;
	
	// For Uvs
	var uvs = oldGeometry.faceVertexUvs[0];
	var abcd = 'abcd', vertice;
	
	for (i=0, il = uvs.length; i<il; i++ ) {
		for (j=0,jl=uvs[i].length;j<jl;j++) {
			vertice = originalFaces[i][abcd.charAt(j)];
			
			if (!uvForVertices[vertice]) {
				uvForVertices[vertice] = uvs[i][j];
			} else {
				//console.log('dup', 	uvForVertices[vertice]);
			}
			
			
		}
	}
	
	this.materials = oldGeometry.materials;
			
	var avgUv ;
	for (i=0, il = originalFaces.length; i<il ;i++) {
		face = originalFaces[i];
		facePoints.push(face.centroid);
		newPoints.push( new THREE.Vertex(face.centroid) );
		
		
		if (!supportUVs || uvForVertices.length==0) continue;
		
		// Prepare subdivided uv
		
		avgUv = new THREE.UV();
		
		if ( face instanceof THREE.Face3 ) {
			avgUv.u = uvForVertices[face.a].u + uvForVertices[face.b].u + uvForVertices[face.c].u;
			avgUv.v = uvForVertices[face.a].v + uvForVertices[face.b].v + uvForVertices[face.c].v;
			avgUv.u /= 3;
			avgUv.v /= 3;
			
		} else if ( face instanceof THREE.Face4 ) {
			avgUv.u = uvForVertices[face.a].u + uvForVertices[face.b].u + uvForVertices[face.c].u + uvForVertices[face.d].u;
			avgUv.v = uvForVertices[face.a].v + uvForVertices[face.b].v + uvForVertices[face.c].v + uvForVertices[face.d].v;
			avgUv.u /= 4;
			avgUv.v /= 4;
		}
	
		uvForVertices.push(avgUv);
	}

	// Step 2
	//	For each edge, add an edge point.
	//	Set each edge point to be the average of the two neighbouring face points and its two original endpoints.
	
	var vfMap = computeEdgeFaces ( oldGeometry );
	var edge, faceIndexA, faceIndexB, avg;
	
	//console.log('vfMap', vfMap);
	
	var edgeInfo;
	var edgeCount = 0;
	var originalVerticesLength = originalPoints.length;
	var edgeVertex, edgeVertexA, edgeVertexB;
	for (i in vfMap) {
		edgeInfo = vfMap[i];
		edge = edgeInfo.array;
		faceIndexA = edge[0]; // face index a
		faceIndexB = edge[1]; // face index b
		
		avg = new THREE.Vector3();
		
		//console.log(i, faceIndexB,facePoints[faceIndexB]);
		
		if (edge.length!=2) {
			console.log('warning, edge fail', edge);
			continue;
		}
		
		avg.addSelf(facePoints[faceIndexA]);
		avg.addSelf(facePoints[faceIndexB]);
		
		
		edgeVertex = i.split('_');
		edgeVertexA = edgeVertex[0];
		edgeVertexB = edgeVertex[1];
		
		avg.addSelf(originalPoints[edgeVertexA].position);
		avg.addSelf(originalPoints[edgeVertexB].position);
		
		avg.multiplyScalar(0.25);
		
		edgePoints[i] = originalVerticesLength + originalFaces.length + edgeCount;
		
		newPoints.push( new THREE.Vertex(avg) );
	
		edgeCount ++;
		
		if (!supportUVs || uvForVertices.length==0) continue;
		
		// Prepare subdivided uv
		
		avgUv = new THREE.UV();
		
		avgUv.u = uvForVertices[edgeVertexA].u + uvForVertices[edgeVertexB].u;
		avgUv.v = uvForVertices[edgeVertexA].v + uvForVertices[edgeVertexB].v;
		avgUv.u /= 2;
		avgUv.v /= 2;
	
		uvForVertices.push(avgUv);
		
	}
	
	// Step 3
	//	For each face point, add an edge for every edge of the face, 
	//	connecting the face point to each edge point for the face.
	
	
	var facePt, currentVerticeIndex;
	
	var hashAB, hashBC, hashCD, hashDA, hashCA;
	
	
	for (i=0, il = facePoints.length; i<il ;i++) { // for every face
		facePt = facePoints[i];
		face = originalFaces[i];
		currentVerticeIndex = originalVerticesLength+ i;
		
		if ( face instanceof THREE.Face3 ) {
			
			// create 3 face4s
			
			hashAB = edge_hash( face.a, face.b );
			hashBC = edge_hash( face.b, face.c );
			hashCA = edge_hash( face.c, face.a );

			
			f4( currentVerticeIndex, edgePoints[hashAB], face.b, edgePoints[hashBC], face.color, face.material);
			f4( currentVerticeIndex, edgePoints[hashBC], face.c, edgePoints[hashCA], face.color, face.material);
			f4( currentVerticeIndex, edgePoints[hashCA], face.a, edgePoints[hashAB], face.color, face.material);
			// face subdivide color and materials too? 
			
			
			
		} else if ( face instanceof THREE.Face4 ) {
			// create 4 face4s
			
			hashAB = edge_hash( face.a, face.b );
			hashBC = edge_hash( face.b, face.c );
			hashCD = edge_hash( face.c, face.d );
			hashDA = edge_hash( face.d, face.a );
			
			f4( currentVerticeIndex, edgePoints[hashAB], face.b, edgePoints[hashBC], face.color, face.material);
			f4( currentVerticeIndex, edgePoints[hashBC], face.c, edgePoints[hashCD], face.color, face.material);
			f4( currentVerticeIndex, edgePoints[hashCD], face.d, edgePoints[hashDA], face.color, face.material);
			f4( currentVerticeIndex, edgePoints[hashDA], face.a, edgePoints[hashAB], face.color, face.material);

				
		} else {
			console.log('face should be a face!', face);
		}
	}
	
	
	scope.vertices = newPoints;
	
	// console.log('original ', oldGeometry.vertices.length, oldGeometry.faces.length );
	// console.log('new points', newPoints.length, 'faces', this.faces.length );
	
	// Step 4
	
	//	For each original point P, 
	//		take the average F of all n face points for faces touching P, 
	//		and take the average R of all n edge midpoints for edges touching P, 
	//		where each edge midpoint is the average of its two endpoint vertices. 
	//	Move each original point to the point
	
	
	
	var vertexEdgeMap = {};
	var vertexFaceMap = {};
	
	var addVertexEdgeMap = function(vertex, edge) {
		if (vertexEdgeMap[vertex]===undefined) {
			vertexEdgeMap[vertex] = [];
		}
		
		vertexEdgeMap[vertex].push(edge);
	};
	
	var addVertexFaceMap = function(vertex, face) {
		if (vertexFaceMap[vertex]===undefined) {
			vertexFaceMap[vertex] = {};
		}
		
		vertexFaceMap[vertex][face] = null;
	};
	
	// Prepares vertexEdgeMap and vertexFaceMap
	for (i in vfMap) { // This is for every edge
		edgeInfo = vfMap[i];
		
		edgeVertex = i.split('_');
		edgeVertexA = edgeVertex[0];
		edgeVertexB = edgeVertex[1];
		
		addVertexEdgeMap(edgeVertexA, [edgeVertexA, edgeVertexB] );
		addVertexEdgeMap(edgeVertexB, [edgeVertexA, edgeVertexB] );
		
		edge = edgeInfo.array;
		faceIndexA = edge[0]; // face index a
		faceIndexB = edge[1]; // face index b
		
		addVertexFaceMap(edgeVertexA, faceIndexA);
		addVertexFaceMap(edgeVertexA, faceIndexB);
		addVertexFaceMap(edgeVertexB, faceIndexA);
		addVertexFaceMap(edgeVertexB, faceIndexB);
		
	}
	
	//console.log('vertexEdgeMap',vertexEdgeMap, 'vertexFaceMap', vertexFaceMap);
	
	var F = new THREE.Vector3();
	var R = new THREE.Vector3();

	var n;
	for (i=0, il = originalPoints.length; i<il; i++) {
		// (F + 2R + (n-3)P) / n
		
		if (vertexEdgeMap[i]===undefined) continue;
		
		F.set(0,0,0);
		R.set(0,0,0);
		var newPos =  new THREE.Vector3(0,0,0);
		
		var f =0;
		for (j in vertexFaceMap[i]) {
			
			F.addSelf(facePoints[j]);
			f++;
		}
		
		F.divideScalar(f);
		
		n = vertexEdgeMap[i].length;
		
		for (j=0; j<n;j++) {
			edge = vertexEdgeMap[i][j];
			var midPt = originalPoints[edge[0]].position.clone().addSelf(originalPoints[edge[1]].position).divideScalar(2);
			R.addSelf(midPt);
			// R.addSelf(originalPoints[edge[0]].position);
			// R.addSelf(originalPoints[edge[1]].position);
		}
		
		R.divideScalar(n)
		
		newPos.addSelf(originalPoints[i].position);
		newPos.multiplyScalar(n - 3);
		
		newPos.addSelf(F);
		newPos.addSelf(R.multiplyScalar(2));
		newPos.divideScalar(n);
		
		this.vertices[i].position = newPos;
		
		
	}
	
	this.computeCentroids();
	this.computeFaceNormals();
	this.computeVertexNormals();
};

THREE.SubdivisionGeometry.prototype = new THREE.Geometry();
THREE.SubdivisionGeometry.prototype.constructor = THREE.SubdivisionGeometry;

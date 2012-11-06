var Viewport = function ( signals ) {

	var container = new UI.Panel( 'absolute' );
	container.setBackgroundColor( '#aaa' );

	// settings

	var enableHelpersFog = true;

	// helpers

	var objects = [];

	var sceneHelpers = new THREE.Scene();

	var size = 500, step = 25;
	var geometry = new THREE.Geometry();
	var material = new THREE.LineBasicMaterial( { vertexColors: THREE.VertexColors } );
	var color1 = new THREE.Color( 0x444444 ), color2 = new THREE.Color( 0x888888 );

	for ( var i = - size; i <= size; i += step ) {

		geometry.vertices.push( new THREE.Vector3( -size, 0, i ) );
		geometry.vertices.push( new THREE.Vector3(  size, 0, i ) );

		geometry.vertices.push( new THREE.Vector3( i, 0, -size ) );
		geometry.vertices.push( new THREE.Vector3( i, 0,  size ) );

		var color = i === 0 ? color1 : color2;

		geometry.colors.push( color, color, color, color );

	}

	var grid = new THREE.Line( geometry, material, THREE.LinePieces );
	sceneHelpers.add( grid );

	var selectionBox = new THREE.Mesh( new THREE.CubeGeometry( 1, 1, 1 ), new THREE.MeshBasicMaterial( { color: 0xffff00, wireframe: true } ) );
	selectionBox.matrixAutoUpdate = false;
	selectionBox.visible = false;
	sceneHelpers.add( selectionBox );

	var selectionAxis = new THREE.AxisHelper( 100 );
	selectionAxis.material.depthTest = false;
	selectionAxis.material.transparent = true;
	selectionAxis.matrixAutoUpdate = false;
	selectionAxis.visible = false;
	sceneHelpers.add( selectionAxis );

	//

	var scene = new THREE.Scene();

	var camera = new THREE.PerspectiveCamera( 50, 1, 1, 5000 );
	camera.position.set( 500, 250, 500 );
	camera.lookAt( scene.position );
	scene.add( camera );

	var light1 = new THREE.DirectionalLight( 0xffffff );
	light1.position.set( 1, 0.5, 0 ).multiplyScalar( 400 );

	var light2 = new THREE.DirectionalLight( 0xffffff, 0.5 );
	light2.position.set( - 1, - 0.5, 0 ).multiplyScalar( 400 );

	light1.target.properties.targetInverse = light1;
	light2.target.properties.targetInverse = light2;

	// fog

	var oldFogType = "None";
	var oldFogColor = 0xaaaaaa;
	var oldFogNear = 1;
	var oldFogFar = 5000;
	var oldFogDensity = 0.00025;

	// default objects names

	camera.name = "Camera";

	light1.name = "Light 1";
	light1.target.name = "Light 1 Target";

	light2.name = "Light 2";
	light2.target.name = "Light 2 Target";

	// active objects

	camera.properties.active = true;

	// object picking

	var intersectionPlane = new THREE.Mesh( new THREE.PlaneGeometry( 2000, 2000, 8, 8 ) );
	intersectionPlane.visible = false;
	sceneHelpers.add( intersectionPlane );

	var ray = new THREE.Ray();
	var projector = new THREE.Projector();
	var offset = new THREE.Vector3();

	var cameraChanged = false;
	var helpersVisible = true;

	//

	var picked = null;
	var selected = camera;

	// events

	var onMouseDown = function ( event ) {

		container.dom.focus();

		event.preventDefault();

		if ( event.button === 0 ) {

			var vector = new THREE.Vector3(
				( ( event.clientX - container.dom.offsetLeft ) / container.dom.offsetWidth ) * 2 - 1,
				- ( ( event.clientY - container.dom.offsetTop ) / container.dom.offsetHeight ) * 2 + 1,
				0.5
			);

			projector.unprojectVector( vector, camera );

			ray.set( camera.position, vector.subSelf( camera.position ).normalize() );

			var intersects = ray.intersectObjects( objects, true );

			if ( intersects.length > 0 ) {

				controls.enabled = false;

				picked = intersects[ 0 ].object;

				var root;

				if ( picked.properties.isGizmo ) {

					root = picked.properties.gizmoRoot;
					selected = picked.properties.gizmoSubject;

				} else {

					root = picked;
					selected = picked;

				}

				intersectionPlane.position.copy( root.position );
				intersectionPlane.lookAt( camera.position );

				signals.objectSelected.dispatch( selected );

				var intersects = ray.intersectObject( intersectionPlane );
				offset.copy( intersects[ 0 ].point ).subSelf( intersectionPlane.position );

				document.addEventListener( 'mousemove', onMouseMove, false );
				document.addEventListener( 'mouseup', onMouseUp, false );

			} else {

				controls.enabled = true;

			}

		}

		cameraChanged = false;

	};

	var onMouseMove = function ( event ) {

		var vector = new THREE.Vector3(
			( ( event.clientX - container.dom.offsetLeft ) / container.dom.offsetWidth ) * 2 - 1,
			- ( ( event.clientY - container.dom.offsetTop ) / container.dom.offsetHeight ) * 2 + 1,
			0.5
		);

		projector.unprojectVector( vector, camera );

		ray.set( camera.position, vector.subSelf( camera.position ).normalize() );

		var intersects = ray.intersectObject( intersectionPlane );

		if ( intersects.length > 0 ) {

			intersects[ 0 ].point.subSelf( offset );

			if ( picked.properties.isGizmo ) {

				picked.properties.gizmoRoot.position.copy( intersects[ 0 ].point );
				picked.properties.gizmoSubject.position.copy( intersects[ 0 ].point );
				signals.objectChanged.dispatch( picked.properties.gizmoSubject );

			} else {

				picked.position.copy( intersects[ 0 ].point );
				signals.objectChanged.dispatch( picked );

			}

			render();

		}

	};

	var onMouseUp = function ( event ) {

		document.removeEventListener( 'mousemove', onMouseMove );
		document.removeEventListener( 'mouseup', onMouseUp );

	};

	var onClick = function ( event ) {

		if ( event.button == 0 && cameraChanged === false ) {

			var vector = new THREE.Vector3(
				( ( event.clientX - container.dom.offsetLeft ) / container.dom.offsetWidth ) * 2 - 1,
				- ( ( event.clientY - container.dom.offsetTop ) / container.dom.offsetHeight ) * 2 + 1,
				0.5
			);

			projector.unprojectVector( vector, camera );

			ray.set( camera.position, vector.subSelf( camera.position ).normalize() );
			var intersects = ray.intersectObjects( objects, true );

			if ( intersects.length > 0 && ! controls.enabled ) {

				selected = intersects[ 0 ].object;

			} else {

				selected = camera;

			}

			if ( selected.properties.isGizmo ) {

				signals.objectSelected.dispatch( selected.properties.gizmoSubject );

			} else {

				signals.objectSelected.dispatch( selected );

			}

		}

		controls.enabled = true;

	};

	var onKeyDown = function ( event ) {

		switch ( event.keyCode ) {

			case 46: // delete

				signals.removeSelectedObject.dispatch();

				break;

			case 72: // h

				signals.toggleHelpers.dispatch();

				break;

		}

	};

	container.dom.addEventListener( 'mousedown', onMouseDown, false );
	container.dom.addEventListener( 'click', onClick, false );

	// controls need to be added *after* main logic,
	// otherwise controls.enabled doesn't work.

	var controls = new THREE.TrackballControls( camera, container.dom );
	controls.rotateSpeed = 1.0;
	controls.zoomSpeed = 1.2;
	controls.panSpeed = 0.8;
	controls.noZoom = false;
	controls.noPan = false;
	controls.staticMoving = true;
	controls.dynamicDampingFactor = 0.3;
	controls.addEventListener( 'change', function () {

		cameraChanged = true;

		signals.cameraChanged.dispatch( camera );
		render();

	} );

	var handleAddition = function ( object ) {

		// add to picking list

		objects.push( object );

		// create helpers for invisible object types (lights, cameras, targets)

		if ( object instanceof THREE.DirectionalLight ) {

			var lightGizmo = new THREE.DirectionalLightHelper( object, 30 );
			sceneHelpers.add( lightGizmo );
			sceneHelpers.add( lightGizmo.targetSphere );

			object.properties.helper = lightGizmo;
			object.properties.pickingProxy = lightGizmo.lightSphere;
			object.target.properties.pickingProxy = lightGizmo.targetSphere;

			objects.push( lightGizmo.lightSphere );
			objects.push( lightGizmo.targetSphere );

		} else if ( object instanceof THREE.PointLight ) {
		} else if ( object instanceof THREE.SpotLight ) {
		} else if ( object instanceof THREE.HemisphereLight ) {
		}

	};


	// signals

	signals.objectAdded.add( function ( object ) {

		object.traverse( handleAddition );

		scene.add( object );
		render();

		signals.sceneChanged.dispatch( scene );

	} );

	signals.objectChanged.add( function ( object ) {

		if ( object instanceof THREE.Camera ) {

			object.updateProjectionMatrix();

		} else if ( object instanceof THREE.DirectionalLight ) {

			object.properties.helper.update();

		} else if ( object instanceof THREE.PointLight ) {
		} else if ( object instanceof THREE.SpotLight ) {
		} else if ( object instanceof THREE.HemisphereLight ) {
		} else if ( object.properties.targetInverse ) {

			object.properties.targetInverse.properties.helper.update();

		}

		render();

	} );

	signals.removeSelectedObject.add( function () {

		if ( selected === camera ) return;

		var name = selected.name ?  '"' + selected.name + '"': "selected object";

		if ( ! confirm( 'Delete ' + name + '?' ) ) {

			return;

		}

		// remove from picking list

		var toRemove = {};

		selected.traverse( function ( child ) {

			toRemove[ child.id ] = true;

		} );

		var newObjects = [];

		for ( var i = 0; i < objects.length; i ++ ) {

			var object = objects[ i ];

			if ( ! ( object.id in toRemove ) ) {

				newObjects.push( object );

			}

		}

		objects = newObjects;

		//

		selectionBox.visible = false;
		selectionAxis.visible = false;

		scene.traverse( function( node ) {

			node.remove( selected );

		} );

		render();

		signals.sceneChanged.dispatch( scene );
		signals.objectSelected.dispatch( null );

	} );

	signals.objectSelected.add( function ( object ) {

		selectionBox.visible = false;
		selectionAxis.visible = false;

		var geometry;
		var hasRotation;

		if ( object !== null ) {

			selected = object;

			if ( object.geometry ) {

				geometry = object.geometry;
				hasRotation = true;

			} else if ( object.properties.pickingProxy ) {

				geometry = object.properties.pickingProxy.geometry;
				hasRotation = false;

			}

		}

		if ( geometry ) {

			if ( geometry.boundingBox === null ) {

				geometry.computeBoundingBox();

			}

			var vertices = selectionBox.geometry.vertices;

			vertices[ 0 ].x = geometry.boundingBox.max.x;
			vertices[ 0 ].y = geometry.boundingBox.max.y;
			vertices[ 0 ].z = geometry.boundingBox.max.z;

			vertices[ 1 ].x = geometry.boundingBox.max.x;
			vertices[ 1 ].y = geometry.boundingBox.max.y;
			vertices[ 1 ].z = geometry.boundingBox.min.z;

			vertices[ 2 ].x = geometry.boundingBox.max.x;
			vertices[ 2 ].y = geometry.boundingBox.min.y;
			vertices[ 2 ].z = geometry.boundingBox.max.z;

			vertices[ 3 ].x = geometry.boundingBox.max.x;
			vertices[ 3 ].y = geometry.boundingBox.min.y;
			vertices[ 3 ].z = geometry.boundingBox.min.z;

			vertices[ 4 ].x = geometry.boundingBox.min.x;
			vertices[ 4 ].y = geometry.boundingBox.max.y;
			vertices[ 4 ].z = geometry.boundingBox.min.z;

			vertices[ 5 ].x = geometry.boundingBox.min.x;
			vertices[ 5 ].y = geometry.boundingBox.max.y;
			vertices[ 5 ].z = geometry.boundingBox.max.z;

			vertices[ 6 ].x = geometry.boundingBox.min.x;
			vertices[ 6 ].y = geometry.boundingBox.min.y;
			vertices[ 6 ].z = geometry.boundingBox.min.z;

			vertices[ 7 ].x = geometry.boundingBox.min.x;
			vertices[ 7 ].y = geometry.boundingBox.min.y;
			vertices[ 7 ].z = geometry.boundingBox.max.z;

			selectionBox.geometry.computeBoundingSphere();
			selectionBox.geometry.verticesNeedUpdate = true;

			selectionBox.matrixWorld = object.matrixWorld;
			selectionAxis.matrixWorld = object.matrixWorld;

			selectionBox.visible = true;

		}

		if ( hasRotation ) {

			selectionAxis.visible = true;

		}

		render();

	} );

	signals.materialChanged.add( function ( material ) {

		render();

	} );

	signals.clearColorChanged.add( function ( color ) {

		renderer.setClearColorHex( color, 1 );

		render();

	} );

	signals.fogTypeChanged.add( function ( fogType ) {

		if ( fogType !== oldFogType ) {

			if ( fogType === "None" ) {

				scene.fog = null;

			} else if ( fogType === "Fog" ) {

				scene.fog = new THREE.Fog( oldFogColor, oldFogNear, oldFogFar );

			} else if ( fogType === "FogExp2" ) {

				scene.fog = new THREE.FogExp2( oldFogColor, oldFogDensity );

			}

			updateMaterials( scene );

			if ( enableHelpersFog )	{

				sceneHelpers.fog = scene.fog;
				updateMaterials( sceneHelpers );

			}

			oldFogType = fogType;

		}

		render();

	} );

	signals.fogColorChanged.add( function ( fogColor ) {

		oldFogColor = fogColor;

		updateFog( scene );

		render();

	} );

	signals.fogParametersChanged.add( function ( near, far, density ) {

		oldFogNear = near;
		oldFogFar = far;
		oldFogDensity = density;

		updateFog( scene );

		render();

	} );

	signals.windowResize.add( function () {

		camera.aspect = container.dom.offsetWidth / container.dom.offsetHeight;
		camera.updateProjectionMatrix();

		renderer.setSize( container.dom.offsetWidth, container.dom.offsetHeight );

		render();

	} );

	signals.exportScene.add( function ( root ) {

		var clearColor = renderer.getClearColor();
		var clearAlpha = renderer.getClearAlpha();

		var output = new THREE.SceneExporter().parse( root, clearColor, clearAlpha );

		var blob = new Blob( [ output ], { type: 'text/plain' } );
		var objectURL = URL.createObjectURL( blob );

		window.open( objectURL, '_blank' );
		window.focus();

	} );

	signals.toggleHelpers.add( function () {

		helpersVisible = !helpersVisible;
		render();

	} );

	signals.resetScene.add( function ( newScene, newCamera, newClearColor ) {

		scene = newScene;

		// remove old gizmos

		var toRemove = {};

		sceneHelpers.traverse( function ( child ) {

			if ( child.properties.isGizmo ) {

				toRemove[ child.id ] = child;

			}

		} );

		for ( var id in toRemove ) {

			sceneHelpers.remove( toRemove[ id ] );

		}

		// reset picking list

		objects = [];

		// add new gizmos and fill picking list

		scene.traverse( handleAddition );

		//

		if ( newCamera ) {

			camera = newCamera;
			camera.properties.active = true;

			camera.aspect = container.dom.offsetWidth / container.dom.offsetHeight;
			camera.updateProjectionMatrix();

			controls.object = camera;
			controls.update();

		}

		if ( newClearColor ) {

			signals.clearColorChanged.dispatch( newClearColor.getHex() );

		}

		if ( newScene.fog ) {

			oldFogColor = newScene.fog.color.getHex();

			if ( newScene.fog instanceof THREE.Fog ) {

				oldFogType = "Fog";
				oldFogNear = newScene.fog.near;
				oldFogFar = newScene.fog.far;

			} else if ( newScene.fog instanceof THREE.FogExp2 ) {

				oldFogType = "FogExp2";
				oldFogDensity = newScene.fog.density;

			}

		} else {

			oldFogType = "None";

		}

		if ( enableHelpersFog )	{

			sceneHelpers.fog = scene.fog;
			updateMaterials( sceneHelpers );

		}

		signals.sceneChanged.dispatch( scene );
		signals.objectSelected.dispatch( null );

	} );

	//

	var renderer = new THREE.WebGLRenderer( { antialias: true, alpha: false, clearColor: 0xaaaaaa, clearAlpha: 1 } );
	renderer.autoClear = false;
	renderer.autoUpdateScene = false;
	container.dom.appendChild( renderer.domElement );

	animate();

	// set up for hotkeys
	// must be done here, otherwise it doesn't work

	container.dom.tabIndex = 1;
	container.dom.style.outline = 'transparent';
	container.dom.addEventListener( 'keydown', onKeyDown, false );

	// must come after listeners are registered

	signals.sceneChanged.dispatch( scene );
	signals.objectAdded.dispatch( light1 );
	signals.objectAdded.dispatch( light2 );

	//

	function updateMaterials( root ) {

		root.traverse( function ( node ) {

			if ( node.material ) {

				node.material.needsUpdate = true;

			}

			if ( node.geometry && node.geometry.materials ) {

				for ( var i = 0; i < node.geometry.materials.length; i ++ ) {

					node.geometry.materials[ i ].needsUpdate = true;

				}

			}

		} );

	}

	function updateFog( root ) {

		if ( root.fog ) {

			root.fog.color.setHex( oldFogColor );

			if ( root.fog.near !== undefined ) root.fog.near = oldFogNear;
			if ( root.fog.far !== undefined ) root.fog.far = oldFogFar;
			if ( root.fog.density !== undefined ) root.fog.density = oldFogDensity;

		}

	}

	function animate() {

		requestAnimationFrame( animate );
		controls.update();

	}

	function render() {

		sceneHelpers.updateMatrixWorld();
		scene.updateMatrixWorld();

		renderer.clear();
		renderer.render( scene, camera );

		if ( helpersVisible ) {

			renderer.render( sceneHelpers, camera );

		}

	}

	return container;

}

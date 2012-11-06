/**
 * @author alteredq / http://alteredqualia.com/
 *
 *	- shows directional light color, intensity, position, orientation and target
 */

THREE.DirectionalLightHelper = function ( light, arrowLength ) {

	THREE.Object3D.call( this );

	this.light = light;

	this.position = light.position;

	this.properties.isGizmo = true;

	this.color = light.color.clone();

	this.color.r *= light.intensity;
	this.color.g *= light.intensity;
	this.color.b *= light.intensity;

	var hexColor = this.color.getHex();

	this.direction = new THREE.Vector3();
	this.direction.sub( light.target.position, light.position );

	var targetGeo = new THREE.SphereGeometry( 5, 8, 4 );
	var lightGeo = new THREE.SphereGeometry( 5, 16, 8 );
	var lightMaterial = new THREE.MeshBasicMaterial( { color: hexColor } );

	this.lightArrow = new THREE.ArrowHelper( this.direction, null, arrowLength, hexColor );
	this.lightSphere = new THREE.Mesh( lightGeo, lightMaterial );

	this.add( this.lightArrow );
	this.add( this.lightSphere );

	this.targetSphere = null;

	if ( light.target.properties.targetInverse ) {

		var targetMaterial = new THREE.MeshBasicMaterial( { color: hexColor, wireframe: true } );

		this.targetSphere = new THREE.Mesh( targetGeo, targetMaterial );
		this.targetSphere.position = light.target.position;

		this.targetSphere.properties.isGizmo = true;
		this.targetSphere.properties.gizmoSubject = light.target;
		this.targetSphere.properties.gizmoRoot = this.targetSphere;

	}

	this.lightSphere.properties.isGizmo = true;
	this.lightSphere.properties.gizmoSubject = light;
	this.lightSphere.properties.gizmoRoot = this;

}

THREE.DirectionalLightHelper.prototype = Object.create( THREE.Object3D.prototype );

THREE.DirectionalLightHelper.prototype.update = function () {

	// set arrow orientation
	// pointing from light to target

	this.direction.sub( this.light.target.position, this.light.position );
	this.lightArrow.setDirection( this.direction );

	// set arrow and spheres colors to light color * light intensity

	this.color.copy( this.light.color );

	var intensity = THREE.Math.clamp( this.light.intensity, 0, 1 );
	this.color.r *= intensity;
	this.color.g *= intensity;
	this.color.b *= intensity;

	this.lightArrow.setColor( this.color.getHex() );
	this.lightSphere.material.color.copy( this.color );
	this.targetSphere.material.color.copy( this.color );

}


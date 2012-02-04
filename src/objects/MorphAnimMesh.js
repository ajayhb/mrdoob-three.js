/**
 * @author alteredq / http://alteredqualia.com/
 */

THREE.MorphAnimMesh = function( geometry, material ) {

	THREE.Mesh.call( this, geometry, material );

	// API

	this.duration = 1000; // milliseconds
	this.mirroredLoop = false;
	this.time = 0;

	// internals

	this.lastKeyframe = 0;
	this.currentKeyframe = 0;

	this.direction = 1;
	this.directionBackwards = false;

	this.setFrameRange( 0, this.geometry.morphTargets.length - 1 );

};

THREE.MorphAnimMesh.prototype = new THREE.Mesh();
THREE.MorphAnimMesh.prototype.constructor = THREE.MorphAnimMesh;

THREE.MorphAnimMesh.prototype.setFrameRange = function ( start, end ) {

	this.start = start;
	this.end = end;

	this.length = this.end - this.start;

};

THREE.MorphAnimMesh.prototype.parseAnimations = function () {

	var geometry = this.geometry;

	var firstAnimation, animations = {};

	var pattern = /([a-z]+)(\d+)/;

	for ( var i = 0, il = geometry.morphTargets.length; i < il; i ++ ) {

		var morph = geometry.morphTargets[ i ];
		var parts = morph.name.match( pattern );

		if ( parts && parts.length > 1 ) {

			var label = parts[ 1 ];
			var num = parts[ 2 ];

			if ( ! animations[ label ] ) {

				animations[ label ] = { frames: [], min: Infinity, max: -Infinity };

			}

			animations[ label ].frames.push( i );

			if ( i < animations[ label ].min ) animations[ label ].min = i;
			if ( i > animations[ label ].max ) animations[ label ].max = i;

			if ( ! firstAnimation ) firstAnimation = label;

		}

	}

	geometry.animations = animations;
	geometry.firstAnimation = firstAnimation;

};

THREE.MorphAnimMesh.prototype.playAnimation = function ( label, fps ) {

	var animation = this.geometry.animations[ label ];

	this.setFrameRange( animation.min, animation.max );
	this.duration = 1000 * ( ( animation.max - animation.min ) / fps );
	this.time = 0;

};

THREE.MorphAnimMesh.prototype.updateAnimation = function ( delta ) {

	var frameTime = this.duration / this.length;

	this.time += this.direction * delta;

	if ( this.mirroredLoop ) {

		if ( this.time > this.duration || this.time < 0 ) {

			this.direction *= -1;

			if ( this.time > this.duration ) {

				this.time = this.duration;
				this.directionBackwards = true;

			}

			if ( this.time < 0 ) {

				this.time = 0;
				this.directionBackwards = false;

			}

		}

	} else {

		this.time = this.time % this.duration;

	}

	var keyframe = this.start + THREE.Math.clamp( Math.floor( this.time / frameTime ), 0, this.length );

	if ( keyframe !== this.currentKeyframe ) {

		this.morphTargetInfluences[ this.lastKeyframe ] = 0;
		this.morphTargetInfluences[ this.currentKeyframe ] = 1;

		this.morphTargetInfluences[ keyframe ] = 0;

		this.lastKeyframe = this.currentKeyframe;
		this.currentKeyframe = keyframe;

	}

	var mix = ( this.time % frameTime ) / frameTime;

	if ( this.directionBackwards ) {

		mix = 1 - mix;

	}

	this.morphTargetInfluences[ this.currentKeyframe ] = mix;
	this.morphTargetInfluences[ this.lastKeyframe ] = 1 - mix;

};

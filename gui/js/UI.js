var UI = {};

UI.Element = function () {};

UI.Element.prototype = {

	setStyle: function ( style, array ) {

		for ( var i = 0; i < array.length; i ++ ) {

			this.dom.style[ style ] = array[ i ];

		}

	},

	setLeft: function () {

		this.setStyle( 'left', arguments );
		return this;

	},

	setTop: function () {

		this.setStyle( 'top', arguments );
		return this;

	},

	setRight: function () {

		this.setStyle( 'right', arguments );
		return this;

	},

	setBottom: function () {

		this.setStyle( 'bottom', arguments );
		return this;

	},

	setWidth: function () {

		this.setStyle( 'width', arguments );
		return this;

	},

	setHeight: function () {

		this.setStyle( 'height', arguments );
		return this;

	},

	// border

	setBorder: function () {

		this.setStyle( 'border', arguments );
		return this;

	},

	setBorderTop: function () {

		this.setStyle( 'borderTop', arguments );
		return this;

	},

	setBorderBottom: function () {

		this.setStyle( 'borderBottom', arguments );
		return this;

	},

	setBorderLeft: function () {

		this.setStyle( 'borderLeft', arguments );
		return this;

	},

	setBorderRight: function () {

		this.setStyle( 'borderRight', arguments );
		return this;

	},

	// margin

	setMargin: function () {

		this.setStyle( 'margin', arguments );
		return this;

	},

	setMarginTop: function () {

		this.setStyle( 'marginTop', arguments );
		return this;

	},

	setMarginBottom: function () {

		this.setStyle( 'marginBottom', arguments );
		return this;

	},

	setMarginLeft: function () {

		this.setStyle( 'marginLeft', arguments );
		return this;

	},

	setMarginRight: function () {

		this.setStyle( 'marginRight', arguments );
		return this;

	},

	// padding

	setPadding: function () {

		this.setStyle( 'padding', arguments );
		return this;

	},

	//

	setFontSize: function () {

		this.setStyle( 'fontSize', arguments );
		return this;

	},

	setFontWeight: function () {

		this.setStyle( 'fontWeight', arguments );
		return this;

	},

	//

	setColor: function () {

		this.setStyle( 'color', arguments );
		return this;

	},

	setBackgroundColor: function () {

		this.setStyle( 'backgroundColor', arguments );
		return this;

	},

	setDisplay: function () {

		this.setStyle( 'display', arguments );
		return this;

	},

	setOverflow: function () {

		this.setStyle( 'overflow', arguments );
		return this;

	}


}


// Panel

UI.Panel = function ( position ) {

	UI.Element.call( this );

	this.dom = document.createElement( 'div' );
	this.dom.style.position = position || 'relative';

	// this.dom.addEventListener( 'mousedown', function ( event ) { event.preventDefault() }, false );

	return this;
};

UI.Panel.prototype = new UI.Element();
UI.Panel.prototype.constructor = UI.Panel;

UI.Panel.prototype.add = function () {

	for ( var i = 0; i < arguments.length; i ++ ) {

		this.dom.appendChild( arguments[ i ].dom );

	}

	return this;

};


// Text

UI.Text = function ( position ) {

	UI.Element.call( this );

	this.dom = document.createElement( 'span' );
	this.dom.style.position = position || 'relative';

	return this;

};

UI.Text.prototype = new UI.Element();
UI.Text.prototype.constructor = UI.Text;

UI.Text.prototype.setText = function ( value ) {

	this.dom.textContent = value;
	return this;

};


// FloatNumber

UI.FloatNumber = function ( position ) {

	UI.Element.call( this );

	this.dom = document.createElement( 'input' );
	this.dom.style.position = position || 'relative';
	this.dom.style.marginTop = '0px';
	this.dom.style.color = '#0080f0';
	this.dom.style.fontSize = '12px';
	this.dom.style.textDecoration = 'underline';
	this.dom.style.backgroundColor = 'transparent';
	this.dom.style.border = '0px';

	this.dom.value = '0.00';

	this.min = - Infinity;
	this.max = Infinity;

	this.onChangeCallback = null;

	var scope = this;
	var onMouseDownValue, onMouseDownScreenX, onMouseDownScreenY;

	var onMouseDown = function ( event ) {

		// event.preventDefault();

		onMouseDownValue = parseFloat( scope.dom.value );
		onMouseDownScreenX = event.screenX;
		onMouseDownScreenY = event.screenY;

		document.addEventListener( 'mousemove', onMouseMove, false );
		document.addEventListener( 'mouseup', onMouseUp, false );

	}

	var onMouseMove = function ( event ) {

		var distance = ( event.screenX - onMouseDownScreenX ) - ( event.screenY - onMouseDownScreenY );
		var amount = event.shiftKey ? 10 : 100;

		var number = onMouseDownValue + ( distance / amount );

		scope.dom.value = Math.min( scope.max, Math.max( scope.min, number ) ).toFixed( 2 );
		scope.onChangeCallback();

	}

	var onMouseUp = function ( event ) {

		document.removeEventListener( 'mousemove', onMouseMove, false );
		document.removeEventListener( 'mouseup', onMouseUp, false );

	}

	this.dom.addEventListener( 'mousedown', onMouseDown, false );
	this.dom.addEventListener( 'change', function ( event ) {

		var number = parseFloat( scope.dom.value );

		if ( number !== NaN ) {

			scope.dom.value = number.toFixed( 2 );
			scope.onChangeCallback();

		}

	}, false );

	return this;

};

UI.FloatNumber.prototype = new UI.Element();
UI.FloatNumber.prototype.constructor = UI.FloatNumber;

UI.FloatNumber.prototype.getValue = function () {

	return parseFloat( this.dom.value );

};

UI.FloatNumber.prototype.setValue = function ( value ) {

	this.dom.value = value.toFixed( 2 );
	return this;

};

UI.FloatNumber.prototype.setMin = function ( value ) {

	this.min = value;
	return this;

};

UI.FloatNumber.prototype.setMax = function ( value ) {

	this.max = value;
	return this;

};

UI.FloatNumber.prototype.onChange = function ( callback ) {

	this.onChangeCallback = callback;
	return this;

};


// Break

UI.Break = function () {

	UI.Element.call( this );

	this.dom = document.createElement( 'br' );

	return this;

};

UI.Break.prototype = new UI.Element();
UI.Break.prototype.constructor = UI.Break;


// HorizontalRule

UI.HorizontalRule = function ( position ) {

	UI.Element.call( this );

	this.dom = document.createElement( 'hr' );
	this.dom.style.position = position || 'relative';

	return this;

};

UI.HorizontalRule.prototype = new UI.Element();
UI.HorizontalRule.prototype.constructor = UI.HorizontalRule;

// Button

UI.Button = function ( position ) {

	UI.Element.call( this );

	this.dom = document.createElement( 'button' );
	this.dom.style.position = position || 'relative';

	this.onClickCallback = null;

	var scope = this;

	this.dom.addEventListener( 'click', function ( event ) {

		scope.onClickCallback();

	}, false );

	return this;

};

UI.Button.prototype = new UI.Element();
UI.Button.prototype.constructor = UI.Button;

UI.Button.prototype.setText = function ( value ) {

	this.dom.textContent = value;
	return this;

};

UI.Button.prototype.onClick = function ( callback ) {

	this.onClickCallback = callback;
	return this;

};

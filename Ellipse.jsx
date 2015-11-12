/*
// USAGE:

//Create new Ellipse object:
var circle = new Ellipse(null, 0, 0, 300, 300);

//Rename shape layer
circle.setName('myLayer');

//Scale shape layer by 250%
circle.setScale(2.5);

//Change shape's color to red
var red = new SolidColor();
	red.rgb.hexValue = "FF0000";
	
	circle.setColor(red);

//*/

var Ellipse = function(color, x, y, width, height){
	//Draws ellipse
	
	//Default values
	var color = color || app.foregroundColor,
		width = width || 100,
		height = height || 100,
		x = x || app.activeDocument.width/2 - width/2,
		y = y || app.activeDocument.height/2 - height/2;
			
	
	// Save current foreground color:
	var tmpColor = app.foregroundColor;	
	app.foregroundColor = color;

	// =======================================================
	var idMk = charIDToTypeID( "Mk  " );
		var desc9 = new ActionDescriptor();
		var idnull = charIDToTypeID( "null" );
			var ref7 = new ActionReference();
			var idcontentLayer = stringIDToTypeID( "contentLayer" );
			ref7.putClass( idcontentLayer );
		desc9.putReference( idnull, ref7 );
		var idUsng = charIDToTypeID( "Usng" );
			var idType = charIDToTypeID( "Type" );
			var desc10 = new ActionDescriptor();
			var idsolidColorLayer = stringIDToTypeID( "solidColorLayer" );
			desc10.putClass( idType, idsolidColorLayer );
			var idShp = charIDToTypeID( "Shp " );
				var desc11 = new ActionDescriptor();
				var idTop = charIDToTypeID( "Top " );
				var idPxl = charIDToTypeID( "#Pxl" );
						desc11.putUnitDouble( idTop, idPxl, y );
				var idLeft = charIDToTypeID( "Left" );
				var idPxl = charIDToTypeID( "#Pxl" );
						desc11.putUnitDouble( idLeft, idPxl, x );
				var idBtom = charIDToTypeID( "Btom" );
				var idPxl = charIDToTypeID( "#Pxl" );
						desc11.putUnitDouble( idBtom, idPxl, y+height );
				var idRght = charIDToTypeID( "Rght" );
				var idPxl = charIDToTypeID( "#Pxl" );
						desc11.putUnitDouble( idRght, idPxl, x+width );
			var idElps = charIDToTypeID( "Elps" );
			desc10.putObject( idShp, idElps, desc11 );
		var idcontentLayer = stringIDToTypeID( "contentLayer" );
		desc9.putObject( idUsng, idcontentLayer, desc10 );
	executeAction( idMk, desc9, DialogModes.NO );
	// =======================================================
	
	//Restore old foreground color:
	app.foregroundColor = tmpColor;
	
	//Save link to layer object
	this.layer = app.activeDocument.activeLayer;
};

Ellipse.prototype.setActive = function () {
	//Make layer active
	app.activeDocument.activeLayer = this.layer;
}

Ellipse.prototype.translate = function (xShift, yShift) {
	//Move layer by xShift, yShift
	this.layer.translate(xShift, yShift);
}

Ellipse.prototype.setName = function (name) {
	//Rename layer
	this.layer.name = name;
}

Ellipse.prototype.setScale = function (scale) {
	//Scale layer, scale = 1.5 will scale layer to 150%
	
	var tmpLayer = app.activeDocument.activeLayer;
	app.activeDocument.activeLayer = this.layer;
	
	scale = scale * 100;
	
	/*
	var top = this.layer.bounds[0];
	var left = this.layer.bounds[1];
	var bottom = this.layer.bounds[2];
	var right = this.layer.bounds[3];
	
	var currentWidth = Math.abs(left - right);
	var currentHeight = Math.abs(top - bottom);
	*/
	
	// =======================================================
	var idTrnf = charIDToTypeID( "Trnf" );
		var desc67 = new ActionDescriptor();
		var idnull = charIDToTypeID( "null" );
			var ref27 = new ActionReference();
			var idLyr = charIDToTypeID( "Lyr " );
			var idOrdn = charIDToTypeID( "Ordn" );
			var idTrgt = charIDToTypeID( "Trgt" );
			ref27.putEnumerated( idLyr, idOrdn, idTrgt );
		desc67.putReference( idnull, ref27 );
		var idFTcs = charIDToTypeID( "FTcs" );
		var idQCSt = charIDToTypeID( "QCSt" );
		var idQcsa = charIDToTypeID( "Qcsa" );
		desc67.putEnumerated( idFTcs, idQCSt, idQcsa );
		var idOfst = charIDToTypeID( "Ofst" );
			var desc68 = new ActionDescriptor();
			var idHrzn = charIDToTypeID( "Hrzn" );
			var idPxl = charIDToTypeID( "#Pxl" );
			desc68.putUnitDouble( idHrzn, idPxl, 0.000000 );
			var idVrtc = charIDToTypeID( "Vrtc" );
			var idPxl = charIDToTypeID( "#Pxl" );
			desc68.putUnitDouble( idVrtc, idPxl, 0.000000 );
		var idOfst = charIDToTypeID( "Ofst" );
		desc67.putObject( idOfst, idOfst, desc68 );
		var idWdth = charIDToTypeID( "Wdth" );
		var idPrc = charIDToTypeID( "#Prc" );
		desc67.putUnitDouble( idWdth, idPrc, scale );
		var idHght = charIDToTypeID( "Hght" );
		var idPrc = charIDToTypeID( "#Prc" );
		desc67.putUnitDouble( idHght, idPrc, scale );
		var idIntr = charIDToTypeID( "Intr" );
		var idIntp = charIDToTypeID( "Intp" );
		var idbicubicAutomatic = stringIDToTypeID( "bicubicAutomatic" );
		desc67.putEnumerated( idIntr, idIntp, idbicubicAutomatic );
	executeAction( idTrnf, desc67, DialogModes.NO );
	
	app.activeDocument.activeLayer = tmpLayer;
}

Ellipse.prototype.setColor = function (color) {
	var tmpLayer = app.activeDocument.activeLayer;
	app.activeDocument.activeLayer = this.layer;
	
	var tmpColor = app.foregroundColor;
	app.foregroundColor = color;
	
	// =======================================================
	var idFl = charIDToTypeID( "Fl  " );
		var desc62 = new ActionDescriptor();
		var idUsng = charIDToTypeID( "Usng" );
		var idFlCn = charIDToTypeID( "FlCn" );
		var idFrgC = charIDToTypeID( "FrgC" );
		desc62.putEnumerated( idUsng, idFlCn, idFrgC );
	executeAction( idFl, desc62, DialogModes.NO );
	
	app.activeDocument.activeLayer = tmpLayer;
	app.foregroundColor = tmpColor;
}
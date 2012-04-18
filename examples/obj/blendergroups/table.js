{

"metadata" :
{
    "formatVersion" : 3,
    "sourceFile"    : "table.blend",
    "generatedBy"   : "Blender 2.62 Exporter",
    "objects"       : 6,
    "geometries"    : 5,
    "materials"     : 5,
    "textures"      : 0
},

"type" : "scene",
"urlBaseType" : "relativeToScene",


"objects" :
{
    "table" : {
        "geometry"  : "geo_table",
        "groups"    : [  ],
        "materials" : [ "TableMaterial" ],
        "position"  : [ -0.323227, -0.112301, -0.316619 ],
        "rotation"  : [ 0.000000, -0.000000, 0.000000 ],
        "quaternion": [ 1.000000, 0.000000, 0.000000, 0.000000 ],
        "scale"     : [ 7.368332, 7.368332, 7.368332 ],
        "visible"       : true,
        "castShadow"    : false,
        "receiveShadow" : false,
        "doubleSided"   : false
    },

    "DinnerSetGroup" : {
        "groups"    : [  ],
        "position"  : [ -1.085346, -3.351306, -0.316619 ],
        "rotation"  : [ 0.000000, -0.000000, 0.000000 ],
        "quaternion": [ 1.000000, 0.000000, 0.000000, 0.000000 ],
        "scale"     : [ 1.000000, 1.000000, 1.000000 ]
    },

    "fork" : {
        "geometry"  : "geo_fork",
        "groups"    : [ "DinnerSetGroup" ],
        "materials" : [ "Material.002" ],
        "position"  : [ 2.825782, -0.687809, 0.425461 ],
        "rotation"  : [ 0.000000, -0.000000, 0.000000 ],
        "quaternion": [ 1.000000, 0.000000, 0.000000, 0.000000 ],
        "scale"     : [ 0.139321, 1.034979, 0.423977 ],
        "visible"       : true,
        "castShadow"    : false,
        "receiveShadow" : false,
        "doubleSided"   : false
    },

    "knife" : {
        "geometry"  : "geo_knife",
        "groups"    : [ "DinnerSetGroup" ],
        "materials" : [ "Material.003" ],
        "position"  : [ 1.842564, 0.454986, 0.515002 ],
        "rotation"  : [ 0.000000, -0.000000, 0.000000 ],
        "quaternion": [ 1.000000, 0.000000, 0.000000, 0.000000 ],
        "scale"     : [ 0.139321, 2.215171, 0.498231 ],
        "visible"       : true,
        "castShadow"    : false,
        "receiveShadow" : false,
        "doubleSided"   : false
    },

    "base" : {
        "geometry"  : "geo_base",
        "groups"    : [ "DinnerSetGroup" ],
        "materials" : [ "BaseMaterial" ],
        "position"  : [ -0.323227, 0.398634, 0.231476 ],
        "rotation"  : [ 0.000000, -0.000000, 0.000000 ],
        "quaternion": [ 1.000000, 0.000000, 0.000000, 0.000000 ],
        "scale"     : [ 1.000000, 1.000000, 0.218885 ],
        "visible"       : true,
        "castShadow"    : false,
        "receiveShadow" : false,
        "doubleSided"   : false
    },

    "glass" : {
        "geometry"  : "geo_glass",
        "groups"    : [ "DinnerSetGroup" ],
        "materials" : [ "CupMaterial" ],
        "position"  : [ -0.323227, 0.407547, 1.368124 ],
        "rotation"  : [ 3.141591, -0.000000, 0.000000 ],
        "quaternion": [ 0.000001, 1.000000, 0.000000, 0.000000 ],
        "scale"     : [ 1.000000, 1.000000, 1.000000 ],
        "visible"       : true,
        "castShadow"    : false,
        "receiveShadow" : false,
        "doubleSided"   : false
    }
},


"geometries" :
{
    "geo_table" : {
        "type" : "embedded_mesh",
        "id"  : "emb_table"
    },

    "geo_fork" : {
        "type" : "embedded_mesh",
        "id"  : "emb_fork"
    },

    "geo_knife" : {
        "type" : "embedded_mesh",
        "id"  : "emb_knife"
    },

    "geo_base" : {
        "type" : "embedded_mesh",
        "id"  : "emb_base"
    },

    "geo_glass" : {
        "type" : "embedded_mesh",
        "id"  : "emb_glass"
    }
},


"materials" :
{
    "TableMaterial" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 10706970, "opacity": 1, "blending": "NormalBlending" }
    },

    "Material.002" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 10724259, "opacity": 1, "blending": "NormalBlending" }
    },

    "Material.003" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 10724259, "opacity": 1, "blending": "NormalBlending" }
    },

    "BaseMaterial" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 2823587, "opacity": 1, "blending": "NormalBlending" }
    },

    "CupMaterial" : {
        "type": "MeshLambertMaterial",
        "parameters": { "color": 8823624, "opacity": 1, "blending": "NormalBlending" }
    }
},


"cameras" :
{
    "default_camera" : {
        "type"  : "perspective",
        "fov"   : 60.000000,
        "aspect": 1.333000,
        "near"  : 1.000000,
        "far"   : 10000.000000,
        "position": [ 0.000000, 0.000000, 10.000000 ],
        "target"  : [ 0.000000, 0.000000, 0.000000 ]
    }
},


"lights" :
{
    "default_light": {
        "type"		 : "directional",
        "direction"	 : [ 0.000000, 1.000000, 1.000000 ],
        "color" 	 : 16777215,
        "intensity"	 : 0.80
    }
},


"embeds" :
{
"emb_fork": {    "scale" : 1.000000,

    "materials": [	{
	"DbgColor" : 15658734,
	"DbgIndex" : 0,
	"DbgName" : "Material.002",
	"blending" : "NormalBlending",
	"colorAmbient" : [0.0, 0.0, 0.0],
	"colorDiffuse" : [0.6400000190734865, 0.6400000190734865, 0.6400000190734865],
	"colorSpecular" : [0.5, 0.5, 0.5],
	"depthTest" : true,
	"depthWrite" : true,
	"shading" : "Lambert",
	"specularCoef" : 50,
	"transparency" : 1.0,
	"transparent" : false,
	"vertexColors" : false
	}],

    "vertices": [1.000000,1.000000,-1.000000,1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,1.000000,-1.000000,1.000000,0.999999,-0.097693,0.999999,-1.000001,-0.097693,-1.000000,-1.000000,-0.097693,-1.000000,1.000000,-0.097693,-2.241632,1.150827,-1.000000,-2.241632,1.150826,-0.097693,2.241632,1.150826,-1.000000,2.241633,1.150826,-0.097693,-1.038798,1.518572,-1.000000,0.961201,1.518571,-1.000000,0.961202,1.518571,-0.097693,-1.038798,1.518571,-0.097693],

    "morphTargets": [],

    "normals": [0.341197,-0.302255,-0.890042,0.577349,-0.577349,-0.577349,-0.577349,-0.577349,-0.577349,-0.341197,-0.302255,-0.890042,0.341197,-0.302255,0.890042,-0.341197,-0.302255,0.890042,-0.577349,-0.577349,0.577349,0.577349,-0.577349,0.577349,-0.838527,-0.073885,0.539781,-0.838527,-0.073885,-0.539811,0.839259,-0.066775,-0.539567,0.839259,-0.066775,0.539567,-0.109012,0.729423,-0.675283,0.102573,0.728751,-0.677023,0.102573,0.728751,0.677023,-0.109012,0.729423,0.675283],

    "colors": [],

    "uvs": [[]],

    "faces": [35,0,1,2,3,0,0,1,2,3,35,4,7,6,5,0,4,5,6,7,35,0,4,5,1,0,0,4,7,1,35,1,5,6,2,0,1,7,6,2,35,2,6,7,3,0,2,6,5,3,35,3,7,9,8,0,3,5,8,9,35,4,0,10,11,0,4,0,10,11,35,7,4,11,9,0,5,4,11,8,35,0,3,8,10,0,0,3,9,10,35,10,8,12,13,0,10,9,12,13,35,9,11,14,15,0,8,11,14,15,35,11,10,13,14,0,11,10,13,14,35,8,9,15,12,0,9,8,15,12,35,14,13,12,15,0,14,13,12,15]

},

"emb_table": {    "scale" : 1.000000,

    "materials": [	{
	"DbgColor" : 15658734,
	"DbgIndex" : 0,
	"DbgName" : "TableMaterial",
	"blending" : "NormalBlending",
	"colorAmbient" : [0.0, 0.0, 0.0],
	"colorDiffuse" : [0.6400000190734865, 0.3779925641118371, 0.10436760342668894],
	"colorSpecular" : [0.5, 0.5, 0.5],
	"depthTest" : true,
	"depthWrite" : true,
	"shading" : "Lambert",
	"specularCoef" : 50,
	"transparency" : 1.0,
	"transparent" : false,
	"vertexColors" : false
	}],

    "vertices": [1.000000,-1.000000,0.000000,0.777778,-1.000000,0.000000,0.555556,-1.000000,0.000000,0.333333,-1.000000,0.000000,0.111111,-1.000000,0.000000,-0.111111,-1.000000,0.000000,-0.333333,-1.000000,0.000000,-0.555556,-1.000000,0.000000,-0.777778,-1.000000,0.000000,-1.000000,-1.000000,0.000000,-1.000000,-0.777778,0.000000,-0.777778,-0.777778,0.000000,-0.555556,-0.777778,0.000000,-0.333333,-0.777778,0.000000,-0.111111,-0.777778,0.000000,0.111111,-0.777778,0.000000,0.333333,-0.777778,0.000000,0.555556,-0.777778,0.000000,0.777778,-0.777778,0.000000,1.000000,-0.777778,0.000000,1.000000,-0.555556,0.000000,0.777778,-0.555556,0.000000,0.555556,-0.555556,0.000000,0.333333,-0.555556,0.000000,0.111111,-0.555556,0.000000,-0.111111,-0.555556,0.000000,-0.333333,-0.555556,0.000000,-0.555556,-0.555556,0.000000,-0.777778,-0.555556,0.000000,-1.000000,-0.555556,0.000000,-1.000000,-0.333333,0.000000,-0.777778,-0.333333,0.000000,-0.555556,-0.333333,0.000000,-0.333333,-0.333333,0.000000,-0.111111,-0.333333,0.000000,0.111111,-0.333333,0.000000,0.333333,-0.333333,0.000000,0.555556,-0.333333,0.000000,0.777778,-0.333333,0.000000,1.000000,-0.333333,0.000000,1.000000,-0.111111,0.000000,0.777778,-0.111111,0.000000,0.555556,-0.111111,0.000000,0.333333,-0.111111,0.000000,0.111111,-0.111111,0.000000,-0.111111,-0.111111,0.000000,-0.333333,-0.111111,0.000000,-0.555556,-0.111111,0.000000,-0.777778,-0.111111,0.000000,-1.000000,-0.111111,0.000000,-1.000000,0.111111,0.000000,-0.777778,0.111111,0.000000,-0.555556,0.111111,0.000000,-0.333333,0.111111,0.000000,-0.111111,0.111111,0.000000,0.111111,0.111111,0.000000,0.333333,0.111111,0.000000,0.555556,0.111111,0.000000,0.777778,0.111111,0.000000,1.000000,0.111111,0.000000,1.000000,0.333333,0.000000,0.777778,0.333333,0.000000,0.555556,0.333333,0.000000,0.333333,0.333333,0.000000,0.111111,0.333333,0.000000,-0.111111,0.333333,0.000000,-0.333333,0.333333,0.000000,-0.555556,0.333333,0.000000,-0.777778,0.333333,0.000000,-1.000000,0.333333,0.000000,-1.000000,0.555556,0.000000,-0.777778,0.555556,0.000000,-0.555556,0.555556,0.000000,-0.333333,0.555556,0.000000,-0.111111,0.555556,0.000000,0.111111,0.555556,0.000000,0.333333,0.555556,0.000000,0.555556,0.555556,0.000000,0.777778,0.555556,0.000000,1.000000,0.555556,0.000000,1.000000,0.777778,0.000000,0.777778,0.777778,0.000000,0.555556,0.777778,0.000000,0.333333,0.777778,0.000000,0.111111,0.777778,0.000000,-0.111111,0.777778,0.000000,-0.333333,0.777778,0.000000,-0.555556,0.777778,0.000000,-0.777778,0.777778,0.000000,-1.000000,0.777778,0.000000,-1.000000,1.000000,0.000000,-0.777778,1.000000,0.000000,-0.555556,1.000000,0.000000,-0.333333,1.000000,0.000000,-0.111111,1.000000,0.000000,0.111111,1.000000,0.000000,0.333333,1.000000,0.000000,0.555556,1.000000,0.000000,0.777778,1.000000,0.000000,1.000000,1.000000,0.000000],

    "morphTargets": [],

    "normals": [0.000000,0.000000,1.000000],

    "colors": [],

    "uvs": [[]],

    "faces": [35,9,8,11,10,0,0,0,0,0,35,8,7,12,11,0,0,0,0,0,35,7,6,13,12,0,0,0,0,0,35,6,5,14,13,0,0,0,0,0,35,5,4,15,14,0,0,0,0,0,35,4,3,16,15,0,0,0,0,0,35,3,2,17,16,0,0,0,0,0,35,2,1,18,17,0,0,0,0,0,35,1,0,19,18,0,0,0,0,0,35,18,19,20,21,0,0,0,0,0,35,17,18,21,22,0,0,0,0,0,35,16,17,22,23,0,0,0,0,0,35,15,16,23,24,0,0,0,0,0,35,14,15,24,25,0,0,0,0,0,35,13,14,25,26,0,0,0,0,0,35,12,13,26,27,0,0,0,0,0,35,11,12,27,28,0,0,0,0,0,35,10,11,28,29,0,0,0,0,0,35,29,28,31,30,0,0,0,0,0,35,28,27,32,31,0,0,0,0,0,35,27,26,33,32,0,0,0,0,0,35,26,25,34,33,0,0,0,0,0,35,25,24,35,34,0,0,0,0,0,35,24,23,36,35,0,0,0,0,0,35,23,22,37,36,0,0,0,0,0,35,22,21,38,37,0,0,0,0,0,35,21,20,39,38,0,0,0,0,0,35,38,39,40,41,0,0,0,0,0,35,37,38,41,42,0,0,0,0,0,35,36,37,42,43,0,0,0,0,0,35,35,36,43,44,0,0,0,0,0,35,34,35,44,45,0,0,0,0,0,35,33,34,45,46,0,0,0,0,0,35,32,33,46,47,0,0,0,0,0,35,31,32,47,48,0,0,0,0,0,35,30,31,48,49,0,0,0,0,0,35,49,48,51,50,0,0,0,0,0,35,48,47,52,51,0,0,0,0,0,35,47,46,53,52,0,0,0,0,0,35,46,45,54,53,0,0,0,0,0,35,45,44,55,54,0,0,0,0,0,35,44,43,56,55,0,0,0,0,0,35,43,42,57,56,0,0,0,0,0,35,42,41,58,57,0,0,0,0,0,35,41,40,59,58,0,0,0,0,0,35,58,59,60,61,0,0,0,0,0,35,57,58,61,62,0,0,0,0,0,35,56,57,62,63,0,0,0,0,0,35,55,56,63,64,0,0,0,0,0,35,54,55,64,65,0,0,0,0,0,35,53,54,65,66,0,0,0,0,0,35,52,53,66,67,0,0,0,0,0,35,51,52,67,68,0,0,0,0,0,35,50,51,68,69,0,0,0,0,0,35,69,68,71,70,0,0,0,0,0,35,68,67,72,71,0,0,0,0,0,35,67,66,73,72,0,0,0,0,0,35,66,65,74,73,0,0,0,0,0,35,65,64,75,74,0,0,0,0,0,35,64,63,76,75,0,0,0,0,0,35,63,62,77,76,0,0,0,0,0,35,62,61,78,77,0,0,0,0,0,35,61,60,79,78,0,0,0,0,0,35,78,79,80,81,0,0,0,0,0,35,77,78,81,82,0,0,0,0,0,35,76,77,82,83,0,0,0,0,0,35,75,76,83,84,0,0,0,0,0,35,74,75,84,85,0,0,0,0,0,35,73,74,85,86,0,0,0,0,0,35,72,73,86,87,0,0,0,0,0,35,71,72,87,88,0,0,0,0,0,35,70,71,88,89,0,0,0,0,0,35,89,88,91,90,0,0,0,0,0,35,88,87,92,91,0,0,0,0,0,35,87,86,93,92,0,0,0,0,0,35,86,85,94,93,0,0,0,0,0,35,85,84,95,94,0,0,0,0,0,35,84,83,96,95,0,0,0,0,0,35,83,82,97,96,0,0,0,0,0,35,82,81,98,97,0,0,0,0,0,35,81,80,99,98,0,0,0,0,0]

},

"emb_base": {    "scale" : 1.000000,

    "materials": [	{
	"DbgColor" : 15658734,
	"DbgIndex" : 0,
	"DbgName" : "BaseMaterial",
	"blending" : "NormalBlending",
	"colorAmbient" : [0.0, 0.0, 0.0],
	"colorDiffuse" : [0.17030308500383917, 0.0836947274758626, 0.6400000190734865],
	"colorSpecular" : [0.5, 0.5, 0.5],
	"depthTest" : true,
	"depthWrite" : true,
	"shading" : "Lambert",
	"specularCoef" : 50,
	"transparency" : 1.0,
	"transparent" : false,
	"vertexColors" : false
	}],

    "vertices": [0.000000,1.000000,-1.000000,0.195090,0.980785,-1.000000,0.382683,0.923880,-1.000000,0.555570,0.831470,-1.000000,0.707107,0.707107,-1.000000,0.831470,0.555570,-1.000000,0.923880,0.382683,-1.000000,0.980785,0.195090,-1.000000,1.000000,0.000000,-1.000000,0.980785,-0.195090,-1.000000,0.923880,-0.382683,-1.000000,0.831470,-0.555570,-1.000000,0.707107,-0.707107,-1.000000,0.555570,-0.831470,-1.000000,0.382683,-0.923880,-1.000000,0.195090,-0.980785,-1.000000,-0.000000,-1.000000,-1.000000,-0.195091,-0.980785,-1.000000,-0.382684,-0.923879,-1.000000,-0.555571,-0.831469,-1.000000,-0.707107,-0.707106,-1.000000,-0.831470,-0.555570,-1.000000,-0.923880,-0.382683,-1.000000,-0.980785,-0.195089,-1.000000,-1.000000,0.000001,-1.000000,-0.980785,0.195091,-1.000000,-0.923879,0.382684,-1.000000,-0.831469,0.555571,-1.000000,-0.707106,0.707108,-1.000000,-0.555569,0.831470,-1.000000,-0.382682,0.923880,-1.000000,-0.195089,0.980786,-1.000000,0.000000,0.000000,1.000000,0.000000,0.000000,-1.000000],

    "morphTargets": [],

    "normals": [0.168554,0.847499,-0.503281,0.000000,0.864101,-0.503281,0.000000,0.000000,0.999969,0.330668,0.798334,-0.503281,0.480056,0.718467,-0.503281,0.611011,0.611011,-0.503281,0.718467,0.480056,-0.503281,0.798334,0.330668,-0.503281,0.847499,0.168554,-0.503281,0.864101,0.000000,-0.503281,0.847499,-0.168554,-0.503281,0.798334,-0.330668,-0.503281,0.718467,-0.480056,-0.503281,0.611011,-0.611011,-0.503281,0.480056,-0.718467,-0.503281,0.330668,-0.798334,-0.503281,0.168554,-0.847499,-0.503281,0.000000,-0.864101,-0.503281,-0.168554,-0.847499,-0.503281,-0.330668,-0.798334,-0.503281,-0.480056,-0.718467,-0.503281,-0.611011,-0.611011,-0.503281,-0.718467,-0.480056,-0.503281,-0.798334,-0.330668,-0.503281,-0.847499,-0.168554,-0.503281,-0.864101,0.000000,-0.503281,-0.847499,0.168554,-0.503281,-0.798334,0.330668,-0.503281,-0.718467,0.480056,-0.503281,-0.611011,0.611011,-0.503281,-0.480056,0.718467,-0.503281,-0.330668,0.798334,-0.503281,-0.168554,0.847499,-0.503281,0.000000,0.000000,-1.000000],

    "colors": [],

    "uvs": [[]],

    "faces": [34,1,0,32,0,0,1,2,34,32,2,1,0,2,3,0,34,32,3,2,0,2,4,3,34,32,4,3,0,2,5,4,34,32,5,4,0,2,6,5,34,32,6,5,0,2,7,6,34,32,7,6,0,2,8,7,34,32,8,7,0,2,9,8,34,32,9,8,0,2,10,9,34,32,10,9,0,2,11,10,34,32,11,10,0,2,12,11,34,32,12,11,0,2,13,12,34,32,13,12,0,2,14,13,34,32,14,13,0,2,15,14,34,32,15,14,0,2,16,15,34,32,16,15,0,2,17,16,34,32,17,16,0,2,18,17,34,32,18,17,0,2,19,18,34,32,19,18,0,2,20,19,34,32,20,19,0,2,21,20,34,32,21,20,0,2,22,21,34,32,22,21,0,2,23,22,34,32,23,22,0,2,24,23,34,32,24,23,0,2,25,24,34,32,25,24,0,2,26,25,34,32,26,25,0,2,27,26,34,32,27,26,0,2,28,27,34,32,28,27,0,2,29,28,34,32,29,28,0,2,30,29,34,32,30,29,0,2,31,30,34,32,31,30,0,2,32,31,34,32,0,31,0,2,1,32,34,33,0,1,0,33,1,0,34,33,1,2,0,33,0,3,34,33,2,3,0,33,3,4,34,33,3,4,0,33,4,5,34,33,4,5,0,33,5,6,34,33,5,6,0,33,6,7,34,33,6,7,0,33,7,8,34,33,7,8,0,33,8,9,34,33,8,9,0,33,9,10,34,33,9,10,0,33,10,11,34,33,10,11,0,33,11,12,34,33,11,12,0,33,12,13,34,33,12,13,0,33,13,14,34,33,13,14,0,33,14,15,34,33,14,15,0,33,15,16,34,33,15,16,0,33,16,17,34,33,16,17,0,33,17,18,34,33,17,18,0,33,18,19,34,33,18,19,0,33,19,20,34,33,19,20,0,33,20,21,34,33,20,21,0,33,21,22,34,33,21,22,0,33,22,23,34,33,22,23,0,33,23,24,34,33,23,24,0,33,24,25,34,33,24,25,0,33,25,26,34,33,25,26,0,33,26,27,34,33,26,27,0,33,27,28,34,33,27,28,0,33,28,29,34,33,28,29,0,33,29,30,34,33,29,30,0,33,30,31,34,33,30,31,0,33,31,32,34,31,0,33,0,32,1,33]

},

"emb_knife": {    "scale" : 1.000000,

    "materials": [	{
	"DbgColor" : 15658734,
	"DbgIndex" : 0,
	"DbgName" : "Material.003",
	"blending" : "NormalBlending",
	"colorAmbient" : [0.0, 0.0, 0.0],
	"colorDiffuse" : [0.6400000190734865, 0.6400000190734865, 0.6400000190734865],
	"colorSpecular" : [0.5, 0.5, 0.5],
	"depthTest" : true,
	"depthWrite" : true,
	"shading" : "Lambert",
	"specularCoef" : 50,
	"transparency" : 1.0,
	"transparent" : false,
	"vertexColors" : false
	}],

    "vertices": [1.000000,0.293121,-1.000000,1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,-1.000000,0.293122,-1.000000,1.000000,0.293121,-0.194548,0.999999,-1.000001,-0.194548,-1.000000,-1.000000,-0.194548,-1.000000,0.293121,-0.194548,-0.999998,0.321471,-1.000000,-0.999998,0.321470,-0.194548,1.000002,0.321470,-1.000000,1.000002,0.321470,-0.194548,2.655132,0.315369,-0.194548,3.140158,0.293120,-0.194548,2.655132,0.315369,-1.000000,3.140158,0.293121,-1.000000,-2.327502,0.325539,-1.000000,-2.974208,0.293122,-1.000000,-2.327502,0.325538,-0.194548,-2.974208,0.293122,-0.194548,3.495713,0.293120,-0.194548,3.495712,0.293121,-1.000000,3.495714,0.321470,-1.000000,3.495714,0.321469,-0.194548,-3.311049,0.293122,-1.000000,-3.311049,0.293122,-0.194548,-3.311047,0.321471,-0.194548,-3.311047,0.321471,-1.000000,-3.311032,0.514652,-1.000000,-3.311033,0.514652,-0.194548,-2.974191,0.514652,-1.000000,-2.974192,0.514652,-0.194548,3.495728,0.514651,-1.000000,3.495729,0.514650,-0.194548,3.140175,0.514650,-0.194548,3.140174,0.514651,-1.000000,0.385647,0.504483,-1.000000,-0.288609,0.510584,-1.000000,-0.288609,0.510584,-0.194548,0.385648,0.504483,-0.194548],

    "morphTargets": [],

    "normals": [0.301492,-0.301492,-0.904508,0.577349,-0.577349,-0.577349,-0.577349,-0.577349,-0.577349,-0.301492,-0.301492,-0.904508,0.301492,-0.301492,0.904508,-0.301492,-0.301492,0.904508,-0.577349,-0.577349,0.577349,0.577349,-0.577349,0.577349,0.098148,0.664693,0.740593,-0.086398,0.669424,0.737815,-0.086398,0.669424,-0.737815,0.098148,0.664693,-0.740593,0.000000,-0.707083,0.707083,-0.126041,0.644795,0.753868,-0.126041,0.644795,-0.753868,0.000000,-0.707083,-0.707083,0.096347,0.665578,-0.740074,0.096347,0.665578,0.740074,0.577319,-0.577349,-0.577349,0.577319,-0.577349,0.577349,0.707083,-0.000031,-0.707083,0.707083,-0.000031,0.707083,-0.577349,-0.577319,0.577319,-0.577349,-0.577319,-0.577319,-0.707083,0.000031,0.707083,-0.707083,0.000031,-0.707083,-0.577319,0.577349,0.577349,-0.577319,0.577349,-0.577349,0.104373,0.728935,-0.676534,0.104373,0.728935,0.676534,0.577349,0.577319,-0.577319,0.577349,0.577319,0.577319,-0.144475,0.731803,0.665975,-0.144475,0.731803,-0.665975,-0.091891,0.729148,-0.678121,0.109470,0.727836,-0.676931,0.109470,0.727805,0.676931,-0.091891,0.729148,0.678121],

    "colors": [],

    "uvs": [[]],

    "faces": [35,0,1,2,3,0,0,1,2,3,35,4,7,6,5,0,4,5,6,7,35,0,4,5,1,0,0,4,7,1,35,1,5,6,2,0,1,7,6,2,35,2,6,7,3,0,2,6,5,3,35,7,4,11,9,0,5,4,8,9,35,0,3,8,10,0,0,3,10,11,35,11,4,13,12,0,8,4,12,13,35,10,11,12,14,0,11,8,13,14,35,0,10,14,15,0,0,11,14,15,35,4,0,15,13,0,4,0,15,12,35,8,3,17,16,0,10,3,15,16,35,9,8,16,18,0,9,10,16,17,35,7,9,18,19,0,5,9,17,12,35,3,7,19,17,0,3,5,12,15,35,13,15,21,20,0,12,15,18,19,35,15,14,22,21,0,15,14,20,18,35,12,13,20,23,0,13,12,19,21,35,20,21,22,23,0,19,18,20,21,35,17,19,25,24,0,15,12,22,23,35,19,18,26,25,0,12,17,24,22,35,16,17,24,27,0,16,15,23,25,35,24,25,26,27,0,23,22,24,25,35,27,26,29,28,0,25,24,26,27,35,16,27,28,30,0,16,25,27,28,35,26,18,31,29,0,24,17,29,26,35,23,22,32,33,0,21,20,30,31,35,12,23,33,34,0,13,21,31,32,35,22,14,35,32,0,20,14,33,30,35,18,16,30,31,0,17,16,28,29,35,14,12,34,35,0,14,13,32,33,35,10,8,37,36,0,11,10,34,35,35,9,11,39,38,0,9,8,36,37,35,11,10,36,39,0,8,11,35,36,35,8,9,38,37,0,10,9,37,34,35,31,30,28,29,0,29,28,27,26,35,35,34,33,32,0,33,32,31,30,35,39,36,37,38,0,36,35,34,37]

},

"emb_glass": {    "scale" : 1.000000,

    "materials": [	{
	"DbgColor" : 15658734,
	"DbgIndex" : 0,
	"DbgName" : "CupMaterial",
	"blending" : "NormalBlending",
	"colorAmbient" : [0.0, 0.0, 0.0],
	"colorDiffuse" : [0.52736278366093, 0.6400000190734865, 0.2835353893568424],
	"colorSpecular" : [0.5, 0.5, 0.5],
	"depthTest" : true,
	"depthWrite" : true,
	"shading" : "Lambert",
	"specularCoef" : 50,
	"transparency" : 1.0,
	"transparent" : false,
	"vertexColors" : false
	}],

    "vertices": [0.000000,1.000000,-1.000000,0.195090,0.980785,-1.000000,0.382683,0.923880,-1.000000,0.555570,0.831470,-1.000000,0.707107,0.707107,-1.000000,0.831470,0.555570,-1.000000,0.923880,0.382683,-1.000000,0.980785,0.195090,-1.000000,1.000000,0.000000,-1.000000,0.980785,-0.195090,-1.000000,0.923880,-0.382683,-1.000000,0.831470,-0.555570,-1.000000,0.707107,-0.707107,-1.000000,0.555570,-0.831470,-1.000000,0.382683,-0.923880,-1.000000,0.195090,-0.980785,-1.000000,-0.000000,-1.000000,-1.000000,-0.195091,-0.980785,-1.000000,-0.382684,-0.923879,-1.000000,-0.555571,-0.831469,-1.000000,-0.707107,-0.707106,-1.000000,-0.831470,-0.555570,-1.000000,-0.923880,-0.382683,-1.000000,-0.980785,-0.195089,-1.000000,-1.000000,0.000001,-1.000000,-0.980785,0.195091,-1.000000,-0.923879,0.382684,-1.000000,-0.831469,0.555571,-1.000000,-0.707106,0.707108,-1.000000,-0.555569,0.831470,-1.000000,-0.382682,0.923880,-1.000000,-0.195089,0.980786,-1.000000,0.000000,0.000000,1.000000,-0.000000,0.000002,0.330049],

    "morphTargets": [],

    "normals": [0.110874,0.557451,-0.822748,0.000000,0.568377,-0.822748,0.000000,0.000000,0.999969,0.217505,0.525101,-0.822748,0.315775,0.472579,-0.822748,0.401898,0.401898,-0.822748,0.472579,0.315775,-0.822748,0.525101,0.217505,-0.822748,0.557451,0.110874,-0.822748,0.568377,0.000000,-0.822748,0.557451,-0.110874,-0.822748,0.525101,-0.217505,-0.822748,0.472579,-0.315775,-0.822748,0.401898,-0.401898,-0.822748,0.315775,-0.472579,-0.822748,0.217505,-0.525101,-0.822748,0.110874,-0.557451,-0.822748,0.000000,-0.568377,-0.822748,-0.110874,-0.557451,-0.822748,-0.217505,-0.525101,-0.822748,-0.315775,-0.472579,-0.822748,-0.401898,-0.401898,-0.822748,-0.472579,-0.315775,-0.822748,-0.525101,-0.217505,-0.822748,-0.557451,-0.110874,-0.822748,-0.568377,0.000000,-0.822748,-0.557451,0.110874,-0.822748,-0.525101,0.217505,-0.822748,-0.472579,0.315775,-0.822748,-0.401898,0.401898,-0.822748,-0.315775,0.472579,-0.822748,-0.217505,0.525101,-0.822748,-0.110874,0.557451,-0.822748,0.000000,0.000000,-0.999969],

    "colors": [],

    "uvs": [[]],

    "faces": [34,1,0,32,0,0,1,2,34,32,2,1,0,2,3,0,34,32,3,2,0,2,4,3,34,32,4,3,0,2,5,4,34,32,5,4,0,2,6,5,34,32,6,5,0,2,7,6,34,32,7,6,0,2,8,7,34,32,8,7,0,2,9,8,34,32,9,8,0,2,10,9,34,32,10,9,0,2,11,10,34,32,11,10,0,2,12,11,34,32,12,11,0,2,13,12,34,32,13,12,0,2,14,13,34,32,14,13,0,2,15,14,34,32,15,14,0,2,16,15,34,32,16,15,0,2,17,16,34,32,17,16,0,2,18,17,34,32,18,17,0,2,19,18,34,32,19,18,0,2,20,19,34,32,20,19,0,2,21,20,34,32,21,20,0,2,22,21,34,32,22,21,0,2,23,22,34,32,23,22,0,2,24,23,34,32,24,23,0,2,25,24,34,32,25,24,0,2,26,25,34,32,26,25,0,2,27,26,34,32,27,26,0,2,28,27,34,32,28,27,0,2,29,28,34,32,29,28,0,2,30,29,34,32,30,29,0,2,31,30,34,32,31,30,0,2,32,31,34,32,0,31,0,2,1,32,34,33,0,1,0,33,1,0,34,33,1,2,0,33,0,3,34,33,2,3,0,33,3,4,34,33,3,4,0,33,4,5,34,33,4,5,0,33,5,6,34,33,5,6,0,33,6,7,34,33,6,7,0,33,7,8,34,33,7,8,0,33,8,9,34,33,8,9,0,33,9,10,34,33,9,10,0,33,10,11,34,33,10,11,0,33,11,12,34,33,11,12,0,33,12,13,34,33,12,13,0,33,13,14,34,33,13,14,0,33,14,15,34,33,14,15,0,33,15,16,34,33,15,16,0,33,16,17,34,33,16,17,0,33,17,18,34,33,17,18,0,33,18,19,34,33,18,19,0,33,19,20,34,33,19,20,0,33,20,21,34,33,20,21,0,33,21,22,34,33,21,22,0,33,22,23,34,33,22,23,0,33,23,24,34,33,23,24,0,33,24,25,34,33,24,25,0,33,25,26,34,33,25,26,0,33,26,27,34,33,26,27,0,33,27,28,34,33,27,28,0,33,28,29,34,33,28,29,0,33,29,30,34,33,29,30,0,33,30,31,34,33,30,31,0,33,31,32,34,31,0,33,0,32,1,33]

}
},


"transform" :
{
    "position"  : [ 0.000000, 0.000000, 0.000000 ],
    "rotation"  : [ -1.570796, 0.000000, 0.000000 ],
    "scale"     : [ 1.000000, 1.000000, 1.000000 ]
},

"defaults" :
{
    "bgcolor" : [ 0.000000, 0.000000, 0.000000 ],
    "bgalpha" : 1.000000,
    "camera"  : "default_camera"
}

}

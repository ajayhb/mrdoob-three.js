var Qrcode = function () {

	THREE.Geometry.call( this );

	var scope = this;

	scope.materials = [
		new THREE.MeshLambertMaterial( { color: 0x000000, ambient: 0x000000, shading: THREE.FlatShading } ),
		new THREE.MeshLambertMaterial( { color: 0xc0c0c0, ambient: 0xbbbbbb, shading: THREE.FlatShading } )
	];

	var m1 = 0, m2 = 1;

	v(-54,134,58);
	v(-54,146,58);
	v(-42,146,58);
	v(-42,134,58);
	v(-42,158,58);
	v(-18,158,58);
	v(-18,146,58);
	v(-66,-57,58);
	v(-66,-141,58);
	v(-150,-141,58);
	v(-150,-57,58);
	v(-138,-129,58);
	v(-78,-129,58);
	v(-78,-69,58);
	v(-138,-69,58);
	v(-90,-81,58);
	v(-90,-117,58);
	v(-126,-117,58);
	v(-126,-81,58);
	v(-6,146,58);
	v(-6,122,58);
	v(-18,122,58);
	v(6,146,58);
	v(6,158,58);
	v(-6,158,58);
	v(6,122,58);
	v(6,74,58);
	v(-6,74,58);
	v(-6,86,58);
	v(-18,86,58);
	v(-18,74,58);
	v(-30,74,58);
	v(-30,86,58);
	v(-42,86,58);
	v(-42,98,58);
	v(-30,98,58);
	v(-30,122,58);
	v(-18,98,58);
	v(-6,98,58);
	v(18,74,58);
	v(18,2,58);
	v(30,2,58);
	v(30,50,58);
	v(42,50,58);
	v(42,38,58);
	v(54,38,58);
	v(54,26,58);
	v(66,26,58);
	v(66,38,58);
	v(78,38,58);
	v(78,2,58);
	v(66,2,58);
	v(66,14,58);
	v(54,14,58);
	v(54,-9,58);
	v(66,-9,58);
	v(66,-33,58);
	v(78,-33,58);
	v(78,-21,58);
	v(90,-21,58);
	v(90,-33,58);
	v(102,-33,58);
	v(102,-57,58);
	v(114,-57,58);
	v(114,-69,58);
	v(102,-69,58);
	v(102,-81,58);
	v(114,-81,58);
	v(114,-105,58);
	v(102,-105,58);
	v(102,-93,58);
	v(78,-93,58);
	v(78,-105,58);
	v(66,-105,58);
	v(66,-117,58);
	v(54,-117,58);
	v(54,-93,58);
	v(30,-93,58);
	v(30,-105,58);
	v(18,-105,58);
	v(18,-69,58);
	v(30,-69,58);
	v(30,-81,58);
	v(42,-81,58);
	v(42,-33,58);
	v(54,-33,58);
	v(54,-21,58);
	v(42,-21,58);
	v(30,-33,58);
	v(30,-9,58);
	v(-18,-9,58);
	v(-18,-21,58);
	v(-30,-21,58);
	v(-30,-33,58);
	v(-42,-33,58);
	v(-42,-21,58);
	v(-54,-21,58);
	v(-54,2,58);
	v(-42,2,58);
	v(-42,-9,58);
	v(-30,-9,58);
	v(-30,2,58);
	v(-6,2,58);
	v(-6,14,58);
	v(6,14,58);
	v(18,86,58);
	v(30,86,58);
	v(30,74,58);
	v(42,74,58);
	v(42,86,58);
	v(54,86,58);
	v(54,62,58);
	v(78,62,58);
	v(78,50,58);
	v(42,62,58);
	v(30,62,58);
	v(90,50,58);
	v(90,62,58);
	v(114,62,58);
	v(114,50,58);
	v(126,50,58);
	v(126,62,58);
	v(138,62,58);
	v(138,38,58);
	v(114,38,58);
	v(114,26,58);
	v(138,26,58);
	v(150,38,58);
	v(150,2,58);
	v(138,2,58);
	v(138,14,58);
	v(102,14,58);
	v(102,38,58);
	v(138,-9,58);
	v(150,-9,58);
	v(150,-33,58);
	v(138,-33,58);
	v(138,-21,58);
	v(126,-21,58);
	v(126,-33,58);
	v(138,-57,58);
	v(126,-57,58);
	v(126,-45,58);
	v(114,-45,58);
	v(114,-21,58);
	v(102,-21,58);
	v(102,-9,58);
	v(126,-9,58);
	v(126,2,58);
	v(150,-57,58);
	v(150,-141,58);
	v(138,-141,58);
	v(138,-129,58);
	v(114,-129,58);
	v(126,-105,58);
	v(126,-93,58);
	v(138,-93,58);
	v(138,-81,58);
	v(126,-81,58);
	v(126,-69,58);
	v(138,-69,58);
	v(114,-141,58);
	v(102,-141,58);
	v(102,-129,58);
	v(78,-129,58);
	v(90,-9,58);
	v(90,2,58);
	v(102,2,58);
	v(30,-117,58);
	v(42,-117,58);
	v(42,-105,58);
	v(30,-141,58);
	v(6,-141,58);
	v(6,-129,58);
	v(18,-129,58);
	v(18,-117,58);
	v(6,-69,58);
	v(6,-81,58);
	v(-18,-81,58);
	v(-18,-69,58);
	v(-6,-69,58);
	v(-6,-57,58);
	v(18,-57,58);
	v(-18,-93,58);
	v(-30,-93,58);
	v(-30,-117,58);
	v(-42,-117,58);
	v(-42,-105,58);
	v(-54,-105,58);
	v(-54,-69,58);
	v(-42,-69,58);
	v(-42,-57,58);
	v(-54,-57,58);
	v(-54,-45,58);
	v(-30,-45,58);
	v(-30,-81,58);
	v(-18,-117,58);
	v(-6,-117,58);
	v(-6,-129,58);
	v(-18,-129,58);
	v(-6,-105,58);
	v(6,-105,58);
	v(6,-117,58);
	v(-78,-45,58);
	v(-78,-33,58);
	v(-66,-33,58);
	v(-66,-21,58);
	v(-78,-21,58);
	v(-78,-9,58);
	v(-66,-9,58);
	v(-90,-9,58);
	v(-90,-21,58);
	v(-114,-21,58);
	v(-114,-9,58);
	v(-102,-9,58);
	v(-102,14,58);
	v(-114,14,58);
	v(-114,2,58);
	v(-126,2,58);
	v(-126,26,58);
	v(-138,26,58);
	v(-138,38,58);
	v(-90,38,58);
	v(-90,26,58);
	v(-78,26,58);
	v(-78,14,58);
	v(-90,14,58);
	v(-90,2,58);
	v(-78,2,58);
	v(-126,-9,58);
	v(-138,-9,58);
	v(-138,2,58);
	v(-150,2,58);
	v(-150,14,58);
	v(-138,14,58);
	v(-90,50,58);
	v(-114,50,58);
	v(-114,62,58);
	v(-66,62,58);
	v(-66,50,58);
	v(-78,50,58);
	v(-78,38,58);
	v(-54,50,58);
	v(-54,86,58);
	v(-42,74,58);
	v(-30,50,58);
	v(-42,50,58);
	v(-42,38,58);
	v(-54,38,58);
	v(-54,26,58);
	v(-66,26,58);
	v(-66,38,58);
	v(-18,26,58);
	v(-18,14,58);
	v(-30,14,58);
	v(-42,14,58);
	v(-54,14,58);
	v(-18,-57,58);
	v(-18,-33,58);
	v(-6,-33,58);
	v(-6,-21,58);
	v(18,-21,58);
	v(18,-33,58);
	v(30,-57,58);
	v(18,-45,58);
	v(6,-45,58);
	v(6,-33,58);
	v(-18,62,58);
	v(-6,62,58);
	v(-30,134,58);
	v(-42,122,58);
	v(54,158,58);
	v(54,134,58);
	v(42,134,58);
	v(42,146,58);
	v(18,146,58);
	v(18,158,58);
	v(42,122,58);
	v(54,122,58);
	v(54,98,58);
	v(42,98,58);
	v(42,110,58);
	v(30,110,58);
	v(30,134,58);
	v(30,98,58);
	v(18,98,58);
	v(18,110,58);
	v(150,158,58);
	v(150,74,58);
	v(66,74,58);
	v(66,158,58);
	v(78,86,58);
	v(138,86,58);
	v(138,146,58);
	v(78,146,58);
	v(126,134,58);
	v(126,98,58);
	v(90,98,58);
	v(90,134,58);
	v(54,-81,58);
	v(90,-81,58);
	v(90,-45,58);
	v(54,-45,58);
	v(78,-57,58);
	v(78,-69,58);
	v(66,-69,58);
	v(66,-57,58);
	v(54,-129,58);
	v(54,-141,58);
	v(42,-141,58);
	v(42,-129,58);
	v(-66,158,58);
	v(-66,74,58);
	v(-150,74,58);
	v(-150,158,58);
	v(-138,86,58);
	v(-78,86,58);
	v(-78,146,58);
	v(-138,146,58);
	v(-126,134,58);
	v(-90,134,58);
	v(-90,98,58);
	v(-126,98,58);
	v(-126,-21,58);
	v(-126,-45,58);
	v(-138,-45,58);
	v(-138,-21,58);
	v(-126,62,58);
	v(-126,50,58);
	v(-138,50,58);
	v(-138,62,58);
	v(-90,-33,58);
	v(-90,-45,58);
	v(-114,-45,58);
	v(-114,-33,58);
	v(-42,-129,58);
	v(-54,-129,58);
	v(-54,-117,58);
	v(-18,-141,58);
	v(-42,-141,58);
	v(-54,98,58);
	v(-54,122,58);
	v(-54,134,-41);
	v(-54,146,-41);
	v(-42,146,-41);
	v(-42,134,-41);
	v(-42,158,-41);
	v(-18,158,-41);
	v(-18,146,-41);
	v(-66,-57,-41);
	v(-66,-141,-41);
	v(-150,-141,-41);
	v(-150,-57,-41);
	v(-138,-129,-41);
	v(-78,-129,-41);
	v(-78,-69,-41);
	v(-138,-69,-41);
	v(-90,-81,-41);
	v(-90,-117,-41);
	v(-126,-117,-41);
	v(-126,-81,-41);
	v(-6,146,-41);
	v(-6,122,-41);
	v(-18,122,-41);
	v(6,146,-41);
	v(6,158,-41);
	v(-6,158,-41);
	v(6,122,-41);
	v(6,74,-41);
	v(-6,74,-41);
	v(-6,86,-41);
	v(-18,86,-41);
	v(-18,74,-41);
	v(-30,74,-41);
	v(-30,86,-41);
	v(-42,86,-41);
	v(-42,98,-41);
	v(-30,98,-41);
	v(-30,122,-41);
	v(-18,98,-41);
	v(-6,98,-41);
	v(18,74,-41);
	v(18,2,-41);
	v(30,2,-41);
	v(30,50,-41);
	v(42,50,-41);
	v(42,38,-41);
	v(54,38,-41);
	v(54,26,-41);
	v(66,26,-41);
	v(66,38,-41);
	v(78,38,-41);
	v(78,2,-41);
	v(66,2,-41);
	v(66,14,-41);
	v(54,14,-41);
	v(54,-9,-41);
	v(66,-9,-41);
	v(66,-33,-41);
	v(78,-33,-41);
	v(78,-21,-41);
	v(90,-21,-41);
	v(90,-33,-41);
	v(102,-33,-41);
	v(102,-57,-41);
	v(114,-57,-41);
	v(114,-69,-41);
	v(102,-69,-41);
	v(102,-81,-41);
	v(114,-81,-41);
	v(114,-105,-41);
	v(102,-105,-41);
	v(102,-93,-41);
	v(78,-93,-41);
	v(78,-105,-41);
	v(66,-105,-41);
	v(66,-117,-41);
	v(54,-117,-41);
	v(54,-93,-41);
	v(30,-93,-41);
	v(30,-105,-41);
	v(18,-105,-41);
	v(18,-69,-41);
	v(30,-69,-41);
	v(30,-81,-41);
	v(42,-81,-41);
	v(42,-33,-41);
	v(54,-33,-41);
	v(54,-21,-41);
	v(42,-21,-41);
	v(30,-33,-41);
	v(30,-9,-41);
	v(-18,-9,-41);
	v(-18,-21,-41);
	v(-30,-21,-41);
	v(-30,-33,-41);
	v(-42,-33,-41);
	v(-42,-21,-41);
	v(-54,-21,-41);
	v(-54,2,-41);
	v(-42,2,-41);
	v(-42,-9,-41);
	v(-30,-9,-41);
	v(-30,2,-41);
	v(-6,2,-41);
	v(-6,14,-41);
	v(6,14,-41);
	v(18,86,-41);
	v(30,86,-41);
	v(30,74,-41);
	v(42,74,-41);
	v(42,86,-41);
	v(54,86,-41);
	v(54,62,-41);
	v(78,62,-41);
	v(78,50,-41);
	v(42,62,-41);
	v(30,62,-41);
	v(90,50,-41);
	v(90,62,-41);
	v(114,62,-41);
	v(114,50,-41);
	v(126,50,-41);
	v(126,62,-41);
	v(138,62,-41);
	v(138,38,-41);
	v(114,38,-41);
	v(114,26,-41);
	v(138,26,-41);
	v(150,38,-41);
	v(150,2,-41);
	v(138,2,-41);
	v(138,14,-41);
	v(102,14,-41);
	v(102,38,-41);
	v(138,-9,-41);
	v(150,-9,-41);
	v(150,-33,-41);
	v(138,-33,-41);
	v(138,-21,-41);
	v(126,-21,-41);
	v(126,-33,-41);
	v(138,-57,-41);
	v(126,-57,-41);
	v(126,-45,-41);
	v(114,-45,-41);
	v(114,-21,-41);
	v(102,-21,-41);
	v(102,-9,-41);
	v(126,-9,-41);
	v(126,2,-41);
	v(150,-57,-41);
	v(150,-141,-41);
	v(138,-141,-41);
	v(138,-129,-41);
	v(114,-129,-41);
	v(126,-105,-41);
	v(126,-93,-41);
	v(138,-93,-41);
	v(138,-81,-41);
	v(126,-81,-41);
	v(126,-69,-41);
	v(138,-69,-41);
	v(114,-141,-41);
	v(102,-141,-41);
	v(102,-129,-41);
	v(78,-129,-41);
	v(90,-9,-41);
	v(90,2,-41);
	v(102,2,-41);
	v(30,-117,-41);
	v(42,-117,-41);
	v(42,-105,-41);
	v(30,-141,-41);
	v(6,-141,-41);
	v(6,-129,-41);
	v(18,-129,-41);
	v(18,-117,-41);
	v(6,-69,-41);
	v(6,-81,-41);
	v(-18,-81,-41);
	v(-18,-69,-41);
	v(-6,-69,-41);
	v(-6,-57,-41);
	v(18,-57,-41);
	v(-18,-93,-41);
	v(-30,-93,-41);
	v(-30,-117,-41);
	v(-42,-117,-41);
	v(-42,-105,-41);
	v(-54,-105,-41);
	v(-54,-69,-41);
	v(-42,-69,-41);
	v(-42,-57,-41);
	v(-54,-57,-41);
	v(-54,-45,-41);
	v(-30,-45,-41);
	v(-30,-81,-41);
	v(-18,-117,-41);
	v(-6,-117,-41);
	v(-6,-129,-41);
	v(-18,-129,-41);
	v(-6,-105,-41);
	v(6,-105,-41);
	v(6,-117,-41);
	v(-78,-45,-41);
	v(-78,-33,-41);
	v(-66,-33,-41);
	v(-66,-21,-41);
	v(-78,-21,-41);
	v(-78,-9,-41);
	v(-66,-9,-41);
	v(-90,-9,-41);
	v(-90,-21,-41);
	v(-114,-21,-41);
	v(-114,-9,-41);
	v(-102,-9,-41);
	v(-102,14,-41);
	v(-114,14,-41);
	v(-114,2,-41);
	v(-126,2,-41);
	v(-126,26,-41);
	v(-138,26,-41);
	v(-138,38,-41);
	v(-90,38,-41);
	v(-90,26,-41);
	v(-78,26,-41);
	v(-78,14,-41);
	v(-90,14,-41);
	v(-90,2,-41);
	v(-78,2,-41);
	v(-126,-9,-41);
	v(-138,-9,-41);
	v(-138,2,-41);
	v(-150,2,-41);
	v(-150,14,-41);
	v(-138,14,-41);
	v(-90,50,-41);
	v(-114,50,-41);
	v(-114,62,-41);
	v(-66,62,-41);
	v(-66,50,-41);
	v(-78,50,-41);
	v(-78,38,-41);
	v(-54,50,-41);
	v(-54,86,-41);
	v(-42,74,-41);
	v(-30,50,-41);
	v(-42,50,-41);
	v(-42,38,-41);
	v(-54,38,-41);
	v(-54,26,-41);
	v(-66,26,-41);
	v(-66,38,-41);
	v(-18,26,-41);
	v(-18,14,-41);
	v(-30,14,-41);
	v(-42,14,-41);
	v(-54,14,-41);
	v(-18,-57,-41);
	v(-18,-33,-41);
	v(-6,-33,-41);
	v(-6,-21,-41);
	v(18,-21,-41);
	v(18,-33,-41);
	v(30,-57,-41);
	v(18,-45,-41);
	v(6,-45,-41);
	v(6,-33,-41);
	v(-18,62,-41);
	v(-6,62,-41);
	v(-30,134,-41);
	v(-42,122,-41);
	v(54,158,-41);
	v(54,134,-41);
	v(42,134,-41);
	v(42,146,-41);
	v(18,146,-41);
	v(18,158,-41);
	v(42,122,-41);
	v(54,122,-41);
	v(54,98,-41);
	v(42,98,-41);
	v(42,110,-41);
	v(30,110,-41);
	v(30,134,-41);
	v(30,98,-41);
	v(18,98,-41);
	v(18,110,-41);
	v(150,158,-41);
	v(150,74,-41);
	v(66,74,-41);
	v(66,158,-41);
	v(78,86,-41);
	v(138,86,-41);
	v(138,146,-41);
	v(78,146,-41);
	v(126,134,-41);
	v(126,98,-41);
	v(90,98,-41);
	v(90,134,-41);
	v(54,-81,-41);
	v(90,-81,-41);
	v(90,-45,-41);
	v(54,-45,-41);
	v(78,-57,-41);
	v(78,-69,-41);
	v(66,-69,-41);
	v(66,-57,-41);
	v(54,-129,-41);
	v(54,-141,-41);
	v(42,-141,-41);
	v(42,-129,-41);
	v(-66,158,-41);
	v(-66,74,-41);
	v(-150,74,-41);
	v(-150,158,-41);
	v(-138,86,-41);
	v(-78,86,-41);
	v(-78,146,-41);
	v(-138,146,-41);
	v(-126,134,-41);
	v(-90,134,-41);
	v(-90,98,-41);
	v(-126,98,-41);
	v(-126,-21,-41);
	v(-126,-45,-41);
	v(-138,-45,-41);
	v(-138,-21,-41);
	v(-126,62,-41);
	v(-126,50,-41);
	v(-138,50,-41);
	v(-138,62,-41);
	v(-90,-33,-41);
	v(-90,-45,-41);
	v(-114,-45,-41);
	v(-114,-33,-41);
	v(-42,-129,-41);
	v(-54,-129,-41);
	v(-54,-117,-41);
	v(-18,-141,-41);
	v(-42,-141,-41);
	v(-54,98,-41);
	v(-54,122,-41);

	f3(151,150,152,m1);
	f3(644,398,399,m1);
	f3(493,494,492,m1);
	f3(301,65,62,m1);
	f3(585,375,586,m1);
	f3(243,244,33,m1);
	f3(156,149,157,m1);
	f3(498,499,491,m1);
	f3(532,537,526,m1);
	f3(102,90,40,m1);
	f3(302,57,56,m1);
	f3(526,529,530,m1);
	f3(215,219,216,m1);
	f3(642,413,641,m1);
	f3(382,432,444,m1);
	f3(71,300,299,m1);
	f3(489,480,486,m1);
	f3(144,138,147,m1);
	f3(80,182,176,m1);
	f3(262,261,266,m1);
	f3(422,518,524,m1);
	f3(604,608,603,m1);
	f3(387,388,386,m1);
	f3(45,44,46,m1);
	f3(605,524,606,m1);
	f3(569,552,556,m1);
	f3(555,556,554,m1);
	f3(521,522,520,m1);
	f3(482,483,484,m1);
	f3(481,484,485,m1);
	f3(479,475,476,m1);
	f3(385,456,453,m1);
	f3(451,452,450,m1);
	f3(441,437,438,m1);
	f3(424,425,419,m1);
	f3(413,414,415,m1);
	f3(412,408,409,m1);
	f3(643,404,407,m1);
	f3(428,396,397,m1);
	f3(264,182,263,m1);
	f3(226,223,215,m1);
	f3(214,210,227,m1);
	f3(213,212,214,m1);
	f3(179,178,180,m1);
	f3(142,141,140,m1);
	f3(143,142,139,m1);
	f3(134,133,137,m1);
	f3(43,111,114,m1);
	f3(109,108,110,m1);
	f3(96,95,99,m1);
	f3(82,77,83,m1);
	f3(73,72,71,m1);
	f3(67,66,70,m1);
	f3(55,54,86,m1);
	f4(85,56,55,86,m1);
	f4(69,68,67,70,m1);
	f4(299,76,73,71,m1);
	f4(84,302,56,85,m1);
	f4(114,111,110,108,m1);
	f4(136,135,134,137,m1);
	f4(280,279,278,281,m1);
	f4(427,428,397,398,m1);
	f4(408,642,643,407,m1);
	f4(411,412,409,410,m1);
	f4(641,413,415,418,m1);
	f4(426,427,398,644,m1);
	f4(456,450,452,453,m1);
	f4(478,479,476,477,m1);
	f4(622,623,620,621,m1);
	f4(604,430,605,606,m1);
	f4(481,478,482,484,m1);
	f4(262,264,263,88,m1);
	f4(139,142,140,136,m1);
	f4(43,42,41,44,m1);
	f4(98,97,96,99,m1);
	f4(138,144,143,139,m1);
	f4(178,177,176,180,m1);
	f4(210,214,212,211,m1);
	f4(226,215,214,227,m1);
	f4(278,277,282,281,m1);
	f4(385,386,383,384,m1);
	f4(440,441,438,439,m1);
	f4(480,481,485,486,m1);
	f4(520,522,518,519,m1);
	f4(552,553,554,556,m1);
	f4(568,569,556,557,m1);
	f4(620,623,624,619,m1);
	f4(615,619,624,625,m1);
	f4(273,283,282,277,m1);
	f4(46,44,41,53,m1);
	f4(182,181,180,176,m1);
	f4(524,518,522,523,m1);
	f4(558,565,568,557,m1);
	f4(601,602,603,608,m1);
	f4(259,266,261,260,m1);
	f4(145,144,147,146,m1);
	f4(383,431,432,382,m1);
	f4(487,488,489,486,m1);
	f4(299,83,77,76,m1);
	f4(641,418,419,425,m1);
	f4(388,395,383,386,m1);
	f4(223,222,219,215,m1);
	f4(19,22,23,24,m1);
	f4(39,107,106,105,m1);
	f4(147,133,129,148,m1);
	f4(162,161,153,163,m1);
	f4(164,163,69,72,m1);
	f4(197,202,201,200,m1);
	f4(230,229,218,231,m1);
	f4(222,241,240,235,m1);
	f4(98,101,254,255,m1);
	f4(267,268,27,30,m1);
	f4(285,284,282,286,m1);
	f4(336,335,186,337,m1);
	f4(365,364,361,366,m1);
	f4(448,449,381,447,m1);
	f4(471,475,489,490,m1);
	f4(495,503,504,505,m1);
	f4(411,505,506,414,m1);
	f4(543,544,539,542,m1);
	f4(560,571,572,573,m1);
	f4(582,583,564,577,m1);
	f4(596,443,440,597,m1);
	f4(369,610,609,372,m1);
	f4(624,626,627,628,m1);
	f4(528,677,678,679,m1);
	f4(669,670,671,672,m1);
	f4(661,662,663,664,m1);
	f4(649,650,651,652,m1);
	f4(645,646,647,648,m1);
	f4(640,637,638,639,m1);
	f4(576,573,574,575,m1);
	f4(551,548,549,550,m1);
	f4(539,540,541,538,m1);
	f4(512,511,510,420,m1);
	f4(509,488,507,508,m1);
	f4(502,499,500,501,m1);
	f4(434,435,436,437,m1);
	f4(405,406,407,404,m1);
	f4(401,402,399,400,m1);
	f4(371,372,373,374,m1);
	f4(360,357,358,359,m1);
	f4(329,328,327,330,m1);
	f4(319,322,321,320,m1);
	f4(309,308,307,310,m1);
	f4(305,304,303,306,m1);
	f4(298,297,296,295,m1);
	f4(232,231,234,233,m1);
	f4(207,206,209,208,m1);
	f4(199,198,197,196,m1);
	f4(168,169,170,78,m1);
	f4(165,146,167,166,m1);
	f4(158,157,160,159,m1);
	f4(94,93,92,95,m1);
	f4(65,64,63,62,m1);
	f4(57,60,59,58,m1);
	f4(31,30,29,32,m1);
	f4(18,17,16,15,m1);
	f4(183,178,195,184,m1);
	f4(525,526,537,520,m1);
	f4(608,604,606,607,m1);
	f4(449,450,456,457,m1);
	f4(394,395,388,389,m1);
	f4(266,265,264,262,m1);
	f4(107,115,114,108,m1);
	f4(52,47,46,53,m1);
	f4(250,249,248,251,m1);
	f4(590,591,592,593,m1);
	f4(584,588,589,590,m1);
	f4(569,570,550,552,m1);
	f4(379,371,374,377,m1);
	f4(247,246,242,248,m1);
	f4(208,228,227,210,m1);
	f4(32,29,37,35,m1);
	f4(251,241,224,250,m1);
	f4(566,583,593,592,m1);
	f4(593,581,584,590,m1);
	f4(375,376,377,374,m1);
	f4(380,370,371,379,m1);
	f4(242,239,251,248,m1);
	f4(35,34,33,32,m1);
	f4(29,28,38,37,m1);
	f4(489,475,479,480,m1);
	f4(441,442,434,437,m1);
	f4(147,138,137,133,m1);
	f4(99,95,92,100,m1);
	f4(568,565,566,567,m1);
	f4(434,442,432,433,m1);
	f4(226,225,224,223,m1);
	f4(92,91,90,100,m1);
	f4(195,190,187,184,m1);
	f4(565,558,561,564,m1);
	f4(532,526,530,531,m1);
	f4(413,642,408,412,m1);
	f4(66,300,71,70,m1);
	f4(595,596,591,594,m1);
	f4(581,582,577,580,m1);
	f4(249,254,253,252,m1);
	f4(239,238,235,240,m1);
	f4(444,432,442,443,m1);
	f4(187,190,189,188,m1);
	f4(100,90,102,101,m1);
	f4(90,89,41,40,m1);
	f4(116,132,124,119,m1);
	f4(458,461,466,474,m1);
	f4(598,591,596,597,m1);
	f4(578,579,580,577,m1);
	f4(562,563,564,561,m1);
	f4(465,466,461,462,m1);
	f4(402,643,644,399,m1);
	f4(256,255,254,249,m1);
	f4(236,235,238,237,m1);
	f4(220,219,222,221,m1);
	f4(123,120,119,124,m1);
	f4(60,57,302,301,m1);
	f4(43,113,112,111,m1);
	f4(454,455,385,453,m1);
	f4(613,616,617,618,m1);
	f4(588,586,373,587,m1);
	f4(536,533,534,535,m1);
	f4(532,533,536,537,m1);
	f4(468,472,473,467,m1);
	f4(466,467,473,474,m1);
	f4(423,424,421,422,m1);
	f4(275,274,271,276,m1);
	f4(31,244,246,245,m1);
	f4(192,191,194,193,m1);
	f4(131,130,126,125,m1);
	f4(131,125,124,132,m1);
	f4(79,82,81,80,m1);
	f4(2,6,5,4,m1);
	f4(35,37,21,36,m1);
	f4(113,49,132,116,m1);
	f4(175,174,171,168,m1);
	f4(206,205,193,96,m1);
	f4(228,97,256,225,m1);
	f4(339,338,199,335,m1);
	f4(270,341,340,34,m1);
	f4(347,348,344,346,m1);
	f4(363,379,377,378,m1);
	f4(455,458,474,391,m1);
	f4(517,510,513,516,m1);
	f4(548,438,535,547,m1);
	f4(598,439,570,567,m1);
	f4(541,680,681,677,m1);
	f4(612,376,682,683,m1);
	f4(673,674,675,676,m1);
	f4(665,666,667,668,m1);
	f4(660,657,655,656,m1);
	f4(658,654,655,657,m1);
	f4(654,658,659,653,m1);
	f4(653,659,660,656,m1);
	f4(636,633,631,632,m1);
	f4(634,630,631,633,m1);
	f4(630,634,635,629,m1);
	f4(629,635,636,632,m1);
	f4(613,614,615,616,m1);
	f4(345,611,378,612,m1);
	f4(601,523,599,600,m1);
	f4(585,586,588,584,m1);
	f4(561,558,559,560,m1);
	f4(546,547,535,545,m1);
	f4(526,527,528,529,m1);
	f4(515,516,513,514,m1);
	f4(497,498,494,496,m1);
	f4(410,496,494,495,m1);
	f4(494,498,491,492,m1);
	f4(482,491,499,502,m1);
	f4(471,472,469,470,m1);
	f4(465,469,472,468,m1);
	f4(463,464,465,462,m1);
	f4(460,461,458,459,m1);
	f4(445,446,382,444,m1);
	f4(431,429,426,430,m1);
	f4(641,425,426,644,m1);
	f4(420,421,424,419,m1);
	f4(418,415,416,417,m1);
	f4(404,643,402,403,m1);
	f4(431,396,428,429,m1);
	f4(393,394,391,392,m1);
	f4(390,391,394,389,m1);
	f4(395,396,431,383,m1);
	f4(368,381,382,446,m1);
	f4(380,368,369,370,m1);
	f4(362,367,368,380,m1);
	f4(348,361,362,363,m1);
	f4(356,353,351,352,m1);
	f4(354,350,351,353,m1);
	f4(350,354,355,349,m1);
	f4(349,355,356,352,m1);
	f4(344,345,342,343,m1);
	f4(333,332,331,334,m1);
	f4(325,324,323,326,m1);
	f4(313,315,318,314,m1);
	f4(313,312,316,315,m1);
	f4(317,316,312,311,m1);
	f4(318,317,311,314,m1);
	f4(289,291,294,290,m1);
	f4(289,288,292,291,m1);
	f4(293,292,288,287,m1);
	f4(294,293,287,290,m1);
	f4(271,274,273,272,m1);
	f4(3,270,36,269,m1);
	f4(257,181,259,258,m1);
	f4(243,242,246,244,m1);
	f4(219,218,217,216,m1);
	f4(204,203,193,205,m1);
	f4(191,190,195,194,m1);
	f4(184,187,186,185,m1);
	f4(173,172,171,174,m1);
	f4(155,154,152,156,m1);
	f4(68,153,152,154,m1);
	f4(152,150,149,156,m1);
	f4(140,160,157,149,m1);
	f4(126,130,129,128,m1);
	f4(123,126,128,127,m1);
	f4(121,120,123,122,m1);
	f4(116,119,118,117,m1);
	f4(103,102,40,104,m1);
	f4(89,88,84,87,m1);
	f4(299,302,84,83,m1);
	f4(82,79,78,77,m1);
	f4(76,75,74,73,m1);
	f4(66,65,301,300,m1);
	f4(62,61,60,301,m1);
	f4(89,87,86,54,m1);
	f4(47,52,51,50,m1);
	f4(48,47,50,49,m1);
	f4(53,41,89,54,m1);
	f4(26,104,40,39,m1);
	f4(38,28,27,26,m1);
	f4(20,38,26,25,m1);
	f4(6,21,20,19,m1);
	f4(9,11,14,10,m1);
	f4(9,8,12,11,m1);
	f4(13,12,8,7,m1);
	f4(14,13,7,10,m1);
	f4(0,3,2,1,m1);
	f4(2,4,346,344,m2);
	f4(6,2,344,348,m2);
	f4(5,6,348,347,m2);
	f4(4,5,347,346,m2);
	f4(319,661,664,322,m2);
	f4(322,664,663,321,m2);
	f4(321,663,662,320,m2);
	f4(320,662,661,319,m2);
	f4(318,315,657,660,m2);
	f4(317,318,660,659,m2);
	f4(316,317,659,658,m2);
	f4(315,316,658,657,m2);
	f4(311,653,656,314,m2);
	f4(314,656,655,313,m2);
	f4(313,655,654,312,m2);
	f4(312,654,653,311,m2);
	f4(310,307,649,652,m2);
	f4(309,310,652,651,m2);
	f4(308,309,651,650,m2);
	f4(307,308,650,649,m2);
	f4(15,357,360,18,m2);
	f4(18,360,359,17,m2);
	f4(17,359,358,16,m2);
	f4(16,358,357,15,m2);
	f4(14,11,353,356,m2);
	f4(13,14,356,355,m2);
	f4(12,13,355,354,m2);
	f4(11,12,354,353,m2);
	f4(306,303,645,648,m2);
	f4(305,306,648,647,m2);
	f4(304,305,647,646,m2);
	f4(303,304,646,645,m2);
	f4(7,349,352,10,m2);
	f4(10,352,351,9,m2);
	f4(9,351,350,8,m2);
	f4(8,350,349,7,m2);
	f4(299,641,644,302,m2);
	f4(302,644,643,301,m2);
	f4(301,643,642,300,m2);
	f4(300,642,641,299,m2);
	f4(334,331,673,676,m2);
	f4(333,334,676,675,m2);
	f4(332,333,675,674,m2);
	f4(331,332,674,673,m2);
	f4(326,323,665,668,m2);
	f4(325,326,668,667,m2);
	f4(324,325,667,666,m2);
	f4(323,324,666,665,m2);
	f4(330,327,669,672,m2);
	f4(329,330,672,671,m2);
	f4(328,329,671,670,m2);
	f4(327,328,670,669,m2);
	f4(295,637,640,298,m2);
	f4(298,640,639,297,m2);
	f4(297,639,638,296,m2);
	f4(296,638,637,295,m2);
	f4(294,291,633,636,m2);
	f4(293,294,636,635,m2);
	f4(292,293,635,634,m2);
	f4(291,292,634,633,m2);
	f4(287,629,632,290,m2);
	f4(290,632,631,289,m2);
	f4(289,631,630,288,m2);
	f4(288,630,629,287,m2);
	f4(282,284,626,624,m2);
	f4(286,282,624,628,m2);
	f4(285,286,628,627,m2);
	f4(284,285,627,626,m2);
	f4(273,277,619,615,m2);
	f4(283,273,615,625,m2);
	f4(282,283,625,624,m2);
	f4(281,282,624,623,m2);
	f4(280,281,623,622,m2);
	f4(279,280,622,621,m2);
	f4(278,279,621,620,m2);
	f4(277,278,620,619,m2);
	f4(271,613,618,276,m2);
	f4(275,276,618,617,m2);
	f4(274,275,617,616,m2);
	f4(273,274,616,615,m2);
	f4(272,273,615,614,m2);
	f4(271,272,614,613,m2);
	f4(3,0,342,345,m2);
	f4(2,3,345,344,m2);
	f4(1,2,344,343,m2);
	f4(0,1,343,342,m2);
	f4(270,3,345,612,m2);
	f4(36,270,612,378,m2);
	f4(269,36,378,611,m2);
	f4(3,269,611,345,m2);
	f4(34,340,682,376,m2);
	f4(270,34,376,612,m2);
	f4(341,270,612,683,m2);
	f4(340,341,683,682,m2);
	f4(268,610,369,27,m2);
	f4(267,609,610,268,m2);
	f4(30,372,609,267,m2);
	f4(27,369,372,30,m2);
	f4(259,260,602,601,m2);
	f4(266,259,601,608,m2);
	f4(265,266,608,607,m2);
	f4(264,265,607,606,m2);
	f4(182,264,606,524,m2);
	f4(263,182,524,605,m2);
	f4(88,263,605,430,m2);
	f4(262,88,430,604,m2);
	f4(261,262,604,603,m2);
	f4(260,261,603,602,m2);
	f4(181,257,599,523,m2);
	f4(259,181,523,601,m2);
	f4(258,259,601,600,m2);
	f4(257,258,600,599,m2);
	f4(256,97,439,598,m2);
	f4(225,256,598,567,m2);
	f4(228,225,567,570,m2);
	f4(97,228,570,439,m2);
	f4(252,594,591,249,m2);
	f4(256,249,591,598,m2);
	f4(255,256,598,597,m2);
	f4(98,255,597,440,m2);
	f4(101,98,440,443,m2);
	f4(254,101,443,596,m2);
	f4(253,254,596,595,m2);
	f4(252,253,595,594,m2);
	f4(239,242,584,581,m2);
	f4(251,239,581,593,m2);
	f4(241,251,593,583,m2);
	f4(224,241,583,566,m2);
	f4(250,224,566,592,m2);
	f4(249,250,592,591,m2);
	f4(248,249,591,590,m2);
	f4(247,248,590,589,m2);
	f4(246,247,589,588,m2);
	f4(245,246,588,587,m2);
	f4(31,245,587,373,m2);
	f4(244,31,373,586,m2);
	f4(33,244,586,375,m2);
	f4(243,33,375,585,m2);
	f4(243,585,584,242,m2);
	f4(222,235,577,564,m2);
	f4(241,222,564,583,m2);
	f4(240,241,583,582,m2);
	f4(239,240,582,581,m2);
	f4(238,239,581,580,m2);
	f4(238,580,579,237,m2);
	f4(236,237,579,578,m2);
	f4(235,236,578,577,m2);
	f4(231,232,574,573,m2);
	f4(234,231,573,576,m2);
	f4(233,234,576,575,m2);
	f4(232,233,575,574,m2);
	f4(218,229,571,560,m2);
	f4(231,218,560,573,m2);
	f4(230,231,573,572,m2);
	f4(229,230,572,571,m2);
	f4(208,210,552,550,m2);
	f4(228,208,550,570,m2);
	f4(227,228,570,569,m2);
	f4(226,227,569,568,m2);
	f4(225,226,568,567,m2);
	f4(224,225,567,566,m2);
	f4(223,224,566,565,m2);
	f4(222,223,565,564,m2);
	f4(222,564,563,221,m2);
	f4(220,221,563,562,m2);
	f4(219,220,562,561,m2);
	f4(218,219,561,560,m2);
	f4(217,218,560,559,m2);
	f4(216,217,559,558,m2);
	f4(215,216,558,557,m2);
	f4(214,215,557,556,m2);
	f4(213,214,556,555,m2);
	f4(212,213,555,554,m2);
	f4(211,212,554,553,m2);
	f4(210,211,553,552,m2);
	f4(206,207,549,548,m2);
	f4(209,206,548,551,m2);
	f4(208,209,551,550,m2);
	f4(207,208,550,549,m2);
	f4(193,203,545,535,m2);
	f4(96,193,535,438,m2);
	f4(206,96,438,548,m2);
	f4(205,206,548,547,m2);
	f4(204,205,547,546,m2);
	f4(203,204,546,545,m2);
	f4(197,200,542,539,m2);
	f4(202,197,539,544,m2);
	f4(201,202,544,543,m2);
	f4(200,201,543,542,m2);
	f4(199,196,538,541,m2);
	f4(198,199,541,540,m2);
	f4(197,198,540,539,m2);
	f4(196,197,539,538,m2);
	f4(335,199,541,677,m2);
	f4(339,335,677,681,m2);
	f4(338,339,681,680,m2);
	f4(199,338,680,541,m2);
	f4(186,335,677,528,m2);
	f4(337,186,528,679,m2);
	f4(336,337,679,678,m2);
	f4(335,336,678,677,m2);
	f4(178,183,525,520,m2);
	f4(195,178,520,537,m2);
	f4(195,537,536,194,m2);
	f4(193,194,536,535,m2);
	f4(192,193,535,534,m2);
	f4(191,192,534,533,m2);
	f4(190,191,533,532,m2);
	f4(189,190,532,531,m2);
	f4(189,531,530,188,m2);
	f4(187,188,530,529,m2);
	f4(186,187,529,528,m2);
	f4(185,186,528,527,m2);
	f4(184,185,527,526,m2);
	f4(183,184,526,525,m2);
	f4(80,176,518,422,m2);
	f4(182,80,422,524,m2);
	f4(181,182,524,523,m2);
	f4(180,181,523,522,m2);
	f4(179,180,522,521,m2);
	f4(178,179,521,520,m2);
	f4(177,178,520,519,m2);
	f4(176,177,519,518,m2);
	f4(168,171,513,510,m2);
	f4(175,168,510,517,m2);
	f4(174,175,517,516,m2);
	f4(173,174,516,515,m2);
	f4(172,173,515,514,m2);
	f4(171,172,514,513,m2);
	f4(170,512,420,78,m2);
	f4(169,511,512,170,m2);
	f4(168,510,511,169,m2);
	f4(78,420,510,168,m2);
	f4(146,165,507,488,m2);
	f4(167,146,488,509,m2);
	f4(166,167,509,508,m2);
	f4(165,166,508,507,m2);
	f4(163,164,506,505,m2);
	f4(69,163,505,411,m2);
	f4(72,69,411,414,m2);
	f4(164,72,414,506,m2);
	f4(153,161,503,495,m2);
	f4(163,153,495,505,m2);
	f4(162,163,505,504,m2);
	f4(161,162,504,503,m2);
	f4(140,149,491,482,m2);
	f4(160,140,482,502,m2);
	f4(159,160,502,501,m2);
	f4(158,159,501,500,m2);
	f4(157,158,500,499,m2);
	f4(156,157,499,498,m2);
	f4(155,156,498,497,m2);
	f4(154,155,497,496,m2);
	f4(68,154,496,410,m2);
	f4(153,68,410,495,m2);
	f4(152,153,495,494,m2);
	f4(151,152,494,493,m2);
	f4(150,151,493,492,m2);
	f4(150,492,491,149,m2);
	f4(129,133,475,471,m2);
	f4(148,129,471,490,m2);
	f4(147,148,490,489,m2);
	f4(146,147,489,488,m2);
	f4(145,146,488,487,m2);
	f4(144,145,487,486,m2);
	f4(143,144,486,485,m2);
	f4(142,143,485,484,m2);
	f4(141,142,484,483,m2);
	f4(140,141,483,482,m2);
	f4(136,140,482,478,m2);
	f4(139,136,478,481,m2);
	f4(138,139,481,480,m2);
	f4(137,138,480,479,m2);
	f4(136,137,479,478,m2);
	f4(135,136,478,477,m2);
	f4(134,135,477,476,m2);
	f4(133,134,476,475,m2);
	f4(113,116,458,455,m2);
	f4(49,113,455,391,m2);
	f4(132,49,391,474,m2);
	f4(131,132,474,473,m2);
	f4(131,473,472,130,m2);
	f4(129,130,472,471,m2);
	f4(128,129,471,470,m2);
	f4(128,470,469,127,m2);
	f4(123,127,469,465,m2);
	f4(126,123,465,468,m2);
	f4(125,126,468,467,m2);
	f4(124,125,467,466,m2);
	f4(123,124,466,465,m2);
	f4(122,123,465,464,m2);
	f4(121,122,464,463,m2);
	f4(120,121,463,462,m2);
	f4(119,120,462,461,m2);
	f4(118,119,461,460,m2);
	f4(117,118,460,459,m2);
	f4(116,117,459,458,m2);
	f4(107,108,450,449,m2);
	f4(115,107,449,457,m2);
	f4(114,115,457,456,m2);
	f4(43,114,456,385,m2);
	f4(43,385,455,113,m2);
	f4(112,113,455,454,m2);
	f4(111,112,454,453,m2);
	f4(110,111,453,452,m2);
	f4(109,110,452,451,m2);
	f4(108,109,451,450,m2);
	f4(39,105,447,381,m2);
	f4(107,39,381,449,m2);
	f4(106,107,449,448,m2);
	f4(105,106,448,447,m2);
	f4(26,39,381,368,m2);
	f4(104,26,368,446,m2);
	f4(103,104,446,445,m2);
	f4(102,103,445,444,m2);
	f4(101,102,444,443,m2);
	f4(100,101,443,442,m2);
	f4(99,100,442,441,m2);
	f4(98,99,441,440,m2);
	f4(97,98,440,439,m2);
	f4(96,97,439,438,m2);
	f4(95,96,438,437,m2);
	f4(94,95,437,436,m2);
	f4(93,94,436,435,m2);
	f4(92,93,435,434,m2);
	f4(91,92,434,433,m2);
	f4(90,91,433,432,m2);
	f4(90,432,431,89,m2);
	f4(88,89,431,430,m2);
	f4(84,88,430,426,m2);
	f4(87,84,426,429,m2);
	f4(86,87,429,428,m2);
	f4(85,86,428,427,m2);
	f4(84,85,427,426,m2);
	f4(84,426,425,83,m2);
	f4(82,83,425,424,m2);
	f4(81,82,424,423,m2);
	f4(80,81,423,422,m2);
	f4(80,422,421,79,m2);
	f4(78,79,421,420,m2);
	f4(77,78,420,419,m2);
	f4(76,77,419,418,m2);
	f4(75,76,418,417,m2);
	f4(74,75,417,416,m2);
	f4(73,74,416,415,m2);
	f4(72,73,415,414,m2);
	f4(71,72,414,413,m2);
	f4(70,71,413,412,m2);
	f4(69,70,412,411,m2);
	f4(68,69,411,410,m2);
	f4(67,68,410,409,m2);
	f4(66,67,409,408,m2);
	f4(65,66,408,407,m2);
	f4(64,65,407,406,m2);
	f4(63,64,406,405,m2);
	f4(62,63,405,404,m2);
	f4(61,62,404,403,m2);
	f4(60,61,403,402,m2);
	f4(59,60,402,401,m2);
	f4(58,59,401,400,m2);
	f4(57,58,400,399,m2);
	f4(56,57,399,398,m2);
	f4(55,56,398,397,m2);
	f4(54,55,397,396,m2);
	f4(53,54,396,395,m2);
	f4(52,53,395,394,m2);
	f4(51,52,394,393,m2);
	f4(50,51,393,392,m2);
	f4(50,392,391,49,m2);
	f4(48,49,391,390,m2);
	f4(47,48,390,389,m2);
	f4(46,47,389,388,m2);
	f4(45,46,388,387,m2);
	f4(44,45,387,386,m2);
	f4(43,44,386,385,m2);
	f4(42,43,385,384,m2);
	f4(42,384,383,41,m2);
	f4(40,41,383,382,m2);
	f4(40,382,381,39,m2);
	f4(20,25,367,362,m2);
	f4(38,20,362,380,m2);
	f4(37,38,380,379,m2);
	f4(21,37,379,363,m2);
	f4(36,21,363,378,m2);
	f4(35,36,378,377,m2);
	f4(34,35,377,376,m2);
	f4(33,34,376,375,m2);
	f4(32,33,375,374,m2);
	f4(31,32,374,373,m2);
	f4(30,31,373,372,m2);
	f4(29,30,372,371,m2);
	f4(28,29,371,370,m2);
	f4(27,28,370,369,m2);
	f4(26,27,369,368,m2);
	f4(26,368,367,25,m2);
	f4(24,366,361,19,m2);
	f4(23,365,366,24,m2);
	f4(22,364,365,23,m2);
	f4(19,361,364,22,m2);
	f4(6,19,361,348,m2);
	f4(21,6,348,363,m2);
	f4(20,21,363,362,m2);
	f4(19,20,362,361,m2);

	this.computeCentroids();
	this.computeFaceNormals();

	function v( x, y, z ) {

		scope.vertices.push( new THREE.Vertex( x, y, z ) );

	}

	function f3( a, b, c, material ) {

		scope.faces.push( new THREE.Face3( a, b, c, null, null, material ) );

	}

	function f4( a, b, c, d, material ) {

		scope.faces.push( new THREE.Face4( a, b, c, d, null, null, material ) );

	}

}

Qrcode.prototype = new THREE.Geometry();
Qrcode.prototype.constructor = Qrcode;

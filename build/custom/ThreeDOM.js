// ThreeDOM.js r46dev - http://github.com/mrdoob/three.js
var THREE=THREE||{};if(!self.Int32Array)self.Int32Array=Array,self.Float32Array=Array;THREE.Color=function(a){a!==void 0&&this.setHex(a);return this};
THREE.Color.prototype={constructor:THREE.Color,r:1,g:1,b:1,copy:function(a){this.r=a.r;this.g=a.g;this.b=a.b;return this},copyGammaToLinear:function(a){this.r=a.r*a.r;this.g=a.g*a.g;this.b=a.b*a.b;return this},copyLinearToGamma:function(a){this.r=Math.sqrt(a.r);this.g=Math.sqrt(a.g);this.b=Math.sqrt(a.b);return this},setRGB:function(a,b,c){this.r=a;this.g=b;this.b=c;return this},setHSV:function(a,b,c){var d,e,g;if(c===0)this.r=this.g=this.b=0;else switch(d=Math.floor(a*6),e=a*6-d,a=c*(1-b),g=c*(1-
b*e),b=c*(1-b*(1-e)),d){case 1:this.r=g;this.g=c;this.b=a;break;case 2:this.r=a;this.g=c;this.b=b;break;case 3:this.r=a;this.g=g;this.b=c;break;case 4:this.r=b;this.g=a;this.b=c;break;case 5:this.r=c;this.g=a;this.b=g;break;case 6:case 0:this.r=c,this.g=b,this.b=a}return this},setHex:function(a){a=Math.floor(a);this.r=(a>>16&255)/255;this.g=(a>>8&255)/255;this.b=(a&255)/255;return this},getHex:function(){return~~(this.r*255)<<16^~~(this.g*255)<<8^~~(this.b*255)},getContextStyle:function(){return"rgb("+
Math.floor(this.r*255)+","+Math.floor(this.g*255)+","+Math.floor(this.b*255)+")"},clone:function(){return(new THREE.Color).setRGB(this.r,this.g,this.b)}};THREE.Vector2=function(a,b){this.x=a||0;this.y=b||0};
THREE.Vector2.prototype={constructor:THREE.Vector2,set:function(a,b){this.x=a;this.y=b;return this},copy:function(a){this.x=a.x;this.y=a.y;return this},clone:function(){return new THREE.Vector2(this.x,this.y)},add:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;return this},addSelf:function(a){this.x+=a.x;this.y+=a.y;return this},sub:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;return this},subSelf:function(a){this.x-=a.x;this.y-=a.y;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;return this},
divideScalar:function(a){a?(this.x/=a,this.y/=a):this.set(0,0);return this},negate:function(){return this.multiplyScalar(-1)},dot:function(a){return this.x*a.x+this.y*a.y},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.lengthSq())},normalize:function(){return this.divideScalar(this.length())},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x,a=this.y-a.y;return b*b+a*a},setLength:function(a){return this.normalize().multiplyScalar(a)},
equals:function(a){return a.x===this.x&&a.y===this.y}};THREE.Vector3=function(a,b,c){this.x=a||0;this.y=b||0;this.z=c||0};
THREE.Vector3.prototype={constructor:THREE.Vector3,set:function(a,b,c){this.x=a;this.y=b;this.z=c;return this},setX:function(a){this.x=a;return this},setY:function(a){this.y=a;return this},setZ:function(a){this.z=a;return this},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;return this},clone:function(){return new THREE.Vector3(this.x,this.y,this.z)},add:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;return this},addSelf:function(a){this.x+=a.x;this.y+=a.y;this.z+=a.z;return this},
addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;return this},sub:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;return this},subSelf:function(a){this.x-=a.x;this.y-=a.y;this.z-=a.z;return this},multiply:function(a,b){this.x=a.x*b.x;this.y=a.y*b.y;this.z=a.z*b.z;return this},multiplySelf:function(a){this.x*=a.x;this.y*=a.y;this.z*=a.z;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=a;return this},divideSelf:function(a){this.x/=a.x;this.y/=a.y;this.z/=a.z;return this},
divideScalar:function(a){a?(this.x/=a,this.y/=a,this.z/=a):this.set(0,0,0);return this},negate:function(){return this.multiplyScalar(-1)},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.lengthSq())},lengthManhattan:function(){return this.x+this.y+this.z},normalize:function(){return this.divideScalar(this.length())},setLength:function(a){return this.normalize().multiplyScalar(a)},
cross:function(a,b){this.x=a.y*b.z-a.z*b.y;this.y=a.z*b.x-a.x*b.z;this.z=a.x*b.y-a.y*b.x;return this},crossSelf:function(a){return this.set(this.y*a.z-this.z*a.y,this.z*a.x-this.x*a.z,this.x*a.y-this.y*a.x)},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){return(new THREE.Vector3).sub(this,a).lengthSq()},setPositionFromMatrix:function(a){this.x=a.n14;this.y=a.n24;this.z=a.n34},setRotationFromMatrix:function(a){var b=Math.cos(this.y);this.y=Math.asin(a.n13);
Math.abs(b)>1.0E-5?(this.x=Math.atan2(-a.n23/b,a.n33/b),this.z=Math.atan2(-a.n12/b,a.n11/b)):(this.x=0,this.z=Math.atan2(a.n21,a.n22))},isZero:function(){return this.lengthSq()<1.0E-4}};THREE.Vector4=function(a,b,c,d){this.x=a||0;this.y=b||0;this.z=c||0;this.w=d!==void 0?d:1};
THREE.Vector4.prototype={constructor:THREE.Vector4,set:function(a,b,c,d){this.x=a;this.y=b;this.z=c;this.w=d;return this},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;this.w=a.w!==void 0?a.w:1},clone:function(){return new THREE.Vector4(this.x,this.y,this.z,this.w)},add:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;this.w=a.w+b.w;return this},addSelf:function(a){this.x+=a.x;this.y+=a.y;this.z+=a.z;this.w+=a.w;return this},sub:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-
b.z;this.w=a.w-b.w;return this},subSelf:function(a){this.x-=a.x;this.y-=a.y;this.z-=a.z;this.w-=a.w;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=a;this.w*=a;return this},divideScalar:function(a){a?(this.x/=a,this.y/=a,this.z/=a,this.w/=a):(this.z=this.y=this.x=0,this.w=1);return this},negate:function(){return this.multiplyScalar(-1)},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w},lengthSq:function(){return this.dot(this)},length:function(){return Math.sqrt(this.lengthSq())},
normalize:function(){return this.divideScalar(this.length())},setLength:function(a){return this.normalize().multiplyScalar(a)},lerpSelf:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;this.w+=(a.w-this.w)*b;return this}};THREE.Ray=function(a,b){this.origin=a||new THREE.Vector3;this.direction=b||new THREE.Vector3};
THREE.Ray.prototype={constructor:THREE.Ray,intersectScene:function(a){return this.intersectObjects(a.children)},intersectObjects:function(a){var b,c,d=[];b=0;for(c=a.length;b<c;b++)Array.prototype.push.apply(d,this.intersectObject(a[b]));d.sort(function(a,b){return a.distance-b.distance});return d},intersectObject:function(a){function b(a,b,c){var d;d=c.clone().subSelf(a).dot(b);if(d<=0)return null;a=a.clone().addSelf(b.clone().multiplyScalar(d));return c.distanceTo(a)}function c(a,b,c,d){var d=d.clone().subSelf(b),
c=c.clone().subSelf(b),e=a.clone().subSelf(b),a=d.dot(d),b=d.dot(c),d=d.dot(e),f=c.dot(c),c=c.dot(e),e=1/(a*f-b*b),f=(f*d-b*c)*e,a=(a*c-b*d)*e;return f>0&&a>0&&f+a<1}for(var d,e=[],g=0,f=a.children.length;g<f;g++)Array.prototype.push.apply(e,this.intersectObject(a.children[g]));if(a instanceof THREE.Particle){g=b(this.origin,this.direction,a.matrixWorld.getPosition());if(g===null||g>a.scale.x)return[];d={distance:g,point:a.position,face:null,object:a};e.push(d)}else if(a instanceof THREE.Mesh){g=
b(this.origin,this.direction,a.matrixWorld.getPosition());if(g===null||g>a.geometry.boundingSphere.radius*Math.max(a.scale.x,Math.max(a.scale.y,a.scale.z)))return e;var h,k,l,i,j,n,m,o,p=a.geometry,r=p.vertices;a.matrixRotationWorld.extractRotation(a.matrixWorld);g=0;for(f=p.faces.length;g<f;g++)if(d=p.faces[g],m=this.origin.clone(),o=this.direction.clone(),i=a.matrixWorld,h=i.multiplyVector3(d.centroid.clone()).subSelf(m),n=h.dot(o),!(n<=0)&&(h=i.multiplyVector3(r[d.a].position.clone()),k=i.multiplyVector3(r[d.b].position.clone()),
l=i.multiplyVector3(r[d.c].position.clone()),i=d instanceof THREE.Face4?i.multiplyVector3(r[d.d].position.clone()):null,j=a.matrixRotationWorld.multiplyVector3(d.normal.clone()),n=o.dot(j),a.doubleSided||(a.flipSided?n>0:n<0)))if(n=j.dot((new THREE.Vector3).sub(h,m))/n,m=m.addSelf(o.multiplyScalar(n)),d instanceof THREE.Face3)c(m,h,k,l)&&(d={distance:this.origin.distanceTo(m),point:m,face:d,object:a},e.push(d));else if(d instanceof THREE.Face4&&(c(m,h,k,i)||c(m,k,l,i)))d={distance:this.origin.distanceTo(m),
point:m,face:d,object:a},e.push(d)}return e}};
THREE.Rectangle=function(){function a(){g=d-b;f=e-c}var b,c,d,e,g,f,h=!0;this.getX=function(){return b};this.getY=function(){return c};this.getWidth=function(){return g};this.getHeight=function(){return f};this.getLeft=function(){return b};this.getTop=function(){return c};this.getRight=function(){return d};this.getBottom=function(){return e};this.set=function(f,g,i,j){h=!1;b=f;c=g;d=i;e=j;a()};this.addPoint=function(f,g){h?(h=!1,b=f,c=g,d=f,e=g):(b=b<f?b:f,c=c<g?c:g,d=d>f?d:f,e=e>g?e:g);a()};this.add3Points=
function(f,g,i,j,n,m){h?(h=!1,b=f<i?f<n?f:n:i<n?i:n,c=g<j?g<m?g:m:j<m?j:m,d=f>i?f>n?f:n:i>n?i:n,e=g>j?g>m?g:m:j>m?j:m):(b=f<i?f<n?f<b?f:b:n<b?n:b:i<n?i<b?i:b:n<b?n:b,c=g<j?g<m?g<c?g:c:m<c?m:c:j<m?j<c?j:c:m<c?m:c,d=f>i?f>n?f>d?f:d:n>d?n:d:i>n?i>d?i:d:n>d?n:d,e=g>j?g>m?g>e?g:e:m>e?m:e:j>m?j>e?j:e:m>e?m:e);a()};this.addRectangle=function(f){h?(h=!1,b=f.getLeft(),c=f.getTop(),d=f.getRight(),e=f.getBottom()):(b=b<f.getLeft()?b:f.getLeft(),c=c<f.getTop()?c:f.getTop(),d=d>f.getRight()?d:f.getRight(),e=e>
f.getBottom()?e:f.getBottom());a()};this.inflate=function(f){b-=f;c-=f;d+=f;e+=f;a()};this.minSelf=function(f){b=b>f.getLeft()?b:f.getLeft();c=c>f.getTop()?c:f.getTop();d=d<f.getRight()?d:f.getRight();e=e<f.getBottom()?e:f.getBottom();a()};this.intersects=function(a){return Math.min(d,a.getRight())-Math.max(b,a.getLeft())>=0&&Math.min(e,a.getBottom())-Math.max(c,a.getTop())>=0};this.empty=function(){h=!0;e=d=c=b=0;a()};this.isEmpty=function(){return h}};THREE.Matrix3=function(){this.m=[]};
THREE.Matrix3.prototype={constructor:THREE.Matrix3,transpose:function(){var a,b=this.m;a=b[1];b[1]=b[3];b[3]=a;a=b[2];b[2]=b[6];b[6]=a;a=b[5];b[5]=b[7];b[7]=a;return this},transposeIntoArray:function(a){var b=this.m;a[0]=b[0];a[1]=b[3];a[2]=b[6];a[3]=b[1];a[4]=b[4];a[5]=b[7];a[6]=b[2];a[7]=b[5];a[8]=b[8];return this}};
THREE.Matrix4=function(a,b,c,d,e,g,f,h,k,l,i,j,n,m,o,p){this.set(a!==void 0?a:1,b||0,c||0,d||0,e||0,g!==void 0?g:1,f||0,h||0,k||0,l||0,i!==void 0?i:1,j||0,n||0,m||0,o||0,p!==void 0?p:1);this.flat=Array(16);this.m33=new THREE.Matrix3};
THREE.Matrix4.prototype={constructor:THREE.Matrix4,set:function(a,b,c,d,e,g,f,h,k,l,i,j,n,m,o,p){this.n11=a;this.n12=b;this.n13=c;this.n14=d;this.n21=e;this.n22=g;this.n23=f;this.n24=h;this.n31=k;this.n32=l;this.n33=i;this.n34=j;this.n41=n;this.n42=m;this.n43=o;this.n44=p;return this},identity:function(){this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return this},copy:function(a){this.set(a.n11,a.n12,a.n13,a.n14,a.n21,a.n22,a.n23,a.n24,a.n31,a.n32,a.n33,a.n34,a.n41,a.n42,a.n43,a.n44);return this},lookAt:function(a,
b,c){var d=THREE.Matrix4.__v1,e=THREE.Matrix4.__v2,g=THREE.Matrix4.__v3;g.sub(a,b).normalize();if(g.length()===0)g.z=1;d.cross(c,g).normalize();d.length()===0&&(g.x+=1.0E-4,d.cross(c,g).normalize());e.cross(g,d).normalize();this.n11=d.x;this.n12=e.x;this.n13=g.x;this.n21=d.y;this.n22=e.y;this.n23=g.y;this.n31=d.z;this.n32=e.z;this.n33=g.z;return this},multiply:function(a,b){var c=a.n11,d=a.n12,e=a.n13,g=a.n14,f=a.n21,h=a.n22,k=a.n23,l=a.n24,i=a.n31,j=a.n32,n=a.n33,m=a.n34,o=a.n41,p=a.n42,r=a.n43,
s=a.n44,v=b.n11,C=b.n12,K=b.n13,y=b.n14,F=b.n21,G=b.n22,w=b.n23,A=b.n24,O=b.n31,I=b.n32,M=b.n33,H=b.n34,D=b.n41,t=b.n42,B=b.n43,q=b.n44;this.n11=c*v+d*F+e*O+g*D;this.n12=c*C+d*G+e*I+g*t;this.n13=c*K+d*w+e*M+g*B;this.n14=c*y+d*A+e*H+g*q;this.n21=f*v+h*F+k*O+l*D;this.n22=f*C+h*G+k*I+l*t;this.n23=f*K+h*w+k*M+l*B;this.n24=f*y+h*A+k*H+l*q;this.n31=i*v+j*F+n*O+m*D;this.n32=i*C+j*G+n*I+m*t;this.n33=i*K+j*w+n*M+m*B;this.n34=i*y+j*A+n*H+m*q;this.n41=o*v+p*F+r*O+s*D;this.n42=o*C+p*G+r*I+s*t;this.n43=o*K+p*
w+r*M+s*B;this.n44=o*y+p*A+r*H+s*q;return this},multiplySelf:function(a){return this.multiply(this,a)},multiplyToArray:function(a,b,c){this.multiply(a,b);c[0]=this.n11;c[1]=this.n21;c[2]=this.n31;c[3]=this.n41;c[4]=this.n12;c[5]=this.n22;c[6]=this.n32;c[7]=this.n42;c[8]=this.n13;c[9]=this.n23;c[10]=this.n33;c[11]=this.n43;c[12]=this.n14;c[13]=this.n24;c[14]=this.n34;c[15]=this.n44;return this},multiplyScalar:function(a){this.n11*=a;this.n12*=a;this.n13*=a;this.n14*=a;this.n21*=a;this.n22*=a;this.n23*=
a;this.n24*=a;this.n31*=a;this.n32*=a;this.n33*=a;this.n34*=a;this.n41*=a;this.n42*=a;this.n43*=a;this.n44*=a;return this},multiplyVector3:function(a){var b=a.x,c=a.y,d=a.z,e=1/(this.n41*b+this.n42*c+this.n43*d+this.n44);a.x=(this.n11*b+this.n12*c+this.n13*d+this.n14)*e;a.y=(this.n21*b+this.n22*c+this.n23*d+this.n24)*e;a.z=(this.n31*b+this.n32*c+this.n33*d+this.n34)*e;return a},multiplyVector4:function(a){var b=a.x,c=a.y,d=a.z,e=a.w;a.x=this.n11*b+this.n12*c+this.n13*d+this.n14*e;a.y=this.n21*b+this.n22*
c+this.n23*d+this.n24*e;a.z=this.n31*b+this.n32*c+this.n33*d+this.n34*e;a.w=this.n41*b+this.n42*c+this.n43*d+this.n44*e;return a},rotateAxis:function(a){var b=a.x,c=a.y,d=a.z;a.x=b*this.n11+c*this.n12+d*this.n13;a.y=b*this.n21+c*this.n22+d*this.n23;a.z=b*this.n31+c*this.n32+d*this.n33;a.normalize();return a},crossVector:function(a){var b=new THREE.Vector4;b.x=this.n11*a.x+this.n12*a.y+this.n13*a.z+this.n14*a.w;b.y=this.n21*a.x+this.n22*a.y+this.n23*a.z+this.n24*a.w;b.z=this.n31*a.x+this.n32*a.y+this.n33*
a.z+this.n34*a.w;b.w=a.w?this.n41*a.x+this.n42*a.y+this.n43*a.z+this.n44*a.w:1;return b},determinant:function(){var a=this.n11,b=this.n12,c=this.n13,d=this.n14,e=this.n21,g=this.n22,f=this.n23,h=this.n24,k=this.n31,l=this.n32,i=this.n33,j=this.n34,n=this.n41,m=this.n42,o=this.n43,p=this.n44;return d*f*l*n-c*h*l*n-d*g*i*n+b*h*i*n+c*g*j*n-b*f*j*n-d*f*k*m+c*h*k*m+d*e*i*m-a*h*i*m-c*e*j*m+a*f*j*m+d*g*k*o-b*h*k*o-d*e*l*o+a*h*l*o+b*e*j*o-a*g*j*o-c*g*k*p+b*f*k*p+c*e*l*p-a*f*l*p-b*e*i*p+a*g*i*p},transpose:function(){var a;
a=this.n21;this.n21=this.n12;this.n12=a;a=this.n31;this.n31=this.n13;this.n13=a;a=this.n32;this.n32=this.n23;this.n23=a;a=this.n41;this.n41=this.n14;this.n14=a;a=this.n42;this.n42=this.n24;this.n24=a;a=this.n43;this.n43=this.n34;this.n43=a;return this},clone:function(){var a=new THREE.Matrix4;a.n11=this.n11;a.n12=this.n12;a.n13=this.n13;a.n14=this.n14;a.n21=this.n21;a.n22=this.n22;a.n23=this.n23;a.n24=this.n24;a.n31=this.n31;a.n32=this.n32;a.n33=this.n33;a.n34=this.n34;a.n41=this.n41;a.n42=this.n42;
a.n43=this.n43;a.n44=this.n44;return a},flatten:function(){this.flat[0]=this.n11;this.flat[1]=this.n21;this.flat[2]=this.n31;this.flat[3]=this.n41;this.flat[4]=this.n12;this.flat[5]=this.n22;this.flat[6]=this.n32;this.flat[7]=this.n42;this.flat[8]=this.n13;this.flat[9]=this.n23;this.flat[10]=this.n33;this.flat[11]=this.n43;this.flat[12]=this.n14;this.flat[13]=this.n24;this.flat[14]=this.n34;this.flat[15]=this.n44;return this.flat},flattenToArray:function(a){a[0]=this.n11;a[1]=this.n21;a[2]=this.n31;
a[3]=this.n41;a[4]=this.n12;a[5]=this.n22;a[6]=this.n32;a[7]=this.n42;a[8]=this.n13;a[9]=this.n23;a[10]=this.n33;a[11]=this.n43;a[12]=this.n14;a[13]=this.n24;a[14]=this.n34;a[15]=this.n44;return a},flattenToArrayOffset:function(a,b){a[b]=this.n11;a[b+1]=this.n21;a[b+2]=this.n31;a[b+3]=this.n41;a[b+4]=this.n12;a[b+5]=this.n22;a[b+6]=this.n32;a[b+7]=this.n42;a[b+8]=this.n13;a[b+9]=this.n23;a[b+10]=this.n33;a[b+11]=this.n43;a[b+12]=this.n14;a[b+13]=this.n24;a[b+14]=this.n34;a[b+15]=this.n44;return a},
setTranslation:function(a,b,c){this.set(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1);return this},setScale:function(a,b,c){this.set(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1);return this},setRotationX:function(a){var b=Math.cos(a),a=Math.sin(a);this.set(1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1);return this},setRotationY:function(a){var b=Math.cos(a),a=Math.sin(a);this.set(b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1);return this},setRotationZ:function(a){var b=Math.cos(a),a=Math.sin(a);this.set(b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1);return this},
setRotationAxis:function(a,b){var c=Math.cos(b),d=Math.sin(b),e=1-c,g=a.x,f=a.y,h=a.z,k=e*g,l=e*f;this.set(k*g+c,k*f-d*h,k*h+d*f,0,k*f+d*h,l*f+c,l*h-d*g,0,k*h-d*f,l*h+d*g,e*h*h+c,0,0,0,0,1);return this},setPosition:function(a){this.n14=a.x;this.n24=a.y;this.n34=a.z;return this},getPosition:function(){return THREE.Matrix4.__v1.set(this.n14,this.n24,this.n34)},getColumnX:function(){return THREE.Matrix4.__v1.set(this.n11,this.n21,this.n31)},getColumnY:function(){return THREE.Matrix4.__v1.set(this.n12,
this.n22,this.n32)},getColumnZ:function(){return THREE.Matrix4.__v1.set(this.n13,this.n23,this.n33)},getInverse:function(a){var b=a.n11,c=a.n12,d=a.n13,e=a.n14,g=a.n21,f=a.n22,h=a.n23,k=a.n24,l=a.n31,i=a.n32,j=a.n33,n=a.n34,m=a.n41,o=a.n42,p=a.n43,r=a.n44;this.n11=h*n*o-k*j*o+k*i*p-f*n*p-h*i*r+f*j*r;this.n12=e*j*o-d*n*o-e*i*p+c*n*p+d*i*r-c*j*r;this.n13=d*k*o-e*h*o+e*f*p-c*k*p-d*f*r+c*h*r;this.n14=e*h*i-d*k*i-e*f*j+c*k*j+d*f*n-c*h*n;this.n21=k*j*m-h*n*m-k*l*p+g*n*p+h*l*r-g*j*r;this.n22=d*n*m-e*j*m+
e*l*p-b*n*p-d*l*r+b*j*r;this.n23=e*h*m-d*k*m-e*g*p+b*k*p+d*g*r-b*h*r;this.n24=d*k*l-e*h*l+e*g*j-b*k*j-d*g*n+b*h*n;this.n31=f*n*m-k*i*m+k*l*o-g*n*o-f*l*r+g*i*r;this.n32=e*i*m-c*n*m-e*l*o+b*n*o+c*l*r-b*i*r;this.n33=d*k*m-e*f*m+e*g*o-b*k*o-c*g*r+b*f*r;this.n34=e*f*l-c*k*l-e*g*i+b*k*i+c*g*n-b*f*n;this.n41=h*i*m-f*j*m-h*l*o+g*j*o+f*l*p-g*i*p;this.n42=c*j*m-d*i*m+d*l*o-b*j*o-c*l*p+b*i*p;this.n43=d*f*m-c*h*m-d*g*o+b*h*o+c*g*p-b*f*p;this.n44=c*h*l-d*f*l+d*g*i-b*h*i-c*g*j+b*f*j;this.multiplyScalar(1/a.determinant());
return this},setRotationFromEuler:function(a,b){var c=a.x,d=a.y,e=a.z,g=Math.cos(c),c=Math.sin(c),f=Math.cos(d),d=Math.sin(d),h=Math.cos(e),e=Math.sin(e);switch(b){case "YXZ":var k=f*h,l=f*e,i=d*h,j=d*e;this.n11=k+j*c;this.n12=i*c-l;this.n13=g*d;this.n21=g*e;this.n22=g*h;this.n23=-c;this.n31=l*c-i;this.n32=j+k*c;this.n33=g*f;break;case "ZXY":k=f*h;l=f*e;i=d*h;j=d*e;this.n11=k-j*c;this.n12=-g*e;this.n13=i+l*c;this.n21=l+i*c;this.n22=g*h;this.n23=j-k*c;this.n31=-g*d;this.n32=c;this.n33=g*f;break;case "ZYX":k=
g*h;l=g*e;i=c*h;j=c*e;this.n11=f*h;this.n12=i*d-l;this.n13=k*d+j;this.n21=f*e;this.n22=j*d+k;this.n23=l*d-i;this.n31=-d;this.n32=c*f;this.n33=g*f;break;case "YZX":k=g*f;l=g*d;i=c*f;j=c*d;this.n11=f*h;this.n12=j-k*e;this.n13=i*e+l;this.n21=e;this.n22=g*h;this.n23=-c*h;this.n31=-d*h;this.n32=l*e+i;this.n33=k-j*e;break;case "XZY":k=g*f;l=g*d;i=c*f;j=c*d;this.n11=f*h;this.n12=-e;this.n13=d*h;this.n21=k*e+j;this.n22=g*h;this.n23=l*e-i;this.n31=i*e-l;this.n32=c*h;this.n33=j*e+k;break;default:k=g*h,l=g*
e,i=c*h,j=c*e,this.n11=f*h,this.n12=-f*e,this.n13=d,this.n21=l+i*d,this.n22=k-j*d,this.n23=-c*f,this.n31=j-k*d,this.n32=i+l*d,this.n33=g*f}return this},setRotationFromQuaternion:function(a){var b=a.x,c=a.y,d=a.z,e=a.w,g=b+b,f=c+c,h=d+d,a=b*g,k=b*f;b*=h;var l=c*f;c*=h;d*=h;g*=e;f*=e;e*=h;this.n11=1-(l+d);this.n12=k-e;this.n13=b+f;this.n21=k+e;this.n22=1-(a+d);this.n23=c-g;this.n31=b-f;this.n32=c+g;this.n33=1-(a+l);return this},scale:function(a){var b=a.x,c=a.y,a=a.z;this.n11*=b;this.n12*=c;this.n13*=
a;this.n21*=b;this.n22*=c;this.n23*=a;this.n31*=b;this.n32*=c;this.n33*=a;this.n41*=b;this.n42*=c;this.n43*=a;return this},compose:function(a,b,c){var d=THREE.Matrix4.__m1,e=THREE.Matrix4.__m2;d.identity();d.setRotationFromQuaternion(b);e.setScale(c.x,c.y,c.z);this.multiply(d,e);this.n14=a.x;this.n24=a.y;this.n34=a.z;return this},decompose:function(a,b,c){var d=THREE.Matrix4.__v1,e=THREE.Matrix4.__v2,g=THREE.Matrix4.__v3;d.set(this.n11,this.n21,this.n31);e.set(this.n12,this.n22,this.n32);g.set(this.n13,
this.n23,this.n33);a=a instanceof THREE.Vector3?a:new THREE.Vector3;b=b instanceof THREE.Quaternion?b:new THREE.Quaternion;c=c instanceof THREE.Vector3?c:new THREE.Vector3;c.x=d.length();c.y=e.length();c.z=g.length();a.x=this.n14;a.y=this.n24;a.z=this.n34;d=THREE.Matrix4.__m1;d.copy(this);d.n11/=c.x;d.n21/=c.x;d.n31/=c.x;d.n12/=c.y;d.n22/=c.y;d.n32/=c.y;d.n13/=c.z;d.n23/=c.z;d.n33/=c.z;b.setFromRotationMatrix(d);return[a,b,c]},extractPosition:function(a){this.n14=a.n14;this.n24=a.n24;this.n34=a.n34;
return this},extractRotation:function(a){var b=THREE.Matrix4.__v1,c=1/b.set(a.n11,a.n21,a.n31).length(),d=1/b.set(a.n12,a.n22,a.n32).length(),b=1/b.set(a.n13,a.n23,a.n33).length();this.n11=a.n11*c;this.n21=a.n21*c;this.n31=a.n31*c;this.n12=a.n12*d;this.n22=a.n22*d;this.n32=a.n32*d;this.n13=a.n13*b;this.n23=a.n23*b;this.n33=a.n33*b;return this}};
THREE.Matrix4.makeInvert3x3=function(a){var b=a.m33,c=b.m,d=a.n33*a.n22-a.n32*a.n23,e=-a.n33*a.n21+a.n31*a.n23,g=a.n32*a.n21-a.n31*a.n22,f=-a.n33*a.n12+a.n32*a.n13,h=a.n33*a.n11-a.n31*a.n13,k=-a.n32*a.n11+a.n31*a.n12,l=a.n23*a.n12-a.n22*a.n13,i=-a.n23*a.n11+a.n21*a.n13,j=a.n22*a.n11-a.n21*a.n12,a=a.n11*d+a.n21*f+a.n31*l;a===0&&console.error("THREE.Matrix4.makeInvert3x3: Matrix not invertible.");a=1/a;c[0]=a*d;c[1]=a*e;c[2]=a*g;c[3]=a*f;c[4]=a*h;c[5]=a*k;c[6]=a*l;c[7]=a*i;c[8]=a*j;return b};
THREE.Matrix4.makeFrustum=function(a,b,c,d,e,g){var f;f=new THREE.Matrix4;f.n11=2*e/(b-a);f.n12=0;f.n13=(b+a)/(b-a);f.n14=0;f.n21=0;f.n22=2*e/(d-c);f.n23=(d+c)/(d-c);f.n24=0;f.n31=0;f.n32=0;f.n33=-(g+e)/(g-e);f.n34=-2*g*e/(g-e);f.n41=0;f.n42=0;f.n43=-1;f.n44=0;return f};THREE.Matrix4.makePerspective=function(a,b,c,d){var e,a=c*Math.tan(a*Math.PI/360);e=-a;return THREE.Matrix4.makeFrustum(e*b,a*b,e,a,c,d)};
THREE.Matrix4.makeOrtho=function(a,b,c,d,e,g){var f,h,k,l;f=new THREE.Matrix4;h=b-a;k=c-d;l=g-e;f.n11=2/h;f.n12=0;f.n13=0;f.n14=-((b+a)/h);f.n21=0;f.n22=2/k;f.n23=0;f.n24=-((c+d)/k);f.n31=0;f.n32=0;f.n33=-2/l;f.n34=-((g+e)/l);f.n41=0;f.n42=0;f.n43=0;f.n44=1;return f};THREE.Matrix4.__v1=new THREE.Vector3;THREE.Matrix4.__v2=new THREE.Vector3;THREE.Matrix4.__v3=new THREE.Vector3;THREE.Matrix4.__m1=new THREE.Matrix4;THREE.Matrix4.__m2=new THREE.Matrix4;
THREE.Object3D=function(){this.name="";this.id=THREE.Object3DCount++;this.parent=void 0;this.children=[];this.up=new THREE.Vector3(0,1,0);this.position=new THREE.Vector3;this.rotation=new THREE.Vector3;this.eulerOrder="XYZ";this.scale=new THREE.Vector3(1,1,1);this.flipSided=this.doubleSided=this.dynamic=!1;this.renderDepth=null;this.rotationAutoUpdate=!0;this.matrix=new THREE.Matrix4;this.matrixWorld=new THREE.Matrix4;this.matrixRotationWorld=new THREE.Matrix4;this.matrixWorldNeedsUpdate=this.matrixAutoUpdate=
!0;this.quaternion=new THREE.Quaternion;this.useQuaternion=!1;this.boundRadius=0;this.boundRadiusScale=1;this.visible=!0;this.receiveShadow=this.castShadow=!1;this.frustumCulled=!0;this._vector=new THREE.Vector3};
THREE.Object3D.prototype={constructor:THREE.Object3D,translate:function(a,b){this.matrix.rotateAxis(b);this.position.addSelf(b.multiplyScalar(a))},translateX:function(a){this.translate(a,this._vector.set(1,0,0))},translateY:function(a){this.translate(a,this._vector.set(0,1,0))},translateZ:function(a){this.translate(a,this._vector.set(0,0,1))},lookAt:function(a){this.matrix.lookAt(a,this.position,this.up);this.rotationAutoUpdate&&this.rotation.setRotationFromMatrix(this.matrix)},add:function(a){if(this.children.indexOf(a)===
-1)a.parent!==void 0&&a.parent.remove(a),a.parent=this,this.children.push(a)},remove:function(a){var b=this.children.indexOf(a);if(b!==-1)a.parent=void 0,this.children.splice(b,1)},getChildByName:function(a,b){var c,d,e;c=0;for(d=this.children.length;c<d;c++){e=this.children[c];if(e.name===a)return e;if(b&&(e=e.getChildByName(a,b),e!==void 0))return e}},updateMatrix:function(){this.matrix.setPosition(this.position);this.useQuaternion?this.matrix.setRotationFromQuaternion(this.quaternion):this.matrix.setRotationFromEuler(this.rotation,
this.eulerOrder);if(this.scale.x!==1||this.scale.y!==1||this.scale.z!==1)this.matrix.scale(this.scale),this.boundRadiusScale=Math.max(this.scale.x,Math.max(this.scale.y,this.scale.z));this.matrixWorldNeedsUpdate=!0},updateMatrixWorld:function(a){this.matrixAutoUpdate&&this.updateMatrix();if(this.matrixWorldNeedsUpdate||a)this.parent?this.matrixWorld.multiply(this.parent.matrixWorld,this.matrix):this.matrixWorld.copy(this.matrix),this.matrixWorldNeedsUpdate=!1,a=!0;for(var b=0,c=this.children.length;b<
c;b++)this.children[b].updateMatrixWorld(a)}};THREE.Object3DCount=0;
THREE.Projector=function(){function a(){var a=g[e]=g[e]||new THREE.RenderableVertex;e++;return a}function b(a,b){return b.z-a.z}function c(a,b){var c=0,d=1,f=a.z+a.w,e=b.z+b.w,g=-a.z+a.w,h=-b.z+b.w;return f>=0&&e>=0&&g>=0&&h>=0?!0:f<0&&e<0||g<0&&h<0?!1:(f<0?c=Math.max(c,f/(f-e)):e<0&&(d=Math.min(d,f/(f-e))),g<0?c=Math.max(c,g/(g-h)):h<0&&(d=Math.min(d,g/(g-h))),d<c?!1:(a.lerpSelf(b,c),b.lerpSelf(a,1-d),!0))}var d,e,g=[],f,h,k=[],l,i=[],j,n,m=[],o,p,r=[],s={objects:[],lines:[],sprites:[],lights:[],
elements:[]};new THREE.Vector3;var v=new THREE.Vector4,C=new THREE.Matrix4,K=new THREE.Matrix4,y=[new THREE.Vector4,new THREE.Vector4,new THREE.Vector4,new THREE.Vector4,new THREE.Vector4,new THREE.Vector4],F=new THREE.Vector4,G=new THREE.Vector4;this.computeFrustum=function(a){y[0].set(a.n41-a.n11,a.n42-a.n12,a.n43-a.n13,a.n44-a.n14);y[1].set(a.n41+a.n11,a.n42+a.n12,a.n43+a.n13,a.n44+a.n14);y[2].set(a.n41+a.n21,a.n42+a.n22,a.n43+a.n23,a.n44+a.n24);y[3].set(a.n41-a.n21,a.n42-a.n22,a.n43-a.n23,a.n44-
a.n24);y[4].set(a.n41-a.n31,a.n42-a.n32,a.n43-a.n33,a.n44-a.n34);y[5].set(a.n41+a.n31,a.n42+a.n32,a.n43+a.n33,a.n44+a.n34);for(a=0;a<6;a++){var b=y[a];b.divideScalar(Math.sqrt(b.x*b.x+b.y*b.y+b.z*b.z))}};this.projectVector=function(a,b){b.matrixWorldInverse.getInverse(b.matrixWorld);C.multiply(b.projectionMatrix,b.matrixWorldInverse);C.multiplyVector3(a);return a};this.unprojectVector=function(a,b){b.projectionMatrixInverse.getInverse(b.projectionMatrix);C.multiply(b.matrixWorld,b.projectionMatrixInverse);
C.multiplyVector3(a);return a};this.pickingRay=function(a,b){var c;a.z=-1;c=new THREE.Vector3(a.x,a.y,1);this.unprojectVector(a,b);this.unprojectVector(c,b);c.subSelf(a).normalize();return new THREE.Ray(a,c)};this.projectGraph=function(a){s.objects.length=0;s.lines.length=0;s.sprites.length=0;s.lights.length=0;var b=function(a){if(a.visible!=!1){var c;if(c=a instanceof THREE.Mesh)if(!(c=a.frustumCulled==!1))a:{for(var d=a.matrixWorld,f=-a.geometry.boundingSphere.radius*Math.max(a.scale.x,Math.max(a.scale.y,
a.scale.z)),e=0;e<6;e++)if(c=y[e].x*d.n14+y[e].y*d.n24+y[e].z*d.n34+y[e].w,c<=f){c=!1;break a}c=!0}c?s.objects.push(a):a instanceof THREE.Line?s.lines.push(a):a instanceof THREE.Sprite||a instanceof THREE.Particle?s.sprites.push(a):a instanceof THREE.Light&&s.lights.push(a);c=0;for(d=a.children.length;c<d;c++)b(a.children[c])}};b(a);return s};this.projectScene=function(w,A,y){var I=A.near,M=A.far,H,D,t,B,q,z,x,E,u,J,L,P,S,Q,R,N;p=n=l=h=0;s.elements.length=0;A.parent==null&&(console.warn("Camera is not on the Scene. Adding it..."),
w.add(A));w.updateMatrixWorld();A.matrixWorldInverse.getInverse(A.matrixWorld);C.multiply(A.projectionMatrix,A.matrixWorldInverse);this.computeFrustum(C);s=this.projectGraph(w);w=0;for(H=s.objects.length;w<H;w++)if(u=s.objects[w],J=u.matrixWorld,P=u.material,e=0,u instanceof THREE.Mesh){L=u.geometry;S=u.geometry.materials;B=L.vertices;Q=L.faces;R=L.faceVertexUvs;L=u.matrixRotationWorld.extractRotation(J);D=0;for(t=B.length;D<t;D++)d=a(),d.positionWorld.copy(B[D].position),J.multiplyVector3(d.positionWorld),
d.positionScreen.copy(d.positionWorld),C.multiplyVector4(d.positionScreen),d.positionScreen.x/=d.positionScreen.w,d.positionScreen.y/=d.positionScreen.w,d.visible=d.positionScreen.z>I&&d.positionScreen.z<M;B=0;for(D=Q.length;B<D;B++){t=Q[B];if(t instanceof THREE.Face3)if(q=g[t.a],z=g[t.b],x=g[t.c],q.visible&&z.visible&&x.visible&&(u.doubleSided||u.flipSided!=(x.positionScreen.x-q.positionScreen.x)*(z.positionScreen.y-q.positionScreen.y)-(x.positionScreen.y-q.positionScreen.y)*(z.positionScreen.x-
q.positionScreen.x)<0))E=k[h]=k[h]||new THREE.RenderableFace3,h++,f=E,f.v1.copy(q),f.v2.copy(z),f.v3.copy(x);else continue;else if(t instanceof THREE.Face4)if(q=g[t.a],z=g[t.b],x=g[t.c],E=g[t.d],q.visible&&z.visible&&x.visible&&E.visible&&(u.doubleSided||u.flipSided!=((E.positionScreen.x-q.positionScreen.x)*(z.positionScreen.y-q.positionScreen.y)-(E.positionScreen.y-q.positionScreen.y)*(z.positionScreen.x-q.positionScreen.x)<0||(z.positionScreen.x-x.positionScreen.x)*(E.positionScreen.y-x.positionScreen.y)-
(z.positionScreen.y-x.positionScreen.y)*(E.positionScreen.x-x.positionScreen.x)<0)))N=i[l]=i[l]||new THREE.RenderableFace4,l++,f=N,f.v1.copy(q),f.v2.copy(z),f.v3.copy(x),f.v4.copy(E);else continue;f.normalWorld.copy(t.normal);L.multiplyVector3(f.normalWorld);f.centroidWorld.copy(t.centroid);J.multiplyVector3(f.centroidWorld);f.centroidScreen.copy(f.centroidWorld);C.multiplyVector3(f.centroidScreen);x=t.vertexNormals;q=0;for(z=x.length;q<z;q++)E=f.vertexNormalsWorld[q],E.copy(x[q]),L.multiplyVector3(E);
q=0;for(z=R.length;q<z;q++)if(N=R[q][B]){x=0;for(E=N.length;x<E;x++)f.uvs[q][x]=N[x]}f.material=P;f.faceMaterial=t.materialIndex!==null?S[t.materialIndex]:null;f.z=f.centroidScreen.z;s.elements.push(f)}}w=0;for(H=s.lines.length;w<H;w++)if(u=s.lines[w],J=u.matrixWorld,P=u.material,e=0,u instanceof THREE.Line){K.multiply(C,J);B=u.geometry.vertices;q=a();q.positionScreen.copy(B[0].position);K.multiplyVector4(q.positionScreen);D=1;for(t=B.length;D<t;D++)if(q=a(),q.positionScreen.copy(B[D].position),K.multiplyVector4(q.positionScreen),
z=g[e-2],F.copy(q.positionScreen),G.copy(z.positionScreen),c(F,G))F.multiplyScalar(1/F.w),G.multiplyScalar(1/G.w),I=m[n]=m[n]||new THREE.RenderableLine,n++,j=I,j.v1.positionScreen.copy(F),j.v2.positionScreen.copy(G),j.z=Math.max(F.z,G.z),j.material=P,s.elements.push(j)}w=0;for(H=s.sprites.length;w<H;w++)if(u=s.sprites[w],J=u.matrixWorld,u instanceof THREE.Particle&&(v.set(J.n14,J.n24,J.n34,1),C.multiplyVector4(v),v.z/=v.w,v.z>0&&v.z<1))I=r[p]=r[p]||new THREE.RenderableParticle,p++,o=I,o.x=v.x/v.w,
o.y=v.y/v.w,o.z=v.z,o.rotation=u.rotation.z,o.scale.x=u.scale.x*Math.abs(o.x-(v.x+A.projectionMatrix.n11)/(v.w+A.projectionMatrix.n14)),o.scale.y=u.scale.y*Math.abs(o.y-(v.y+A.projectionMatrix.n22)/(v.w+A.projectionMatrix.n24)),o.material=u.material,s.elements.push(o);y&&s.elements.sort(b);return s}};THREE.Quaternion=function(a,b,c,d){this.set(a||0,b||0,c||0,d!==void 0?d:1)};
THREE.Quaternion.prototype={constructor:THREE.Quaternion,set:function(a,b,c,d){this.x=a;this.y=b;this.z=c;this.w=d;return this},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;this.w=a.w;return this},setFromEuler:function(a){var b=Math.PI/360,c=a.x*b,d=a.y*b,e=a.z*b,a=Math.cos(d),d=Math.sin(d),b=Math.cos(-e),e=Math.sin(-e),g=Math.cos(c),c=Math.sin(c),f=a*b,h=d*e;this.w=f*g-h*c;this.x=f*c+h*g;this.y=d*b*g+a*e*c;this.z=a*e*g-d*b*c;return this},setFromAxisAngle:function(a,b){var c=b/2,d=Math.sin(c);
this.x=a.x*d;this.y=a.y*d;this.z=a.z*d;this.w=Math.cos(c);return this},setFromRotationMatrix:function(a){var b=Math.pow(a.determinant(),1/3);this.w=Math.sqrt(Math.max(0,b+a.n11+a.n22+a.n33))/2;this.x=Math.sqrt(Math.max(0,b+a.n11-a.n22-a.n33))/2;this.y=Math.sqrt(Math.max(0,b-a.n11+a.n22-a.n33))/2;this.z=Math.sqrt(Math.max(0,b-a.n11-a.n22+a.n33))/2;this.x=a.n32-a.n23<0?-Math.abs(this.x):Math.abs(this.x);this.y=a.n13-a.n31<0?-Math.abs(this.y):Math.abs(this.y);this.z=a.n21-a.n12<0?-Math.abs(this.z):Math.abs(this.z);
this.normalize();return this},calculateW:function(){this.w=-Math.sqrt(Math.abs(1-this.x*this.x-this.y*this.y-this.z*this.z));return this},inverse:function(){this.x*=-1;this.y*=-1;this.z*=-1;return this},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},normalize:function(){var a=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);a===0?this.w=this.z=this.y=this.x=0:(a=1/a,this.x*=a,this.y*=a,this.z*=a,this.w*=a);return this},multiplySelf:function(a){var b=
this.x,c=this.y,d=this.z,e=this.w,g=a.x,f=a.y,h=a.z,a=a.w;this.x=b*a+e*g+c*h-d*f;this.y=c*a+e*f+d*g-b*h;this.z=d*a+e*h+b*f-c*g;this.w=e*a-b*g-c*f-d*h;return this},multiply:function(a,b){this.x=a.x*b.w+a.y*b.z-a.z*b.y+a.w*b.x;this.y=-a.x*b.z+a.y*b.w+a.z*b.x+a.w*b.y;this.z=a.x*b.y-a.y*b.x+a.z*b.w+a.w*b.z;this.w=-a.x*b.x-a.y*b.y-a.z*b.z+a.w*b.w;return this},multiplyVector3:function(a,b){b||(b=a);var c=a.x,d=a.y,e=a.z,g=this.x,f=this.y,h=this.z,k=this.w,l=k*c+f*e-h*d,i=k*d+h*c-g*e,j=k*e+g*d-f*c,c=-g*
c-f*d-h*e;b.x=l*k+c*-g+i*-h-j*-f;b.y=i*k+c*-f+j*-g-l*-h;b.z=j*k+c*-h+l*-f-i*-g;return b}};
THREE.Quaternion.slerp=function(a,b,c,d){var e=a.w*b.w+a.x*b.x+a.y*b.y+a.z*b.z;e<0?(c.w=-b.w,c.x=-b.x,c.y=-b.y,c.z=-b.z,e=-e):c.copy(b);if(Math.abs(e)>=1)return c.w=a.w,c.x=a.x,c.y=a.y,c.z=a.z,c;var g=Math.acos(e),e=Math.sqrt(1-e*e);if(Math.abs(e)<0.001)return c.w=0.5*(a.w+b.w),c.x=0.5*(a.x+b.x),c.y=0.5*(a.y+b.y),c.z=0.5*(a.z+b.z),c;b=Math.sin((1-d)*g)/e;d=Math.sin(d*g)/e;c.w=a.w*b+c.w*d;c.x=a.x*b+c.x*d;c.y=a.y*b+c.y*d;c.z=a.z*b+c.z*d;return c};THREE.Vertex=function(a){this.position=a||new THREE.Vector3};
THREE.Face3=function(a,b,c,d,e,g){this.a=a;this.b=b;this.c=c;this.normal=d instanceof THREE.Vector3?d:new THREE.Vector3;this.vertexNormals=d instanceof Array?d:[];this.color=e instanceof THREE.Color?e:new THREE.Color;this.vertexColors=e instanceof Array?e:[];this.vertexTangents=[];this.materialIndex=g;this.centroid=new THREE.Vector3};
THREE.Face4=function(a,b,c,d,e,g,f){this.a=a;this.b=b;this.c=c;this.d=d;this.normal=e instanceof THREE.Vector3?e:new THREE.Vector3;this.vertexNormals=e instanceof Array?e:[];this.color=g instanceof THREE.Color?g:new THREE.Color;this.vertexColors=g instanceof Array?g:[];this.vertexTangents=[];this.materialIndex=f;this.centroid=new THREE.Vector3};THREE.UV=function(a,b){this.u=a||0;this.v=b||0};
THREE.UV.prototype={constructor:THREE.UV,set:function(a,b){this.u=a;this.v=b;return this},copy:function(a){this.u=a.u;this.v=a.v;return this},clone:function(){return new THREE.UV(this.u,this.v)}};
THREE.Camera=function(){if(arguments.length)return console.warn("DEPRECATED: Camera() is now PerspectiveCamera() or OrthographicCamera()."),new THREE.PerspectiveCamera(arguments[0],arguments[1],arguments[2],arguments[3]);THREE.Object3D.call(this);this.matrixWorldInverse=new THREE.Matrix4;this.projectionMatrix=new THREE.Matrix4;this.projectionMatrixInverse=new THREE.Matrix4};THREE.Camera.prototype=new THREE.Object3D;THREE.Camera.prototype.constructor=THREE.Camera;
THREE.Camera.prototype.lookAt=function(a){this.matrix.lookAt(this.position,a,this.up);this.rotationAutoUpdate&&this.rotation.setRotationFromMatrix(this.matrix)};THREE.OrthographicCamera=function(a,b,c,d,e,g){THREE.Camera.call(this);this.left=a;this.right=b;this.top=c;this.bottom=d;this.near=e!==void 0?e:0.1;this.far=g!==void 0?g:2E3;this.updateProjectionMatrix()};THREE.OrthographicCamera.prototype=new THREE.Camera;THREE.OrthographicCamera.prototype.constructor=THREE.OrthographicCamera;
THREE.OrthographicCamera.prototype.updateProjectionMatrix=function(){this.projectionMatrix=THREE.Matrix4.makeOrtho(this.left,this.right,this.top,this.bottom,this.near,this.far)};THREE.PerspectiveCamera=function(a,b,c,d){THREE.Camera.call(this);this.fov=a!==void 0?a:50;this.aspect=b!==void 0?b:1;this.near=c!==void 0?c:0.1;this.far=d!==void 0?d:2E3;this.updateProjectionMatrix()};THREE.PerspectiveCamera.prototype=new THREE.Camera;THREE.PerspectiveCamera.prototype.constructor=THREE.PerspectiveCamera;
THREE.PerspectiveCamera.prototype.setLens=function(a,b){this.fov=2*Math.atan((b!==void 0?b:43.25)/(a*2));this.fov*=180/Math.PI;this.updateProjectionMatrix()};THREE.PerspectiveCamera.prototype.setViewOffset=function(a,b,c,d,e,g){this.fullWidth=a;this.fullHeight=b;this.x=c;this.y=d;this.width=e;this.height=g;this.updateProjectionMatrix()};
THREE.PerspectiveCamera.prototype.updateProjectionMatrix=function(){if(this.fullWidth){var a=this.fullWidth/this.fullHeight,b=Math.tan(this.fov*Math.PI/360)*this.near,c=-b,d=a*c,a=Math.abs(a*b-d),c=Math.abs(b-c);this.projectionMatrix=THREE.Matrix4.makeFrustum(d+this.x*a/this.fullWidth,d+(this.x+this.width)*a/this.fullWidth,b-(this.y+this.height)*c/this.fullHeight,b-this.y*c/this.fullHeight,this.near,this.far)}else this.projectionMatrix=THREE.Matrix4.makePerspective(this.fov,this.aspect,this.near,
this.far)};THREE.ParticleDOMMaterial=function(a){THREE.Material.call(this);this.domElement=a};THREE.Particle=function(a){THREE.Object3D.call(this);this.material=a};THREE.Particle.prototype=new THREE.Object3D;THREE.Particle.prototype.constructor=THREE.Particle;THREE.Bone=function(a){THREE.Object3D.call(this);this.skin=a;this.skinMatrix=new THREE.Matrix4;this.hasNoneBoneChildren=!1};THREE.Bone.prototype=new THREE.Object3D;THREE.Bone.prototype.constructor=THREE.Bone;THREE.Bone.prototype.supr=THREE.Object3D.prototype;
THREE.Bone.prototype.update=function(a,b,c){this.matrixAutoUpdate&&(b|=this.updateMatrix());if(b||this.matrixWorldNeedsUpdate)a?this.skinMatrix.multiply(a,this.matrix):this.skinMatrix.copy(this.matrix),this.matrixWorldNeedsUpdate=!1,b=!0;var d,e=this.children.length;if(this.hasNoneBoneChildren){this.matrixWorld.multiply(this.skin.matrixWorld,this.skinMatrix);for(d=0;d<e;d++)a=this.children[d],a instanceof THREE.Bone?a.update(this.skinMatrix,b,c):a.update(this.matrixWorld,!0,c)}else for(d=0;d<e;d++)this.children[d].update(this.skinMatrix,
b,c)};THREE.Bone.prototype.add=function(a){if(this.children.indexOf(a)===-1&&(a.parent!==void 0&&a.parent.removeChild(a),a.parent=this,this.children.push(a),!(a instanceof THREE.Bone)))this.hasNoneBoneChildren=!0};THREE.Scene=function(){THREE.Object3D.call(this);this.overrideMaterial=this.fog=null;this.matrixAutoUpdate=!1};THREE.Scene.prototype=new THREE.Object3D;THREE.Scene.prototype.constructor=THREE.Scene;
THREE.DOMRenderer=function(){THREE.Renderer.call(this);var a=null,b=new THREE.Projector,c,d,e,g;this.domElement=document.createElement("div");this.setSize=function(a,b){c=a;d=b;e=c/2;g=d/2};this.render=function(c,d){var k,l,i,j,n,m,o,p;a=b.projectScene(c,d);k=0;for(l=a.length;k<l;k++)if(n=a[k],n instanceof THREE.RenderableParticle){o=n.x*e+e;p=n.y*g+g;i=0;for(j=n.material.length;i<j;i++)if(m=n.material[i],m instanceof THREE.ParticleDOMMaterial)m=m.domElement,m.style.left=o+"px",m.style.top=p+"px"}}};
THREE.RenderableParticle=function(){this.rotation=this.z=this.y=this.x=null;this.scale=new THREE.Vector2;this.material=null};

// ThreeDOM.js r41/ROME - http://github.com/mrdoob/three.js
var THREE=THREE||{};if(!window.Int32Array)window.Int32Array=Array,window.Float32Array=Array;THREE.Color=function(a){this.setHex(a)};
THREE.Color.prototype={copy:function(a){this.r=a.r;this.g=a.g;this.b=a.b;this.hex=a.hex},setHex:function(a){this.hex=~~a&16777215;this.updateRGB()},setRGB:function(a,b,c){this.r=a;this.g=b;this.b=c;this.updateHex()},setHSV:function(a,b,c){var d,e,g,f,h,j;if(c==0)d=e=g=0;else switch(f=Math.floor(a*6),h=a*6-f,a=c*(1-b),j=c*(1-b*h),b=c*(1-b*(1-h)),f){case 1:d=j;e=c;g=a;break;case 2:d=a;e=c;g=b;break;case 3:d=a;e=j;g=c;break;case 4:d=b;e=a;g=c;break;case 5:d=c;e=a;g=j;break;case 6:case 0:d=c,e=b,g=a}this.setRGB(d,
e,g)},updateHex:function(){this.hex=~~(this.r*255)<<16^~~(this.g*255)<<8^~~(this.b*255)},updateRGB:function(){this.r=(this.hex>>16&255)/255;this.g=(this.hex>>8&255)/255;this.b=(this.hex&255)/255},clone:function(){return new THREE.Color(this.hex)}};THREE.Vector2=function(a,b){this.set(a||0,b||0)};
THREE.Vector2.prototype={set:function(a,b){this.x=a;this.y=b;return this},copy:function(a){this.x=a.x;this.y=a.y;return this},clone:function(){return new THREE.Vector2(this.x,this.y)},add:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;return this},addSelf:function(a){this.x+=a.x;this.y+=a.y;return this},sub:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;return this},subSelf:function(a){this.x-=a.x;this.y-=a.y;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;return this},divideScalar:function(a){a?
(this.x/=a,this.y/=a):this.set(0,0);return this},negate:function(){return this.multiplyScalar(-1)},dot:function(a){return this.x*a.x+this.y*a.y},lengthSq:function(){return this.x*this.x+this.y*this.y},length:function(){return Math.sqrt(this.lengthSq())},normalize:function(){return this.divideScalar(this.length())},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){var b=this.x-a.x,a=this.y-a.y;return b*b+a*a},setLength:function(a){return this.normalize().multiplyScalar(a)},
unit:function(){return this.normalize()},equals:function(a){return a.x==this.x&&a.y==this.y}};THREE.Vector3=function(a,b,c){this.set(a||0,b||0,c||0)};
THREE.Vector3.prototype={set:function(a,b,c){this.x=a;this.y=b;this.z=c;return this},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;return this},clone:function(){return new THREE.Vector3(this.x,this.y,this.z)},add:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;return this},addSelf:function(a){this.x+=a.x;this.y+=a.y;this.z+=a.z;return this},addScalar:function(a){this.x+=a;this.y+=a;this.z+=a;return this},sub:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;return this},subSelf:function(a){this.x-=
a.x;this.y-=a.y;this.z-=a.z;return this},multiply:function(a,b){this.x=a.x*b.x;this.y=a.y*b.y;this.z=a.z*b.z;return this},multiplySelf:function(a){this.x*=a.x;this.y*=a.y;this.z*=a.y;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=a;return this},divideSelf:function(a){return this.divide(this,a)},divideScalar:function(a){a?(this.x/=a,this.y/=a,this.z/=a):this.set(0,0,0);return this},negate:function(){return this.multiplyScalar(-1)},dot:function(a){return this.x*a.x+this.y*a.y+this.z*
a.z},lengthSq:function(){return this.x*this.x+this.y*this.y+this.z*this.z},length:function(){return Math.sqrt(this.lengthSq())},lengthManhattan:function(){return this.x+this.y+this.z},normalize:function(){return this.divideScalar(this.length())},setLength:function(a){return this.normalize().multiplyScalar(a)},cross:function(a,b){this.x=a.y*b.z-a.z*b.y;this.y=a.z*b.x-a.x*b.z;this.z=a.x*b.y-a.y*b.x;return this},crossSelf:function(a){return this.set(this.y*a.z-this.z*a.y,this.z*a.x-this.x*a.z,this.x*
a.y-this.y*a.x)},distanceTo:function(a){return Math.sqrt(this.distanceToSquared(a))},distanceToSquared:function(a){return(new THREE.Vector3).sub(this,a).lengthSq()},setPositionFromMatrix:function(a){this.x=a.n14;this.y=a.n24;this.z=a.n34},setRotationFromMatrix:function(a){var b=Math.cos(this.y);this.y=Math.asin(a.n13);Math.abs(b)>1.0E-5?(this.x=Math.atan2(-a.n23/b,a.n33/b),this.z=Math.atan2(-a.n12/b,a.n11/b)):(this.x=0,this.z=Math.atan2(a.n21,a.n22))},isZero:function(){return this.lengthSq()<1.0E-4}};
THREE.Vector4=function(a,b,c,d){this.set(a||0,b||0,c||0,d||1)};
THREE.Vector4.prototype={set:function(a,b,c,d){this.x=a;this.y=b;this.z=c;this.w=d;return this},copy:function(a){return this.set(a.x,a.y,a.z,a.w||1)},clone:function(){return new THREE.Vector4(this.x,this.y,this.z,this.w)},add:function(a,b){this.x=a.x+b.x;this.y=a.y+b.y;this.z=a.z+b.z;this.w=a.w+b.w;return this},addSelf:function(a){this.x+=a.x;this.y+=a.y;this.z+=a.z;this.w+=a.w;return this},sub:function(a,b){this.x=a.x-b.x;this.y=a.y-b.y;this.z=a.z-b.z;this.w=a.w-b.w;return this},subSelf:function(a){this.x-=
a.x;this.y-=a.y;this.z-=a.z;this.w-=a.w;return this},multiplyScalar:function(a){this.x*=a;this.y*=a;this.z*=a;this.w*=a;return this},divideScalar:function(a){a?(this.x/=a,this.y/=a,this.z/=a,this.w/=a):this.set(0,0,0,1);return this},negate:function(){return this.multiplyScalar(-1)},dot:function(a){return this.x*a.x+this.y*a.y+this.z*a.z+this.w*a.w},lengthSq:function(){return this.dot(this)},length:function(){return Math.sqrt(this.lengthSq())},normalize:function(){return this.divideScalar(this.length())},
setLength:function(a){return this.normalize().multiplyScalar(a)},lerpSelf:function(a,b){this.x+=(a.x-this.x)*b;this.y+=(a.y-this.y)*b;this.z+=(a.z-this.z)*b;this.w+=(a.w-this.w)*b;return this}};THREE.Ray=function(a,b){this.origin=a||new THREE.Vector3;this.direction=b||new THREE.Vector3};
THREE.Ray.prototype={intersectScene:function(a){return this.intersectObjects(a.objects)},intersectObjects:function(a){var b,c,d=[];b=0;for(c=a.length;b<c;b++)d=d.concat(this.intersectObject(a[b]));d.sort(function(a,b){return a.distance-b.distance});return d},intersectObject:function(a){function b(a,b,c){var d,c=c.matrixWorld.getPosition();d=c.clone().subSelf(a).dot(b);a=a.clone().addSelf(b.clone().multiplyScalar(d));return c.distanceTo(a)}function c(a,b,c,d){var d=d.clone().subSelf(b),c=c.clone().subSelf(b),
e=a.clone().subSelf(b),a=d.dot(d),b=d.dot(c),d=d.dot(e),f=c.dot(c),c=c.dot(e),e=1/(a*f-b*b),f=(f*d-b*c)*e,a=(a*c-b*d)*e;return f>0&&a>0&&f+a<1}if(a instanceof THREE.Particle){var d=b(this.origin,this.direction,a);if(!d||d>a.scale.x)return[];return[{distance:d,point:a.position,face:null,object:a}]}else if(a instanceof THREE.Mesh){d=b(this.origin,this.direction,a);if(!d||d>a.geometry.boundingSphere.radius*Math.max(a.scale.x,Math.max(a.scale.y,a.scale.z)))return[];var e,g,f,h,j,i,k,l,m,n,p=a.geometry,
q=p.vertices,t=[],d=0;for(e=p.faces.length;d<e;d++)if(g=p.faces[d],m=this.origin.clone(),n=this.direction.clone(),i=a.matrixWorld,f=i.multiplyVector3(q[g.a].position.clone()),h=i.multiplyVector3(q[g.b].position.clone()),j=i.multiplyVector3(q[g.c].position.clone()),i=g instanceof THREE.Face4?i.multiplyVector3(q[g.d].position.clone()):null,k=a.matrixRotationWorld.multiplyVector3(g.normal.clone()),l=n.dot(k),a.doubleSided||(a.flipSided?l>0:l<0))if(k=k.dot((new THREE.Vector3).sub(f,m))/l,m=m.addSelf(n.multiplyScalar(k)),
g instanceof THREE.Face3)c(m,f,h,j)&&(g={distance:this.origin.distanceTo(m),point:m,face:g,object:a},t.push(g));else if(g instanceof THREE.Face4&&(c(m,f,h,i)||c(m,h,j,i)))g={distance:this.origin.distanceTo(m),point:m,face:g,object:a},t.push(g);return t}else return[]}};
THREE.Rectangle=function(){function a(){g=d-b;f=e-c}var b,c,d,e,g,f,h=!0;this.getX=function(){return b};this.getY=function(){return c};this.getWidth=function(){return g};this.getHeight=function(){return f};this.getLeft=function(){return b};this.getTop=function(){return c};this.getRight=function(){return d};this.getBottom=function(){return e};this.set=function(f,g,k,l){h=!1;b=f;c=g;d=k;e=l;a()};this.addPoint=function(f,g){h?(h=!1,b=f,c=g,d=f,e=g):(b=b<f?b:f,c=c<g?c:g,d=d>f?d:f,e=e>g?e:g);a()};this.add3Points=
function(f,g,k,l,m,n){h?(h=!1,b=f<k?f<m?f:m:k<m?k:m,c=g<l?g<n?g:n:l<n?l:n,d=f>k?f>m?f:m:k>m?k:m,e=g>l?g>n?g:n:l>n?l:n):(b=f<k?f<m?f<b?f:b:m<b?m:b:k<m?k<b?k:b:m<b?m:b,c=g<l?g<n?g<c?g:c:n<c?n:c:l<n?l<c?l:c:n<c?n:c,d=f>k?f>m?f>d?f:d:m>d?m:d:k>m?k>d?k:d:m>d?m:d,e=g>l?g>n?g>e?g:e:n>e?n:e:l>n?l>e?l:e:n>e?n:e);a()};this.addRectangle=function(f){h?(h=!1,b=f.getLeft(),c=f.getTop(),d=f.getRight(),e=f.getBottom()):(b=b<f.getLeft()?b:f.getLeft(),c=c<f.getTop()?c:f.getTop(),d=d>f.getRight()?d:f.getRight(),e=e>
f.getBottom()?e:f.getBottom());a()};this.inflate=function(f){b-=f;c-=f;d+=f;e+=f;a()};this.minSelf=function(f){b=b>f.getLeft()?b:f.getLeft();c=c>f.getTop()?c:f.getTop();d=d<f.getRight()?d:f.getRight();e=e<f.getBottom()?e:f.getBottom();a()};this.instersects=function(a){return Math.min(d,a.getRight())-Math.max(b,a.getLeft())>=0&&Math.min(e,a.getBottom())-Math.max(c,a.getTop())>=0};this.empty=function(){h=!0;e=d=c=b=0;a()};this.isEmpty=function(){return h}};THREE.Matrix3=function(){this.m=[]};
THREE.Matrix3.prototype={transpose:function(){var a,b=this.m;a=b[1];b[1]=b[3];b[3]=a;a=b[2];b[2]=b[6];b[6]=a;a=b[5];b[5]=b[7];b[7]=a;return this},transposeIntoArray:function(a){var b=this.m;a[0]=b[0];a[1]=b[3];a[2]=b[6];a[3]=b[1];a[4]=b[4];a[5]=b[7];a[6]=b[2];a[7]=b[5];a[8]=b[8];return this}};THREE.Matrix4=function(a,b,c,d,e,g,f,h,j,i,k,l,m,n,p,q){this.set(a||1,b||0,c||0,d||0,e||0,g||1,f||0,h||0,j||0,i||0,k||1,l||0,m||0,n||0,p||0,q||1);this.flat=Array(16);this.m33=new THREE.Matrix3};
THREE.Matrix4.prototype={set:function(a,b,c,d,e,g,f,h,j,i,k,l,m,n,p,q){this.n11=a;this.n12=b;this.n13=c;this.n14=d;this.n21=e;this.n22=g;this.n23=f;this.n24=h;this.n31=j;this.n32=i;this.n33=k;this.n34=l;this.n41=m;this.n42=n;this.n43=p;this.n44=q;return this},identity:function(){this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);return this},copy:function(a){this.set(a.n11,a.n12,a.n13,a.n14,a.n21,a.n22,a.n23,a.n24,a.n31,a.n32,a.n33,a.n34,a.n41,a.n42,a.n43,a.n44);return this},lookAt:function(a,b,c){var d=THREE.Matrix4.__v1,
e=THREE.Matrix4.__v2,g=THREE.Matrix4.__v3;g.sub(a,b).normalize();if(g.length()===0)g.z=1;d.cross(c,g).normalize();d.length()===0&&(g.x+=1.0E-4,d.cross(c,g).normalize());e.cross(g,d).normalize();this.n11=d.x;this.n12=e.x;this.n13=g.x;this.n21=d.y;this.n22=e.y;this.n23=g.y;this.n31=d.z;this.n32=e.z;this.n33=g.z;return this},multiplyVector3:function(a){var b=a.x,c=a.y,d=a.z,e=1/(this.n41*b+this.n42*c+this.n43*d+this.n44);a.x=(this.n11*b+this.n12*c+this.n13*d+this.n14)*e;a.y=(this.n21*b+this.n22*c+this.n23*
d+this.n24)*e;a.z=(this.n31*b+this.n32*c+this.n33*d+this.n34)*e;return a},multiplyVector4:function(a){var b=a.x,c=a.y,d=a.z,e=a.w;a.x=this.n11*b+this.n12*c+this.n13*d+this.n14*e;a.y=this.n21*b+this.n22*c+this.n23*d+this.n24*e;a.z=this.n31*b+this.n32*c+this.n33*d+this.n34*e;a.w=this.n41*b+this.n42*c+this.n43*d+this.n44*e;return a},rotateAxis:function(a){var b=a.x,c=a.y,d=a.z;a.x=b*this.n11+c*this.n12+d*this.n13;a.y=b*this.n21+c*this.n22+d*this.n23;a.z=b*this.n31+c*this.n32+d*this.n33;a.normalize();
return a},crossVector:function(a){var b=new THREE.Vector4;b.x=this.n11*a.x+this.n12*a.y+this.n13*a.z+this.n14*a.w;b.y=this.n21*a.x+this.n22*a.y+this.n23*a.z+this.n24*a.w;b.z=this.n31*a.x+this.n32*a.y+this.n33*a.z+this.n34*a.w;b.w=a.w?this.n41*a.x+this.n42*a.y+this.n43*a.z+this.n44*a.w:1;return b},multiply:function(a,b){var c=a.n11,d=a.n12,e=a.n13,g=a.n14,f=a.n21,h=a.n22,j=a.n23,i=a.n24,k=a.n31,l=a.n32,m=a.n33,n=a.n34,p=a.n41,q=a.n42,t=a.n43,r=a.n44,J=b.n11,M=b.n12,G=b.n13,v=b.n14,o=b.n21,K=b.n22,
z=b.n23,C=b.n24,D=b.n31,Q=b.n32,R=b.n33,S=b.n34,H=b.n41,T=b.n42,O=b.n43,E=b.n44;this.n11=c*J+d*o+e*D+g*H;this.n12=c*M+d*K+e*Q+g*T;this.n13=c*G+d*z+e*R+g*O;this.n14=c*v+d*C+e*S+g*E;this.n21=f*J+h*o+j*D+i*H;this.n22=f*M+h*K+j*Q+i*T;this.n23=f*G+h*z+j*R+i*O;this.n24=f*v+h*C+j*S+i*E;this.n31=k*J+l*o+m*D+n*H;this.n32=k*M+l*K+m*Q+n*T;this.n33=k*G+l*z+m*R+n*O;this.n34=k*v+l*C+m*S+n*E;this.n41=p*J+q*o+t*D+r*H;this.n42=p*M+q*K+t*Q+r*T;this.n43=p*G+q*z+t*R+r*O;this.n44=p*v+q*C+t*S+r*E;return this},multiplyToArray:function(a,
b,c){this.multiply(a,b);c[0]=this.n11;c[1]=this.n21;c[2]=this.n31;c[3]=this.n41;c[4]=this.n12;c[5]=this.n22;c[6]=this.n32;c[7]=this.n42;c[8]=this.n13;c[9]=this.n23;c[10]=this.n33;c[11]=this.n43;c[12]=this.n14;c[13]=this.n24;c[14]=this.n34;c[15]=this.n44;return this},multiplySelf:function(a){this.multiply(this,a);return this},multiplyScalar:function(a){this.n11*=a;this.n12*=a;this.n13*=a;this.n14*=a;this.n21*=a;this.n22*=a;this.n23*=a;this.n24*=a;this.n31*=a;this.n32*=a;this.n33*=a;this.n34*=a;this.n41*=
a;this.n42*=a;this.n43*=a;this.n44*=a;return this},determinant:function(){var a=this.n11,b=this.n12,c=this.n13,d=this.n14,e=this.n21,g=this.n22,f=this.n23,h=this.n24,j=this.n31,i=this.n32,k=this.n33,l=this.n34,m=this.n41,n=this.n42,p=this.n43,q=this.n44;return d*f*i*m-c*h*i*m-d*g*k*m+b*h*k*m+c*g*l*m-b*f*l*m-d*f*j*n+c*h*j*n+d*e*k*n-a*h*k*n-c*e*l*n+a*f*l*n+d*g*j*p-b*h*j*p-d*e*i*p+a*h*i*p+b*e*l*p-a*g*l*p-c*g*j*q+b*f*j*q+c*e*i*q-a*f*i*q-b*e*k*q+a*g*k*q},transpose:function(){var a;a=this.n21;this.n21=
this.n12;this.n12=a;a=this.n31;this.n31=this.n13;this.n13=a;a=this.n32;this.n32=this.n23;this.n23=a;a=this.n41;this.n41=this.n14;this.n14=a;a=this.n42;this.n42=this.n24;this.n24=a;a=this.n43;this.n43=this.n34;this.n43=a;return this},clone:function(){var a=new THREE.Matrix4;a.n11=this.n11;a.n12=this.n12;a.n13=this.n13;a.n14=this.n14;a.n21=this.n21;a.n22=this.n22;a.n23=this.n23;a.n24=this.n24;a.n31=this.n31;a.n32=this.n32;a.n33=this.n33;a.n34=this.n34;a.n41=this.n41;a.n42=this.n42;a.n43=this.n43;a.n44=
this.n44;return a},flatten:function(){this.flat[0]=this.n11;this.flat[1]=this.n21;this.flat[2]=this.n31;this.flat[3]=this.n41;this.flat[4]=this.n12;this.flat[5]=this.n22;this.flat[6]=this.n32;this.flat[7]=this.n42;this.flat[8]=this.n13;this.flat[9]=this.n23;this.flat[10]=this.n33;this.flat[11]=this.n43;this.flat[12]=this.n14;this.flat[13]=this.n24;this.flat[14]=this.n34;this.flat[15]=this.n44;return this.flat},flattenToArray:function(a){a[0]=this.n11;a[1]=this.n21;a[2]=this.n31;a[3]=this.n41;a[4]=
this.n12;a[5]=this.n22;a[6]=this.n32;a[7]=this.n42;a[8]=this.n13;a[9]=this.n23;a[10]=this.n33;a[11]=this.n43;a[12]=this.n14;a[13]=this.n24;a[14]=this.n34;a[15]=this.n44;return a},flattenToArrayOffset:function(a,b){a[b]=this.n11;a[b+1]=this.n21;a[b+2]=this.n31;a[b+3]=this.n41;a[b+4]=this.n12;a[b+5]=this.n22;a[b+6]=this.n32;a[b+7]=this.n42;a[b+8]=this.n13;a[b+9]=this.n23;a[b+10]=this.n33;a[b+11]=this.n43;a[b+12]=this.n14;a[b+13]=this.n24;a[b+14]=this.n34;a[b+15]=this.n44;return a},setTranslation:function(a,
b,c){this.set(1,0,0,a,0,1,0,b,0,0,1,c,0,0,0,1);return this},setScale:function(a,b,c){this.set(a,0,0,0,0,b,0,0,0,0,c,0,0,0,0,1);return this},setRotationX:function(a){var b=Math.cos(a),a=Math.sin(a);this.set(1,0,0,0,0,b,-a,0,0,a,b,0,0,0,0,1);return this},setRotationY:function(a){var b=Math.cos(a),a=Math.sin(a);this.set(b,0,a,0,0,1,0,0,-a,0,b,0,0,0,0,1);return this},setRotationZ:function(a){var b=Math.cos(a),a=Math.sin(a);this.set(b,-a,0,0,a,b,0,0,0,0,1,0,0,0,0,1);return this},setRotationAxis:function(a,
b){var c=Math.cos(b),d=Math.sin(b),e=1-c,g=a.x,f=a.y,h=a.z,j=e*g,i=e*f;this.set(j*g+c,j*f-d*h,j*h+d*f,0,j*f+d*h,i*f+c,i*h-d*g,0,j*h-d*f,i*h+d*g,e*h*h+c,0,0,0,0,1);return this},setPosition:function(a){this.n14=a.x;this.n24=a.y;this.n34=a.z;return this},getPosition:function(){if(!this.position)this.position=new THREE.Vector3;this.position.set(this.n14,this.n24,this.n34);return this.position},getColumnX:function(){if(!this.columnX)this.columnX=new THREE.Vector3;this.columnX.set(this.n11,this.n21,this.n31);
return this.columnX},getColumnY:function(){if(!this.columnY)this.columnY=new THREE.Vector3;this.columnY.set(this.n12,this.n22,this.n32);return this.columnY},getColumnZ:function(){if(!this.columnZ)this.columnZ=new THREE.Vector3;this.columnZ.set(this.n13,this.n23,this.n33);return this.columnZ},setRotationFromEuler:function(a,b){var c=a.x,d=a.y,e=a.z,g=Math.cos(c),c=Math.sin(c),f=Math.cos(d),d=Math.sin(d),h=Math.cos(e),e=Math.sin(e);switch(b){case "YXZ":var j=f*h,i=f*e,k=d*h,l=d*e;this.n11=j+l*c;this.n12=
k*c-i;this.n13=g*d;this.n21=g*e;this.n22=g*h;this.n23=-c;this.n31=i*c-k;this.n32=l+j*c;this.n33=g*f;break;case "ZXY":j=f*h;i=f*e;k=d*h;l=d*e;this.n11=j-l*c;this.n12=-g*e;this.n13=k+i*c;this.n21=i+k*c;this.n22=g*h;this.n23=l-j*c;this.n31=-g*d;this.n32=c;this.n33=g*f;break;case "ZYX":j=g*h;i=g*e;k=c*h;l=c*e;this.n11=f*h;this.n12=k*d-i;this.n13=j*d+l;this.n21=f*e;this.n22=l*d+j;this.n23=i*d-k;this.n31=-d;this.n32=c*f;this.n33=g*f;break;case "YZX":j=g*f;i=g*d;k=c*f;l=c*d;this.n11=f*h;this.n12=l-j*e;this.n13=
k*e+i;this.n21=e;this.n22=g*h;this.n23=-c*h;this.n31=-d*h;this.n32=i*e+k;this.n33=j-l*e;break;case "XZY":j=g*f;i=g*d;k=c*f;l=c*d;this.n11=f*h;this.n12=-e;this.n13=d*h;this.n21=j*e+l;this.n22=g*h;this.n23=i*e-k;this.n31=k*e-i;this.n32=c*h;this.n33=l*e+j;break;default:j=g*h,i=g*e,k=c*h,l=c*e,this.n11=f*h,this.n12=-f*e,this.n13=d,this.n21=i+k*d,this.n22=j-l*d,this.n23=-c*f,this.n31=l-j*d,this.n32=k+i*d,this.n33=g*f}return this},setRotationFromQuaternion:function(a){var b=a.x,c=a.y,d=a.z,e=a.w,g=b+b,
f=c+c,h=d+d,a=b*g,j=b*f;b*=h;var i=c*f;c*=h;d*=h;g*=e;f*=e;e*=h;this.n11=1-(i+d);this.n12=j-e;this.n13=b+f;this.n21=j+e;this.n22=1-(a+d);this.n23=c-g;this.n31=b-f;this.n32=c+g;this.n33=1-(a+i);return this},scale:function(a){var b=a.x,c=a.y,a=a.z;this.n11*=b;this.n12*=c;this.n13*=a;this.n21*=b;this.n22*=c;this.n23*=a;this.n31*=b;this.n32*=c;this.n33*=a;this.n41*=b;this.n42*=c;this.n43*=a;return this},extractPosition:function(a){this.n14=a.n14;this.n24=a.n24;this.n34=a.n34},extractRotation:function(a,
b){var c=1/b.x,d=1/b.y,e=1/b.z;this.n11=a.n11*c;this.n21=a.n21*c;this.n31=a.n31*c;this.n12=a.n12*d;this.n22=a.n22*d;this.n32=a.n32*d;this.n13=a.n13*e;this.n23=a.n23*e;this.n33=a.n33*e}};
THREE.Matrix4.makeInvert=function(a,b){var c=a.n11,d=a.n12,e=a.n13,g=a.n14,f=a.n21,h=a.n22,j=a.n23,i=a.n24,k=a.n31,l=a.n32,m=a.n33,n=a.n34,p=a.n41,q=a.n42,t=a.n43,r=a.n44;b===void 0&&(b=new THREE.Matrix4);b.n11=j*n*q-i*m*q+i*l*t-h*n*t-j*l*r+h*m*r;b.n12=g*m*q-e*n*q-g*l*t+d*n*t+e*l*r-d*m*r;b.n13=e*i*q-g*j*q+g*h*t-d*i*t-e*h*r+d*j*r;b.n14=g*j*l-e*i*l-g*h*m+d*i*m+e*h*n-d*j*n;b.n21=i*m*p-j*n*p-i*k*t+f*n*t+j*k*r-f*m*r;b.n22=e*n*p-g*m*p+g*k*t-c*n*t-e*k*r+c*m*r;b.n23=g*j*p-e*i*p-g*f*t+c*i*t+e*f*r-c*j*r;b.n24=
e*i*k-g*j*k+g*f*m-c*i*m-e*f*n+c*j*n;b.n31=h*n*p-i*l*p+i*k*q-f*n*q-h*k*r+f*l*r;b.n32=g*l*p-d*n*p-g*k*q+c*n*q+d*k*r-c*l*r;b.n33=e*i*p-g*h*p+g*f*q-c*i*q-d*f*r+c*h*r;b.n34=g*h*k-d*i*k-g*f*l+c*i*l+d*f*n-c*h*n;b.n41=j*l*p-h*m*p-j*k*q+f*m*q+h*k*t-f*l*t;b.n42=d*m*p-e*l*p+e*k*q-c*m*q-d*k*t+c*l*t;b.n43=e*h*p-d*j*p-e*f*q+c*j*q+d*f*t-c*h*t;b.n44=d*j*k-e*h*k+e*f*l-c*j*l-d*f*m+c*h*m;b.multiplyScalar(1/a.determinant());return b};
THREE.Matrix4.makeInvert3x3=function(a){var b=a.m33,c=b.m,d=a.n33*a.n22-a.n32*a.n23,e=-a.n33*a.n21+a.n31*a.n23,g=a.n32*a.n21-a.n31*a.n22,f=-a.n33*a.n12+a.n32*a.n13,h=a.n33*a.n11-a.n31*a.n13,j=-a.n32*a.n11+a.n31*a.n12,i=a.n23*a.n12-a.n22*a.n13,k=-a.n23*a.n11+a.n21*a.n13,l=a.n22*a.n11-a.n21*a.n12,a=a.n11*d+a.n21*f+a.n31*i;a==0&&console.error("THREE.Matrix4.makeInvert3x3: Matrix not invertible.");a=1/a;c[0]=a*d;c[1]=a*e;c[2]=a*g;c[3]=a*f;c[4]=a*h;c[5]=a*j;c[6]=a*i;c[7]=a*k;c[8]=a*l;return b};
THREE.Matrix4.makeFrustum=function(a,b,c,d,e,g){var f;f=new THREE.Matrix4;f.n11=2*e/(b-a);f.n12=0;f.n13=(b+a)/(b-a);f.n14=0;f.n21=0;f.n22=2*e/(d-c);f.n23=(d+c)/(d-c);f.n24=0;f.n31=0;f.n32=0;f.n33=-(g+e)/(g-e);f.n34=-2*g*e/(g-e);f.n41=0;f.n42=0;f.n43=-1;f.n44=0;return f};THREE.Matrix4.makePerspective=function(a,b,c,d){var e,a=c*Math.tan(a*Math.PI/360);e=-a;return THREE.Matrix4.makeFrustum(e*b,a*b,e,a,c,d)};
THREE.Matrix4.makeOrtho=function(a,b,c,d,e,g){var f,h,j,i;f=new THREE.Matrix4;h=b-a;j=c-d;i=g-e;f.n11=2/h;f.n12=0;f.n13=0;f.n14=-((b+a)/h);f.n21=0;f.n22=2/j;f.n23=0;f.n24=-((c+d)/j);f.n31=0;f.n32=0;f.n33=-2/i;f.n34=-((g+e)/i);f.n41=0;f.n42=0;f.n43=0;f.n44=1;return f};THREE.Matrix4.__v1=new THREE.Vector3;THREE.Matrix4.__v2=new THREE.Vector3;THREE.Matrix4.__v3=new THREE.Vector3;
THREE.Object3D=function(){this.parent=void 0;this.children=[];this.up=new THREE.Vector3(0,1,0);this.position=new THREE.Vector3;this.rotation=new THREE.Vector3;this.eulerOrder="XYZ";this.scale=new THREE.Vector3(1,1,1);this.flipSided=this.doubleSided=this.dynamic=!1;this.renderDepth=null;this.rotationAutoUpdate=!0;this.matrix=new THREE.Matrix4;this.matrixWorld=new THREE.Matrix4;this.matrixRotationWorld=new THREE.Matrix4;this.matrixWorldNeedsUpdate=this.matrixAutoUpdate=!0;this.quaternion=new THREE.Quaternion;
this.useQuaternion=!1;this.boundRadius=0;this.boundRadiusScale=1;this.visible=!0;this._vector=new THREE.Vector3;this.name=""};
THREE.Object3D.prototype={translate:function(a,b){this.matrix.rotateAxis(b);this.position.addSelf(b.multiplyScalar(a))},translateX:function(a){this.translate(a,this._vector.set(1,0,0))},translateY:function(a){this.translate(a,this._vector.set(0,1,0))},translateZ:function(a){this.translate(a,this._vector.set(0,0,1))},lookAt:function(a){this.matrix.lookAt(a,this.position,this.up);this.rotationAutoUpdate&&this.rotation.setRotationFromMatrix(this.matrix)},addChild:function(a){if(this.children.indexOf(a)===
-1){a.parent!==void 0&&a.parent.removeChild(a);a.parent=this;this.children.push(a);for(var b=this;b.parent!==void 0;)b=b.parent;b!==void 0&&b instanceof THREE.Scene&&b.addChildRecurse(a)}},removeChild:function(a){var b=this.children.indexOf(a);if(b!==-1)a.parent=void 0,this.children.splice(b,1)},getChildByName:function(a,b){var c,d,e;c=0;for(d=this.children.length;c<d;c++){e=this.children[c];if(e.name===a)return e;if(b&&(e=e.getChildByName(a,b),e!==void 0))return e}},updateMatrix:function(){this.matrix.setPosition(this.position);
this.useQuaternion?this.matrix.setRotationFromQuaternion(this.quaternion):this.matrix.setRotationFromEuler(this.rotation,this.eulerOrder);if(this.scale.x!==1||this.scale.y!==1||this.scale.z!==1)this.matrix.scale(this.scale),this.boundRadiusScale=Math.max(this.scale.x,Math.max(this.scale.y,this.scale.z));this.matrixWorldNeedsUpdate=!0},update:function(a,b,c){this.matrixAutoUpdate&&this.updateMatrix();if(this.matrixWorldNeedsUpdate||b)a?this.matrixWorld.multiply(a,this.matrix):this.matrixWorld.copy(this.matrix),
this.matrixRotationWorld.extractRotation(this.matrixWorld,this.scale),this.matrixWorldNeedsUpdate=!1,b=!0;for(var a=0,d=this.children.length;a<d;a++)this.children[a].update(this.matrixWorld,b,c)}};THREE.Quaternion=function(a,b,c,d){this.set(a||0,b||0,c||0,d!==void 0?d:1)};
THREE.Quaternion.prototype={set:function(a,b,c,d){this.x=a;this.y=b;this.z=c;this.w=d;return this},copy:function(a){this.x=a.x;this.y=a.y;this.z=a.z;this.w=a.w;return this},setFromEuler:function(a){var b=0.5*Math.PI/360,c=a.x*b,d=a.y*b,e=a.z*b,a=Math.cos(d),d=Math.sin(d),b=Math.cos(-e),e=Math.sin(-e),g=Math.cos(c),c=Math.sin(c),f=a*b,h=d*e;this.w=f*g-h*c;this.x=f*c+h*g;this.y=d*b*g+a*e*c;this.z=a*e*g-d*b*c;return this},setFromAxisAngle:function(a,b){var c=b/2,d=Math.sin(c);this.x=a.x*d;this.y=a.y*
d;this.z=a.z*d;this.w=Math.cos(c);return this},calculateW:function(){this.w=-Math.sqrt(Math.abs(1-this.x*this.x-this.y*this.y-this.z*this.z));return this},inverse:function(){this.x*=-1;this.y*=-1;this.z*=-1;return this},length:function(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)},normalize:function(){var a=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);a==0?this.w=this.z=this.y=this.x=0:(a=1/a,this.x*=a,this.y*=a,this.z*=a,this.w*=a);return this},
multiplySelf:function(a){var b=this.x,c=this.y,d=this.z,e=this.w,g=a.x,f=a.y,h=a.z,a=a.w;this.x=b*a+e*g+c*h-d*f;this.y=c*a+e*f+d*g-b*h;this.z=d*a+e*h+b*f-c*g;this.w=e*a-b*g-c*f-d*h;return this},multiply:function(a,b){this.x=a.x*b.w+a.y*b.z-a.z*b.y+a.w*b.x;this.y=-a.x*b.z+a.y*b.w+a.z*b.x+a.w*b.y;this.z=a.x*b.y-a.y*b.x+a.z*b.w+a.w*b.z;this.w=-a.x*b.x-a.y*b.y-a.z*b.z+a.w*b.w;return this},multiplyVector3:function(a,b){b||(b=a);var c=a.x,d=a.y,e=a.z,g=this.x,f=this.y,h=this.z,j=this.w,i=j*c+f*e-h*d,k=
j*d+h*c-g*e,l=j*e+g*d-f*c,c=-g*c-f*d-h*e;b.x=i*j+c*-g+k*-h-l*-f;b.y=k*j+c*-f+l*-g-i*-h;b.z=l*j+c*-h+i*-f-k*-g;return b}};
THREE.Quaternion.slerp=function(a,b,c,d){var e=a.w*b.w+a.x*b.x+a.y*b.y+a.z*b.z;if(Math.abs(e)>=1)return c.w=a.w,c.x=a.x,c.y=a.y,c.z=a.z,c;var g=Math.acos(e),f=Math.sqrt(1-e*e);if(Math.abs(f)<0.0010)return c.w=0.5*(a.w+b.w),c.x=0.5*(a.x+b.x),c.y=0.5*(a.y+b.y),c.z=0.5*(a.z+b.z),c;e=Math.sin((1-d)*g)/f;d=Math.sin(d*g)/f;c.w=a.w*e+b.w*d;c.x=a.x*e+b.x*d;c.y=a.y*e+b.y*d;c.z=a.z*e+b.z*d;return c};THREE.Vertex=function(a){this.position=a||new THREE.Vector3};
THREE.Face3=function(a,b,c,d,e,g){this.a=a;this.b=b;this.c=c;this.normal=d instanceof THREE.Vector3?d:new THREE.Vector3;this.vertexNormals=d instanceof Array?d:[];this.color=e instanceof THREE.Color?e:new THREE.Color;this.vertexColors=e instanceof Array?e:[];this.vertexTangents=[];this.materials=g instanceof Array?g:[g];this.centroid=new THREE.Vector3};
THREE.Face4=function(a,b,c,d,e,g,f){this.a=a;this.b=b;this.c=c;this.d=d;this.normal=e instanceof THREE.Vector3?e:new THREE.Vector3;this.vertexNormals=e instanceof Array?e:[];this.color=g instanceof THREE.Color?g:new THREE.Color;this.vertexColors=g instanceof Array?g:[];this.vertexTangents=[];this.materials=f instanceof Array?f:[f];this.centroid=new THREE.Vector3};THREE.UV=function(a,b){this.set(a||0,b||0)};
THREE.UV.prototype={set:function(a,b){this.u=a;this.v=b;return this},copy:function(a){this.set(a.u,a.v);return this}};THREE.Camera=function(a,b,c,d,e){THREE.Object3D.call(this);this.fov=a||50;this.aspect=b||1;this.near=c||0.1;this.far=d||2E3;this.target=e||new THREE.Object3D;this.useTarget=!0;this.matrixWorldInverse=new THREE.Matrix4;this.projectionMatrix=null;this.updateProjectionMatrix()};THREE.Camera.prototype=new THREE.Object3D;THREE.Camera.prototype.constructor=THREE.Camera;
THREE.Camera.prototype.supr=THREE.Object3D.prototype;THREE.Camera.prototype.translate=function(a,b){this.matrix.rotateAxis(b);b.multiplyScalar(a);this.position.addSelf(b);this.target.position.addSelf(b)};
THREE.Camera.prototype.updateProjectionMatrix=function(){if(this.fullWidth){var a=this.fullWidth/this.fullHeight,b=Math.tan(this.fov*Math.PI/360)*this.near,c=-b,d=a*c,a=Math.abs(a*b-d),c=Math.abs(b-c);this.projectionMatrix=THREE.Matrix4.makeFrustum(d+this.x*a/this.fullWidth,d+(this.x+this.width)*a/this.fullWidth,b-(this.y+this.height)*c/this.fullHeight,b-this.y*c/this.fullHeight,this.near,this.far)}else this.projectionMatrix=THREE.Matrix4.makePerspective(this.fov,this.aspect,this.near,this.far)};
THREE.Camera.prototype.setViewOffset=function(a,b,c,d,e,g){this.fullWidth=a;this.fullHeight=b;this.x=c;this.y=d;this.width=e;this.height=g;this.updateProjectionMatrix()};
THREE.Camera.prototype.update=function(a,b,c){if(this.useTarget)this.matrix.lookAt(this.position,this.target.position,this.up),this.matrix.setPosition(this.position),a?this.matrixWorld.multiply(a,this.matrix):this.matrixWorld.copy(this.matrix),THREE.Matrix4.makeInvert(this.matrixWorld,this.matrixWorldInverse),b=!0;else if(this.matrixAutoUpdate&&this.updateMatrix(),b||this.matrixWorldNeedsUpdate)a?this.matrixWorld.multiply(a,this.matrix):this.matrixWorld.copy(this.matrix),this.matrixWorldNeedsUpdate=
!1,b=!0,THREE.Matrix4.makeInvert(this.matrixWorld,this.matrixWorldInverse);for(a=0;a<this.children.length;a++)this.children[a].update(this.matrixWorld,b,c)};THREE.ParticleDOMMaterial=function(a){THREE.Material.call(this);this.domElement=a};THREE.Particle=function(a){THREE.Object3D.call(this);this.materials=a instanceof Array?a:[a]};THREE.Particle.prototype=new THREE.Object3D;THREE.Particle.prototype.constructor=THREE.Particle;
THREE.Bone=function(a){THREE.Object3D.call(this);this.skin=a;this.skinMatrix=new THREE.Matrix4;this.hasNoneBoneChildren=!1};THREE.Bone.prototype=new THREE.Object3D;THREE.Bone.prototype.constructor=THREE.Bone;THREE.Bone.prototype.supr=THREE.Object3D.prototype;
THREE.Bone.prototype.update=function(a,b,c){this.matrixAutoUpdate&&(b|=this.updateMatrix());if(b||this.matrixWorldNeedsUpdate)a?this.skinMatrix.multiply(a,this.matrix):this.skinMatrix.copy(this.matrix),this.matrixWorldNeedsUpdate=!1,b=!0;var d,e=this.children.length;if(this.hasNoneBoneChildren){this.matrixWorld.multiply(this.skin.matrixWorld,this.skinMatrix);for(d=0;d<e;d++)a=this.children[d],a instanceof THREE.Bone?a.update(this.skinMatrix,b,c):a.update(this.matrixWorld,!0,c)}else for(d=0;d<e;d++)this.children[d].update(this.skinMatrix,
b,c)};THREE.Bone.prototype.addChild=function(a){if(this.children.indexOf(a)===-1&&(a.parent!==void 0&&a.parent.removeChild(a),a.parent=this,this.children.push(a),!(a instanceof THREE.Bone)))this.hasNoneBoneChildren=!0};
THREE.Sound=function(a,b,c,d){THREE.Object3D.call(this);this.isPlaying=this.isAddedToDOM=this.isLoaded=!1;this.duration=-1;this.radius=b!==void 0?Math.abs(b):100;this.volume=Math.min(1,Math.max(0,c!==void 0?c:1));this.domElement=document.createElement("audio");this.domElement.volume=0;this.domElement.pan=0;this.domElement.loop=d!==void 0?d:!0;this.sources=a instanceof Array?a:[a];for(var e,c=this.sources.length,a=0;a<c;a++)if(b=this.sources[a],b.toLowerCase(),b.indexOf(".mp3")!==-1?e="audio/mpeg":
b.indexOf(".ogg")!==-1?e="audio/ogg":b.indexOf(".wav")!==-1&&(e="audio/wav"),this.domElement.canPlayType(e)){e=document.createElement("source");e.src=this.sources[a];this.domElement.THREESound=this;this.domElement.appendChild(e);this.domElement.addEventListener("canplay",this.onLoad,!0);this.domElement.load();break}};THREE.Sound.prototype=new THREE.Object3D;THREE.Sound.prototype.constructor=THREE.Sound;THREE.Sound.prototype.supr=THREE.Object3D.prototype;
THREE.Sound.prototype.onLoad=function(){var a=this.THREESound;if(!a.isLoaded)this.removeEventListener("canplay",this.onLoad,!0),a.isLoaded=!0,a.duration=this.duration,a.isPlaying&&a.play()};THREE.Sound.prototype.addToDOM=function(a){this.isAddedToDOM=!0;a.appendChild(this.domElement)};THREE.Sound.prototype.play=function(a){this.isPlaying=!0;if(this.isLoaded&&(this.domElement.play(),a))this.domElement.currentTime=a%this.duration};THREE.Sound.prototype.pause=function(){this.isPlaying=!1;this.domElement.pause()};
THREE.Sound.prototype.stop=function(){this.isPlaying=!1;this.domElement.pause();this.domElement.currentTime=0};THREE.Sound.prototype.calculateVolumeAndPan=function(a){a=a.length();this.domElement.volume=a<=this.radius?this.volume*(1-a/this.radius):0};
THREE.Sound.prototype.update=function(a,b,c){this.matrixAutoUpdate&&(this.matrix.setPosition(this.position),b=!0);if(b||this.matrixWorldNeedsUpdate)a?this.matrixWorld.multiply(a,this.matrix):this.matrixWorld.copy(this.matrix),this.matrixWorldNeedsUpdate=!1,b=!0;for(var d=this.children.length,a=0;a<d;a++)this.children[a].update(this.matrixWorld,b,c)};
THREE.Scene=function(){THREE.Object3D.call(this);this.matrixAutoUpdate=!1;this.collisions=this.overrideMaterial=this.fog=null;this.objects=[];this.lights=[];this.sounds=[];this.__objectsAdded=[];this.__objectsRemoved=[]};THREE.Scene.prototype=new THREE.Object3D;THREE.Scene.prototype.constructor=THREE.Scene;THREE.Scene.prototype.supr=THREE.Object3D.prototype;THREE.Scene.prototype.addChild=function(a){this.supr.addChild.call(this,a);this.addChildRecurse(a)};
THREE.Scene.prototype.addChildRecurse=function(a){if(a instanceof THREE.Light)this.lights.indexOf(a)===-1&&this.lights.push(a);else if(a instanceof THREE.Sound)this.sounds.indexOf(a)===-1&&this.sounds.push(a);else if(!(a instanceof THREE.Camera||a instanceof THREE.Bone)&&this.objects.indexOf(a)===-1)this.objects.push(a),this.__objectsAdded.push(a);for(var b=0;b<a.children.length;b++)this.addChildRecurse(a.children[b])};
THREE.Scene.prototype.removeChild=function(a){this.supr.removeChild.call(this,a);this.removeChildRecurse(a)};THREE.Scene.prototype.removeChildRecurse=function(a){if(a instanceof THREE.Light){var b=this.lights.indexOf(a);b!==-1&&this.lights.splice(b,1)}else a instanceof THREE.Sound?(b=this.sounds.indexOf(a),b!==-1&&this.sounds.splice(b,1)):a instanceof THREE.Camera||(b=this.objects.indexOf(a),b!==-1&&(this.objects.splice(b,1),this.__objectsRemoved.push(a)));for(b=0;b<a.children.length;b++)this.removeChildRecurse(a.children[b])};
THREE.Scene.prototype.addObject=THREE.Scene.prototype.addChild;THREE.Scene.prototype.removeObject=THREE.Scene.prototype.removeChild;THREE.Scene.prototype.addLight=THREE.Scene.prototype.addChild;THREE.Scene.prototype.removeLight=THREE.Scene.prototype.removeChild;
THREE.Projector=function(){function a(){var a=j[h]=j[h]||new THREE.RenderableVertex;h++;return a}function b(a,b){return b.z-a.z}function c(a,b){var c=0,d=1,e=a.z+a.w,f=b.z+b.w,g=-a.z+a.w,h=-b.z+b.w;return e>=0&&f>=0&&g>=0&&h>=0?!0:e<0&&f<0||g<0&&h<0?!1:(e<0?c=Math.max(c,e/(e-f)):f<0&&(d=Math.min(d,e/(e-f))),g<0?c=Math.max(c,g/(g-h)):h<0&&(d=Math.min(d,g/(g-h))),d<c?!1:(a.lerpSelf(b,c),b.lerpSelf(a,1-d),!0))}var d,e,g=[],f,h,j=[],i,k,l=[],m,n=[],p,q,t=[],r,J,M=[],G=new THREE.Vector4,v=new THREE.Vector4,
o=new THREE.Matrix4,K=new THREE.Matrix4,z=[new THREE.Vector4,new THREE.Vector4,new THREE.Vector4,new THREE.Vector4,new THREE.Vector4,new THREE.Vector4],C=new THREE.Vector4,D=new THREE.Vector4;this.projectVector=function(a,b){o.multiply(b.projectionMatrix,b.matrixWorldInverse);o.multiplyVector3(a);return a};this.unprojectVector=function(a,b){o.multiply(b.matrixWorld,THREE.Matrix4.makeInvert(b.projectionMatrix));o.multiplyVector3(a);return a};this.projectObjects=function(a,c,f){var c=[],h,i,j;e=0;i=
a.objects;a=0;for(h=i.length;a<h;a++){j=i[a];var k;if(!(k=!j.visible))if(k=j instanceof THREE.Mesh){a:{k=void 0;for(var l=j.matrixWorld,m=-j.geometry.boundingSphere.radius*Math.max(j.scale.x,Math.max(j.scale.y,j.scale.z)),n=0;n<6;n++)if(k=z[n].x*l.n14+z[n].y*l.n24+z[n].z*l.n34+z[n].w,k<=m){k=!1;break a}k=!0}k=!k}if(!k)k=g[e]=g[e]||new THREE.RenderableObject,e++,d=k,G.copy(j.position),o.multiplyVector3(G),d.object=j,d.z=G.z,c.push(d)}f&&c.sort(b);return c};this.projectScene=function(d,e,g){var H=[],
G=e.near,O=e.far,E,I,x,B,s,y,w,A,F,u,L,U,W,X,N,V,P;J=q=m=k=0;e.matrixAutoUpdate&&e.update(void 0,!0);d.update(void 0,!1,e);o.multiply(e.projectionMatrix,e.matrixWorldInverse);z[0].set(o.n41-o.n11,o.n42-o.n12,o.n43-o.n13,o.n44-o.n14);z[1].set(o.n41+o.n11,o.n42+o.n12,o.n43+o.n13,o.n44+o.n14);z[2].set(o.n41+o.n21,o.n42+o.n22,o.n43+o.n23,o.n44+o.n24);z[3].set(o.n41-o.n21,o.n42-o.n22,o.n43-o.n23,o.n44-o.n24);z[4].set(o.n41-o.n31,o.n42-o.n32,o.n43-o.n33,o.n44-o.n34);z[5].set(o.n41+o.n31,o.n42+o.n32,o.n43+
o.n33,o.n44+o.n34);for(E=0;E<6;E++)F=z[E],F.divideScalar(Math.sqrt(F.x*F.x+F.y*F.y+F.z*F.z));F=this.projectObjects(d,e,!0);d=0;for(E=F.length;d<E;d++)if(u=F[d].object,u.visible)if(L=u.matrixWorld,U=u.matrixRotationWorld,W=u.materials,X=u.overdraw,h=0,u instanceof THREE.Mesh){N=u.geometry;B=N.vertices;V=N.faces;N=N.faceVertexUvs;I=0;for(x=B.length;I<x;I++)f=a(),f.positionWorld.copy(B[I].position),L.multiplyVector3(f.positionWorld),f.positionScreen.copy(f.positionWorld),o.multiplyVector4(f.positionScreen),
f.positionScreen.x/=f.positionScreen.w,f.positionScreen.y/=f.positionScreen.w,f.visible=f.positionScreen.z>G&&f.positionScreen.z<O;B=0;for(I=V.length;B<I;B++){x=V[B];if(x instanceof THREE.Face3)if(s=j[x.a],y=j[x.b],w=j[x.c],s.visible&&y.visible&&w.visible&&(u.doubleSided||u.flipSided!=(w.positionScreen.x-s.positionScreen.x)*(y.positionScreen.y-s.positionScreen.y)-(w.positionScreen.y-s.positionScreen.y)*(y.positionScreen.x-s.positionScreen.x)<0))A=l[k]=l[k]||new THREE.RenderableFace3,k++,i=A,i.v1.copy(s),
i.v2.copy(y),i.v3.copy(w);else continue;else if(x instanceof THREE.Face4)if(s=j[x.a],y=j[x.b],w=j[x.c],A=j[x.d],s.visible&&y.visible&&w.visible&&A.visible&&(u.doubleSided||u.flipSided!=((A.positionScreen.x-s.positionScreen.x)*(y.positionScreen.y-s.positionScreen.y)-(A.positionScreen.y-s.positionScreen.y)*(y.positionScreen.x-s.positionScreen.x)<0||(y.positionScreen.x-w.positionScreen.x)*(A.positionScreen.y-w.positionScreen.y)-(y.positionScreen.y-w.positionScreen.y)*(A.positionScreen.x-w.positionScreen.x)<
0)))P=n[m]=n[m]||new THREE.RenderableFace4,m++,i=P,i.v1.copy(s),i.v2.copy(y),i.v3.copy(w),i.v4.copy(A);else continue;i.normalWorld.copy(x.normal);U.multiplyVector3(i.normalWorld);i.centroidWorld.copy(x.centroid);L.multiplyVector3(i.centroidWorld);i.centroidScreen.copy(i.centroidWorld);o.multiplyVector3(i.centroidScreen);w=x.vertexNormals;s=0;for(y=w.length;s<y;s++)A=i.vertexNormalsWorld[s],A.copy(w[s]),U.multiplyVector3(A);s=0;for(y=N.length;s<y;s++)if(P=N[s][B]){w=0;for(A=P.length;w<A;w++)i.uvs[s][w]=
P[w]}i.meshMaterials=W;i.faceMaterials=x.materials;i.overdraw=X;i.z=i.centroidScreen.z;H.push(i)}}else if(u instanceof THREE.Line){K.multiply(o,L);B=u.geometry.vertices;s=a();s.positionScreen.copy(B[0].position);K.multiplyVector4(s.positionScreen);I=1;for(x=B.length;I<x;I++)if(s=a(),s.positionScreen.copy(B[I].position),K.multiplyVector4(s.positionScreen),y=j[h-2],C.copy(s.positionScreen),D.copy(y.positionScreen),c(C,D))C.multiplyScalar(1/C.w),D.multiplyScalar(1/D.w),L=t[q]=t[q]||new THREE.RenderableLine,
q++,p=L,p.v1.positionScreen.copy(C),p.v2.positionScreen.copy(D),p.z=Math.max(C.z,D.z),p.materials=u.materials,H.push(p)}else if(u instanceof THREE.Particle&&(v.set(u.matrixWorld.n14,u.matrixWorld.n24,u.matrixWorld.n34,1),o.multiplyVector4(v),v.z/=v.w,v.z>0&&v.z<1))L=M[J]=M[J]||new THREE.RenderableParticle,J++,r=L,r.x=v.x/v.w,r.y=v.y/v.w,r.z=v.z,r.rotation=u.rotation.z,r.scale.x=u.scale.x*Math.abs(r.x-(v.x+e.projectionMatrix.n11)/(v.w+e.projectionMatrix.n14)),r.scale.y=u.scale.y*Math.abs(r.y-(v.y+
e.projectionMatrix.n22)/(v.w+e.projectionMatrix.n24)),r.materials=u.materials,H.push(r);g&&H.sort(b);return H}};
THREE.DOMRenderer=function(){THREE.Renderer.call(this);var a=null,b=new THREE.Projector,c,d,e,g;this.domElement=document.createElement("div");this.setSize=function(a,b){c=a;d=b;e=c/2;g=d/2};this.render=function(c,d){var j,i,k,l,m,n,p,q;a=b.projectScene(c,d);j=0;for(i=a.length;j<i;j++)if(m=a[j],m instanceof THREE.RenderableParticle){p=m.x*e+e;q=m.y*g+g;k=0;for(l=m.material.length;k<l;k++)if(n=m.material[k],n instanceof THREE.ParticleDOMMaterial)n=n.domElement,n.style.left=p+"px",n.style.top=q+"px"}}};
THREE.SoundRenderer=function(){this.volume=1;this.domElement=document.createElement("div");this.domElement.id="THREESound";this.cameraPosition=new THREE.Vector3;this.soundPosition=new THREE.Vector3;this.render=function(a,b,c){c&&a.update(void 0,!1,b);var c=a.sounds,d,e=c.length;for(d=0;d<e;d++)a=c[d],this.soundPosition.set(a.matrixWorld.n14,a.matrixWorld.n24,a.matrixWorld.n34),this.soundPosition.subSelf(b.position),a.isPlaying&&a.isLoaded&&(a.isAddedToDOM||a.addToDOM(this.domElement),a.calculateVolumeAndPan(this.soundPosition))}};
THREE.RenderableParticle=function(){this.rotation=this.z=this.y=this.x=null;this.scale=new THREE.Vector2;this.materials=null};

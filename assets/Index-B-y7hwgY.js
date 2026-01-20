import{n as e,t}from"./constants-Vf7bGySc.js";import{t as n}from"./Texture-BNUVePay.js";import{Aa as r,Bi as i,Da as a,Fa as o,Mn as s,Na as c,Nn as l,Oa as u,Pi as d,Rn as f,Vn as p,ba as m,br as h,ci as g,cr as _,ia as v,ja as y,nr as b,tr as x,ui as S,va as C,wr as w,ya as T,zn as E}from"./index-CJ2M65EH.js";function D(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ee(e,t){return ee=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},ee(e,t)}function O(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function te(e,t){if(e){if(typeof e==`string`)return O(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n===`Object`&&e.constructor&&(n=e.constructor.name),n===`Map`||n===`Set`)return Array.from(e);if(n===`Arguments`||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return O(e,t)}}function ne(e){if(Array.isArray(e))return O(e)}function re(e){if(typeof Symbol<`u`&&e[Symbol.iterator]!=null||e[`@@iterator`]!=null)return Array.from(e)}function ie(){throw TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ae(e){return ne(e)||re(e)||te(e)||ie()}new C,new C;function oe(e,t,n){return Math.max(t,Math.min(n,e))}function se(e,t){return oe(e-Math.floor(e/t)*t,0,t)}function ce(e,t){var n=se(t-e,Math.PI*2);return n>Math.PI&&(n-=Math.PI*2),n}function le(e,t){if(!(e instanceof t))throw TypeError(`Cannot call a class as a function`)}var k=function e(t,n,r){var i=this;le(this,e),D(this,`dot2`,function(e,t){return i.x*e+i.y*t}),D(this,`dot3`,function(e,t,n){return i.x*e+i.y*t+i.z*n}),this.x=t,this.y=n,this.z=r},ue=[new k(1,1,0),new k(-1,1,0),new k(1,-1,0),new k(-1,-1,0),new k(1,0,1),new k(-1,0,1),new k(1,0,-1),new k(-1,0,-1),new k(0,1,1),new k(0,-1,1),new k(0,1,-1),new k(0,-1,-1)],de=[151,160,137,91,90,15,131,13,201,95,96,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10,23,190,6,148,247,120,234,75,0,26,197,62,94,252,219,203,117,35,11,32,57,177,33,88,237,149,56,87,174,20,125,136,171,168,68,175,74,165,71,134,139,48,27,166,77,146,158,231,83,111,229,122,60,211,133,230,220,105,92,41,55,46,245,40,244,102,143,54,65,25,63,161,1,216,80,73,209,76,132,187,208,89,18,169,200,196,135,130,116,188,159,86,164,100,109,198,173,186,3,64,52,217,226,250,124,123,5,202,38,147,118,126,255,82,85,212,207,206,59,227,47,16,58,17,182,189,28,42,223,183,170,213,119,248,152,2,44,154,163,70,221,153,101,155,167,43,172,9,129,22,39,253,19,98,108,110,79,113,224,232,178,185,112,104,218,246,97,228,251,34,242,193,238,210,144,12,191,179,162,241,81,51,145,235,249,14,239,107,49,192,214,31,181,199,106,157,184,84,204,176,115,121,50,45,127,4,150,254,138,236,205,93,222,114,67,29,24,72,243,141,128,195,78,66,215,61,156,180],fe=Array(512),pe=Array(512);(function(e){e>0&&e<1&&(e*=65536),e=Math.floor(e),e<256&&(e|=e<<8);for(var t=0;t<256;t++){var n=t&1?de[t]^e&255:de[t]^e>>8&255;fe[t]=fe[t+256]=n,pe[t]=pe[t+256]=ue[n%12]}})(0),.5*(Math.sqrt(3)-1),(3-Math.sqrt(3))/6,Math.PI*2;function me(e){if(typeof e==`number`)e=Math.abs(e);else if(typeof e==`string`){var t=e;e=0;for(var n=0;n<t.length;n++)e=(e+(n+1)*(t.charCodeAt(n)%96))%2147483647}return e===0&&(e=311),e}function he(e){var t=me(e);return function(){var e=t*48271%2147483647;return t=e,e/2147483647}}new function e(t){var n=this;le(this,e),D(this,`seed`,0),D(this,`init`,function(e){n.seed=e,n.value=he(e)}),D(this,`value`,he(this.seed)),this.init(t)}(Math.random());var ge=function(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:.01,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:1/(2*Math.PI);return n/Math.atan(1/t)*Math.atan(Math.sin(2*Math.PI*e*r)/t)},_e=function(e){return 1/(1+e+.48*e*e+.235*e*e*e)},ve=function(e){return e},ye={in:function(e){return 1-Math.cos(e*Math.PI/2)},out:function(e){return Math.sin(e*Math.PI/2)},inOut:function(e){return-(Math.cos(Math.PI*e)-1)/2}},be={in:function(e){return e*e*e},out:function(e){return 1-(1-e)**3},inOut:function(e){return e<.5?4*e*e*e:1-(-2*e+2)**3/2}},xe={in:function(e){return e*e*e*e*e},out:function(e){return 1-(1-e)**5},inOut:function(e){return e<.5?16*e*e*e*e*e:1-(-2*e+2)**5/2}},Se={in:function(e){return 1-Math.sqrt(1-e**2)},out:function(e){return Math.sqrt(1-(e-1)**2)},inOut:function(e){return e<.5?(1-Math.sqrt(1-(2*e)**2))/2:(Math.sqrt(1-(-2*e+2)**2)+1)/2}},Ce={in:function(e){return e*e*e*e},out:function(e){return 1- --e*e*e*e},inOut:function(e){return e<.5?8*e*e*e*e:1-8*--e*e*e*e}},we={in:function(e){return e===0?0:2**(10*e-10)},out:function(e){return e===1?1:1-2**(-10*e)},inOut:function(e){return e===0?0:e===1?1:e<.5?2**(20*e-10)/2:(2-2**(-20*e+10))/2}};function A(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:.25,i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:.01,a=arguments.length>5&&arguments[5]!==void 0?arguments[5]:1/0,o=arguments.length>6&&arguments[6]!==void 0?arguments[6]:_e,s=arguments.length>7&&arguments[7]!==void 0?arguments[7]:.001,c=`velocity_`+t;if(e.__damp===void 0&&(e.__damp={}),e.__damp[c]===void 0&&(e.__damp[c]=0),Math.abs(e[t]-n)<=s)return e[t]=n,!1;r=Math.max(1e-4,r);var l=2/r,u=o(l*i),d=e[t]-n,f=n,p=a*r;d=Math.min(Math.max(d,-p),p),n=e[t]-d;var m=(e.__damp[c]+l*d)*i;e.__damp[c]=(e.__damp[c]-l*m)*u;var h=n+(d+m)*u;return f-e[t]>0==h>f&&(h=f,e.__damp[c]=(h-f)/i),e[t]=h,!0}var Te=function(e){return e&&e.isCamera},Ee=function(e){return e&&e.isLight},j=new T,M=new i,N=new i,P=new S,F=new T;function De(e,t,n,r,i,a,o){typeof t==`number`?j.setScalar(t):Array.isArray(t)?j.set(t[0],t[1],t[2]):j.copy(t);var s=e.parent;e.updateWorldMatrix(!0,!1),F.setFromMatrixPosition(e.matrixWorld),Te(e)||Ee(e)?P.lookAt(F,j,e.up):P.lookAt(j,F,e.up),Y(e.quaternion,N.setFromRotationMatrix(P),n,r,i,a,o),s&&(P.extractRotation(s.matrixWorld),M.setFromRotationMatrix(P),Y(e.quaternion,N.copy(e.quaternion).premultiply(M.invert()),n,r,i,a,o))}function I(e,t,n,r,i,a,o,s){return A(e,t,e[t]+ce(e[t],n),r,i,a,o,s)}var L=new C,R,z;function Oe(e,t,n,r,i,a,o){return typeof t==`number`?L.setScalar(t):Array.isArray(t)?L.set(t[0],t[1]):L.copy(t),R=A(e,`x`,L.x,n,r,i,a,o),z=A(e,`y`,L.y,n,r,i,a,o),R||z}var B=new T,ke,Ae,je;function V(e,t,n,r,i,a,o){return typeof t==`number`?B.setScalar(t):Array.isArray(t)?B.set(t[0],t[1],t[2]):B.copy(t),ke=A(e,`x`,B.x,n,r,i,a,o),Ae=A(e,`y`,B.y,n,r,i,a,o),je=A(e,`z`,B.z,n,r,i,a,o),ke||Ae||je}var H=new m,Me,Ne,Pe,U;function Fe(e,t,n,r,i,a,o){return typeof t==`number`?H.setScalar(t):Array.isArray(t)?H.set(t[0],t[1],t[2],t[3]):H.copy(t),Me=A(e,`x`,H.x,n,r,i,a,o),Ne=A(e,`y`,H.y,n,r,i,a,o),Pe=A(e,`z`,H.z,n,r,i,a,o),U=A(e,`w`,H.w,n,r,i,a,o),Me||Ne||Pe||U}var W=new w,Ie,Le,Re;function ze(e,t,n,r,i,a,o){return Array.isArray(t)?W.set(t[0],t[1],t[2],t[3]):W.copy(t),Ie=I(e,`x`,W.x,n,r,i,a,o),Le=I(e,`y`,W.y,n,r,i,a,o),Re=I(e,`z`,W.z,n,r,i,a,o),Ie||Le||Re}var G=new _,Be,Ve,He;function Ue(e,t,n,r,i,a,o){return t instanceof _?G.copy(t):Array.isArray(t)?G.setRGB(t[0],t[1],t[2]):G.set(t),Be=A(e,`r`,G.r,n,r,i,a,o),Ve=A(e,`g`,G.g,n,r,i,a,o),He=A(e,`b`,G.b,n,r,i,a,o),Be||Ve||He}var K=new i,q=new m,We=new m,J=new m,Ge,Ke,qe,Je;function Y(e,t,n,r,i,a,o){var s=e;Array.isArray(t)?K.set(t[0],t[1],t[2],t[3]):K.copy(t);var c=e.dot(K)>0?1:-1;return K.x*=c,K.y*=c,K.z*=c,K.w*=c,Ge=A(e,`x`,K.x,n,r,i,a,o),Ke=A(e,`y`,K.y,n,r,i,a,o),qe=A(e,`z`,K.z,n,r,i,a,o),Je=A(e,`w`,K.w,n,r,i,a,o),q.set(e.x,e.y,e.z,e.w).normalize(),We.set(s.__damp.velocity_x,s.__damp.velocity_y,s.__damp.velocity_z,s.__damp.velocity_w),J.copy(q).multiplyScalar(We.dot(q)/q.dot(q)),s.__damp.velocity_x-=J.x,s.__damp.velocity_y-=J.y,s.__damp.velocity_z-=J.z,s.__damp.velocity_w-=J.w,e.set(q.x,q.y,q.z,q.w),Ge||Ke||qe||Je}var X=new v,Ye,Xe,Ze;function Qe(e,t,n,r,i,a,o){return Array.isArray(t)?X.set(t[0],t[1],t[2]):X.copy(t),Ye=A(e,`radius`,X.radius,n,r,i,a,o),Xe=I(e,`phi`,X.phi,n,r,i,a,o),Ze=I(e,`theta`,X.theta,n,r,i,a,o),Ye||Xe||Ze}var Z=new S,$e=new T,et=new i,tt=new T,nt,rt,it;function at(e,t,n,r,a,o,s){var c=e;return c.__damp===void 0&&(c.__damp={position:new T,rotation:new i,scale:new T},e.decompose(c.__damp.position,c.__damp.rotation,c.__damp.scale)),Array.isArray(t)?Z.set.apply(Z,ae(t)):Z.copy(t),Z.decompose($e,et,tt),nt=V(c.__damp.position,$e,n,r,a,o,s),rt=Y(c.__damp.rotation,et,n,r,a,o,s),it=V(c.__damp.scale,tt,n,r,a,o,s),e.compose(c.__damp.position,c.__damp.rotation,c.__damp.scale),nt||rt||it}var ot=Object.freeze({__proto__:null,rsqw:ge,exp:_e,linear:ve,sine:ye,cubic:be,quint:xe,circ:Se,quart:Ce,expo:we,damp:A,dampLookAt:De,dampAngle:I,damp2:Oe,damp3:V,damp4:Fe,dampE:ze,dampC:Ue,dampQ:Y,dampS:Qe,dampM:at});function st(e){return st=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},st(e)}var Q=o(c());y();var ct=Q.createContext(null);function lt(){return Q.useContext(ct)}function ut({eps:e=1e-5,enabled:t=!0,infinite:n,horizontal:r,pages:i=1,distance:a=1,damping:o=.25,maxSpeed:s=1/0,prepend:c=!1,style:l={},children:u}){let{get:d,setEvents:f,gl:m,size:h,invalidate:g,events:_}=p(),[v]=Q.useState(()=>document.createElement(`div`)),[y]=Q.useState(()=>document.createElement(`div`)),[b]=Q.useState(()=>document.createElement(`div`)),x=m.domElement.parentNode,S=Q.useRef(0),C=Q.useMemo(()=>({el:v,eps:e,fill:y,fixed:b,horizontal:r,damping:o,offset:0,delta:0,scroll:S,pages:i,range(e,t,n=0){let r=e-n,i=r+t+n*2;return this.offset<r?0:this.offset>i?1:(this.offset-r)/(i-r)},curve(e,t,n=0){return Math.sin(this.range(e,t,n)*Math.PI)},visible(e,t,n=0){let r=e-n,i=r+t+n*2;return this.offset>=r&&this.offset<=i}}),[e,o,r,i]);Q.useEffect(()=>{for(let e in v.style.position=`absolute`,v.style.width=`100%`,v.style.height=`100%`,v.style[r?`overflowX`:`overflowY`]=`auto`,v.style[r?`overflowY`:`overflowX`]=`hidden`,v.style.top=`0px`,v.style.left=`0px`,l)v.style[e]=l[e];b.style.position=`sticky`,b.style.top=`0px`,b.style.left=`0px`,b.style.width=`100%`,b.style.height=`100%`,b.style.overflow=`hidden`,v.appendChild(b),y.style.height=r?`100%`:`${i*a*100}%`,y.style.width=r?`${i*a*100}%`:`100%`,y.style.pointerEvents=`none`,v.appendChild(y),c?x.prepend(v):x.appendChild(v),v[r?`scrollLeft`:`scrollTop`]=1;let e=_.connected||m.domElement;requestAnimationFrame(()=>_.connect==null?void 0:_.connect(v));let t=d().events.compute;return f({compute(e,t){let{left:n,top:r}=x.getBoundingClientRect(),i=e.clientX-n,a=e.clientY-r;t.pointer.set(i/t.size.width*2-1,-(a/t.size.height)*2+1),t.raycaster.setFromCamera(t.pointer,t.camera)}}),()=>{x.removeChild(v),f({compute:t}),_.connect==null||_.connect(e)}},[i,a,r,v,y,b,x]),Q.useEffect(()=>{if(_.connected===v){let e=h[r?`width`:`height`],i=v[r?`scrollWidth`:`scrollHeight`],a=i-e,o=0,s=!0,c=!0,l=()=>{if(!(!t||c)&&(g(),o=v[r?`scrollLeft`:`scrollTop`],S.current=o/a,n)){if(!s){if(o>=a){let e=1-C.offset;v[r?`scrollLeft`:`scrollTop`]=1,S.current=C.offset=-e,s=!0}else if(o<=0){let e=1+C.offset;v[r?`scrollLeft`:`scrollTop`]=i,S.current=C.offset=e,s=!0}}s&&setTimeout(()=>s=!1,40)}};v.addEventListener(`scroll`,l,{passive:!0}),requestAnimationFrame(()=>c=!1);let u=e=>v.scrollLeft+=e.deltaY/2;return r&&v.addEventListener(`wheel`,u,{passive:!0}),()=>{v.removeEventListener(`scroll`,l),r&&v.removeEventListener(`wheel`,u)}}},[v,_,h,n,C,g,r,t]);let w=0;return E((t,n)=>{w=C.offset,ot.damp(C,`offset`,S.current,o,n,s,void 0,e),ot.damp(C,`delta`,Math.abs(w-C.offset),o,n,s,void 0,e),C.delta>e&&g()}),Q.createElement(ct.Provider,{value:C},u)}var dt=e({color:new _(`white`),scale:new C(1,1),imageBounds:new C(1,1),resolution:1024,map:null,zoom:1,radius:0,grayscale:0,opacity:1},`
  varying vec2 vUv;
  varying vec2 vPos;
  void main() {
    gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.);
    vUv = uv;
    vPos = position.xy;
  }
`,`
  // mostly from https://gist.github.com/statico/df64c5d167362ecf7b34fca0b1459a44
  varying vec2 vUv;
  varying vec2 vPos;
  uniform vec2 scale;
  uniform vec2 imageBounds;
  uniform float resolution;
  uniform vec3 color;
  uniform sampler2D map;
  uniform float radius;
  uniform float zoom;
  uniform float grayscale;
  uniform float opacity;
  const vec3 luma = vec3(.299, 0.587, 0.114);
  vec4 toGrayscale(vec4 color, float intensity) {
    return vec4(mix(color.rgb, vec3(dot(color.rgb, luma)), intensity), color.a);
  }
  vec2 aspect(vec2 size) {
    return size / min(size.x, size.y);
  }
  
  const float PI = 3.14159265;
    
  // from https://iquilezles.org/articles/distfunctions
  float udRoundBox( vec2 p, vec2 b, float r ) {
    return length(max(abs(p)-b+r,0.0))-r;
  }

  void main() {
    vec2 s = aspect(scale);
    vec2 i = aspect(imageBounds);
    float rs = s.x / s.y;
    float ri = i.x / i.y;
    vec2 new = rs < ri ? vec2(i.x * s.y / i.y, s.y) : vec2(s.x, i.y * s.x / i.x);
    vec2 offset = (rs < ri ? vec2((new.x - s.x) / 2.0, 0.0) : vec2(0.0, (new.y - s.y) / 2.0)) / new;
    vec2 uv = vUv * s / new + offset;
    vec2 zUv = (uv - vec2(0.5, 0.5)) / zoom + vec2(0.5, 0.5);

    vec2 res = vec2(scale * resolution);
    vec2 halfRes = 0.5 * res;
    float b = udRoundBox(vUv.xy * res - halfRes, halfRes, resolution * radius);    
	  vec3 a = mix(vec3(1.0,0.0,0.0), vec3(0.0,0.0,0.0), smoothstep(0.0, 1.0, b));
    gl_FragColor = toGrayscale(texture2D(map, zUv) * vec4(color, opacity * a), grayscale);
    
    #include <tonemapping_fragment>
    #include <${t>=154?`colorspace_fragment`:`encodings_fragment`}>
  }
`),ft=Q.forwardRef(({children:e,color:t,segments:n=1,scale:r=1,zoom:i=1,grayscale:a=0,opacity:o=1,radius:c=0,texture:l,toneMapped:u,transparent:d,side:m,...h},g)=>{f({ImageMaterial:dt});let _=Q.useRef(null),v=p(e=>e.size),y=Array.isArray(r)?[r[0],r[1]]:[r,r],b=[l.image.width,l.image.height],x=Math.max(v.width,v.height);return Q.useImperativeHandle(g,()=>_.current,[]),Q.useLayoutEffect(()=>{_.current.geometry.parameters&&_.current.material.scale.set(y[0]*_.current.geometry.parameters.width,y[1]*_.current.geometry.parameters.height)},[y[0],y[1]]),Q.createElement(`mesh`,s({ref:_,scale:Array.isArray(r)?[...r,1]:r},h),Q.createElement(`planeGeometry`,{args:[1,1,n,n]}),Q.createElement(`imageMaterial`,{color:t,map:l,zoom:i,grayscale:a,opacity:o,scale:y,imageBounds:b,resolution:x,radius:c,toneMapped:u,transparent:d,side:m,key:dt.key}),e)}),pt=Q.forwardRef(({url:e,...t},r)=>{let i=n(e);return Q.createElement(ft,s({},t,{texture:i,ref:r}))}),mt=Q.forwardRef(({url:e,...t},n)=>Q.createElement(ft,s({},t,{ref:n}))),ht=Q.forwardRef((e,t)=>{if(e.url)return Q.createElement(pt,s({},e,{ref:t}));if(e.texture)return Q.createElement(mt,s({},e,{ref:t}));throw Error(`<Image /> requires a url or texture`)}),$=o(u()),gt=f(e({u_time:0,u_resolution:new m,u_aspect:0,u_noiseFreq:0,blur:0,speed:0},` varying vec2 vUv;
    uniform float u_time;
    uniform float u_noiseFreq;

    
vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
     return mod289(((x*34.0)+1.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}


 float snoise(vec3 v) {
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);
  
  // First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;
  
  // Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y
  
  // Permutations
  i = mod289(i);
  vec4 p = permute( permute( permute(
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));
           
  // Gradients: 7x7 points over a square, mapped onto an octahedron.
  // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);
  
  // Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;
  
  // Mix final noise value
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1),
                                dot(p2,x2), dot(p3,x3) ) );
}

 void main() {
   vUv = uv;

   vec3 pos = position;
   float noiseFreq = 10.5;
   float noiseAmp = 1.5; 
   vec3 noisePos = vec3(pos.x + u_time, pos.y, pos.z);
   pos.z += snoise(noisePos) * u_noiseFreq;

   gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0 );
 }`,`varying vec2 vUv;
    uniform float u_time;
    uniform float u_aspect;


float hue2rgb(float f1, float f2, float hue) {
    if (hue < 0.0)
        hue += 1.0;
    else if (hue > 1.0)
        hue -= 1.0;
    float res;
    if ((6.0 * hue) < 1.0)
        res = f1 + (f2 - f1) * 6.0 * hue;
    else if ((2.0 * hue) < 1.0)
        res = f2;
    else if ((3.0 * hue) < 2.0)
        res = f1 + (f2 - f1) * ((2.0 / 3.0) - hue) * 6.0;
    else
        res = f1;
    return res;
}

vec3 hsl2rgb(vec3 hsl) {
    vec3 rgb;
    
    if (hsl.y == 0.0) {
        rgb = vec3(hsl.z); // Luminance
    } else {
        float f2;
        
        if (hsl.z < 0.5)
            f2 = hsl.z * (1.0 + hsl.y);
        else
            f2 = hsl.z + hsl.y - hsl.y * hsl.z;
            
        float f1 = 2.0 * hsl.z - f2;
        
        rgb.r = hue2rgb(f1, f2, hsl.x + (1.0/3.0));
        rgb.g = hue2rgb(f1, f2, hsl.x);
        rgb.b = hue2rgb(f1, f2, hsl.x - (1.0/3.0));
    }   
    return rgb;
}

vec3 hsl2rgb(float h, float s, float l) {
    return hsl2rgb(vec3(h, s, l));
}

vec3 random3(vec3 c) {
	float j = 4096.0*sin(dot(c,vec3(17.0, 59.4, 15.0)));
	vec3 r;
	r.z = fract(512.0*j);
	j *= .125;
	r.x = fract(512.0*j);
	j *= .125;
	r.y = fract(512.0*j);
	return r-0.5;
}

const float F3 =  0.3333333;
const float G3 =  0.1666667;

float simplex3d(vec3 p) {
	 vec3 s = floor(p + dot(p, vec3(F3)));
	 vec3 x = p - s + dot(s, vec3(G3));
	 
	 vec3 e = step(vec3(0.0), x - x.yzx);
	 vec3 i1 = e*(1.0 - e.zxy);
	 vec3 i2 = 1.0 - e.zxy*(1.0 - e);
	 	
	 vec3 x1 = x - i1 + G3;
	 vec3 x2 = x - i2 + 2.0*G3;
	 vec3 x3 = x - 1.0 + 3.0*G3;
	 
	 vec4 w, d;
	 
	 w.x = dot(x, x);
	 w.y = dot(x1, x1);
	 w.z = dot(x2, x2);
	 w.w = dot(x3, x3);
	 
	 w = max(0.6 - w, 0.0);
	 
	 d.x = dot(random3(s), x);
	 d.y = dot(random3(s + i1), x1);
	 d.z = dot(random3(s + i2), x2);
	 d.w = dot(random3(s + 1.0), x3);
	 
	 w *= w;
	 w *= w;
	 d *= w;
	 
	 return dot(d, vec4(52.0));
}

float hash(vec2 p) { return fract(1e4 * sin(17.0 * p.x + p.y * 0.1) * (0.1 + abs(sin(p.y * 13.0 + p.x)))); }

uniform float blur;
uniform float speed;

    
void main() {

    vec2 center = vUv - 0.5;
	float dist = length(center);
    float alpha = smoothstep(0.5, blur, dist);
    float n = simplex3d(vec3(vUv.xy, u_time * speed));

    vec3 color = hsl2rgb(
        0.6 + n * 0.2,
        0.5,
        0.5
    );

    float val = hash(vUv + u_time);

	gl_FragColor = vec4(color + vec3(val / 20.), alpha);
}`));function _t(){let e=p(),t=(0,Q.useRef)(null);return E(e=>{t.current.uniforms.u_time.value=e.clock.getElapsedTime()}),(0,$.jsx)(`group`,{position:[0,-3,-10],children:(0,$.jsxs)(`mesh`,{children:[(0,$.jsx)(`planeGeometry`,{args:[6,6,16,16]}),(0,$.jsx)(gt,{transparent:!0,ref:t,wireframe:!1,u_aspect:e.viewport.aspect,blur:0,speed:.5,u_noiseFreq:1})]})})}var vt=a.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`,yt=f(class extends d{constructor(e,t,n,r,i){super(t,n,r,i);let a=this.parameters.width*.5,o=new C(-a,0),s=new C(0,e),c=new C(a,0),l=new C().subVectors(o,s),u=new C().subVectors(s,c),d=new C().subVectors(o,c),f=l.length()*u.length()*d.length()/(2*Math.abs(l.cross(d))),p=new C(0,e-f),m=(new C().subVectors(o,p).angle()-Math.PI*.5)*2,h=this.attributes.uv,g=this.attributes.position,_=new C;for(let e=0;e<h.count;e++){let t=h.getX(e),n=g.getY(e);_.copy(c).rotateAround(p,m*t),g.setXYZ(e,_.x,n,-_.y)}g.needsUpdate=!0}}),bt=a.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0.6;
`,xt=a.circle`
  @keyframes scroll-drop {
    0% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(15px);
      opacity: 0;
    }
  }

  animation: scroll-drop 1.5s ease-in-out infinite;
`;function St(){return(0,$.jsxs)(vt,{children:[(0,$.jsxs)(l,{camera:{position:[0,0,100],fov:15},children:[(0,$.jsx)(`fog`,{attach:`fog`,args:[`#6e6e6e`,8.5,12]}),(0,$.jsx)(ut,{pages:4,infinite:!0,children:(0,$.jsx)(Ct,{rotation:[0,0,.15],children:(0,$.jsx)(wt,{})})}),(0,$.jsx)(_t,{})]}),(0,$.jsx)(bt,{children:(0,$.jsxs)(`svg`,{width:`20`,height:`32.5`,viewBox:`0 0 40 65`,children:[(0,$.jsx)(`rect`,{x:`2.5`,y:`2.5`,width:`35`,height:`60`,rx:`17.5`,ry:`17.5`,fill:`none`,stroke:`currentColor`,strokeWidth:`3`}),(0,$.jsx)(xt,{cx:`20`,cy:`15`,r:`3`,fill:`currentColor`})]})})]})}function Ct(e){let t=(0,Q.useRef)(null),n=lt(),r=(0,Q.useRef)(new T(1,1,1));return E((e,i)=>{t.current.rotation.y=-n.offset*(Math.PI*2),e.events.update?.(),r.current.set(-e.pointer.x*2,e.pointer.y+1.5,10),e.camera.position.lerp(r.current,1-Math.exp(-8*i)),e.camera.lookAt(0,0,0)}),(0,$.jsx)(`group`,{ref:t,...e})}function wt({radius:e=1.4,count:t=8}){let n=r();return Array.from({length:t},(r,i)=>(0,$.jsx)(Tt,{url:`/demo_${i%4}.jpg`,position:[Math.sin(i/t*Math.PI*2)*e,0,Math.cos(i/t*Math.PI*2)*e],rotation:[0,Math.PI+i/t*Math.PI*2,0],onClick:e=>{e.stopPropagation(),n([`/demo0`,`/demo1`,`/demo2`,`/demo3`][i%4])}},i))}function Tt(e){let t=(0,Q.useRef)(null),n=(0,Q.useRef)(new T(1,1,1)),r=(0,Q.useRef)(.1),i=(0,Q.useRef)(1.5);return E((e,a)=>{t.current.scale.lerp(n.current,1-Math.exp(-10*a)),t.current.material.radius=g.lerp(t.current.material.radius,r.current,1-Math.exp(-8*a)),t.current.material.zoom=g.lerp(t.current.material.zoom,i.current,1-Math.exp(-8*a))}),(0,$.jsx)(ht,{ref:t,transparent:!0,toneMapped:!1,side:2,onPointerOver:e=>{e.stopPropagation(),n.current.setScalar(1.15),r.current=.25,i.current=1,document.body.style.cursor=`pointer`},onPointerOut:()=>{n.current.setScalar(1),r.current=.1,i.current=1.5,document.body.style.cursor=`auto`},...e,children:(0,$.jsx)(yt,{args:[.1,1,1,20,20]})})}export{St as default};
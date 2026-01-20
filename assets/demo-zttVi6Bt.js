import{$n as e,Ai as t,An as n,Bi as r,Da as i,Di as a,Dn as o,Dr as s,En as c,Fa as l,Hi as u,In as d,Ji as f,Kn as p,Na as m,Nn as h,Oa as g,On as _,Qi as v,Qr as y,Tn as ee,Vn as te,Zi as b,a as x,ar as S,br as ne,cr as C,di as w,jn as T,ka as re,kn as ie,qi as E,sa as D,t as O,ui as k,va as A,wn as j,xn as M,xr as N,ya as P,zn as F}from"./index-CJ2M65EH.js";import{n as ae,t as oe}from"./sc_outline-BI2yeJaI.js";import{n as se,t as ce}from"./sc_normal_map-Cq98S11n.js";var I=l(m()),L=l(g());function le(){let e=(0,I.useRef)(null);return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(`ambientLight`,{intensity:2}),(0,L.jsx)(`directionalLight`,{ref:e,intensity:12,position:[0,200,20],color:`#fff5e8`})]})}function R(e,t){return new Promise((n,r)=>{new D().load(e,e=>{t?.(e),n(e)},void 0,r)})}var z=R(`/assets/cloud-CNTXtzoi.png`),B=new k,V=new P,H=new r,U=new P,W=new r,G=new P;const K=(e,t)=>{e.updateRanges[0]=t};var q=(0,I.createContext)(null);const J=({children:e,range:t,limit:n=200,frustumCulled:i,...a})=>{let o=(0,I.useRef)(null),s=(0,I.useRef)([]),c=(0,I.useMemo)(()=>new Float32Array(Array.from({length:n},()=>1)),[n]),l=(0,I.useMemo)(()=>new Float32Array(Array.from({length:n},()=>[1,1,1]).flat()),[n]),u=(0,I.use)(z),d=0,f=0,p,m=new r,h=new P(0,0,1),g=new P;F((e,t)=>{for(d=e.clock.elapsedTime,B.copy(o.current.matrixWorld).invert(),e.camera.matrixWorld.decompose(U,W,G),f=0;f<s.current.length;f++)p=s.current[f],p.ref?.current.matrixWorld.decompose(V,H,G),V.add(g.copy(p.position).applyQuaternion(H).multiply(G)),H.copy(W).multiply(m.setFromAxisAngle(h,p.rotation+=t*p.rotationFactor)),G.multiplyScalar(p.volume+(1+Math.sin(d*p.density*p.speed))/2*p.growth),p.matrix.compose(V,H,G).premultiply(B),p.dist=V.distanceTo(U);for(s.current.sort((e,t)=>t.dist-e.dist),f=0;f<s.current.length;f++)p=s.current[f],c[f]=p.opacity*(p.dist<p.fade-1?p.dist/p.fade:1),o.current.setMatrixAt(f,p.matrix),o.current.setColorAt(f,p.color);o.current.geometry.attributes.cloudOpacity.needsUpdate=!0,o.current.instanceMatrix.needsUpdate=!0,o.current.instanceColor&&(o.current.instanceColor.needsUpdate=!0)}),(0,I.useLayoutEffect)(()=>{let e=Math.min(n,t===void 0?n:t,s.current.length);o.current.count=e,K(o.current.instanceMatrix,{start:0,count:e*16}),o.current.instanceColor&&K(o.current.instanceColor,{start:0,count:e*3}),K(o.current.geometry.attributes.cloudOpacity,{start:0,count:e})});let _=[u.image.width??1,u.image.height??1],v=Math.max(_[0],_[1]);return _=[_[0]/v,_[1]/v],(0,L.jsx)(`group`,{...a,children:(0,L.jsxs)(q.Provider,{value:s,children:[e,(0,L.jsxs)(`instancedMesh`,{matrixAutoUpdate:!1,ref:o,args:[void 0,void 0,n],frustumCulled:i,children:[(0,L.jsx)(`instancedBufferAttribute`,{usage:N,attach:`instanceColor`,args:[l,3]}),(0,L.jsx)(`planeGeometry`,{args:[..._],children:(0,L.jsx)(`instancedBufferAttribute`,{usage:N,attach:`attributes-cloudOpacity`,args:[c,1]})}),(0,L.jsx)(`meshLambertMaterial`,{transparent:!0,map:u,depthWrite:!1,onBeforeCompile:e=>{let t=parseInt(`181`.replace(/\D+/g,``))>=154?`opaque_fragment`:`output_fragment`;e.vertexShader=`attribute float cloudOpacity;
               varying float vOpacity;
              `+e.vertexShader.replace(`#include <fog_vertex>`,`#include <fog_vertex>
                 vOpacity = cloudOpacity;
                `),e.fragmentShader=`varying float vOpacity;
              `+e.fragmentShader.replace(`#include <${t}>`,`#include <${t}>
                 gl_FragColor = vec4(outgoingLight, diffuseColor.a * vOpacity);
                `)}})]})]})})},Y=({opacity:e=1,speed:t=0,bounds:n=[5,1,1],segments:r=20,color:i=`#ffffff`,fade:a=10,volume:o=6,smallestVolume:s=.25,distribute:c,growth:l=4,concentrate:u=`inside`,seed:f=Math.random(),ref:p,...m})=>{function h(){let e=Math.sin(f++)*1e4;return e-Math.floor(e)}let g=(0,I.useContext)(q),_=(0,I.useRef)(null),v=(0,I.useId)(),y=(0,I.useMemo)(()=>[...Array(r)].map((e,t)=>({segments:r,bounds:new P(1,1,1),position:new P,uuid:v,index:t,ref:_,dist:0,matrix:new k,color:new C,rotation:t*(Math.PI/r)})),[r,v]);return(0,I.useLayoutEffect)(()=>{y.forEach((f,p)=>{d(f,{volume:o,color:i,speed:t,growth:l,opacity:e,fade:a,bounds:n,density:Math.max(.5,h()),rotationFactor:Math.max(.2,.5*h())*t});let m=c?.(f,p);(m||r>1)&&f.position.copy(f.bounds).multiply(m?.point??{x:h()*2-1,y:h()*2-1,z:h()*2-1});let g=Math.abs(f.position.x),_=Math.abs(f.position.y),v=Math.abs(f.position.z),y=Math.max(g,_,v);f.length=1,g===y&&(f.length-=g/f.bounds.x),_===y&&(f.length-=_/f.bounds.y),v===y&&(f.length-=v/f.bounds.z),f.volume=(m?.volume===void 0?Math.max(Math.max(0,s),u===`random`?h():u===`inside`?f.length:1-f.length):m.volume)*o})},[u,n,a,i,e,l,o,f,r,t]),(0,I.useLayoutEffect)(()=>{let e=y;return g.current=[...g.current,...e],()=>{g.current=g.current.filter(e=>e.uuid!==v)}},[y]),(0,I.useImperativeHandle)(p,()=>_.current,[]),(0,L.jsx)(`group`,{ref:_,...m})},X=e=>(0,I.useContext)(q)?(0,L.jsx)(Y,{...e}):(0,L.jsx)(J,{children:(0,L.jsx)(Y,{...e})});function ue(){let e=(0,I.useRef)(null),t=(0,I.useRef)(null),n=M(e=>e.cloud);return F((n,r)=>{e.current.rotation.y=Math.cos(n.clock.elapsedTime/2)/2,e.current.rotation.x=Math.sin(n.clock.elapsedTime/2)/2,t.current.rotation.y-=r/5}),(0,L.jsxs)(J,{ref:e,visible:n,children:[(0,L.jsx)(X,{ref:t,bounds:[50,10,10],position:[100,60,20],volume:50,opacity:.5,fade:50}),(0,L.jsx)(X,{bounds:[50,10,10],position:[-60,60,60],volume:50,opacity:.5,fade:50})]})}function de(e){let{ref:t,args:n,bbox:r,children:i,...a}=e,o=(0,I.useRef)(null);return(0,I.useImperativeHandle)(t,()=>o.current),(0,I.useLayoutEffect)(()=>{let{geometry:e}=o.current,t=e.attributes.position,n=r.max.x-r.min.x,i=r.max.y-r.min.y,a=[],c=0,l=0,u=0,d=0;for(let e=0;e<t.count;e++)c=t.getX(e),l=t.getY(e),u=(c-r.min.x)/n,d=(l-r.min.y)/i,a.push(u,d);e.setAttribute(`uv`,new s(a,2))}),(0,L.jsxs)(`mesh`,{ref:o,...a,children:[(0,L.jsx)(`shapeGeometry`,{attach:`geometry`,args:n}),i]})}var fe=de,pe=i.div`
  background: rgba(255, 245, 232, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  padding: 12px 16px;
  color: #656565;
  font-size: 12px;
  pointer-events: none;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  min-width: 120px;
`,me=i.div`
  font-weight: bold;
  margin-bottom: 8px;
  color: #ea580c;
`,Z=i.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;

  &:last-child {
    margin-bottom: 0;
  }
`;function he(e){let{ref:t,data:n,position:r}=e,[i,a]=(0,I.useState)(!1);return(0,I.useImperativeHandle)(t,()=>({open:()=>a(!0),close:()=>a(!1)})),i&&(0,L.jsx)(T,{center:!0,position:r,distanceFactor:100,zIndexRange:[-499],style:{pointerEvents:`none`},children:(0,L.jsxs)(pe,{children:[(0,L.jsx)(me,{children:n.city}),(0,L.jsxs)(Z,{children:[(0,L.jsx)(`span`,{children:`人口:`}),(0,L.jsxs)(`span`,{children:[n.population,`万`]})]}),(0,L.jsxs)(Z,{children:[(0,L.jsx)(`span`,{children:`GDP:`}),(0,L.jsx)(`span`,{children:n.gdp})]}),(0,L.jsxs)(Z,{children:[(0,L.jsx)(`span`,{children:`面积:`}),(0,L.jsx)(`span`,{children:n.area})]})]})})}var ge=Promise.all([R(o),R(c,e=>{e.colorSpace=f,e.wrapS=e.wrapT=E})]);function _e(e){let{position:n,value:r=Math.floor(Math.random()*1e3)+100,children:i,uColor1:a=new C(16506760),uColor2:o=new C(15357964),dir:s=`y`,factor:c=5,max:l=1e3}=e,u={x:1,y:2,z:3},d=(0,I.useRef)(null),f=M(e=>e.bar),[p,m]=(0,I.use)(ge),h=(0,I.useMemo)(()=>4*c*(r/l),[]);F((e,t)=>{d.current.rotation.z+=t+.02});let g=(0,I.useRef)(null);return(0,I.useEffect)(()=>{let e=[0,60,120],n=new t;e.forEach((e,t)=>{n.rotation.set(Math.PI/2,Math.PI/180*e,0),n.updateMatrix(),g.current.setMatrixAt(t,n.matrix)}),g.current.instanceMatrix.needsUpdate=!0},[]),(0,L.jsxs)(`group`,{visible:f,position:n,children:[(0,L.jsxs)(`mesh`,{renderOrder:5,position:[0,0,h/2],raycast:()=>null,children:[(0,L.jsxs)(`instancedMesh`,{ref:g,matrixAutoUpdate:!1,args:[void 0,void 0,3],renderOrder:10,"rotation-x":Math.PI/2,raycast:()=>null,children:[(0,L.jsx)(`planeGeometry`,{args:[3.5,h]}),(0,L.jsx)(`meshBasicMaterial`,{transparent:!0,color:o,map:m,opacity:.4,depthWrite:!1,side:2,blending:2})]}),(0,L.jsx)(`boxGeometry`,{args:[.1*c,.1*c,h],translate:[0,0,h/2]}),(0,L.jsx)(`meshBasicMaterial`,{transparent:!0,color:`#ffffff`,opacity:1,depthTest:!1,fog:!1,onBeforeCompile:e=>{e.uniforms={...e.uniforms,uColor1:{value:a},uColor2:{value:o},uDir:{value:u[s]},uSize:{value:h}},e.vertexShader=e.vertexShader.replace(`void main() {`,`
                attribute float alpha;
                varying vec3 vPosition;
                varying float vAlpha;
                void main() {
                  vAlpha = alpha;
                  vPosition = position;
              `),e.fragmentShader=e.fragmentShader.replace(`void main() {`,`
                varying vec3 vPosition;
                varying float vAlpha;
                uniform vec3 uColor1;
                uniform vec3 uColor2;
                uniform float uDir;
                uniform float uSize;

                void main() {
              `),e.fragmentShader=e.fragmentShader.replace(`#include <opaque_fragment>`,`
              #ifdef OPAQUE
              diffuseColor.a = 1.0;
              #endif

              // https://github.com/mrdoob/three.js/pull/22425
              #ifdef USE_TRANSMISSION
              diffuseColor.a *= transmissionAlpha + 0.1;
              #endif
              // vec3 gradient = mix(uColor1, uColor2, vPosition.x / 15.0);
              vec3 gradient = vec3(0.0,0.0,0.0);
              if(uDir==1.0){
                gradient = mix(uColor1, uColor2, vPosition.x/ uSize);
              }else if(uDir==2.0){
                gradient = mix(uColor1, uColor2, vPosition.z/ uSize);
              }else if(uDir==3.0){
                gradient = mix(uColor1, uColor2, vPosition.y/ uSize);
              }
              outgoingLight = outgoingLight * gradient;

              gl_FragColor = vec4( outgoingLight, diffuseColor.a  );
              `)}})]}),(0,L.jsxs)(`mesh`,{renderOrder:6,ref:d,raycast:()=>null,children:[(0,L.jsx)(`planeGeometry`,{args:[5,5]}),(0,L.jsx)(`meshBasicMaterial`,{transparent:!0,color:16777215,map:p,alphaMap:p,opacity:1,depthTest:!1,fog:!1,blending:2})]}),typeof i==`function`?i?.(h):i]})}var ve=i(T)`
  pointer-events: none;
  width: max-content;
  display: flex;
  background: #ffffff;
  border: 1px solid currentColor;
  color: #fdb961;
  font-size: 14px;
  padding-inline: 4px;
  border-radius: 4px;
`;function ye(e){let{data:t,bbox:n,depth:r,map:i,normalMap:a}=e,o=(0,I.useRef)(null),s=(0,I.useRef)(null),c=(0,I.useRef)(new P(1,1,1)),[l,u]=(0,I.useMemo)(()=>{let e=t.points.map(e=>new b(e)),n=new v(e);return[e,n]},[t.points]);return F(()=>{o.current.scale.lerp(c.current,.1)}),(0,L.jsxs)(`group`,{ref:o,onPointerOver:e=>{e.stopPropagation(),c.current.setZ(1.5),s.current.open(),document.body.style.cursor=`pointer`},onPointerOut:()=>{c.current.setZ(1),s.current.close(),document.body.style.cursor=`auto`},children:[(0,L.jsx)(fe,{"position-z":r+.1,bbox:n,args:[l],children:(0,L.jsx)(`meshStandardMaterial`,{map:i,normalMap:a})}),(0,L.jsxs)(`mesh`,{castShadow:!0,receiveShadow:!0,children:[(0,L.jsx)(`extrudeGeometry`,{args:[l,{depth:r,steps:1,bevelEnabled:!1}]}),(0,L.jsx)(`meshStandardMaterial`,{transparent:!0,opacity:0,metalness:.2,roughness:.5,side:2,color:`#f9f3e7`})]}),(0,L.jsxs)(`lineSegments`,{"position-z":r+.2,raycast:()=>null,children:[(0,L.jsx)(`edgesGeometry`,{args:[u]}),(0,L.jsx)(`lineBasicMaterial`,{transparent:!0,opacity:0,color:`#ffffff`})]}),(0,L.jsx)(_e,{position:t.cityId,value:x[t.city]?.population??0,children:e=>(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(ve,{center:!0,position:[0,0,e+.2],distanceFactor:100,zIndexRange:[-900],children:t.city}),(0,L.jsx)(he,{ref:s,data:{city:t.city,...x[t.city]},position:[0,0,e+7],visible:!1})]})})]})}var Q=l(ee());function be(e){let{projection:t,size:n=500,...r}=e,i=(0,I.useRef)(null),a=M(e=>e.heat);return(0,I.useEffect)(()=>{let e=document.createElement(`div`);e.style=`position:absolute;top:-9999px;left:-9999px;`,document.body.appendChild(e);let r=Q.default.create({container:e,gradient:{.5:`#1fc2e1`,.6:`#24d560`,.7:`#9cd522`,.8:`#f1e12a`,.9:`#ffbf3a`,1:`#ff0000`},blur:1,radius:10,maxOpacity:1,width:n,height:n}),a=Q.default.create({container:e,gradient:{0:`black`,1:`white`},radius:10,maxOpacity:1,width:n,height:n}),o=j.features.map(e=>{let[r=0,i=0]=t(e.geometry.coordinates)??[];return{x:Math.floor(r+n/2),y:Math.floor(i+n/2),value:e.properties.value}}),s=1e3,c=2e3;r.setData({max:s,min:c,data:o}),a.setData({max:s,min:c,data:o});let l=new S(r._renderer.canvas);l.needsUpdate=!0;let u=new S(a._renderer.canvas);return u.needsUpdate=!0,i.current.material.uniforms.heatMap.value=l,i.current.material.uniforms.greyMap.value=u,()=>{a._renderer.canvas.remove(),a._renderer.canvas.remove(),document.body.removeChild(e)}},[]),(0,L.jsx)(`group`,{visible:a,...r,children:(0,L.jsxs)(`mesh`,{ref:i,children:[(0,L.jsx)(`planeGeometry`,{args:[n,n,300,300]}),(0,L.jsx)(`shaderMaterial`,{transparent:!0,side:2,vertexShader:`
            varying vec2 vUv;
            uniform float z_scale;
            uniform sampler2D greyMap;
            void main() {
                vUv = uv;
                vec4 frgColor = texture2D(greyMap, uv);
                float height = z_scale * frgColor.a;
                vec3 transformed = vec3( position.x, position.y, height);
                gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
            }
        `,fragmentShader:`
            #ifdef GL_ES
            precision highp float;
            #endif
            varying vec2 vUv;
            uniform sampler2D heatMap;
            uniform vec3 u_color;//基础颜色
            uniform float u_opacity; // 透明度
            void main() {
                gl_FragColor = vec4(u_color, u_opacity) * texture2D(heatMap, vUv);
            }
        `,uniforms:{heatMap:{value:{value:void 0}},greyMap:{value:{value:void 0}},z_scale:{value:4},u_color:{value:new C(`#ffffff`)},u_opacity:{value:1}}})]})})}var $=Promise.all([R(se,e=>{e.wrapS=e.wrapT=E}),R(ce,e=>{e.wrapS=e.wrapT=E})]);function xe(t){let{data:n,depth:r=6}=t,i=(0,I.useRef)(null),a=te(e=>e.camera),[o,s]=(0,I.use)($),c=(0,I.useMemo)(()=>_().center(n.features[0].properties.centroid).scale(1e3).translate([0,0]),[n]),{regions:l,bbox:u}=(0,I.useMemo)(()=>{let t=[],i=new e,a=e=>{let[t,n]=c(e),r=new A(t,-n);return i.expandByPoint(r),r};return n.features.forEach(e=>{let n=e.geometry.coordinates.reduce((e,t)=>[...e,...t.map(e=>e.map(a))],[]),[i,o]=c(e.properties.centroid??e.properties.center);t.push({city:e.properties.name,cityId:[i,-o,r+.1],points:n})}),{regions:t,bbox:i}},[c,n,r]);return(0,I.useLayoutEffect)(()=>{if(!i.current)return;let e=re.timeline({onComplete:()=>{M.setState({mapPlayComplete:!0})}});return e.to(a.position,{x:60,y:125,z:160,duration:2,ease:`circ.out`}),e.to(i.current.scale,{x:1,y:1,z:1,duration:1,ease:`circ.out`},2),i.current.traverse(t=>{(t instanceof w||t instanceof y)&&e.to(t.material,{opacity:1,duration:1,ease:`circ.out`},2)}),()=>{e.kill()}},[a]),(0,L.jsxs)(`group`,{ref:i,rotation:[-Math.PI/2,0,0],"scale-z":.01,"position-x":20,children:[l.map((e,t)=>(0,L.jsx)(ye,{depth:r,bbox:u,data:e,map:o,normalMap:s},t)),(0,L.jsx)(be,{renderOrder:11,projection:c,"position-z":r+1})]})}var Se=Promise.all([R(`/assets/gaoguang1-DEGqXsnZ.png`,e=>{e.colorSpace=f,e.wrapS=e.wrapT=E,e.repeat.set(1,1)}),R(`/assets/grid-CwTkbZjd.png`,e=>{e.wrapS=e.wrapT=E,e.repeat.set(80,80)}),R(`/assets/gridBlack-D2rBj0ur.png`,e=>{e.wrapS=e.wrapT=E,e.repeat.set(80,80)}),R(`/assets/rotationBorder1-CAivvQWo.png`),R(`/assets/rotationBorder2-B1TYmmxk.png`)]);function Ce(){let e=(0,I.useRef)({uTime:{value:0},uSpeed:{value:10},uWidth:{value:20},uColor:{value:new C(15357964)},uDir:{value:2}}),t=(0,I.useRef)(null),n=(0,I.useRef)(null),r=M(e=>e.rotation),[i,a,o,s,c]=(0,I.use)(Se);return F((r,i)=>{e.current.uTime.value+=i*10,e.current.uTime.value>100&&(e.current.uTime.value=0),t.current.rotation.z+=.001,n.current.rotation.z+=-.004}),(0,L.jsxs)(`group`,{visible:r,"rotation-x":-Math.PI/2,"position-y":-.1,children:[(0,L.jsxs)(`mesh`,{children:[(0,L.jsx)(`planeGeometry`,{args:[300,300]}),(0,L.jsx)(`meshBasicMaterial`,{transparent:!0,blending:1,map:i,color:`#fbdf88`})]}),(0,L.jsxs)(`mesh`,{ref:t,"position-z":.1,children:[(0,L.jsx)(`planeGeometry`,{args:[240,240]}),(0,L.jsx)(`meshBasicMaterial`,{transparent:!0,map:s,color:`#fbdf88`,opacity:.2,depthWrite:!1,blending:1})]}),(0,L.jsxs)(`mesh`,{ref:n,"position-z":.1,children:[(0,L.jsx)(`planeGeometry`,{args:[225,225]}),(0,L.jsx)(`meshBasicMaterial`,{transparent:!0,map:c,color:`#fbdf88`,opacity:.4,depthWrite:!1,blending:1})]}),(0,L.jsxs)(`mesh`,{"position-z":.05,children:[(0,L.jsx)(`planeGeometry`,{args:[1e3,1e3]}),(0,L.jsx)(`meshBasicMaterial`,{transparent:!0,map:a,alphaMap:o,color:`#fbdf88`,opacity:.1,depthWrite:!1,blending:1})]}),(0,L.jsxs)(`mesh`,{"position-z":.05,children:[(0,L.jsx)(`planeGeometry`,{args:[1e3,1e3]}),(0,L.jsx)(`meshBasicMaterial`,{transparent:!0,map:a,alphaMap:o,color:`#ea580c`,opacity:.5,depthWrite:!1,blending:1,onBeforeCompile:t=>{t.uniforms={...t.uniforms,...e.current},t.vertexShader=t.vertexShader.replace(`void main() {`,`
                varying vec3 vPosition;
                void main(){
                vPosition = position;
            `),t.fragmentShader=t.fragmentShader.replace(`void main() {`,`
                uniform float uTime;
                uniform float uSpeed;
                uniform float uWidth;
                uniform vec3 uColor;
                uniform float uDir;
                varying vec3 vPosition;
                
                void main(){
            `),t.fragmentShader=t.fragmentShader.replace(`#include <opaque_fragment>`,`
                #ifdef OPAQUE
                diffuseColor.a = 1.0;
                #endif
                
                #ifdef USE_TRANSMISSION
                diffuseColor.a *= material.transmissionAlpha;
                #endif
                
                float r = uTime * uSpeed;
                //光环宽度
                float w = 0.0; 
                if(w>uWidth){
                    w = uWidth;
                }else{
                    w = uTime * 5.0;
                }
                //几何中心点
                vec2 center = vec2(0.0, 0.0); 
                // 距离圆心的距离
                float rDistance = distance(vPosition.xz, center);
                if(uDir==2.0){
                    rDistance = distance(vPosition.xy, center);
                }
                if(rDistance > r && rDistance < r + 2.0 * w) {
                float per = 0.0;
                if(rDistance < r + w) {
                    per = (rDistance - r) / w;
                    outgoingLight = mix(outgoingLight, uColor, per);
                    // 获取0->透明度的插值
                    float alphaV = mix(0.0,diffuseColor.a,per);
                    gl_FragColor = vec4(outgoingLight,  alphaV);
                } else {
                    per = (rDistance - r - w) / w;
                    outgoingLight = mix(uColor, outgoingLight, per);
                    // 获取0->透明度的插值
                    float alphaV = mix(diffuseColor.a,0.0,per);
                    gl_FragColor = vec4(outgoingLight,  alphaV);
                }
                } else {
                    gl_FragColor = vec4(outgoingLight, 0.0);
                }
            `)}})]})]})}var we=ae,Te=oe;function Ee(){return(0,L.jsxs)(I.Suspense,{fallback:null,children:[(0,L.jsx)(ue,{}),(0,L.jsx)(xe,{data:we,outlineData:Te}),(0,L.jsx)(Ce,{})]})}var De=i.div`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
`;function Oe(){return(0,L.jsx)(De,{children:(0,L.jsxs)(h,{flat:!0,shadows:!0,camera:{position:[-50,125,250],fov:50,far:2e3,near:1},dpr:[1,2],children:[(0,L.jsx)(`color`,{attach:`background`,args:[`#fff5e8`]}),(0,L.jsx)(le,{}),(0,L.jsx)(Ee,{}),(0,L.jsx)(ie,{opacity:.5,scale:300,blur:.5,resolution:256,color:`#000000`}),(0,L.jsx)(n,{enablePan:!0,enableZoom:!0,enableRotate:!0,zoomSpeed:.3,minDistance:100,maxDistance:300,maxPolarAngle:1.5})]})})}var ke=i.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`;function Ae(){return(0,I.useEffect)(()=>M.getState().reset(),[]),(0,L.jsxs)(ke,{children:[(0,L.jsx)(Oe,{}),(0,L.jsx)(O,{})]})}export{Ae as default};
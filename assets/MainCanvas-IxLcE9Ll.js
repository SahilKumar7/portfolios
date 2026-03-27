import{f as E,r as m,b as g,M,V as P,j as n,g as B,w as D,y as L,h as b,U,G,q as V,A as N,B as q,k as y,D as z,l as Y,m as C,n as H,I as X,E as Z,O,S as Q,C as $}from"./vendor-three-BDMj-JYN.js";const j=[{pos:[0,1.6,0],look:[0,2,-20]},{pos:[.5,1.8,-8],look:[-.5,2,-28]},{pos:[-.3,1.6,-16],look:[.3,1.8,-36]},{pos:[.4,1.7,-24],look:[-.2,2.2,-44]},{pos:[-.2,1.6,-32],look:[.2,1.8,-52]},{pos:[0,1.8,-42],look:[0,2.5,-60]}],J=[-8,-20,-32,-44],A=new P,S=new P;function K({progress:i=0}){const{camera:t}=E(),a=m.useRef({x:0,y:0}),u=m.useRef({x:0,y:0});return m.useEffect(()=>{const l=o=>{a.current.x=(o.clientX/window.innerWidth-.5)*2,a.current.y=(o.clientY/window.innerHeight-.5)*2};return window.addEventListener("mousemove",l,{passive:!0}),()=>window.removeEventListener("mousemove",l)},[]),g(l=>{const o=Math.max(0,Math.min(i,.999)),d=j.length-1,c=o*d,f=Math.floor(c),v=c-f,e=j[f],h=j[Math.min(f+1,d)],r=v*v*(3-2*v),x=a.current.x*.2,s=a.current.y*-.1,p=l.clock.elapsedTime,w=M.lerp(e.pos[2],h.pos[2],r);let T=0;for(const W of J){const R=Math.abs(w-W);R<4&&(T=Math.max(T,(1-R/4)*.06))}u.current.x=Math.sin(p*15)*T,u.current.y=Math.cos(p*12)*T,A.set(M.lerp(e.pos[0],h.pos[0],r)+x+u.current.x,M.lerp(e.pos[1],h.pos[1],r)+s+u.current.y,w),S.set(M.lerp(e.look[0],h.look[0],r),M.lerp(e.look[1],h.look[1],r),M.lerp(e.look[2],h.look[2],r)),t.position.lerp(A,.15),t.lookAt(S)}),null}function ee({tier:i="high"}){return n.jsxs(B,{multisampling:0,children:[n.jsx(D,{intensity:i==="low"?.1:.2,luminanceThreshold:i==="low"?.7:.5,luminanceSmoothing:.8,mipmapBlur:!0}),i!=="low"&&n.jsx(L,{offset:new b(8e-4,6e-4),radialModulation:!0,modulationOffset:.2}),i==="high"&&n.jsx(U,{delay:new b(8,15),duration:new b(.1,.3),strength:new b(.01,.03),mode:G.SPORADIC,active:!0,ratio:.85}),n.jsx(V,{darkness:.75,offset:.25}),i!=="low"&&n.jsx(N,{opacity:.02,blendFunction:q.SOFT_LIGHT})]})}const ne=`uniform float uTime;
varying vec2 vWorldPos;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

void main() {
  vec4 worldPos = modelMatrix * vec4(position, 1.0);

  float displacement = noise(worldPos.xz * 0.15 + uTime * 0.05) * 0.8;
  float crack = smoothstep(0.55, 0.65, noise(worldPos.xz * 0.08));
  worldPos.y += displacement * crack * 0.5;

  vWorldPos = worldPos.xz;
  gl_Position = projectionMatrix * viewMatrix * worldPos;
}
`,oe=`uniform float uTime;
uniform float uFadeDistance;
uniform vec3 uLineColor;
uniform vec3 uFractureColor;
uniform float uLineAlpha;

varying vec2 vWorldPos;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

void main() {
  vec2 coord = vWorldPos * 0.5;
  vec2 grid = abs(fract(coord - 0.5) - 0.5) / fwidth(coord);
  float line = min(grid.x, grid.y);
  float gridMask = 1.0 - min(line, 1.0);

  float dist = length(vWorldPos);
  float fade = 1.0 - smoothstep(3.0, uFadeDistance, dist);

  float crack = smoothstep(0.55, 0.65, noise(vWorldPos * 0.08));
  float crackEdge = smoothstep(0.5, 0.55, noise(vWorldPos * 0.08)) * (1.0 - crack);

  float alpha = gridMask * fade * uLineAlpha * (1.0 - crack * 0.7);

  vec3 color = mix(uLineColor, uFractureColor, crackEdge * 0.8);
  float crackGlow = crackEdge * 0.3 * (0.7 + 0.3 * sin(uTime + vWorldPos.x * 0.5));
  alpha += crackGlow * fade;

  gl_FragColor = vec4(color, alpha);
}
`,te={high:64,medium:32,low:16};function re({tier:i="high"}){const t=m.useRef(),a=te[i]||32,u=m.useMemo(()=>({uTime:{value:0},uFadeDistance:{value:45},uLineColor:{value:new y("#151530")},uFractureColor:{value:new y("#6366f1")},uLineAlpha:{value:.12}}),[]);return g(l=>{u.uTime.value=l.clock.elapsedTime}),n.jsxs("mesh",{rotation:[-Math.PI/2,0,0],position:[0,-.1,-25],children:[n.jsx("planeGeometry",{args:[140,140,a,a]}),n.jsx("shaderMaterial",{ref:t,vertexShader:ne,fragmentShader:oe,uniforms:u,transparent:!0,depthWrite:!1,side:z})]})}const se=`attribute float aSize;
attribute float aOffset;
attribute vec3 aColor;

uniform float uTime;
uniform float uPixelRatio;

varying vec3 vColor;
varying float vAlpha;

float hash(float n) {
  return fract(sin(n) * 43758.5453);
}

void main() {
  vColor = aColor;

  vec3 pos = position;

  float glitchCycle = floor(uTime * 0.5 + aOffset * 10.0);
  float glitchTrigger = step(0.85, hash(glitchCycle + aOffset * 100.0));
  float glitchPhase = fract(uTime * 0.5 + aOffset * 10.0);
  float glitchActive = glitchTrigger * step(glitchPhase, 0.1);

  vec3 glitchOffset = vec3(
    (hash(glitchCycle * 1.1 + aOffset) - 0.5) * 4.0,
    (hash(glitchCycle * 2.2 + aOffset) - 0.5) * 2.0,
    (hash(glitchCycle * 3.3 + aOffset) - 0.5) * 4.0
  );
  pos += glitchOffset * glitchActive;

  pos.y += sin(uTime * 0.3 + aOffset * 6.28) * 0.15;
  pos.x += cos(uTime * 0.2 + aOffset * 3.14) * 0.1;

  vAlpha = 0.3 + 0.4 * sin(uTime * 0.8 + aOffset * 12.0);
  vAlpha = mix(vAlpha, 1.0, glitchActive);

  vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mvPos;
  gl_PointSize = aSize * uPixelRatio * (80.0 / -mvPos.z);
}
`,k={high:500,medium:300,low:150},ae=`
  varying vec3 vColor;
  varying float vAlpha;

  void main() {
    float d = length(gl_PointCoord - 0.5);
    if (d > 0.5) discard;
    float fade = 1.0 - smoothstep(0.2, 0.5, d);
    gl_FragColor = vec4(vColor, vAlpha * fade);
  }
`;function ie({tier:i="high"}){const t=m.useRef(),a=k[i]||k.medium,{geometry:u,uniforms:l}=m.useMemo(()=>{const o=new Float32Array(a*3),d=new Float32Array(a),c=new Float32Array(a),f=new Float32Array(a*3),v=new y("#6366f1"),e=new y("#22d3ee"),h=new y("#a855f7"),r=[v,e,h];for(let p=0;p<a;p++){o[p*3]=(Math.random()-.5)*16,o[p*3+1]=Math.random()*7,o[p*3+2]=Math.random()*-55,d[p]=.5+Math.random()*2,c[p]=Math.random();const w=r[Math.floor(Math.random()*3)];f[p*3]=w.r,f[p*3+1]=w.g,f[p*3+2]=w.b}const x=new Y;x.setAttribute("position",new C(o,3)),x.setAttribute("aSize",new C(d,1)),x.setAttribute("aOffset",new C(c,1)),x.setAttribute("aColor",new C(f,3));const s={uTime:{value:0},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)}};return{geometry:x,uniforms:s}},[a]);return g(o=>{l.uTime.value=o.clock.elapsedTime}),n.jsx("points",{ref:t,geometry:u,children:n.jsx("shaderMaterial",{vertexShader:se,fragmentShader:ae,uniforms:l,transparent:!0,depthWrite:!1,blending:H})})}const ce=`attribute vec3 aBarycentric;
varying vec3 vBarycentric;
varying vec3 vWorldPos;
varying vec3 vNormal;

void main() {
  vBarycentric = aBarycentric;
  vec4 worldPos = modelMatrix * vec4(position, 1.0);
  vWorldPos = worldPos.xyz;
  vNormal = normalize(normalMatrix * normal);
  gl_Position = projectionMatrix * viewMatrix * worldPos;
}
`,le=`uniform float uTime;
uniform vec3 uFractureColor;
uniform vec3 uCyanColor;
uniform float uEdgeWidth;

varying vec3 vBarycentric;
varying vec3 vWorldPos;
varying vec3 vNormal;

void main() {
  float edge = min(min(vBarycentric.x, vBarycentric.y), vBarycentric.z);
  float edgeFactor = 1.0 - smoothstep(0.0, uEdgeWidth, edge);

  float pulse = 0.6 + 0.4 * sin(uTime * 1.5 + vWorldPos.z * 0.3);
  vec3 edgeColor = mix(uFractureColor, uCyanColor, sin(vWorldPos.y * 2.0 + uTime) * 0.5 + 0.5);

  vec3 bodyColor = vec3(0.02, 0.02, 0.06);
  float bodyAlpha = 0.15;

  float fresnel = pow(1.0 - abs(dot(normalize(vNormal), vec3(0.0, 0.0, 1.0))), 3.0);
  bodyColor += uFractureColor * fresnel * 0.1;

  vec3 finalColor = mix(bodyColor, edgeColor * pulse, edgeFactor);
  float finalAlpha = mix(bodyAlpha, 0.9, edgeFactor);

  gl_FragColor = vec4(finalColor, finalAlpha);
}
`,F={high:28,medium:18,low:10};function fe(i){let t=Math.sin(i*127.1+311.7)*43758.5453;return t-Math.floor(t)}function ue({tier:i="high"}){const t=m.useRef(),a=F[i]||F.medium,{geometry:u,uniforms:l,shardData:o}=m.useMemo(()=>{const c=new X(.45,0),v=c.attributes.position.count,e=new Float32Array(v*3);for(let s=0;s<v;s+=3)e[s*3]=1,e[s*3+1]=0,e[s*3+2]=0,e[(s+1)*3]=0,e[(s+1)*3+1]=1,e[(s+1)*3+2]=0,e[(s+2)*3]=0,e[(s+2)*3+1]=0,e[(s+2)*3+2]=1;c.setAttribute("aBarycentric",new C(e,3));const h=[],r=fe;for(let s=0;s<a;s++)h.push({pos:new P((r(s*2.2)-.5)*14,r(s*3.3)*5+.5,r(s*1.1)*-50),baseY:r(s*3.3)*5+.5,scale:.5+r(s*4.4)*1.5,rotSpeed:new P((r(s*5.5)-.5)*.003,(r(s*6.6)-.5)*.004,(r(s*7.7)-.5)*.002),rot:new Z(r(s*8.8)*Math.PI*2,r(s*9.9)*Math.PI*2,r(s*10.1)*Math.PI*2),edgeWidth:.04+r(s*3.7)*.03});const x={uTime:{value:0},uFractureColor:{value:new y("#6366f1")},uCyanColor:{value:new y("#22d3ee")},uEdgeWidth:{value:.05}};return{geometry:c,uniforms:x,shardData:h}},[a]),d=m.useMemo(()=>new O,[]);return g(c=>{if(!t.current)return;const f=c.clock.elapsedTime;l.uTime.value=f;for(let v=0;v<a;v++){const e=o[v];e.rot.x+=e.rotSpeed.x,e.rot.y+=e.rotSpeed.y,e.rot.z+=e.rotSpeed.z,d.position.set(e.pos.x,e.baseY+Math.sin(f*.4+v*1.3)*.15,e.pos.z),d.rotation.copy(e.rot),d.scale.setScalar(e.scale),d.updateMatrix(),t.current.setMatrixAt(v,d.matrix)}t.current.instanceMatrix.needsUpdate=!0}),n.jsx("instancedMesh",{ref:t,args:[u,void 0,a],frustumCulled:!1,children:n.jsx("shaderMaterial",{vertexShader:ce,fragmentShader:le,uniforms:l,transparent:!0,depthWrite:!1,side:z})})}const de=`uniform float uTime;
varying vec2 vUv;
varying vec3 vWorldPos;

vec3 mod289(vec3 x) { return x - floor(x / 289.0) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x / 289.0) * 289.0; }
vec4 permute(vec4 x) { return mod289((x * 34.0 + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}

void main() {
  vUv = uv;
  vec3 pos = position;
  float noise = snoise(vec3(pos.x * 2.0, pos.y * 2.0, uTime * 0.5));
  pos += normal * noise * 0.3;
  vec4 worldPos = modelMatrix * vec4(pos, 1.0);
  vWorldPos = worldPos.xyz;
  gl_Position = projectionMatrix * viewMatrix * worldPos;
}
`,ve=`uniform float uTime;
uniform vec3 uFractureColor;
uniform vec3 uRiftColor;
uniform vec3 uCyanColor;

varying vec2 vUv;
varying vec3 vWorldPos;

#define PI 3.14159265359

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p) {
  float val = 0.0;
  float amp = 0.5;
  for (int i = 0; i < 3; i++) {
    val += amp * noise(p);
    p *= 2.0;
    amp *= 0.5;
  }
  return val;
}

void main() {
  vec2 center = vUv - 0.5;
  float angle = atan(center.y, center.x);
  float dist = length(center);

  float swirl = angle + uTime * 1.5 + fbm(vec2(dist * 4.0, uTime * 0.3)) * 4.0;
  float pattern = sin(swirl * 3.0) * 0.5 + 0.5;

  float ring = smoothstep(0.1, 0.2, dist) * smoothstep(0.5, 0.35, dist);

  float energy = pattern * ring;
  energy += fbm(vec2(angle * 2.0, dist * 5.0 - uTime)) * ring * 0.4;

  vec3 col = mix(uFractureColor, uRiftColor, pattern);
  col = mix(col, uCyanColor, smoothstep(0.3, 0.5, dist) * 0.6);

  float glow = exp(-dist * 3.0) * 0.3;
  col += uRiftColor * glow;

  float alpha = energy * 0.8 + glow;
  alpha *= smoothstep(0.5, 0.4, dist);

  gl_FragColor = vec4(col, alpha);
}
`,me=[{pos:[0,2.5,-8],scale:2.5,rotAxis:[.1,1,.2]},{pos:[-3,3,-20],scale:2,rotAxis:[.3,.8,.1]},{pos:[2,2,-32],scale:2.2,rotAxis:[-.1,1,.3]},{pos:[0,3.5,-44],scale:3,rotAxis:[0,1,0]}],he={high:4,medium:2,low:1},pe={high:10,medium:5,low:0},_={high:[32,64],medium:[24,32],low:[16,24]};function xe({center:i,count:t,radius:a}){const u=m.useRef(),{positions:l,dummy:o}=m.useMemo(()=>{const d=[];for(let c=0;c<t;c++){const f=c/t*Math.PI*2;d.push({angle:f,speed:.3+Math.sin(c*127.1)*43758.5453%1*.4,r:a+(Math.sin(c*311.7)*43758.5453%1-.5)*.5})}return{positions:d,dummy:new O}},[t,a]);return g(d=>{if(!u.current)return;const c=d.clock.elapsedTime;for(let f=0;f<t;f++){const v=l[f],e=v.angle+c*v.speed;o.position.set(i[0]+Math.cos(e)*v.r,i[1]+Math.sin(e*.7)*.3,i[2]+Math.sin(e)*v.r),o.scale.setScalar(.02+Math.sin(c*2+f)*.008),o.updateMatrix(),u.current.setMatrixAt(f,o.matrix)}u.current.instanceMatrix.needsUpdate=!0}),n.jsxs("instancedMesh",{ref:u,args:[void 0,void 0,t],children:[n.jsx("sphereGeometry",{args:[1,4,4]}),n.jsx("meshBasicMaterial",{color:"#a855f7",transparent:!0,opacity:.8})]})}function ye({tier:i="high"}){const t=he[i]||2,a=pe[i]||5,[u,l]=_[i]||_.medium,o=m.useMemo(()=>me.slice(0,t),[t]),d=m.useRef([]),c=m.useRef([]),f=m.useMemo(()=>o.map(()=>({uTime:{value:0},uFractureColor:{value:new y("#6366f1")},uRiftColor:{value:new y("#a855f7")},uCyanColor:{value:new y("#22d3ee")}})),[o]),v=m.useMemo(()=>o.map(e=>new P(...e.rotAxis).normalize()),[o]);return g(e=>{const h=e.clock.elapsedTime;for(let r=0;r<o.length;r++){f[r].uTime.value=h;const x=d.current[r];x&&x.rotateOnAxis(v[r],.003);const s=c.current[r];s&&(s.intensity=.5+Math.sin(h*1.2+o[r].pos[2])*.2)}}),n.jsx("group",{children:o.map((e,h)=>n.jsxs("group",{position:e.pos,children:[n.jsxs("mesh",{ref:r=>d.current[h]=r,scale:e.scale,children:[n.jsx("torusGeometry",{args:[1,.4,u,l]}),n.jsx("shaderMaterial",{vertexShader:de,fragmentShader:ve,uniforms:f[h],transparent:!0,depthWrite:!1,side:z})]}),n.jsx("pointLight",{ref:r=>c.current[h]=r,color:"#a855f7",intensity:.5,distance:8,decay:2}),a>0&&n.jsx(xe,{center:[0,0,0],count:a,radius:e.scale*.8})]},h))})}const ge=[{pos:[0,6,-2],color:"#6366f1",intensity:.3},{pos:[-4,5,-14],color:"#22d3ee",intensity:.2},{pos:[3,5,-26],color:"#a855f7",intensity:.25},{pos:[0,6,-38],color:"#6366f1",intensity:.2},{pos:[-2,5,-48],color:"#22d3ee",intensity:.15}],we={high:2500,medium:1500,low:800};function Me({tier:i="high"}){const t=we[i]||1500,a=i!=="low",u=m.useRef([]),l=m.useMemo(()=>ge,[]);return g(o=>{if(!a)return;const d=o.clock.elapsedTime;for(let c=0;c<u.current.length;c++){const f=u.current[c];if(!f)continue;const v=l[c].intensity;f.intensity=v+Math.sin(d*.6+l[c].pos[2]*.2)*v*.3}}),n.jsxs("group",{children:[n.jsx("ambientLight",{intensity:.015,color:"#4a4a6a"}),n.jsx(Q,{radius:60,depth:80,count:t,factor:2,saturation:.1,fade:!0,speed:.3}),l.map((o,d)=>n.jsx("pointLight",{ref:c=>u.current[d]=c,position:o.pos,color:o.color,intensity:o.intensity,distance:15,decay:2},d))]})}function Ce(){const i=/Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<768,t=navigator.hardwareConcurrency||2,a=navigator.deviceMemory||4,u=window.devicePixelRatio||1;let l=0;t>=8?l+=2:t>=4&&(l+=1),a>=8?l+=2:a>=4&&(l+=1),u<=1&&(l+=1),i&&(l-=2);let o;return l>=4?o="high":l>=2?o="medium":o="low",{tier:o,isMobile:i}}const Pe=Ce();function Te(){return m.useMemo(()=>Pe,[])}const I={high:[1,2],medium:[1,1.5],low:[1,1]};function je({progress:i=0}){const{tier:t}=Te(),a=I[t]||I.medium;return n.jsx("div",{className:"fixed inset-0 w-full h-full",style:{zIndex:0},"aria-hidden":"true",children:n.jsxs($,{dpr:a,camera:{fov:55,near:.1,far:120,position:[0,1.6,0]},gl:{antialias:!1,alpha:!1,powerPreference:"high-performance"},children:[n.jsx("color",{attach:"background",args:["#030308"]}),n.jsx("fog",{attach:"fog",args:["#030308",8,50]}),n.jsxs(m.Suspense,{fallback:null,children:[n.jsx(K,{progress:i}),n.jsx(Me,{tier:t}),n.jsx(re,{tier:t}),n.jsx(ue,{tier:t}),n.jsx(ye,{tier:t}),n.jsx(ie,{tier:t}),n.jsx(ee,{tier:t})]})]})})}export{je as default};

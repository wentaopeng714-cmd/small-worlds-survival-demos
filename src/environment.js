import * as T from 'three';
// Surround the compact interaction space with a continuous, layered world.
export function surroundings(e,mode='land'){
 const env=new T.Group();e.root.add(env);let s=117+e.seed*13;const rand=()=>{s=(s*1664525+1013904223)>>>0;return s/4294967296;};
 const mesh=(geo,color,x,y,z,scale=[1,1,1])=>{const m=new T.Mesh(geo,new T.MeshStandardMaterial({color,roughness:.95}));m.position.set(x,y,z);m.scale.set(...scale);m.receiveShadow=true;env.add(m);return m;};
 const disc=(x,z,r,color,y=-.04,sx=1,sz=1)=>{const m=mesh(new T.CircleGeometry(r,30),color,x,y,z,[sx,sz,1]);m.rotation.x=-Math.PI/2;return m;};
 const prop=(key,x,z,height,rot=0)=>e.asset(key,x,z,{height,rot,parent:env,y:mode==='sea'?-.2:-.03});
 if(mode==='sea'){
  const water=mesh(new T.PlaneGeometry(150,150),e.cfg.id==='raft'?'#55b9c6':'#85b8be',0,-.5,0);water.rotation.x=-Math.PI/2;water.material.roughness=.42;e.waterSurface(water);
  for(let i=0;i<7;i++){const x=-18+i*6,z=-13-rand()*7;disc(x,z,2+rand()*2,'#cbbd91',-.31,1.4,.7);const hill=mesh(new T.IcosahedronGeometry(1,1),'#719c87',x,rand()*.8,z,[2.1,1.1,1.7]);hill.castShadow=true;if(e.models.pine)prop('pine',x+.4,z,2+rand()*1.5);}
  if(e.cfg.id==='raft'){for(const [x,z,r]of[[-3.5,-6.8,3.2],[4.8,-6.2,2.7],[-6.1,2.8,2]]){disc(x,z,r,'#d2c997',-.275,1.3,.8);disc(x,z,r*.79,'#91b58d',-.263,1.25,.75);if(e.models.pine){prop('pine',x-.5,z,1.9);prop('tree',x+.8,z-.2,2.1);}prop('rock',x+.3,z+1,.45);}}
  const ripples=[];for(let i=0;i<65;i++){const x=(rand()-.5)*23,z=(rand()-.5)*25;const m=mesh(new T.PlaneGeometry(.45+rand()*.9,.025),'#b6e8de',x,-.26,z);m.rotation.x=-Math.PI/2;m.material.transparent=true;m.material.opacity=.23;ripples.push(m);}e.environmentAnimate=dt=>{for(const m of ripples)m.position.x+=dt*.13;};
  return env;
 }
 const cave=e.cfg.id==='quarry',night=['ember','echo'].includes(e.cfg.id),solar=e.cfg.id==='solar',garden=e.cfg.id==='grow';
 const land=cave?'#78828d':solar?'#aab5a5':night?'#6b837c':garden?'#a4bd88':'#9eb57c';const ground=mesh(new T.PlaneGeometry(100,100),land,0,-.04,0);ground.rotation.x=-Math.PI/2;
 // A winding trail enters and leaves the camp, rather than ending at a square edge.
 if(!cave&&!solar){const pts=[];for(let i=0;i<14;i++)pts.push(new T.Vector3(Math.sin(i*.7)*1.4+3,-.025,18-i*2.7));const curve=new T.CatmullRomCurve3(pts);const path=new T.Mesh(new T.TubeGeometry(curve,70,.46,5,false),new T.MeshStandardMaterial({color:night?'#9c9781':'#c6bd91',roughness:1}));path.scale.y=.015;env.add(path);}
 for(let i=0;i<35;i++){
  const side=i%2?-1:1,x=side*(5.6+rand()*10),z=-13+rand()*24;
  if(cave){const r=prop('rock',x,z,2.3+rand()*4.5,rand()*6);r.scale.x=1.2+rand();continue;}
  if(solar){const r=prop('rock',x,z,.8+rand()*2.6,rand()*6);r.scale.x=1.4+rand();if(i%5===0){const glow=mesh(new T.OctahedronGeometry(.25),i%2?'#8cbbc4':'#d3bd7c',x,.3,z,[.5,2,.7]);glow.material.emissive.set('#233d46');}continue;}
  if(z>3.5&&Math.abs(x)<7.5){prop('bush',x,z,.55+rand()*.55);continue;}
  prop(i%3?'tree':'pine',x,z,2.5+rand()*2.8,rand()*6);
  if(i%2===0)prop('bush',x+.8,z+.4,.65+rand()*.7,rand()*6);
 }
 for(let i=0;i<12;i++){
  const x=-16+i*3,z=-14-rand()*7;
  const h=mesh(new T.IcosahedronGeometry(1,1),cave?'#465365':night?'#4d6970':solar?'#819b99':'#80a18b',x,1,z,[3+rand()*2,2+rand()*2,3+rand()*2]);h.castShadow=false;
 }
 const motes=[];for(let i=0;i<22;i++){const x=(rand()-.5)*17,z=(rand()-.5)*15;if(Math.abs(x)<4.5&&Math.abs(z)<3.8)continue;const m=mesh(new T.SphereGeometry(.03,5,4),night?'#ffdf9b':garden?'#ead0dd':'#f3dd9a',x,.15+rand()*2,z);m.material.emissive.set(night?'#856523':'#212714');motes.push({m,t:rand()*6,base:m.position.y});}
 if(cave){for(let i=0;i<13;i++){const x=(rand()-.5)*16,z=-8-rand()*6;const stal=mesh(new T.ConeGeometry(.5+rand()*.6,1+rand()*2,6),'#596777',x,5,z);stal.rotation.z=Math.PI;}}
 if(e.cfg.id==='logline'){for(const [x,z]of[[-5,-3],[-5,1],[4.5,-4],[5,3]])prop('woodpile',x,z,.8);for(let i=0;i<6;i++)prop('fence',-4.8+i*1.5,-4.5,.9,Math.PI/2);}
 if(solar){prop('base2',-6,-7,2.5);prop('solar',5.5,-6,1.4);}
 if(garden){for(let i=0;i<22;i++){const a=rand()*6.28,r=4.6+rand()*4,x=Math.cos(a)*r,z=Math.sin(a)*r;const stem=mesh(new T.CylinderGeometry(.018,.018,.25,5),'#769270',x,.1,z);const flower=mesh(new T.SphereGeometry(.085,6,4),i%3?'#ddce9b':'#b6a4ce',x,.26,z,[1,.5,1]);}}
 e.environmentAnimate=dt=>{for(const p of motes){p.t+=dt;p.m.position.y=p.base+Math.sin(p.t)*.18;p.m.position.x+=Math.sin(p.t*.7)*dt*.025;}};
 return env;
}

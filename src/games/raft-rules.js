export const ROUTES = [
  {name:'Coconut Reach',seconds:12,speed:5.5,swells:[],rocks:0},
  {name:'Crosswind Cove',seconds:20,speed:6.1,swells:[6,14],rocks:3},
  {name:'The Whitewater Cut',seconds:27,speed:6.8,swells:[6,14,22],rocks:5},
  {name:'Lantern Bay',seconds:32,speed:7.3,swells:[6,13,20,27],rocks:6}
];
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
export function seeded(seed){let s=(seed+31191)>>>0;return()=>{s=(s*1664525+1013904223)>>>0;return s/4294967296;};}
export function swellAt(age,stage=2){
  if(age<0||age>4.5)return 0;
  const envelope=age<1.1?age/1.1:age<2.8?1:(4.5-age)/1.7;
  return Math.max(0,envelope)*(stage===2?4.7:stage===3?7.0:8.0);
}
export function stepBalance(s,dt,{cargoTarget=0,wave=0,floats=false,pump=false,moored=false}={}){
  s.cargo+=(cargoTarget-s.cargo)*(1-Math.exp(-dt*8));
  const force=wave*(floats?.77:1)-s.cargo*4.3;
  s.velocity+=(force-s.roll*(floats?14:12)-s.velocity*(floats?6:4.6))*dt;
  s.roll=clamp(s.roll+s.velocity*dt,-.95,.95);
  const edge=floats?.25:.23;
  if(!moored&&Math.abs(wave)>.6)s.flood+=Math.max(0,Math.abs(s.roll)-edge)*dt*72;
  s.flood=clamp(s.flood-dt*(moored?13:pump?1.1:.55),0,100);
  return s;
}
export function impact(s,{net=false,floats=false,wood=0}={}){
  s.flood=Math.min(100,s.flood+(floats?15:21));
  return {wood:net?wood:Math.max(0,wood-1),lost:!net&&wood>0?1:0};
}
export const rating=({hits,helps,saved,total})=>hits===0&&helps===0&&saved===total?'GOLD':saved>=Math.ceil(total*.65)?'SILVER':'BRAVE';

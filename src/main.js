import {cfgs} from './config.js';
import {boot,$} from './stage.js';
import {roof} from './games/roof.js';
import {water} from './games/water.js';
import {raft} from './games/raft.js';
import {ember} from './games/ember.js';
import {bridge} from './games/bridge.js';
import {quarry} from './games/quarry.js';
import {logline} from './games/logline.js';
import {grow} from './games/grow.js';
import {solar} from './games/solar.js';
import {echo} from './games/echo.js';
const factories={roof,water,raft,ember,bridge,quarry,logline,grow,solar,echo};
const id=new URLSearchParams(location.search).get('game')||document.body.dataset.preset;
if(!id){$('app').classList.add('hidden');$('cards').innerHTML=cfgs.filter(g=>!['roof','water'].includes(g.id)).map((g,i)=>'<a class=world-card href="?game='+g.id+'"><img src="previews/'+g.id+'.jpg" alt="'+g.title+' actual gameplay"><small>'+String(i+3).padStart(2,'0')+' / '+g.type+'</small><h2>'+g.title+'</h2><p>'+g.tagline+'</p></a>').join('');}
else{$('hub').classList.add('hidden');$('app').classList.remove('hidden');const cfg=cfgs.find(g=>g.id===id),f=factories[id];if(cfg&&f)boot(cfg,f);else{$('loading').innerHTML='<h2>This world is being rebuilt.</h2><p>Come back to the collection.</p><a href=index.html>Choose world</a>';}}

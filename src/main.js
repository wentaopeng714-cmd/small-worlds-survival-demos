import {CATALOG} from './catalog.js';
import {boot,$} from './engine.js';
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
const icons=['☂','≈','⚓','✧','↗','◉','⚙','❋','☀','✦'];
const id=new URLSearchParams(location.search).get('game')||document.body.dataset.game;
if(!id){$('gameCards').innerHTML=CATALOG.map((g,i)=>`<a class="game-card" href="?game=${g.id}" style="--accent:${g.accent};background:linear-gradient(145deg,#fff9e8,${g.bg}80)"><span class="n">${String(i+1).padStart(2,'0')} / ${g.person}</span><img class="world-preview" src="previews/${g.id}.png" alt="${g.title} actual gameplay" loading="lazy"><h2>${g.title}</h2><p>${g.tagline}</p><small>${g.type}</small></a>`).join('');}
else{const cfg=CATALOG.find(g=>g.id===id),factory=factories[id];$('hub').classList.add('hidden');$('app').classList.remove('hidden');if(!cfg||!factory){$('loading').innerHTML='<b>This little world is being assembled.</b><a href="index.html">Back to the collection</a>';}else{boot(cfg,factory);}}

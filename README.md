# Small Worlds

Ten touch-friendly 3D survival sandbox demos. Each connects gathering to a useful change in the world, with a different core mechanic, named character look, three short stages, original synthesized audio, and an actual-scene PNG postcard.

| Game | Core interaction |
|---|---|
| Roof Before Rain | Build a tent, drainage and raised storage; test them in rain. |
| Make Way for Water | Gather stone; place and reclaim levees; divert two streams. |
| Driftwood Deck | Catch drifting logs; extend a raft; balance shelter and cargo. |
| One More Ember | Feed a fire; turn windbreaks; upgrade the hearth and canopy. |
| Bridge to Better Days | Bridge islands; craft a pickaxe; open useful resource routes. |
| One Lantern Deep | Open ore-bearing rock; bank loads; improve light and supports. |
| Logline Workshop | Process logs; route visible planks; build an automatic feeder. |
| Shelter That Grows | Make beds; plant and water hedges; grow storm protection. |
| Sunwise Outpost | Salvage; align solar panels; store power and supply a habitat. |
| Echo Camp | Perform resource trips once; actual recorded paths become workers. |

## Play and build

Serve this folder over HTTP, e.g. `python3 -m http.server 8774`, and open `http://localhost:8774/`. GLBs use relative URLs and are bundled. No keys, external CDNs, camera or microphone are required. Touch or mouse selects resources; contextual buttons perform work. Start with sound unlocks audio; the top music button mutes it.

`npm install` and `npm run build` rebuild the bundled game from `src/`. The provided `game.js` is ready to run without installing anything. A single-game ZIP has its preset in root `index.html` and only its required model files. Use those ZIPs for separate Loopit works. The collection ZIP contains all ten and a selection lobby.

Postcards contain the rendered scene and real run statistics. Device sharing is used when available; otherwise Share downloads a PNG. Best time and completed-run count are stored locally; mid-run progress is not persisted. Character appearances combine four KayKit Adventurers bases plus a hooded Rogue variant, recoloring, and custom bone-attached accessories; they are not ten independently authored base meshes.

See `SOURCES.md`, `licenses/`, and `QA.zh-CN.md` for asset provenance and tested scope.

## Downloads

[All ten individual Loopit ZIPs](https://github.com/wentaopeng714-cmd/small-worlds-survival-demos/releases/download/v1.0.0/all-ten-loopit-zips.zip) · [Playable collection ZIP](https://github.com/wentaopeng714-cmd/small-worlds-survival-demos/releases/download/v1.0.0/small-worlds-collection.zip)

See [individual downloads and import text](LOOPIT-IMPORT.zh-CN.md).

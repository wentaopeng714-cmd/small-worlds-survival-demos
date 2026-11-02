# Small Worlds — Second Edition

Ten short browser survival sandboxes with different core inputs, scene composition, cameras and interfaces. The collection and every individual ZIP run from a root `index.html`. JavaScript, Three.js, character animations and GLB materials are bundled locally; no runtime CDN or API is required.

| Game | Main interaction | Camera |
|---|---|---|
| Roof Before Rain | Fit short/long boards, seal seams, build drainage and raised storage | Cabin cutaway |
| Make Way for Water | Salvage stone; rotate gates to solve three water networks | Full overhead map |
| Driftwood Deck | Steer, rescue floating wood, balance cargo, build shelter and outriggers | Moving boat chase view |
| One More Ember | Spend a small hand of supplies before each weather turn | Camp overhead + weather + cards |
| Bridge to Better Days | Tap to jump; lash permanent bridge checkpoints | Side-follow canyon |
| One Lantern Deep | Dig connected tunnels, haul ore, upgrade lamp, supports and cargo lift | Mine side cutaway |
| Logline Workshop | Saw along a line, tap nails, install useful workshop parts | First-person workbench |
| Shelter That Grows | Draw rooted vines, gather dew, prune and grow a rain-blocking canopy | Plant close-up |
| Sunwise Outpost | Rotate a planet, salvage scrap, build a solar/storage/night power network | Orbital planet |
| Echo Camp | Record real footsteps, replay two selves, schedule a plate release | Camp stage + tracks |

Each has a complete short progression, restart/pause, sound controls and a downloadable PNG of the actual world and run statistics. Native file sharing opens on supporting devices; otherwise Share downloads the same PNG. It does not send to a recipient automatically.

## Run / build

Serve the folder over HTTP, e.g. `python3 -m http.server 8777`, then open `http://localhost:8777/`. Do not open via `file://`.

To rebuild: `npm install` then `npm run build`. Published ZIPs already include the built `game.js` and all required assets. No build is needed to play or import. Standalone packages set `data-preset` on the body to start their own world.

## Art / assets

The images in `previews/` are real playable screenshots, not concept images. Live graphics use locally bundled CC0 KayKit GLBs, real skeletal clips and procedural geometry, materials, light and particles. Seven games show characters using four base character meshes with costume/colour variants; three deliberately use a map, workbench or planet as the focus. These are playable interpretations of the reference directions, not reproductions of the generated reference artwork.

Code: MIT. Third-party models / animations: CC0. Three.js: MIT. See `LICENSE`, `SOURCES.md` and `licenses/`.

V1 is preserved in the separate v1.0.0 GitHub release. V2 changes the play mechanics rather than replacing only the scenery.

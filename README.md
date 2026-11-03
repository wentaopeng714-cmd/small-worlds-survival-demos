# Small Worlds - Selected Eight

Demos 03-10 are active. Demo 03 is now **Driftwood Deck - Captain's Cut 2.1.0**, with a longer mobile survival voyage and physical side-swell/cargo play. Demos04-10 keep their distinct 2.0.0 mechanics and cameras. Demos 01/02 and all prior releases remain archived.

| Demo | Game | Current ZIP |
|---|---|---|
| 03 | Driftwood Deck | [Download v2.1.0](https://github.com/wentaopeng714-cmd/small-worlds-survival-demos/releases/download/v2.1.0/driftwood-deck-captains-cut-v2.1.0.zip) |
| 04 | One More Ember | [Download v2.0.0](https://github.com/wentaopeng714-cmd/small-worlds-survival-demos/releases/download/v2.0.0/one-more-ember-v2.zip) |
| 05 | Bridge to Better Days | [Download v2.0.0](https://github.com/wentaopeng714-cmd/small-worlds-survival-demos/releases/download/v2.0.0/bridge-to-better-days-v2.zip) |
| 06 | One Lantern Deep | [Download v2.0.0](https://github.com/wentaopeng714-cmd/small-worlds-survival-demos/releases/download/v2.0.0/one-lantern-deep-v2.zip) |
| 07 | Logline Workshop | [Download v2.0.0](https://github.com/wentaopeng714-cmd/small-worlds-survival-demos/releases/download/v2.0.0/logline-workshop-v2.zip) |
| 08 | Shelter That Grows | [Download v2.0.0](https://github.com/wentaopeng714-cmd/small-worlds-survival-demos/releases/download/v2.0.0/shelter-that-grows-v2.zip) |
| 09 | Sunwise Outpost | [Download v2.0.0](https://github.com/wentaopeng714-cmd/small-worlds-survival-demos/releases/download/v2.0.0/sunwise-outpost-v2.zip) |
| 10 | Echo Camp | [Download v2.0.0](https://github.com/wentaopeng714-cmd/small-worlds-survival-demos/releases/download/v2.0.0/echo-camp-v2.zip) |

[Raft gameplay, controls and import notes](DRIFTWOOD-CAPTAINS-CUT.md) - [Raft validation](QA-raft-v2.1.md)

Every independent ZIP has a root index.html and bundles Three.js, models, animations and textures locally. No runtime API or CDN is required. English UI, touch controls, sound/mute, pause/restart and actual-world PNG results are included. Supporting devices use native file sharing; otherwise Share downloads the PNG.

## Run / rebuild

Serve the repository over HTTP, then open root index.html. To rebuild, npm install then npm run build. Published game ZIPs already contain the built bundle. See manifest.json for per-game versions and hashes.

The previews are actual playable screenshots. Live visuals combine CC0 KayKit GLBs, real skeletal clips and procedural geometry/material/light/effects. They are playable interpretations of the reference directions.

Code MIT. KayKit assets CC0; Three.js MIT. See LICENSE, SOURCES.md and licenses/. No Loopit project was overwritten or published by this repository update.

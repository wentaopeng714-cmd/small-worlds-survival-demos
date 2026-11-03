# Validation - 2026-11-03

Actual browser UI playthroughs, no runtime variable edits or hidden completion calls:
- Calm opening, wood collection, canopy/deck build, actual cargo dragging and tap centering.
- Four crossings completed at 390x844. The final pass also used360x640 through the first three crossings. Final pass: SILVER, 8/9 swells, 32 rescued wood, 2325 score, 7 rock hits, 0 retries.
- Wrong-side cargo caused visible roll, 100% flooding and capsize. Quick retry kept upgrades and restored starting supplies. Failure UI exposes retry only.
- Two/three/four side-swell stages were handled through visible warnings and cargo buttons; final consecutive swell sequence was tested.
- Outriggers, cargo net and bilge pump built. Net protection shown on actual impacts; floodwater decreased. Rule assertions independently verify each mechanical effect.
- Actual finished-raft PNG downloaded and visually inspected; new export filename verified. Native sharing entry invoked and dismissed without sending to anyone.
- Mute/unmute, pause/resume, restart and Play again tested. Play again reset to route1, zero wood/zero flood. Ocean audio nodes dispose/recreate on restart.
- 360x640 dock and at-sea visible buttons remained inside the viewport and at least44px high.
- No console errors in full final gameplay pass. Wave material shader and standalone startup additionally checked after packaging.
- Includes actual browser screenshots; concept art is not represented as gameplay.

Pure core assertions cover counterweight vs idle vs wrong side, useful floats/pump/net, resource loss, rating, progression and seeded replay. Tests are in the development workspace; no test automation is needed at runtime.

Browser viewport checks do not substitute for physical device GPU/audio/share testing. No Loopit project was overwritten or published by this build.

[![gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01) [![rank](https://make.fun/badge/gta6-clipper-01/ALENSALIM/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01) [![reward](https://make.fun/badge/gta6-clipper-01/ALENSALIM/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01)

# GTA 6 — Vice City Getaway (make.fun gta6-clipper-01)

An entry for make.fun's **gta6-clipper-01** bounty — "Clip GTA 6 for the most
YouTube views" ($500 shared by the top 20, places by views).

## The clip

A ~20 second vertical Short cut by my AI agent from Rockstar's official
**GTA VI Trailer 2**: one getaway sequence — a car explodes, Jason takes the
wheel, and a highway chase tears through Vice City — followed by the make.fun
pitch on screen over the GTA VI logo card ("Make clips like this with AI and
earn money on make.fun — make.fun/bounty/gta6-clipper-01"). Rendered with
ffmpeg in the agent session: trimmed, center/right-cropped to vertical
720x1280, on-screen text added, H.264 + AAC.

The clip file itself (`clip.mp4`) lives outside this repo; the video is
published on YouTube as a public Short and its address goes in `VIDEO.json`.

## How main.ts works

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the
repository root into the output directory (`$MAKEFUN_OUTPUT_DIR`, default
`/output`), creating the output directory if needed, then verifies the copy
is byte-identical to the source. That is all it does — the house reads the
video itself through the YouTube Data API; nothing this program writes about
the video counts.

Run it the way the grader does:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

## VIDEO.json placeholder

`VIDEO.json` currently holds a placeholder URL,
`{"url": "https://www.youtube.com/shorts/<id>"}` — no real video exists yet.
After the clip is uploaded to YouTube from the channel, the placeholder is
replaced with the video's real Share URL and the entry is submitted. Do not
submit this commit as-is: the gate refuses a placeholder URL.

## The video's description

When the clip is uploaded, its YouTube description must carry this line word
for word, plus the play code on its own line:

```
Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01
makefun-storm-cake-basin
```

Keep the video public until the results are out.

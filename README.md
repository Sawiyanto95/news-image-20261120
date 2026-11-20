# news-image-20261120

[![make.fun · news-image-20261120](https://make.fun/badge/news-image-20261120.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![rank](https://make.fun/badge/news-image-20261120/Sawiyanto95/news-image-20261120/rank.svg)](https://make.fun/bounty/news-image-20261120/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)
[![reward](https://make.fun/badge/news-image-20261120/Sawiyanto95/news-image-20261120/reward.svg)](https://make.fun/bounty/news-image-20261120?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120)

A newspaper front page that sums up **Friday 20 November 2026** in one
image — six stories that defined the day:

1. **Cyclone Akvan Hits India** — severe storm makes landfall at noon;
   thousands evacuated.
2. **Kyiv Hit by Missiles** — Russian ballistic strike sets Kyiv building
   ablaze overnight.
3. **Citigroup Hid $35bn Risk** — bank misbooked trades, understated risk
   by $35 billion.
4. **Samsung Names Chip Chief** — new memory boss named in management
   reshuffle.
5. **Trump to Face Press** — back from China summit, president holds White
   House briefing.
6. **COP31 Closes Today** — climate summit ends in Antalya today.

The page is drawn as `entry.html` (inline CSS + flat-colour inline SVG,
no network) and rendered to `entry.png` (1024×1024) with Playwright's
Chromium; `main.ts` (Node 22, standard library only) copies `entry.png`
to `/output/entry.png`. Running it twice produces byte-identical output.

## Run it

```sh
node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=bc76ffwb&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261120) · AI agents build software for cash rewards</sub>

Competition: https://make.fun/bounty/news-image-20261120

Referral: bc76ffwb

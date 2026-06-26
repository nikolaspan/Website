# Press thumbnails

Drop each article's thumbnail image in **this folder**, then reference it from
`src/data/press.ts` via the `image` field (e.g. `image: "/press/kathimerini.jpg"`).

- Format: **JPG, PNG or WebP**. Landscape works best — cards crop to **16:9**.
- Recommended: at least **800×450 px**.
- Missing or not-yet-added images fall back to a branded placeholder showing the
  source name, so the page always looks finished.

## Headlines (see `pressItems` in `src/data/press.ts`)

| Source       | Type | Expected file           |
| ------------ | ---- | ----------------------- |
| It's Possible | Site | `itspossible.jpg`      |
| NewMoney     | Site | `newmoney-saile.jpg`    |

To add coverage: drop the image here and add a new object to `pressItems` with
`title`, `source`, `sourceType` ("Paper" | "Site"), `url`, and `image`.

## Blue Life Paros — ESG feature (see `blueLifeParos` in `src/data/press.ts`)

This is the photo collage shown in the Impact (ESG) section. Photos live in the
**`blue-life/`** subfolder. The collage uses 4 photos — the first is the large
feature tile, the second is a wide shot, the last two are squares.

| Slot           | File                          |
| -------------- | ----------------------------- |
| Feature (big)  | `blue-life/Blue Life Paros 1.jpg` |
| Wide           | `blue-life/Blue Life Paros 2.jpg` |
| Square         | `blue-life/Blue Life Paros 3.jpg` |
| Square         | `blue-life/Blue Life Paros 4.jpg` |

Filenames contain spaces, so they are URL-encoded as `%20` in `press.ts`
(e.g. `/press/blue-life/Blue%20Life%20Paros%201.jpg`). Missing photos reveal the
gradient behind them, so the layout always looks finished. Edit the write-up and
captions in `blueLifeParos.body` / `blueLifeParos.photos[].alt`.

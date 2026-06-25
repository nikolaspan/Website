# Partner logos

Drop each partner's logo image in **this folder** using the exact filename
below. They appear automatically in the Partners section (square logo chips).

- Format: **PNG or JPG** (PNG with transparent background looks best on the
  white chip). If a file is JPG, change its extension in
  `src/data/content.ts` for that partner (e.g. `amanzoe.jpg`).
- Recommended: square-ish, at least **256×256 px**, trimmed of extra padding.
- Missing or not-yet-added logos fall back to brand-styled initials, so the
  page always looks finished.

## Filenames

| Partner        | File                  |
| -------------- | --------------------- |
| AMANZOE        | `amanzoe.png`         |
| ONE & ONLY     | `one-and-only.png`    |
| AVANT MAR      | `avant-mar.png`       |
| ON RESIDENCES  | `on-residences.png`   |
| SETE           | `sete.png`            |
| HCH            | `hch.png`             |
| ELEVATE GR     | `elevate-gr.png`      |
| CAPSULET       | `capsulet.png`        |
| HELMEPA        | `helmepa.png`         |
| AEGEAN CH.     | `aegean-ch.png`       |
| BLUE LINE      | `blue-line.png`       |
| MARE CO.       | `mare-co.png`         |

To add more partners, edit `src/data/content.ts` and set each partner's
`logo` path to a file in this folder.

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

These map the partners in `src/data/content.ts` to the actual image files in
this folder.

| Partner             | File                                                    |
| ------------------- | ------------------------------------------------------- |
| AMANZOE             | `images_500x500_enhanced.png`                           |
| ONE & ONLY          | `one_and_only_500x500_enhanced.png`                     |
| AVANT MAR           | `avant_mar_500x500_enhanced.png`                        |
| ON RESIDENCES       | `on_residence_500x500_enhanced.png`                     |
| 91 ATHENS RIVIERA   | `91_1_500x500_enhanced.png`                             |
| SILVERSANDS         | `silversands_500x500_enhanced.png`                      |
| GRIVALIA HOSPITALITY | `grivalia_hospitality_logo_e1665468820635_500x500_enhanced.png` |
| ELEVATE GR          | `elevate_500x500_enhanced.png`                          |
| CAPSULET            | `capsulet_logo_500x500_enhanced.png`                    |
| STARTUS INSIGHTS    | `start_us_500x500_enhanced.png`                         |
| GRIVALIA MANAGEMENT | `management_grivalia_500x500_enhanced.png`              |
| HELMEPA             | `helmepa_500x500_enhanced.png`                          |
| BLUE STAR           | `blue_star_500x500_enhanced.png`                        |
| YNANP               | `ynanp_500x500_enhanced.png`                            |

Unused file still in this folder: `amangati_500x500_enhanced.png`
("Aman at Sea") — not currently wired to a partner.

To add more partners, edit `src/data/content.ts` and set each partner's
`logo` path to a file in this folder.

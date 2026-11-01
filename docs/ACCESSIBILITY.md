# Colour and readability checks

Updated 1 November 2026. This records development checks, not a complete accessibility certification.

## Palette

The app uses warm off-white surfaces, dark neutral reading text, and a restrained berry accent. Gold is decorative rather than a light text colour on white.

| Use | Foreground | Background | Contrast |
| --- | --- | --- | --- |
| Main reading text | `#29232B` | `#FAF7F5` | 14.37:1 |
| Supporting text | `#5D5260` | `#FAF7F5` | 6.93:1 |
| Primary button | `#FFFFFF` | `#862449` | 8.89:1 |
| Form boundary | `#8B7584` | `#FFFFFF` | 4.22:1 |
| Keyboard focus | `#1D5265` | `#FFFFFF` | 8.58:1 |
| Success status | `#255239` | `#E8F3EC` | 7.87:1 |
| Attention status | `#704113` | `#FFF0D9` | 7.63:1 |

Ratios use WCAG relative luminance, rounded here for display; tests use unrounded values. Normal text targets at least [4.5:1](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html); meaningful control boundaries target [3:1](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html).

## Changes

- Increased small interface copy to at least 12px, with larger reading text and 16px form inputs.
- Strengthened helper text, placeholders, control borders, prices, consent copy and status labels.
- Added solid dark backplates beneath shade labels and wedding-photo captions so their contrast does not depend on the image or shade.
- Kept labels and check marks alongside colour choices; jewellery selection now has a check mark.
- Added a 3px keyboard focus ring with a white separation layer.
- Kept reduced-motion styles and added Windows forced-colour styles. Interactive colour changes are immediate.
- Increased important compact targets to at least 44px. Rounded app buttons have a 15px corner radius.
- Reflowed the styling steps into readable rows on phones; stacked reference uploads and comparison cards at narrow widths.
- Removed decorative navigation and empty-card numbers. Styling steps retain their useful sequence.

## Verification

- Checked the five personal styling steps and four group screens at 1440px and 320px widths. The automated computed-style text check reported no failures in the checked default states after corrections, and none of these views had horizontal document overflow at 320px.
- Checked the event-creation form’s text contrast.
- Verified keyboard activation of mobile navigation, Escape to close it, and focus restoration to the navigation toggle.
- Verified visible keyboard focus on the occasion selector and 16px form text.
- The test suite guards semantic text/background pairs and meaningful control boundaries against contrast regressions.

The browser text check samples rendered text on solid/composited backgrounds, excluding disabled controls and image/gradient backgrounds. Solid caption and shade-label backplates address those variable backgrounds separately. These checks do not cover every live backend state, every assistive technology, actual browser zoom, or a full screen-reader/forced-colour audit. User testing and a comprehensive WCAG audit remain future work.

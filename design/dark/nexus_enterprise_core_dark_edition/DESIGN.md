---
name: Nexus Enterprise Core - Dark Edition
colors:
  surface: '#101419'
  surface-dim: '#101419'
  surface-bright: '#363940'
  surface-container-lowest: '#0b0e14'
  surface-container-low: '#181c22'
  surface-container: '#1c2026'
  surface-container-high: '#262a30'
  surface-container-highest: '#31353b'
  on-surface: '#e0e2ea'
  on-surface-variant: '#c0c7d4'
  inverse-surface: '#e0e2ea'
  inverse-on-surface: '#2d3137'
  outline: '#8a919d'
  outline-variant: '#404752'
  surface-tint: '#a2c9ff'
  primary: '#a2c9ff'
  on-primary: '#00315b'
  primary-container: '#47a1ff'
  on-primary-container: '#003663'
  inverse-primary: '#0060a9'
  secondary: '#b9c8de'
  on-secondary: '#233143'
  secondary-container: '#39485a'
  on-secondary-container: '#a7b6cc'
  tertiary: '#ffb868'
  on-tertiary: '#482900'
  tertiary-container: '#e08a00'
  on-tertiary-container: '#4f2d00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d3e4ff'
  primary-fixed-dim: '#a2c9ff'
  on-primary-fixed: '#001c38'
  on-primary-fixed-variant: '#004881'
  secondary-fixed: '#d4e4fa'
  secondary-fixed-dim: '#b9c8de'
  on-secondary-fixed: '#0d1c2d'
  on-secondary-fixed-variant: '#39485a'
  tertiary-fixed: '#ffddbb'
  tertiary-fixed-dim: '#ffb868'
  on-tertiary-fixed: '#2b1700'
  on-tertiary-fixed-variant: '#673d00'
  background: '#101419'
  on-background: '#e0e2ea'
  surface-variant: '#31353b'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  title-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-padding-sm: 16px
  container-padding-md: 24px
  gutter: 16px
  margin-desktop: 64px
  margin-mobile: 16px
---

## Brand & Style
This design system evolves the enterprise experience into a premium, high-focus environment. The design narrative shifts from standard corporate utility to a high-performance "command center" aesthetic. By utilizing a deep-space palette, the UI minimizes eye strain during prolonged sessions and directs focus toward data-rich interactions.

The style is **Corporate / Modern** with a slight lean towards **Minimalism**. It prioritizes precision, clarity, and a sense of technological sophistication. Visual noise is eliminated to ensure that complex workflows feel manageable and authoritative.

## Colors
The palette is engineered for a premium dark experience. The primary blue has been shifted to a more vibrant, desaturated tone to ensure AA/AAA contrast ratios against dark backgrounds without causing "vibration." 

- **Surface & Background:** The base layer uses a true deep charcoal (#121212), while primary containers use a slightly lighter gray (#1E1E1E) to establish hierarchy through value rather than color.
- **Status Colors:** These have been calibrated for high legibility on dark surfaces. They utilize a higher lightness value and reduced saturation compared to light-mode counterparts to remain soft on the eyes while clearly communicating state.
- **Neutral Palette:** Uses cool-toned grays to maintain a professional, tech-forward atmosphere.

## Typography
The typography system relies exclusively on **Inter** to maintain a systematic, utilitarian aesthetic. In dark mode, font weights are carefully managed; since light text on dark backgrounds can appear "thicker," slightly increased tracking (letter spacing) is applied to small labels to preserve legibility.

- **Headlines:** High contrast (White #FFFFFF) for maximum impact.
- **Body Text:** Slightly muted (Off-white #E2E8F0) to reduce glare.
- **Labels:** Used for metadata and UI controls, often in semi-bold to ensure visibility at small scales.

## Layout & Spacing
The layout follows a **Fluid Grid** model based on an 8px base unit. This ensures all components align to a predictable rhythm.

- **Desktop:** 12-column grid with 16px gutters and wide 64px margins to allow the dark interface to "breathe."
- **Mobile:** 4-column grid with 16px margins. 
- **Rhythm:** Vertical spacing between sections should utilize 32px or 48px increments to maintain a clean, organized enterprise structure.

## Elevation & Depth
In this dark mode system, depth is communicated primarily through **Tonal Layers** rather than heavy shadows.

- **Level 0 (Surface):** #121212 - The lowest layer (background).
- **Level 1 (Card/Container):** #1E1E1E - Standard UI containers.
- **Level 2 (Dropdowns/Modals):** #2A2A2A - Floating elements. 
- **Shadows:** Use extremely subtle, large-radius black shadows (0px 8px 24px rgba(0,0,0,0.5)) on Level 2 elements to provide a slight lift. Avoid colored shadows to keep the design professional.
- **Overlays:** 60% opacity black tint for background dimming behind modals.

## Shapes
The shape language is structured and "Soft-Industrial." A standard corner radius of 8px (Level 2) is applied to all primary UI elements, providing a modern feel that isn't overly organic.

- **Small elements (Checkboxes):** 4px radius.
- **Medium elements (Buttons, Inputs, Cards):** 8px radius.
- **Large elements (Modals, Sidebars):** 12px or 16px radius for a more approachable containment feel.

## Components
- **Buttons:** Primary buttons use the vibrant #47A1FF with white text. Secondary buttons are outlined with a 1px stroke of #334155 and a ghost background.
- **Inputs:** Fields use the #1E1E1E container color with a subtle 1px border (#334155). On focus, the border transitions to Primary Blue with a subtle 2px outer glow.
- **Cards:** No borders; use the #1E1E1E fill to differentiate from the background. 
- **Lists:** Rows should be separated by a fine 1px line (#2D3748) rather than gaps to maintain a dense, information-rich enterprise layout.
- **Status Chips:** Subtle background tints (15% opacity of the status color) with high-contrast text for status indicators.
- **Data Tables:** High-density layout with sticky headers utilizing the Level 2 surface (#2A2A2A) to indicate the scrollable region.
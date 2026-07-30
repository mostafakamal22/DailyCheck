---
name: Nexus Enterprise Core
colors:
  surface: '#f8f9fb'
  surface-dim: '#d9dadc'
  surface-bright: '#f8f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f6'
  surface-container: '#edeef0'
  surface-container-high: '#e7e8ea'
  surface-container-highest: '#e1e2e4'
  on-surface: '#191c1e'
  on-surface-variant: '#434654'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f3'
  outline: '#737685'
  outline-variant: '#c3c6d6'
  surface-tint: '#0c56d0'
  primary: '#003d9b'
  on-primary: '#ffffff'
  primary-container: '#0052cc'
  on-primary-container: '#c4d2ff'
  inverse-primary: '#b2c5ff'
  secondary: '#535f73'
  on-secondary: '#ffffff'
  secondary-container: '#d4e0f8'
  on-secondary-container: '#576377'
  tertiary: '#7b2600'
  on-tertiary: '#ffffff'
  tertiary-container: '#a33500'
  on-tertiary-container: '#ffc6b2'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2ff'
  primary-fixed-dim: '#b2c5ff'
  on-primary-fixed: '#001848'
  on-primary-fixed-variant: '#0040a2'
  secondary-fixed: '#d7e3fb'
  secondary-fixed-dim: '#bbc7de'
  on-secondary-fixed: '#101c2d'
  on-secondary-fixed-variant: '#3b475b'
  tertiary-fixed: '#ffdbcf'
  tertiary-fixed-dim: '#ffb59b'
  on-tertiary-fixed: '#380d00'
  on-tertiary-fixed-variant: '#812800'
  background: '#f8f9fb'
  on-background: '#191c1e'
  surface-variant: '#e1e2e4'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
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
  label-md:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  code-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style

The design system is engineered for high-frequency enterprise utility, balancing the structured logic of Material Design 3 with the refined, tactile aesthetics of native iOS. It targets HR professionals and employees who require high-density information presented with extreme clarity.

The brand personality is **Precise, Reliable, and Unobtrusive**. It avoids visual noise to focus on task completion—clocking in, reviewing schedules, and approving requests. The aesthetic leverages **Modern Minimalism** with a focus on depth through soft shadows rather than heavy borders, ensuring the interface feels "premium" and effortless.

## Colors

The palette is rooted in a "Professional Blue" that signals stability and trust. 

- **Primary:** Used for high-emphasis actions (Clock In, Submit) and active states.
- **Secondary/Neutral:** A sophisticated range of grays used for background layering and secondary text to reduce eye strain.
- **Semantic Colors:** Green, Orange, and Red are reserved strictly for status indicators (On Time, Late, Absence) and system feedback.

**Dark Mode Strategy:** In dark mode, surfaces use a deep charcoal (#121212) rather than pure black to maintain shadow visibility. Primary blue is slightly desaturated to ensure AAA accessibility against dark backgrounds.

## Typography

The design system utilizes **Inter** for its exceptional legibility at small sizes and its neutral, modern character. 

- **Scale:** A strict typographic scale ensures hierarchy in data-heavy views. 
- **Headlines:** Use tighter letter-spacing and heavier weights to anchor pages.
- **Labels:** Uppercase styling is applied to labels for secondary metadata or table headers to distinguish them from actionable body text.
- **Numbers:** Tabular lining should be enabled for all time-tracking and attendance data to ensure vertical alignment in columns.

## Layout & Spacing

This design system uses a **Fluid Grid** model based on an 8px root rhythm, ensuring consistency across mobile and desktop.

- **Mobile:** A 4-column grid with 16px side margins. Interactive elements (buttons, inputs) must maintain a minimum height of 48px for touch accessibility.
- **Desktop:** A 12-column grid with 24px gutters. Content is typically contained in a centered max-width container (1280px) to prevent excessive line lengths in data tables.
- **Reflow:** On tablets, the side navigation collapses into a rail, and cards transition from stacked to side-by-side configurations.

## Elevation & Depth

Depth is communicated through **Tonal Layering** and **Ambient Shadows**.

- **Level 0 (Base):** Background color (`#F4F5F7`).
- **Level 1 (Cards/Sheets):** White surface with a subtle 1px border (`#E2E8F0`) and a soft, low-opacity shadow (Y: 2px, B: 8px, Opacity: 4%).
- **Level 2 (Modals/Popovers):** Elevated surface with a more pronounced shadow (Y: 10px, B: 20px, Opacity: 8%) to draw focus.
- **Glassmorphism:** Used sparingly for sticky top navigation bars and bottom tab bars, employing a 20px backdrop blur with 80% surface opacity to mimic the iOS "Material" effect.

## Shapes

The shape language is **Rounded**, echoing the friendly yet professional look of modern OS design.

- **Standard Elements:** Buttons, inputs, and small cards use a 0.5rem (8px) radius.
- **Large Containers:** Main content cards and bottom sheets use a 1.5rem (24px) radius on top corners to emphasize the "container" feel.
- **Interactive Feedback:** Hover and pressed states use a circular ripple or a subtle scale-down (98%) to provide tactile confirmation.

## Components

- **Buttons:** Primary buttons are solid Professional Blue with white text. Secondary buttons use a tonal gray background. All buttons have a height of 48px with centered 14px SemiBold text.
- **Status Chips:** High-contrast text on a low-saturation background (e.g., Dark Green text on light Green tint). Used for "Present," "Absent," and "Pending."
- **Data Tables:** Borderless design. Rows are separated by subtle 1px dividers. Header text is Label-MD (uppercase). Rows should have a hover state that highlights the background in a soft blue tint.
- **Bottom Sheets:** Used on mobile for all quick-entry tasks (Reason for absence, Time adjustments). Includes a centered handle at the top.
- **Input Fields:** Outlined style with a 1px border. On focus, the border thickens to 2px in Primary Blue with a subtle outer glow.
- **Map Overlays:** For geo-fenced clock-ins, use a semi-transparent floating card at the bottom of the map view to show location accuracy and the "Clock In" action.
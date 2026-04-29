---
name: Nutrient Neighbor
colors:
  surface: '#f8faf6'
  surface-dim: '#d8dbd7'
  surface-bright: '#f8faf6'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f0'
  surface-container: '#eceeea'
  surface-container-high: '#e7e9e5'
  surface-container-highest: '#e1e3df'
  on-surface: '#191c1a'
  on-surface-variant: '#404943'
  inverse-surface: '#2e312f'
  inverse-on-surface: '#eff1ed'
  outline: '#707973'
  outline-variant: '#bfc9c1'
  surface-tint: '#2c694e'
  primary: '#0f5238'
  on-primary: '#ffffff'
  primary-container: '#2d6a4f'
  on-primary-container: '#a8e7c5'
  inverse-primary: '#95d4b3'
  secondary: '#7d562d'
  on-secondary: '#ffffff'
  secondary-container: '#ffca98'
  on-secondary-container: '#7a532a'
  tertiary: '#713638'
  on-tertiary: '#ffffff'
  tertiary-container: '#8d4d4e'
  on-tertiary-container: '#ffcfce'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#b1f0ce'
  primary-fixed-dim: '#95d4b3'
  on-primary-fixed: '#002114'
  on-primary-fixed-variant: '#0e5138'
  secondary-fixed: '#ffdcbd'
  secondary-fixed-dim: '#f0bd8b'
  on-secondary-fixed: '#2c1600'
  on-secondary-fixed-variant: '#623f18'
  tertiary-fixed: '#ffdad9'
  tertiary-fixed-dim: '#ffb3b3'
  on-tertiary-fixed: '#390b0e'
  on-tertiary-fixed-variant: '#6f3537'
  background: '#f8faf6'
  on-background: '#191c1a'
  surface-variant: '#e1e3df'
typography:
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-caps:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '700'
    lineHeight: 20px
    letterSpacing: 0.05em
  button:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 4px
  xs: 8px
  sm: 16px
  md: 24px
  lg: 32px
  xl: 48px
  edge-margin: 20px
  gutter: 16px
---

## Brand & Style

The design system is rooted in the "Modern Neighborly" aesthetic—a blend of approachable minimalism and tactile warmth. It prioritizes clarity and dignity for low-income families, ensuring the interface feels like a helpful community resource rather than a cold institutional tool.

The visual language avoids high-tech coldness in favor of a "human-scale" design. This is achieved through generous whitespace, high-legibility type scales, and organic shapes that evoke a sense of growth and stability. Every interaction is designed to reduce cognitive load and build trust through consistency and predictable patterns.

## Colors

The palette is inspired by natural harvests and home kitchens. The primary deep green provides a sense of health and institutional reliability without being intimidating. The warm cream background reduces screen glare compared to pure white, creating a "paper-like" reading experience that feels welcoming and soft on the eyes.

Card surfaces are kept pure white to create a clear "object" hierarchy against the cream background. Secondary accents use an earthy ochre to highlight secondary actions or nutritional tips, ensuring the interface remains vibrant and non-corporate.

## Typography

This design system utilizes a dual-font strategy to balance personality with extreme legibility. **Plus Jakarta Sans** is used for headings; its soft, rounded terminals reinforce the friendly brand voice. **Be Vietnam Pro** is used for all body text and data, selected for its high x-height and open counters, which maintain readability on budget mobile screens and for users with varying visual abilities.

The minimum font size is strictly 16px to ensure accessibility. For bilingual support, line heights are generous (1.5x minimum) to accommodate Spanish text strings, which typically run 20-30% longer than English equivalents.

## Layout & Spacing

The system employs a fluid-width layout optimized for mobile-first consumption. It uses an 8px rhythmic grid to ensure vertical harmony. Content is housed within a single-column container on mobile with 20px side margins to prevent "thumb-crowding."

Interactive elements are sized for "fat-finger" accessibility, with a minimum touch target of 48px. Layouts favor a vertical stack of cards, allowing users to scroll naturally through information without complex horizontal swiping patterns that might be difficult to discover.

## Elevation & Depth

Depth is conveyed through a "soft-layering" approach rather than harsh shadows. The design system uses ambient, low-opacity shadows with a slight green-tinted neutral base (`rgba(45, 106, 79, 0.08)`) to make cards appear as though they are gently floating just above the cream background.

There are three primary levels of elevation:
1.  **Floor:** The cream background (#FEFAE0).
2.  **Card Level:** White cards with a 12px blur shadow, used for primary content chunks.
3.  **Floating Level:** Used for the bottom navigation bar and primary action buttons, featuring a slightly more pronounced shadow to indicate they are always reachable above the scrolling content.

## Shapes

The shape language is defined by "High Radius" geometry. By using a baseline of 0.5rem (8px) for small elements and 1rem (16px) for cards, the UI feels safe and approachable. This lack of sharp corners removes "visual tension" and aligns with the neighborly brand personality.

Buttons and chips utilize the "Pill" style (fully rounded) to maximize their appearance as interactive, touch-friendly "tokens."

## Components

### Cards
Cards are the primary container. They must have a white background, 16px corner radius, and a subtle 1px border (#E9EDC9) to define edges against the cream background. Internal padding should be a minimum of 20px.

### Buttons
- **Primary:** Deep Green background with White text. Pill-shaped.
- **Secondary:** Transparent background with Deep Green border (2px) and text.
- **Placement:** "Thumb-Zone" optimized. Major actions are centered or full-width at the bottom of the screen.

### Bottom Navigation
The navigation bar is pinned to the bottom. It features a solid white background and a 1px soft-green top border. Icons use a 24px grid; the active state is indicated by the Primary Green color and a small 4px dot below the icon. Labels are always present below icons for clarity.

### Inputs
Text fields use a soft cream-tinted background with a subtle border that thickens and turns Green on focus. Labels always remain visible above the field (no disappearing placeholders) to assist cognitive mapping.

### Icons
Use "friendly" line icons with rounded caps and joins. Avoid complex or abstract metaphors; icons should be literal and universally understood (e.g., a simple basket for food, a map pin for location).
---
name: Core Command
colors:
  surface: '#101415'
  surface-dim: '#101415'
  surface-bright: '#363a3b'
  surface-container-lowest: '#0b0f10'
  surface-container-low: '#191c1e'
  surface-container: '#1d2022'
  surface-container-high: '#272a2c'
  surface-container-highest: '#323537'
  on-surface: '#e0e3e5'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#e0e3e5'
  inverse-on-surface: '#2d3133'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#bec6e0'
  on-secondary: '#283044'
  secondary-container: '#3f465c'
  on-secondary-container: '#adb4ce'
  tertiary: '#b9c8de'
  on-tertiary: '#233143'
  tertiary-container: '#8392a6'
  on-tertiary-container: '#1c2b3c'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#dae2fd'
  secondary-fixed-dim: '#bec6e0'
  on-secondary-fixed: '#131b2e'
  on-secondary-fixed-variant: '#3f465c'
  tertiary-fixed: '#d4e4fa'
  tertiary-fixed-dim: '#b9c8de'
  on-tertiary-fixed: '#0d1c2d'
  on-tertiary-fixed-variant: '#39485a'
  background: '#101415'
  on-background: '#e0e3e5'
  surface-variant: '#323537'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
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
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  label-caps:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.1em
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
  gutter: 20px
  container-max: 1440px
---

## Brand & Style

The design system is engineered for the modern home-lab enthusiast. It bridges the gap between raw technical utility and refined consumer software. The brand personality is **precise, reliable, and observant**, evoking an emotional response of total control and system stability.

The design style is **Corporate Modern with Technical Accents**. It utilizes high-quality whitespace and a systematic arrangement of data, but injects "Terminal" influences—such as subtle monospaced secondary typography and high-performance blue accents—to acknowledge the underlying hardware. The interface prioritizes clarity through a structured information architecture, ensuring that complex server metrics are digestible at a glance.

## Colors

The palette is anchored in a **Deep Slate** environment to minimize eye strain during long monitoring sessions.

- **Primary (Terminal Blue):** `#3B82F6`. Used for active states, primary actions, and critical data visualizations. It provides a vibrant contrast against the dark background.
- **Secondary (Deep Space):** `#0F172A`. The core background color. It creates a sophisticated, "pro-tools" atmosphere.
- **Tertiary (Muted Slate):** `#94A3B8`. Used for secondary text, borders, and inactive icons to maintain hierarchy.
- **Neutral (Crisp White):** `#F8FAFC`. Reserved for high-priority headings and primary body text to ensure maximum legibility.

Success, warning, and error states should use desaturated greens, ambers, and reds respectively, ensuring they do not overwhelm the primary blue aesthetic.

## Typography

This design system uses **Inter** for all primary UI elements to ensure a clean, professional aesthetic. Its tall x-height and excellent legibility make it ideal for data-heavy dashboards. 

To reinforce the server/technical context, **JetBrains Mono** is introduced for labels, system paths, and technical metrics (like IP addresses or CPU temperatures).

On mobile devices, `headline-lg` should scale down to 24px to prevent excessive wrapping. Use `label-caps` for section headers within the sidebar or small widget titles to create a clear structural rhythm.

## Layout & Spacing

The system uses a **Fluid Grid** with fixed maximum constraints. 
- **Desktop:** 12-column grid with 20px gutters and 32px side margins. Layout containers should cap at 1440px.
- **Tablet:** 8-column grid with 20px gutters and 24px margins.
- **Mobile:** 4-column grid with 16px gutters and 16px margins.

Spacing is based on a 4px baseline. Most component internal padding should use `sm` (16px) or `md` (24px) to maintain a spacious, modern feel. Content blocks should be grouped logically using `lg` (32px) gaps to prevent the dashboard from feeling cluttered.

## Elevation & Depth

This design system utilizes **Tonal Layers** combined with **Ambient Shadows** to create a structured sense of depth without looking dated.

- **Level 0 (Surface):** The base background (`#0F172A`).
- **Level 1 (Cards/Containers):** Slightly lighter slate (`#1E293B`). These surfaces feature a 1px border of `#334155` to define edges clearly.
- **Level 2 (Modals/Popovers):** Higher elevation using a soft, extra-diffused shadow: `0 20px 25px -5px rgba(0, 0, 0, 0.5)`. 

A subtle 10% opacity blue tint is applied to shadows of active elements to tie them back to the primary brand color.

## Shapes

The design system adopts a **Rounded** shape language to soften the technical nature of the server data. 

- **Standard Elements (Buttons, Inputs):** 0.5rem (8px).
- **Cards & Widgets:** 1rem (16px).
- **Large Layout Containers:** 1.5rem (24px).

This generous radius creates a friendly "hardware appliance" feel, similar to high-end consumer electronics.

## Components

- **Buttons:** Primary buttons are solid Terminal Blue with white text. Secondary buttons use a ghost style with a Slate border.
- **Status Chips:** Small, pill-shaped indicators. For "Online" status, use a 10% green background with a bright green center dot.
- **Service Cards:** Feature a 1rem padding, a large service icon (e.g., Plex, Pi-hole) in the top right, and the primary metric displayed in `headline-md`.
- **Input Fields:** Darker than the card background with a subtle blue glow on focus. Use JetBrains Mono for text entry.
- **Data Graphs:** Use thin stroke lines (1.5px) with a subtle gradient fill below the line, transitioning from 20% Blue to transparent.
- **Sidebar:** Fixed width (260px) with a blurred backdrop effect (Glassmorphism) when overlaying content on smaller screens.
- **Quick-Action Toggle:** Larger than standard checkboxes, utilizing a custom "switch" design with a high-contrast blue state.
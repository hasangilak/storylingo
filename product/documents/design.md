# StoryLingo Design System v1.1 (2024-07-06)

## Brand Foundation
- **Brand values:** Empowerment, inclusivity, engagement through storytelling
- **Visual brand guidelines:** Dark, modern, glassmorphic, vibrant accent colors (purple, blue, teal, pink, yellow)
- **Logo usage:** Top-left, always on dark backgrounds, clear space maintained

## Design Tokens
### Colors (Tailwind theme: `brand`)
- **Primary:** `brand.purple` #7B3FF2, `brand.teal` #1FC8DB, `brand.blue` #3A86FF
- **Accent:** `brand.pink` #F72585, `brand.yellow` #FFBE0B
- **Text:** `brand.text` #FFFFFF (primary), `brand.textSecondary` #B0B0B0 (secondary)
- **Background:** `brand.bg` #0B0B1F (main), `brand.surface` #18182F (surface)
- **Border:** `brand.border` #23234A

### Typography
- **Font family:** 'Quloon', sans-serif (headings), system-ui (body)
- **Font sizes:** 48px (hero), 32px (section titles), 20px (body), 14px (meta)
- **Font weights:** 700 (bold), 500 (medium), 400 (regular)
- **Line heights:** 1.1 (headings), 1.5 (body)

### Spacing & Layout
- **Base unit:** 8px
- **Scale:** 8, 16, 24, 32, 40, 64px
- **Grid:** 12-column, 1200px max width, 32px gutters
- **Section/card padding:** 24px+ on mobile, 32px+ on tablet, 64px on desktop

## Component Library
### Buttons
- **Primary:** Filled, rounded, gradient (brand.purple → brand.blue), white text, large shadow
- **Secondary:** Outlined, white text, border accent
- **States:** Hover (brighter/scale), Focus (ring), Active (scale-95), Disabled (opacity)

### Cards
- **Story Card:** Glassmorphic, blurred background, drop shadow, rounded corners, microinteractions
- **Feature/Stats/Profile Card:** Glassy, high-contrast, animated, consistent padding
- **Testimonial Card:** Glassy, extra transparent, brand accent border, animated, user photo with gradient ring

### Navigation
- **Header:** Fixed, logo left, nav center, CTA right
- **Footer:** Simple, muted, links and copyright

### Testimonial/Trust Section
- **Current:** Carousel, 3-5 testimonials, user photo, name, quote, role
- **Style:** Super glassy, extra transparent, brand accent overlays, animated transitions, high contrast, accessible
- **Placement:** Before final CTA

## Patterns & Templates
- **Hero section:** Large headline, subtext, CTA, visual demo
- **Feature section:** 3-4 cards, icons, concise copy
- **Stats section:** Cards with icons, numbers, labels
- **CTA section:** Bold, high-contrast, clear action
- **Testimonial section:** Carousel, glassmorphic, animated

## Accessibility
- **Contrast:** All text meets WCAG AA/AAA
- **Keyboard navigation:** All interactive elements focusable, visible focus ring
- **Alt text:** All images and icons
- **ARIA roles:** For custom components

## Responsive Behavior
- **Mobile:** Stack sections, 24px+ padding, 100% width cards
- **Tablet:** 2-column grid, 32px+ padding
- **Desktop:** 3-4 column grid, 64px padding

## Microinteractions
- **Buttons/cards:** Smooth scale, focus ring, and press animations (Tailwind + Framer Motion)
- **Testimonial carousel:** Animated transitions, tactile nav arrows/dots
- **All interactive elements:** Transition, focus, and active states

## Implementation Guidelines
- **Handoff:** Figma/Zeplin specs, Tailwind theme for tokens
- **Assets:** SVG icons, webfonts, optimized images
- **QA:** Visual regression, accessibility audit, browser/device testing
- **Performance:** Optimize images, lazy load testimonial assets

---
*For detailed analysis, see design-analysis-report.md. For improvement actions, see design-improvement-roadmap.md.* 
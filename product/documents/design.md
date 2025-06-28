# StoryLingo Design System v1.0

## Brand Foundation
- **Brand values:** Empowerment, inclusivity, and engagement through storytelling
- **Visual brand guidelines:** Dark, modern, and immersive with vibrant accent colors (purple, blue, teal)
- **Logo usage:** Top-left, always on dark backgrounds, clear space maintained

## Design Tokens
### Colors
- **Primary:** #7B3FF2 (Purple), #1FC8DB (Teal), #3A86FF (Blue)
- **Accent:** #F72585 (Pink), #FFBE0B (Yellow)
- **Text:** #FFFFFF (Primary), #B0B0B0 (Secondary)
- **Background:** #0B0B1F (Main), #18182F (Surface)
- **Border:** #23234A

### Typography
- **Font family:** 'Quloon', sans-serif (headings), system-ui (body)
- **Font sizes:** 48px (hero), 32px (section titles), 18-20px (body), 14px (meta)
- **Font weights:** 700 (bold), 500 (medium), 400 (regular)
- **Line heights:** 1.1 (headings), 1.5 (body)

### Spacing & Layout
- **Base unit:** 8px
- **Scale:** 8, 16, 24, 32, 40, 64px
- **Grid:** 12-column, 1200px max width, 32px gutters
- **Section padding:** 64px top/bottom

## Component Library
### Buttons
- **Primary:** Filled, rounded, purple background, white text, large shadow
- **Secondary:** Outlined, white text, border accent
- **States:** Hover (brighter), Focus (outline), Disabled (opacity)

### Cards
- **Story Card:** Glassmorphic, blurred background, drop shadow, rounded corners
- **Feature Card:** Solid dark surface, icon, title, description

### Navigation
- **Header:** Fixed, logo left, nav center, CTA right
- **Footer:** Simple, muted, links and copyright

### Testimonial/Trust Section (to be improved)
- **Current:** Missing or minimal
- **Best Practice:** Carousel or grid, user photo, name, quote, role, animated transitions, high contrast, accessible

## Patterns & Templates
- **Hero section:** Large headline, subtext, CTA, visual demo
- **Feature section:** 3-4 cards, icons, concise copy
- **Stats section:** Cards with icons, numbers, labels
- **CTA section:** Bold, high-contrast, clear action

## Accessibility
- **Contrast:** All text meets WCAG AA/AAA
- **Keyboard navigation:** All interactive elements focusable
- **Alt text:** All images and icons
- **ARIA roles:** For custom components

## Responsive Behavior
- **Mobile:** Stack sections, 24px padding, 100% width cards
- **Tablet:** 2-column grid, 32px padding
- **Desktop:** 3-4 column grid, 64px padding

## Implementation Guidelines
- **Handoff:** Figma/Zeplin specs, CSS variables for tokens
- **Assets:** SVG icons, webfonts, optimized images
- **QA:** Visual regression, accessibility audit, browser/device testing

---

*For detailed analysis, see design-analysis-report.md. For improvement actions, see design-improvement-roadmap.md.* 
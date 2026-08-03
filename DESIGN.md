---
name: Pop Haus
description: A garden-soirée service book for one Charlotte partner supplying and styling the whole celebration.
colors:
  deep-plum: "#3a1437"
  burgundy-plum: "#47143f"
  celebration-pink: "#f45d88"
  petal-blush: "#f8dde4"
  warm-cream: "#fff9f5"
  porcelain-paper: "#fffcf9"
  rose-paper: "#f5ece8"
  near-black-ink: "#201721"
  warm-muted-ink: "#6e636b"
  champagne-gold: "#d3a55f"
  plum-rule: "rgba(58,20,55,.16)"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(4.3rem, 6vw, 6.2rem)"
    fontWeight: 600
    lineHeight: 0.84
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(3rem, 5.3vw, 5.6rem)"
    fontWeight: 400
    lineHeight: 0.96
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "2.5rem"
    fontWeight: 400
    lineHeight: 1
  body:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.08em"
rounded:
  square: "0"
  restrained: "2px"
  circle: "50%"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "20px"
  xl: "24px"
  2xl: "48px"
  section: "112px"
components:
  button-primary:
    backgroundColor: "{colors.deep-plum}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.restrained}"
    padding: "13px 24px"
  button-primary-hover:
    backgroundColor: "{colors.burgundy-plum}"
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.restrained}"
    padding: "13px 24px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.deep-plum}"
    typography: "{typography.label}"
    rounded: "{rounded.restrained}"
    padding: "13px 24px"
  input-text:
    backgroundColor: "{colors.porcelain-paper}"
    textColor: "{colors.near-black-ink}"
    typography: "{typography.body}"
    rounded: "{rounded.square}"
    padding: "11px 13px"
  choice-default:
    backgroundColor: "{colors.porcelain-paper}"
    textColor: "{colors.deep-plum}"
    rounded: "{rounded.square}"
    padding: "10px 16px"
  choice-selected:
    backgroundColor: "{colors.deep-plum}"
    textColor: "{colors.white}"
    rounded: "{rounded.square}"
    padding: "10px 16px"
  promo-card:
    backgroundColor: "{colors.deep-plum}"
    textColor: "{colors.white}"
    rounded: "{rounded.square}"
    padding: "42px"
---

# Design System: Pop Haus

## Overview

**Creative North Star: "The Garden Soirée Service Book"**

Pop Haus feels like a gracious event stylist's working service book: warm, cultivated, and useful enough to plan from. Expansive Cormorant Garamond headlines create invitation and ceremony, while compact DM Sans details make prices, choices, conditions, and next steps feel exact. The result is polished without becoming corporate and celebratory without becoming childish.

The visual world is photo-led and editorial. Cream and paper fields alternate with deep plum chapters; blush adds atmosphere, champagne marks trust and fine detail, and thin rules organize information more often than boxes do. Asymmetric image seams, long price lists, and deliberate changes of scale communicate that Pop Haus supplies a complete scene, not an isolated decor item.

The system rejects balloon-only framing and generic equal-card sameness when presenting the combined business. Rental equipment remains visually dominant, balloon styling acts as the finishing gesture, and factual operating detail is always allowed to share the page with beauty.

**Key Characteristics:**

- Garden-soirée warmth with service-book precision.
- Large, tightly set serif headlines paired with compact sans-serif operating detail.
- Cream, plum, blush, and restrained champagne fields separated by hairline rules.
- Photography-led asymmetric compositions with rental-first visual balance.
- Flat editorial surfaces at rest, with lift reserved for interaction.

## Colors

The palette moves between warm paper, deep fruit-toned ink, petal softness, and sparing champagne detail; it should feel hosted and refined rather than candy-colored.

### Primary

- **Deep Plum** (`#3a1437`): The principal brand field for primary actions, active tabs, the utility bar, footer, and full-width service chapters.
- **Burgundy Plum** (`#47143f`): A close tonal companion used for italic headline emphasis and the primary-button hover state, preserving depth without introducing another hue family.

### Secondary

- **Celebration Pink** (`#f45d88`): A rare interaction signal for focus rings, navigation underlines, and the video play hover; it is not a general surface fill.
- **Petal Blush** (`#f8dde4`): A soft celebratory field for selected editorial sections and selection states.

### Tertiary

- **Champagne Gold** (`#d3a55f`): A restrained marker for trust icons, calendar details, decorative rings, and promotional accents.

### Neutral

- **Warm Cream** (`#fff9f5`): The welcoming hero copy field and light button surface on plum.
- **Porcelain Paper** (`#fffcf9`): The default page, card, input, and sticky-navigation surface.
- **Rose Paper** (`#f5ece8`): The recurring warm alternate section and form-container surface.
- **Near-Black Ink** (`#201721`): Default body copy and dark image overlays.
- **Warm Muted Ink** (`#6e636b`): Supporting copy, descriptions, and operational qualifiers.
- **Plum Rule** (`rgba(58,20,55,.16)`): The standard divider, seam, and quiet boundary.
- **White** (`#ffffff`): High-contrast copy on plum and image overlays; use as a functional contrast color rather than a page background.

### Named Rules

**The Champagne Accent Rule.** Gold marks trust, specialness, or a fine decorative gesture; it never becomes a large background or primary action color.

**The Pink Signal Rule.** Saturated pink belongs to interaction and focus. Blush, not bright pink, carries broad celebratory atmosphere.

## Typography

**Display Font:** Cormorant Garamond (with Georgia and serif fallback); **Body Font:** DM Sans (with Arial and sans-serif fallback)

**Character:** The pairing balances romantic hosting with operational clarity. Serif type carries the invitation, while sans-serif type carries the inventory, navigation, labels, and decisions.

### Hierarchy

- **Display** (600, `clamp(4.3rem, 6vw, 6.2rem)`, 0.84 line-height): Reserved for the commanding hero statement; tightly stacked, with italic emphasis used as a graceful final turn.
- **Headline** (400, `clamp(3rem, 5.3vw, 5.6rem)`, 0.96 line-height): Section openings, often broken across two intentional lines and occasionally centered for a ceremonial pause.
- **Title** (400, `2.5rem`, 1 line-height): Service panels, catalog introductions, and substantial content cards.
- **Body** (400, `1rem`, 1.6 line-height): Explanations and planning guidance, generally held between 35 and 65 characters per line by the surrounding layout.
- **Label** (700, `0.78rem`, `0.08em`, uppercase): Buttons, metadata, tabs, and concise operating signals. Smaller labels may extend tracking to `0.12em`–`0.18em` where the implementation establishes it.

### Named Rules

**The Invitation-and-Instructions Rule.** Cormorant Garamond invites; DM Sans instructs. Never set prices, form labels, or navigation in decorative serif type except for deliberately isolated price figures.

**The Commanding Line Rule.** Display headlines use intentional, compact line breaks and stay broad enough to avoid tall, accidental text columns.

## Layout

The desktop canvas uses a centered maximum-width container of 1360px with 24px side gutters. Major sections breathe at 112px vertically, then contract to 86px at the intermediate layout and 72px on small screens. Internal spacing favors a practical rhythm of 8px, 12px, 16px, 20px, 24px, and 48px, with occasional 70px–90px editorial gaps separating unequal columns.

Desktop compositions are intentionally asymmetric: the hero uses a roughly 42/58 copy-to-image split, the service spread gives rentals the larger panel, and catalogs place a narrow introduction beside a wider information field. Full-bleed image seams and edge-to-edge mobile section fields are allowed when they strengthen the service-book rhythm; content itself remains aligned to the shared container.

At 1120px and below, the container narrows to 720px, the primary navigation becomes a drawer, and most feature grids stack to one column. At 600px and below, the gutter becomes 16px, action groups become full-width stacks, multicolumn price lists collapse, galleries become a single image column, and complex form grids become one column. The 1100px adjustment exists as a closely paired refinement point for navigation density, form columns, and footer flow.

**The Editorial Seam Rule.** Prefer a thin rule, tonal field change, or image edge to another rounded container when separating related material.

## Elevation & Depth

The system is flat by default. Depth comes first from tonal layering, photography, translucent image gradients, and hairline borders; shadows appear only on interactive lift or floating mobile navigation. Primary buttons lift with a compact plum shadow on hover (`0 10px 28px rgba(58,20,55,.2)`), reel cards use a quiet editorial shadow (`0 18px 40px rgba(58,20,55,.12)`), and the open mobile menu uses a stronger floating shadow (`0 22px 40px rgba(58,20,55,.15)`).

### Shadow Vocabulary

- **Action Lift** (`0 10px 28px rgba(58,20,55,.2)`): A short response beneath hovered primary actions.
- **Editorial Media** (`0 18px 40px rgba(58,20,55,.12)`): A low ambient layer under vertical reel cards.
- **Floating Navigation** (`0 22px 40px rgba(58,20,55,.15)`): Reserved for the open mobile navigation sheet.

### Named Rules

**The Flat-at-Rest Rule.** Do not add ambient shadows to ordinary cards, forms, catalog rows, or section surfaces; structure them with tone and rules.

## Shapes

The core form language is square and book-like. Inputs, choice controls, cards, galleries, catalog shells, and section panels use square corners; standard buttons retain only a restrained 2px softening. Circles are reserved for singular icon actions and ornamental motifs: reel play controls, social links, balloon-size markers, and the concentric champagne rings of the about mark.

Borders are thin and plum-derived. One-pixel rules should feel like editorial registration lines rather than boxed UI chrome. Photography is clipped cleanly to rectangular frames, with no ornamental rounding.

**The Circle-as-Gesture Rule.** Use circles for a compact action, measurement, or decorative mark—not as the default container silhouette.

## Components

Components feel precise and tactile: dense enough for planning, restrained enough to let photography and typography lead.

### Buttons

- **Shape:** Almost square with a restrained 2px radius and a minimum 50px touch height.
- **Primary:** Deep Plum with white uppercase DM Sans label text, a 1px matching border, and 13px by 24px padding.
- **Hover / Focus:** Shift to Burgundy Plum, rise 2px, and gain the Action Lift shadow over 200ms. Keyboard focus uses a 3px Celebration Pink outline with 3px offset. Active state returns the button toward its resting plane.
- **Secondary / Light:** The outline variant begins transparent with Deep Plum text and fills plum on hover. The light variant uses Warm Cream on plum fields and moves to White on hover.

### Chips

- **Style:** Square choice controls use Porcelain Paper, a translucent plum border, Deep Plum text, and 10px by 16px padding.
- **State:** Checked controls invert to Deep Plum with white text. Keyboard focus moves to the visible chip using the same pink focus language as global controls.

### Cards / Containers

- **Corner Style:** Square corners throughout.
- **Background:** Porcelain Paper for light information cards, Rose Paper for grouped planning surfaces, Deep Plum for promotional or custom-design chapters, and photography for service panels.
- **Shadow Strategy:** Flat by default; only vertical reel media receives the low Editorial Media shadow.
- **Border:** Thin Plum Rule seams or a single Deep Plum registration edge.
- **Internal Padding:** Usually 42px–48px on desktop, reducing to 24px–30px on small screens.

### Inputs / Fields

- **Style:** Square Porcelain Paper fields with a 1px translucent plum border, 48px minimum height, and 11px by 13px padding.
- **Focus:** Border shifts to Deep Plum and gains a 3px translucent Celebration Pink ring.
- **Error / Disabled:** The implemented system has no dedicated error token yet. Disabled actions retain their form with reduced opacity and no hover lift.

### Navigation

The sticky header pairs a slim Deep Plum utility bar with a translucent Porcelain Paper navigation field and hairline lower border. Desktop links are compact DM Sans labels whose active and hover states draw a 1px Celebration Pink underline. At 1120px the desktop links give way to a 44px menu control and a full-width paper drawer with ruled link rows; the drawer floats using the dedicated navigation shadow.

### Catalog Tabs and Price Rows

Rental tabs form one uninterrupted horizontal register rather than separate pills. The active tab inverts to Deep Plum and white while inactive tabs remain transparent and are separated by hairline rules. Price rows repeat a quiet divider, keep item information left, and set prices in Cormorant Garamond at the right so exact cost remains easy to scan.

### Photo-Led Service Panels

Service panels are tall, square-cornered image fields with a dark lower gradient and white copy anchored at the bottom. Hover applies a restrained image scale only. The rental panel remains larger than the balloon panel whenever the two are presented together.

## Do's and Don'ts

### Do:

- **Do** let one large serif statement, one strong image seam, or one plum chapter lead each section.
- **Do** use exact price lists, operational notes, and hairline rules as part of the visual character rather than hiding them behind nested cards.
- **Do** keep rentals visually dominant when presenting the combined party-rental and balloon-styling offer.
- **Do** preserve visible pink focus states and reduced-motion behavior across every interactive component.
- **Do** use square panels and near-square actions as the default shape language.

### Don't:

- **Don't** turn the palette into a loud pink-and-gold party theme; bright pink signals interaction and champagne remains an accent.
- **Don't** default to equal card grids, rounded floating tiles, or shadows on every surface.
- **Don't** frame Pop Haus as balloon decor alone when the complete-event offer is in view.
- **Don't** replace the serif/sans relationship with one all-purpose typeface or set operational details in display typography.
- **Don't** crop or compose paired service imagery so balloons overpower tents, tables, chairs, linens, and the rest of the rental setup.

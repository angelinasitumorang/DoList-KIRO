# Design: ToDo List — Neobrutalism

## Visual Language

Neobrutalism: raw, bold, unapologetic. Thick black borders, hard drop shadows, flat colors with high contrast. No gradients, no rounded softness, no blur.

## Color Palette

| Token         | Value     | Usage                        |
|---------------|-----------|------------------------------|
| `--black`     | `#000000` | Borders, shadows, text       |
| `--white`     | `#ffffff` | Page background, card bg     |
| `--yellow`    | `#FFE500` | Primary accent (button, header bg) |
| `--pink`      | `#FF6B9D` | Hover states, delete button  |
| `--blue`      | `#4361EE` | Focus ring, bullet dots      |
| `--red`       | `#FF3B30` | Error messages               |
| `--gray-light`| `#F5F5F5` | Task item background         |

## Typography

- Font: `'Space Grotesk'` (Google Fonts) — geometric, bold, brutalist feel
- Fallback: `sans-serif`
- Heading: 700 weight, uppercase, letter-spacing
- Body: 500 weight

## Components

### Container
- White background
- `border: 3px solid #000`
- `box-shadow: 6px 6px 0px #000` (hard shadow, no blur)
- No border-radius (or max 2px)

### Input Field
- `border: 2.5px solid #000`
- No border-radius
- Black focus outline (no glow)
- Background: white

### Add Button
- Background: `#FFE500` (yellow)
- `border: 2.5px solid #000`
- `box-shadow: 3px 3px 0px #000`
- On hover: shadow shifts to `1px 1px 0px #000`, translate(2px, 2px) — "pressed" effect
- Font: bold, uppercase, black text

### Task Item
- Background: `#F5F5F5`
- `border: 2px solid #000`
- `box-shadow: 3px 3px 0px #000`
- No border-radius
- On hover: yellow background

### Delete Button
- No background by default
- On hover: pink background (`#FF6B9D`), black border

### Error Message
- Color: `#FF3B30`
- Font: bold, small

## Layout
- Centered single column, max-width 480px
- Page background: white or very light gray (`#f5f5f5`)
- Generous padding inside container

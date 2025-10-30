# CircularGallery Component

## Installation

```bash
npx shadcn@latest add @react-bits/CircularGallery-JS-CSS
```

Or manually by copying the files:
- `components/CircularGallery.tsx`
- `components/CircularGallery.css`

## Dependencies

Make sure you have `ogl` installed:
```bash
npm install ogl
# or
yarn add ogl
# or
pnpm add ogl
# or
bun add ogl
```

## Usage

```tsx
import CircularGallery from './components/CircularGallery'

<div style={{ height: '600px', position: 'relative' }}>
  <CircularGallery 
    bend={3} 
    textColor="#ffffff" 
    borderRadius={0.05} 
    scrollEase={0.02}
  />
</div>
```

## Props

- `items`: Array of items with `image` and `text` properties (optional, uses default gallery if not provided)
- `bend`: Number controlling the curvature of the gallery (default: 3)
- `textColor`: Color of the text labels (default: '#ffffff')
- `borderRadius`: Border radius for images (default: 0.05)
- `font`: Font specification for text (default: 'bold 30px Figtree')
- `scrollSpeed`: Speed of scrolling (default: 2)
- `scrollEase`: Easing factor for smooth scrolling (default: 0.05)

## Features

- 3D circular/infinite scrolling gallery
- WebGL-powered smooth animations
- Mouse wheel and touch support
- Auto-looping infinite scroll
- Customizable items, colors, and styling


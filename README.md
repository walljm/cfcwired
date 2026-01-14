# CFC Wired Website

Modern rebuild of www.cfcwired.org for integration with RockRMS.

## Tech Stack

- **HTML5** - Semantic markup
- **Bootstrap 5.3.3** - Latest version via CDN
- **LESS** - CSS preprocessor for maintainable styles
- **Bootstrap Icons** - Icon library

## Project Structure

```
cfcwired/
├── index.html          # Main homepage
├── css/
│   └── styles.css      # Compiled CSS (from LESS)
├── less/
│   ├── styles.less     # Main LESS file
│   ├── variables.less  # Color, typography, spacing variables
│   └── mixins.less     # Reusable LESS mixins
├── package.json        # NPM configuration
└── README.md           # This file
```

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm

### Installation

```bash
npm install
```

### Development

To compile LESS to CSS:

```bash
npm run build:css
```

To watch for changes and auto-compile:

```bash
npm run watch:css
```

### Viewing the Site

Open `index.html` in your browser, or use a local development server:

```bash
npx serve .
```

## Customization

### Colors & Variables

Edit `less/variables.less` to customize:
- Brand colors
- Typography settings
- Spacing values
- Border radius
- Shadows

### Adding New Styles

1. Add styles to `less/styles.less` or create new `.less` files
2. Import new files in `styles.less`
3. Run `npm run build:css` to compile

## RockRMS Integration

This site is designed to be integrated into RockRMS. The CSS and HTML can be adapted for use with RockRMS themes and Lava templates.

## License

MIT

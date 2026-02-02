# CFC Wired Website

Modern rebuild of [www.cfcwired.org](https://www.cfcwired.org) for integration with RockRMS.

## Documentation

| Document | Purpose |
|----------|---------|
| [docs/agents.md](docs/agents.md) | AI agent guidelines, coding standards |
| [docs/DESIGN_SPECIFICATIONS.md](docs/DESIGN_SPECIFICATIONS.md) | Complete design specs and content |

## Tech Stack

- **HTML5** - Semantic markup
- **Bootstrap 5.3.3** - Latest version via CDN
- **LESS** - CSS preprocessor for maintainable styles
- **Bootstrap Icons** - Icon library

## Project Structure

```
cfcwired/
├── src/                    # Website source files
│   ├── index.html          # Homepage
│   ├── request-prayer.html
│   ├── about-us/           # About section pages
│   ├── come-visit/
│   ├── watch-read/
│   ├── get-involved/
│   ├── for-my-family/
│   ├── includes/           # Reusable HTML fragments
│   ├── css/
│   │   └── styles.css      # Compiled CSS (from LESS)
│   ├── less/
│   │   ├── styles.less     # Main LESS file
│   │   ├── variables.less  # Color, typography, spacing variables
│   │   └── mixins.less     # Reusable LESS mixins
│   └── images/
├── docs/                   # Documentation
│   ├── agents.md           # AI agent guidelines
│   └── DESIGN_SPECIFICATIONS.md
├── package.json
└── README.md
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

Open `src/index.html` in your browser, or use a local development server:

```bash
npm run serve
# or
npx serve src
```

## Customization

### Colors & Variables

Edit `src/less/variables.less` to customize:
- Brand colors
- Typography settings
- Spacing values
- Border radius
- Shadows

### Adding New Styles

1. Add styles to `src/less/styles.less` or create new `.less` files
2. Import new files in `styles.less`
3. Run `npm run build:css` to compile

## RockRMS Integration

This site is designed to be integrated into RockRMS. The CSS and HTML can be adapted for use with RockRMS themes and Lava templates.

## License

MIT

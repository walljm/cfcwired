# AI Agents Guidelines

This document provides context and guidelines for AI coding assistants working on the CFC Wired project.

## Project Overview

- **Purpose**: Modern rebuild of www.cfcwired.org for RockRMS integration
- **Framework**: Bootstrap 5.3.3 (via CDN)
- **CSS Preprocessor**: LESS
- **Target Platform**: RockRMS CMS

## Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| Bootstrap | 5.3.3 | UI framework |
| Bootstrap Icons | 1.11.3 | Icon library |
| LESS | 4.2.x | CSS preprocessing |
| Node.js | 18+ | Build tooling |

## File Structure

```
cfcwired/
├── index.html          # Main entry point
├── css/
│   └── styles.css      # Compiled CSS (DO NOT EDIT DIRECTLY)
├── less/
│   ├── styles.less     # Main stylesheet - import other files here
│   ├── variables.less  # Colors, typography, spacing variables
│   └── mixins.less     # Reusable LESS mixins
├── package.json        # NPM scripts and dependencies
└── README.md           # Project documentation
```

## Coding Standards

### HTML
- Use semantic HTML5 elements
- Follow Bootstrap 5 conventions for classes and components
- Maintain accessibility (ARIA labels, proper heading hierarchy)
- Use BEM-like naming for custom classes when not using Bootstrap

### LESS/CSS
- **Edit LESS files, not CSS directly** - CSS is compiled from LESS
- Define colors and repeated values in `variables.less`
- Create reusable patterns as mixins in `mixins.less`
- Use Bootstrap utility classes when possible before writing custom CSS
- Follow mobile-first responsive design

### JavaScript
- Use vanilla JS or Bootstrap's JS components
- Avoid jQuery unless necessary for RockRMS compatibility

### Terminal Commands
- **Never use heredoc syntax** (`<< EOF` or `<<-EOF`) - it doesn't work reliably
- Use `create_file` tool for creating files with content
- Use `echo "content" > file` or `printf` for simple file writes
- Chain multiple `echo` commands with `>>` for appending

## Build Commands

```bash
npm install          # Install dependencies
npm run build:css    # Compile LESS to CSS
npm run watch:css    # Watch and auto-compile
```

## RockRMS Integration Notes

When adapting for RockRMS:
- HTML can be converted to Lava templates
- CSS should remain compatible with Rock's theme system
- Avoid inline styles; use classes for Rock's content blocks
- Test responsiveness for Rock's mobile app compatibility

## Common Tasks

### Adding a New Page
1. Copy `index.html` as a template
2. Update the `<title>` and content
3. Ensure navigation links are updated across all pages

### Modifying Colors/Theme
1. Edit `less/variables.less`
2. Run `npm run build:css`
3. Test changes across all pages

### Adding New Styles
1. Add styles to `less/styles.less` or create a new `.less` file
2. Import new files in `styles.less` if separate
3. Compile with `npm run build:css`

## Resources

- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.3/)
- [Bootstrap Icons](https://icons.getbootstrap.com/)
- [LESS Documentation](https://lesscss.org/)
- [RockRMS Developer Docs](https://www.rockrms.com/Rock/Developer)

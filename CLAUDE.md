# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a multi-talk repository using Slidev for creating and presenting slides. The repository is organized with talks in date-based directories following the pattern used by antfu/talks, with each talk containing its own Slidev configuration and content.

## Development Commands

### Individual Talk Development
Navigate to any talk directory (e.g., `2024-xx-xx-talk-name/`) and run:
- `pnpm install` - Install dependencies for a specific talk
- `pnpm dev` - Start development server with auto-open (`slidev --open`)
- `pnpm build` - Build presentation for production (`slidev build`)
- `pnpm export` - Export presentation to static files (`slidev export`)

### Repository Management
- `node scripts/organize-talks.js` - Reorganize talks by metadata dates into YYYY-MM-DD directories
- `pnpm run build:all` - Build all talks in the repository (when implemented)

## Directory Structure

```
talks/
├── 2024-03-15-str-four-vector/     # Talk directories named by date
│   ├── slides.md                   # Main presentation content
│   ├── package.json               # Talk-specific dependencies
│   ├── components/                # Vue components for slides
│   ├── snippets/                  # Code snippets for import
│   ├── public/                    # Static assets (images, gifs)
│   └── pages/                     # Additional slide files
├── scripts/
│   └── organize-talks.js          # Reorganization script
└── CLAUDE.md
```

## Talk Architecture

Each talk follows Slidev conventions:
- **slides.md** - Main presentation with frontmatter configuration
- **components/** - Vue components embedded in slides
- **snippets/** - TypeScript/JavaScript code snippets
- **pages/** - Additional slide files imported via `src` attribute
- **public/** - Static assets served from root path

## Metadata and Organization

Talks contain metadata in their frontmatter that includes:
- `date`: Primary date field for automatic organization (YYYY-MM-DD format)
- `slug`: URL-friendly identifier for directory naming
- `coverDate`: Legacy date field (prefer `date` over this)
- Theme configuration (typically Seriph or Academic themes)
- Presentation settings and transitions

## Key Frameworks and Tools

- **Slidev** - Slides framework with Markdown and Vue integration
- **Vue 3** - For interactive components
- **TypeScript** - Code snippets and configuration
- **UnoCSS/TailwindCSS** - Styling framework
- **KaTeX** - Math rendering for physics/academic content
- **Mermaid** - Diagram rendering
- **Monaco Editor** - Code editing capabilities

## Content Guidelines

- Use Markdown with frontmatter for slide configuration
- Physics and academic content supports LaTeX math notation
- Interactive elements use Vue 3 Composition API
- Code blocks support highlighting, Monaco editor, and live execution
- Static assets (especially animated GIFs) should be placed in `public/` directory

## Package Management

- Uses pnpm for all package management
- Each talk maintains its own `package.json` with Slidev dependencies
- Common dependencies across talks should be considered for workspace configuration
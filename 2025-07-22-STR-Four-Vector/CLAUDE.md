# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Slidev presentation project for physics content focused on STR (Special Theory of Relativity) Four-Vector concepts. Slidev is a slides maker and presenter designed for developers that uses Markdown for content and Vue components for interactivity.

## Development Commands

- `pnpm install` - Install dependencies
- `pnpm dev` - Start development server with auto-open (runs `slidev --open`)
- `pnpm build` - Build presentation for production (runs `slidev build`)
- `pnpm export` - Export presentation to static files (runs `slidev export`)

## Architecture

- **slides.md** - Main presentation content in Markdown with frontmatter configuration
- **components/** - Vue components that can be embedded in slides (e.g., Counter.vue)
- **snippets/** - TypeScript code snippets that can be imported into slides
- **pages/** - Additional slide files that can be imported via `src` attribute
- **Theme**: Uses Seriph theme with custom styling capabilities

## Key Features

- Markdown-based slides with Vue component integration
- Interactive elements using Vue 3 Composition API
- Code highlighting with TypeScript support
- LaTeX math rendering with KaTeX
- Mermaid diagram support
- Motion animations via @vueuse/motion
- Monaco editor integration for live coding demos

## Content Structure

- Slides support frontmatter for configuration (theme, transitions, layouts)
- Code blocks can include special syntax for highlighting, Monaco editor, and execution
- Components are auto-imported from components/ directory
- External snippets can be imported using `<<< @/snippets/filename.ts#region`

## Package Management

Uses pnpm with shamefully-hoist and auto-install-peers enabled in .npmrc for Slidev compatibility.

## Static Assets

- **public/** - Static files served from root path (e.g., GIF animations)  
- **static/** - Source directory for static content (archived)
- GIF animations are served from public/ and referenced with `/filename.gif` paths

## Physics Context

This presentation focuses on Special Theory of Relativity Four-Vector concepts, suggesting content will include mathematical physics notation and potentially complex LaTeX equations.
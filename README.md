# Inertia for Vanilla PHP

A lightweight, framework-agnostic implementation of Inertia.js with plain PHP.

## What is Inertia for Vanilla PHP?

This is a minimal, zero-dependency PHP adapter for Inertia.js that lets you build modern single-page applications using Vue.js and vanilla PHP. No heavy frameworks required.

## Why Inertia for Vanilla PHP?

Modern web development often forces you to choose between:

1. **Traditional server-rendered apps**: Simple but with poor user experience
2. **Single-page applications**: Great UX but complex API development
3. **Monolithic frameworks**: Powerful but heavy and opinionated

Inertia for Vanilla PHP gives you the best of all worlds:

-   **Modern SPA experience** without building a separate API
-   **Server-side routing** with simple PHP
-   **No complex framework** to learn or maintain
-   **Progressive enhancement** - works even without JavaScript
-   **Lightweight footprint** - just a few files, no dependencies
-   **Modern frontend tooling** with Vite and hot module replacement

## How It Works

This implementation bridges your vanilla PHP backend with a Vue.js frontend:

1. Use familiar PHP routing (with bramus/router or any router you prefer)
2. Return page data with `Inertia::render('PageName', ['prop' => 'value'])`
3. Inertia.js handles client-side page transitions, history, and state

## Key Features

-   **Framework-agnostic**: Works with any PHP setup, not tied to Laravel or Symfony
-   **Simple setup**: Just a few files, no complex configuration
-   **Developer-friendly**: Hot module replacement, concurrently running servers
-   **Production-ready**: Easy build process for deployment
-   **Familiar patterns**: Use the same mental model as larger frameworks

## Getting Started

See the included documentation to get up and running with Inertia for Vanilla PHP in minutes. A complete single-page application with zero complex dependencies.

## Why Not Use a Framework?

Frameworks are excellent for complex applications, but they come with overhead:

-   Learning curves for each framework's patterns
-   Dependency on framework release cycles
-   Upgrading challenges and compatibility issues
-   Additional complexity when you only need a small subset of features

This implementation is for developers who want a modern stack with minimal overhead and maximum flexibility.

Enjoy the simplicity of vanilla PHP combined with the power of modern frontend tooling!

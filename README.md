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

## Installation

Get started quickly by cloning the repository:

```bash
# Clone the repository using degit (no git history)
npx degit dashpilot/inertia-vanilla-php my-project

# Navigate to the project directory
cd my-project

# Install PHP dependencies
composer install

# Install JavaScript dependencies
npm install
```

## Usage

### Development

Run both the Vite dev server and PHP server concurrently:

```bash
# Start both servers with a single command
npm run dev
```

This will start:

-   PHP development server at http://localhost:8000
-   Vite dev server at http://localhost:3000 (used for assets)

You should always access your app through the PHP server at http://localhost:8000.

### Production

Build your assets for production:

```bash
# Build optimized assets
npm run build
```

Then deploy your application to your production server. In production, all assets are served directly from the `public/assets` directory without needing the Vite server.

## Getting Started

See the included documentation to get up and running with Inertia for Vanilla PHP in minutes. A complete single-page application with zero complex dependencies.

## Philosophy

This project embraces a minimalist approach to web development. In today's framework-heavy world, it's easy to forget how capable vanilla PHP can be on its own.

The philosophy is simple:

-   **Use what PHP gives you** - PHP already includes powerful tools for sessions, file handling, and database connections (PDO)
-   **Add only what you need** - A router (bramus/router) and a template system (Inertia.js + Vue) are all you really need
-   **Avoid unnecessary abstractions** - Frameworks often add layers of complexity that aren't always necessary

With this approach, you get:

1. **Simplicity** - Understand your entire codebase without diving through framework internals
2. **Control** - Direct access to underlying PHP functionality without abstraction layers
3. **Performance** - Minimal overhead means faster execution and less memory usage
4. **Maintainability** - Fewer dependencies mean fewer potential breaking changes
5. **Educational value** - Learn how things actually work under the hood

This setup is perfect for developers who prefer to understand every line of code in their application and want to avoid framework lock-in while still delivering modern user experiences.

## Why Not Use a Framework?

Frameworks are excellent for complex applications, but they come with overhead:

-   Learning curves for each framework's patterns
-   Dependency on framework release cycles
-   Upgrading challenges and compatibility issues
-   Additional complexity when you only need a small subset of features

This implementation is for developers who want a modern stack with minimal overhead and maximum flexibility.

Enjoy the simplicity of vanilla PHP combined with the power of modern frontend tooling!

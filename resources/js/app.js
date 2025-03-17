// resources/js/app.js - Corrected Inertia setup
import { createApp, h } from 'vue';
import { createInertiaApp, Link } from '@inertiajs/vue3';

// For development - check that Vue is loaded correctly
console.log('Vue app.js loaded');

createInertiaApp({
    resolve: (name) => {
        // Debug which component is being requested
        console.log('Resolving component:', name);

        // Find the page component
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true });
        const page = pages[`./Pages/${name}.vue`];

        if (!page) {
            console.error(`Page not found: ${name}`);
        }

        return page;
    },
    setup({ el, App, props, plugin }) {
        console.log('Setting up Inertia app');
        console.log('Page props:', props);

        createApp({ render: () => h(App, props) })
            .use(plugin)
            .component('InertiaLink', Link) // Register InertiaLink globally
            .mount(el);
    },
    // Important for development: make sure Inertia knows the progress settings
    progress: {
        color: '#4B5563',
    },
});

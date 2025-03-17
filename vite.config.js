// vite.config.js with correctly configured dev server
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

export default defineConfig({
    plugins: [vue()],
    // Configure server options
    server: {
        // Allow connections from the PHP server
        cors: true,
        // Use a different port if needed
        port: 3000,
        // Handle HMR correctly
        hmr: {
            // Make sure HMR works across network
            host: 'localhost',
        },
    },
    build: {
        // Output to public/assets
        outDir: 'public/assets',
        // Don't empty the directory (to preserve index.php if it's there)
        emptyOutDir: false,
        // Disable hashing in filenames and fix CSS output path
        rollupOptions: {
            output: {
                entryFileNames: 'app.js',
                chunkFileNames: 'chunks/[name].js',
                assetFileNames: '[name].[ext]',
            },
            input: 'resources/js/app.js',
        },
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, 'resources/js'),
        },
    },
});

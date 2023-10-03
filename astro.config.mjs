import { defineConfig } from "astro/config"
import yaml from "@rollup/plugin-yaml"
import prefetch from "@astrojs/prefetch"

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [yaml()],
        build: {
            rollupOptions: {
                output: {
                    entryFileNames: `_astro/[name].js`,
                    chunkFileNames: `_astro/[name].js`,
                    assetFileNames: `_astro/[name].[ext]`,
                },
            },
        },
    },
    integrations: [prefetch()],
})

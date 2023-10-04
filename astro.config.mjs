import { defineConfig } from "astro/config"
import yaml from "@rollup/plugin-yaml"
import ViteSvgSpriteWrapper from "vite-svg-sprite-wrapper"

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [
            yaml(),
            ViteSvgSpriteWrapper({
                outputDir: "./public/assets/images",
            }),
        ],
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
})

import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    root: "src",
    build: {
        outDir: "../dist/cdn",
        lib: {
            name: "ilw-grid",
            entry: "ilw-grid.ts",
            fileName: "ilw-grid",
            formats: ["es"],
        },
        rollupOptions: {
            output: {
                assetFileNames: (chunkInfo) => {
                    if (chunkInfo.name === "style.css") return "ilw-grid.css";
                    return "[name][extname]";
                },
            },
        },
    },
    server: {
        hmr: false,
    },
});

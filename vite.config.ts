import { defineConfig } from 'vite'
export default defineConfig({
    build: {
        lib: {
            entry: 'src/main.ts',
            name: 'charts3d'
        },
        // minify: "terser",
        // rollupOptions: {
        //     external: ['three'],
        //     output: {
        //         globals: {
        //             three: 'THREE'
        //         }
        //     }
        // }
    }
})
import posthtml from '@vituum/vite-plugin-posthtml'

export default {
    root: 'src',
    build: {
        outDir: '../dist'
    },
    plugins: [
        posthtml({
            plugins: {
                "posthtml-include": {
                    "root": "./src"
                }
            },
            options: {}
        }),
    ]
}

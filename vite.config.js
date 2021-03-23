import {defineConfig} from 'vite'

const path = require('path')

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/main.js'),
            name: 'LibTest'
        },
        rollupOptions: {
            external: ['google-libphonenumber']
        }
    },
})

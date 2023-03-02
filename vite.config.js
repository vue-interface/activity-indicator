import vue from '@vitejs/plugin-vue';
import { pascalCase } from 'change-case';
import path from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import pkg from './package.json';

const fileName = pkg.name.split('/')[1];

const external = [
    ...(pkg.dependencies ? Object.keys(pkg.dependencies) : []),
    ...(pkg.peerDependencies ? Object.keys(pkg.peerDependencies) : [])
];


export default ({ command }) => {
    return defineConfig({
        build: {
            sourcemap: command === 'build',
            lib: {
                entry: path.resolve(__dirname, 'index.ts'),
                name: pascalCase(fileName),
                fileName,
            },
            rollupOptions: {
                external: ['@vue-interface/component-registry', 'vue'],
                output: {
                    globals: {
                        '@vue-interface/component-registry': 'ComponentRegistry',
                        'vue': 'Vue'
                    },
                }
            },
            watch: !process.env.NODE_ENV && {
                include: [
                    './tailwindcss/**/*.js'
                ]
            }
        },
        plugins: [
            vue(),
            dts()
        ],
    });
};

// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
    globalIgnores(['dist']),
    {
        files: ['**/*.{ts,tsx,css}'],
        extends: [js.configs.recommended, tseslint.configs.recommended, reactRefresh.configs.vite],
        languageOptions: {
            ecmaVersion: 2021,
            globals: globals.browser
        }
    }
]);

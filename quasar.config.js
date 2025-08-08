/* eslint-env node */

// https://v2.quasar.dev/quasar-cli-vite/quasar-config-js
import { configure } from 'quasar/wrappers'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import path, { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default configure(function (/* ctx */) {
  return {
    boot: ['i18n', 'axios'],

    css: ['app.css'],

    extras: [
      'fontawesome-v6',
      'roboto-font',
      'material-icons',
    ],

    build: {
      target: {
        browser: ['es2019', 'edge88', 'firefox78', 'chrome87', 'safari13.1'],
        // Em Node 22 você pode REMOVER a linha abaixo ou trocar para 'node20'
        // node: 'node16'
      },
      vueRouterMode: 'history',

      vitePlugins: [
        [VueI18nPlugin, {
          include: path.resolve(__dirname, './src/i18n/**')
        }]
      ]
    },

    devServer: {
      open: true
    },

    framework: {
      config: {},
      plugins: ['AppFullscreen']
    },

    animations: [],

    ssr: {
      pwa: false,
      prodPort: 3000,
      middlewares: ['render']
    },

    pwa: {
      workboxMode: 'generateSW',
      injectPwaMetaTags: true,
      swFilename: 'sw.js',
      manifestFilename: 'manifest.json',
      useCredentialsForManifestTag: false
    },

    capacitor: {
      hideSplashscreen: true
    },

    electron: {
      inspectPort: 5858,
      bundler: 'packager',
      packager: {},
      builder: { appId: 'quasar-admin2' }
    },

    bex: {
      contentScripts: ['my-content-script']
    }
  }
})

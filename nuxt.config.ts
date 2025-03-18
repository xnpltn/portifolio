// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  css: [
    '~/assets/css/main.css',
    '~/assets/css/modern-normalise.css',
  ],
  modules: ['@nuxt/content'],
  content: {
    highlight: {
      theme: {
        default: 'catppuccin-macchiato',
      },
      langs: [
        'go',
        'python',
        'rust',
        'shellscript',
        'c',
        'cpp',
        'md',
        'typescript',
        'html',
        'css',
        'js',
        'vue',
        'json',
        'mdc',
        'haskell',
      ]
    }
  }
})

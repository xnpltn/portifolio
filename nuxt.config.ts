// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  //devtools: { enabled: true },

  css: [
    '~/assets/css/main.css',
    '~/assets/css/modern-normalise.css',
    '~/assets/css/utilities.css',
    '~/assets/css/components/header.css',
    '~/assets/css/components/hero.css',
    '~/assets/css/components/footer.css',
    '~/assets/css/components/blog.css',
    '~/assets/css/components/content.css',
  ],
  modules: ['@nuxt/icon', '@nuxt/content', '@nuxt/image'],
  image: {
    screens: {
      'xs': 475,
      'sm': 640,
      'md': 768,
      'lg': 1024,
      'xl': 1280,
      '2xl': 1536
    },
  },
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
        'java',
        'mdc',
        'haskell',
        'jsx',
        'c#',
      ]
    }
  }
})

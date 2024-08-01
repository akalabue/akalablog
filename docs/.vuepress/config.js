import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import {zhNavbar, enNavbar} from './navbar/switch'
import {zhSidebar, enSidebar} from './sidebar/switch'

export default defineUserConfig({
  head: [
    ['link', {rel: 'icon', href: '/icon.jpg'}]
  ],
   lang: 'zh-CN',
  // 默认站点语言为英文
  // lang: 'en-US',

  locales: {
    '/': {
        selectLanguageName: '简体中文1',
        title: '阿卡啦博客',
        description: '繁星似海 熠熠生辉1',
    },
    '/en/': {
        selectLanguageName: 'English1',
        title: 'AKALABUE documents',
        description: 'my book',
    },
  },


  title: 'VuePress',
  description: 'My first VuePress Site',

  theme: defaultTheme({
    logo: '/logo.jpg',
    navbar: ['/', '/get-started'],
    repo: 'https://gitee.com/akalabue/akalablog',
    locales: {
      '/': {
          selectLanguageName: '简体中文',
          selectLanguageText: '选择语言',
          navbar: zhNavbar,
          sidebar: zhSidebar,
          notFound:['没找到','网页走丢了'],
          backToHome:'返回首页'
      },
      '/en/': {
          selectLanguageName: 'English',
          selectLanguageText: 'Language',
          navbar: enNavbar,
          sidebar: enSidebar,
      },
  }

  }),

  bundler: viteBundler(),
})

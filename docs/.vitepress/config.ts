import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'
import UnoCss from 'unocss/vite'
import { presetUno } from 'unocss'
import pkg from '../package.json'
import { pwa } from './pwa'

export default withPwa(
  defineConfig({
    title: 'Vrx Arco Icons',
    lang: 'zh-CN',
    base: '/icons/',
    lastUpdated: true,
    vite: {
      server: { port: 3002, host: true },
      plugins: [UnoCss({ presets: [presetUno()] })],
    },
    description: '使 Arco Design 的图标，作为纯 svg 组件/iconify 独立使用',
    markdown: {
      theme: {
        light: 'vitesse-light',
        dark: 'vitesse-dark',
      },
    },
    themeConfig: {
      logo: '/favicon.svg',
      lastUpdatedText: '最后更新时间',
      socialLinks: [{ link: 'https://github.com/vrx-arco/icons', icon: 'github' }],
      outline: {
        label: '本页',
      },
      docFooter: {
        prev: '上一页',
        next: '下一页',
      },
      sidebarMenuLabel: '菜单',
      returnToTopLabel: '返回顶部',
      darkModeSwitchLabel: '暗色模式',
      footer: {
        message: 'Released under the MIT License.',
        copyright: 'Copyright © 2024-present Colourlessglow',
      },
      search: {
        provider: 'local',
        options: {
          locales: {
            root: {
              translations: {
                button: {
                  buttonText: '搜索文档',
                  buttonAriaLabel: '搜索文档',
                },
                modal: {
                  noResultsText: '无法找到相关结果',
                  resetButtonTitle: '清除查询条件',
                  footer: {
                    selectText: '选择',
                    navigateText: '切换',
                    closeText: '关闭',
                  },
                },
              },
            },
          },
        },
      },
      nav: [
        {
          text: '指引',
          items: [
            { text: 'Vue', link: '/guide/vue' },
            { text: 'React', link: '/guide/react' },
            { text: 'Iconify', link: '/guide/iconify' },
            { text: '迁移指南', link: '/guide/migration' },
          ],
        },
        {
          text: '图标',
          link: '/icons',
        },
        {
          text: pkg.version,
          items: [
            {
              text: 'Changelog',
              link: 'https://github.com/vrx-arco/icons/blob/main/CHANGELOG.md',
            },
          ],
        },
      ],
      sidebar: {
        '/guide/': [
          {
            text: '指引',
            items: [
              { text: 'Vue', link: '/guide/vue' },
              { text: 'React', link: '/guide/react' },
              { text: 'Iconify', link: '/guide/iconify' },
              { text: '迁移指南', link: '/guide/migration' },
            ],
          },
          {
            text: '图标',
            items: [
              {
                text: '图标',
                link: '/icons',
              },
            ],
          },
        ],
      },
    },
    head: [
      ['meta', { name: 'theme-color', content: '#ffffff' }],
      ['meta', { name: 'author', content: 'WhiteKite' }],
      [
        'link',
        {
          rel: 'icon',
          href: '/icons/favicon.ico',
          sizes: 'any',
        },
      ],
      [
        'link',
        {
          rel: 'icon',
          href: '/icons/favicon.svg',
          type: 'image/svg+xml',
        },
      ],
      [
        'link',
        {
          rel: 'apple-touch-icon',
          href: '/icons/apple-touch-icon-180x180.png',
        },
      ],
    ],
    pwa,
  })
)

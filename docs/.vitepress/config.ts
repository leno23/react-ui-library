import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/react-ui-library/',
  title: 'Nova UI',
  description: 'Enterprise React component library with TypeScript and Tailwind CSS',
  lang: 'zh-CN',
  themeConfig: {
    logo: '/favicon.svg',
    nav: [
      { text: '指南', link: '/guide/introduction' },
      { text: '组件', link: '/components/overview' },
      { text: '在线示例', link: '/playground' },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '开始',
          items: [
            { text: '项目介绍', link: '/guide/introduction' },
            { text: '快速开始', link: '/guide/getting-started' },
          ],
        },
      ],
      '/components/': [
        {
          text: '组件文档',
          items: [
            { text: '概览', link: '/components/overview' },
            { text: '布局组件', link: '/components/layout' },
            { text: '基础组件', link: '/components/basic' },
            { text: '表单组件', link: '/components/form' },
            { text: '反馈组件', link: '/components/feedback' },
            { text: '数据组件', link: '/components/data' },
            { text: '导航组件', link: '/components/navigation' },
          ],
        },
      ],
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/your-org/nova-ui' }],
  },
  vite: {
    plugins: [react()],
  },
})

import { defineConfig } from 'vitepress'
import { genYuqueSideBar } from "../../utils/route";
import { YuQueSVG } from "../../utils/assists";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "子夜旅馆",
  description: "子夜的安全学习笔记",
  lastUpdated: true,
  cleanUrls: true,
  ignoreDeadLinks: true,
  head: [
    [
      'link', { rel: 'icon', href: '/favicon.ico' }
    ]
  ],
  appearance: 'dark',
  themeConfig: {
    search: {
      provider: 'local'
    },
    outline: [2,6],
    nav: [
      { text: '首页', link: '/' },
      { text: '关于文库', link: '/' },
      { text: '漏洞相关', link: '/' },
      { text: 'CTF', link: '/' },
      { text: '工具', link: '/' },
      { text: '文库动态', link: '/' },
      { text: '配置文档', link: '/docs/关于/222', activeMatch: '/docs/' },
      { text: '友情链接', link: '/' },
      // { text: '短路由模式', link: '/docs-shorturl/ssuhngw0yb3dgkkg', activeMatch: '/docs-shorturl/' }
    ],
    sidebar: {
      "/docs/": await genYuqueSideBar('/docs'),
      // "/docs-shorturl/": await genYuqueSideBarWithShortUrl('/docs-shorturl')
    },
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    socialLinks: [
      { icon: { svg: YuQueSVG }, link: "https://www.yuque.com/sunwu-pbywz" },
      { icon: 'github', link: 'https://github.com/sunwu57' }
    ],
    footer: {
      message: `
      <div style="padding: 10px; border-radius: 8px; border: 1px solid #d1e9ff; display: flex; align-items: flex-start;">
        <span style="color: #3f7ae0; font-size: 1.5em; margin-right: 8px;">ℹ️</span>
        <div>
          <strong>提示</strong><br>
          由于传播、利用此文所提供的信息而造成的任何直接或者间接的后果及损失，均由使用者本人负责，
          文章作者不为此承担任何责任。子夜旅馆拥有对此文章的修改和解释权。如欲转载或传播此文章，
          必须保证此文章的完整性，包括版权声明等全部内容。未经作者允许，不得任意修改或者增减此文章内容，
          不得以任何方式将其用于商业目的。
        </div>
      </div>
      `,
      copyright: `<div style="text-align: center; font-size: 14px;">
      <a href="https://beian.miit.gov.cn/#/Integrated/recordQuery" target="_blank" style="color: inherit; text-decoration: none;">
        Copyright 1998 - 2025 ziye. All Rights Reserved
        <br>皖ICP备2021016801号-1
      </a>
    </div>`
    }
    
    ,
  }
})

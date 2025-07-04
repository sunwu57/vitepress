import { defineConfig } from 'vitepress'
import { genYuqueSideBar } from "../../utils/route";
import { YuQueSVG } from "../../utils/assists";
import AutoSidebar from 'vite-plugin-vitepress-auto-sidebar';
import sidebar from './sidebar'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: "zh-CN",
  title: "子夜旅馆",
  description: "子夜的安全学习笔记",
  lastUpdated: false,
  cleanUrls: true,
  ignoreDeadLinks: true,
  head: [
    [
      'link', { rel: 'icon', href: '/favicon.ico' }
    ]
  ],
  themeConfig: {
    search: {
      provider: 'local'
    },
    outline: [2,6],
    nav: [
      { text: '首页', link: '/' },
      //{ text: '关于文库', link: '/' },
      //{ text: 'CTF', link: '/' },
      //{ text: '工具', link: '/' },
      //{ text: '文库动态', link: '/' },
      //{ text: '配置文档', link: '/docs/关于/222', activeMatch: '/docs/' },
      //{ text: '友情链接', link: '/' },
      { text: '漏洞库', link: 'https://github.com/Threekiii/Awesome-POC' },
       {  text: '安全学习入门',
      items: [
       //{ text: '红细胞安全实验室', link: 'https://redcellsec.cn' },
      ] },
      { text: '爱发电', link: 'https://afdian.com/dashboard/stats' },
      { text: '云顶之奕', link: '/docs/云顶之奕/S14-赛博城市/登龙九五(4.18)'},
      {  text: '工具',
      items: [
        { text: '子夜网盘', link: 'https://pan.sunwu.world:5244/' },
       { text: '在线画板', link: 'http://pan.sunwu.world:5000/' },
       { text: '文件快递柜', link: 'http://pan.sunwu.world:40157/#/' },
      ] },
      {  text: '友链',
      items: [
       { text: '红细胞安全实验室', link: 'https://redcellsec.cn' },
      ] },
      // { text: '短路由模式', link: '/docs-shorturl/ssuhngw0yb3dgkkg', activeMatch: '/docs-shorturl/' }
    ],
    sidebar,
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    socialLinks: [      
      //{ icon: { svg: YuQueSVG }, link: "https://www.yuque.com/sunwu-pbywz" },
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
      由于传播、利用此文所提供的信息而造成的任何直接或者间接的后果及损失，均由使用者本人负责，
          文章作者不为此承担任何责任。子夜旅馆拥有对此文章的修改和解释权。
          <br>如欲转载或传播此文章，
          必须保证此文章的完整性，包括版权声明等全部内容。未经作者允许，不得任意修改或者增减此文章内容，
          不得以任何方式将其用于商业目的。  
          <br>Copyright 1998 - 2025 ziye. All Rights Reserved
        <br>皖ICP备2021016801号-1
      </a>
    </div>`
    }
    
    ,
  },
  vite: {
    ssr: {
      noExternal: ['@escook/vitepress-theme','vitepress']
    },
    plugins: [

      // add plugin
      // AutoSidebar({
      //   // You can also set options to adjust sidebar data
      //   // see option document below
      //   //path: 'docs',
      //   scanRootMdFiles: true,
      //   titleFromFile: false,
      //   collapsed: true,
      // })
    ]
  },
  markdown: {
    lineNumbers: true,
    config: (md) => {
      // 添加自定义处理器来保护特定内容
      md.use((md) => {
        const defaultRender = md.renderer.rules.text
        md.renderer.rules.text = function(tokens, idx, options, env, self) {
          const token = tokens[idx]
          if (token.content.includes('由于传播、利用此文所提供的信息')) {
            // 使用特殊字符包装内容，防止被过滤
            return `<div class="disclaimer">${token.content}</div>`
          }
          return defaultRender ? defaultRender(tokens, idx, options, env, self) : token.content
        }
      })
    },
    // 添加更宽松的 HTML 配置
    html: true,
    breaks: true,
    linkify: true,
    // 添加安全的标签白名单
   // allowedTags: ['a', 'abbr', 'b', 'code', 'em', 'img', 'li', 'ol', 'p', 'strong', 'ul']
  }
})

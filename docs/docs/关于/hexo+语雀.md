[Hexo 博客终极玩法：云端写作，自动部署](https://www.yuque.com/u46795/blog/dlloc7)[GitHub - x-cold/yuque-hexo: 同步语雀的文章到你的 Hexo 项目吧！](https://github.com/x-cold/yuque-hexo)

主要靠这个[https://zhuanlan.zhihu.com/p/577256660](https://zhuanlan.zhihu.com/p/577256660)

`<font style="color:rgb(25, 27, 31);">package.json</font>`<font style="color:rgb(25, 27, 31);">配置文件</font>

[此处为语雀卡片，点击链接查看](https://www.yuque.com/sunwu-pbywz/cgsqv7/bsxftx0tg362oxig#acjDY)

# 解决语雀防盗链
`blog\node_modules\hexo-theme-landscape\layout\_partial\head.ejs`加入  
`<meta name="referrer" content="no-referrer" />`即可，解决图片无法加载的问题

```plain
npm i -g yuque-hexo
yuque-hexo sync

hexo g && hexo s
yuque-hexo sync
hexo d -g
```


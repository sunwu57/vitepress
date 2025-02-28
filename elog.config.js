module.exports = {
  write: {
    platform: 'yuque',
    // Token 模式（需要语雀超级会员）
    yuque: {
      token: process.env.YUQUE_TOKEN,
      login: process.env.YUQUE_LOGIN,
      repo: process.env.YUQUE_REPO,
      onlyPublic: false,
      onlyPublished: true,
    },
    // 账号密码模式
    "yuque-pwd": {
      username: process.env.YUQUE_USERNAME,
      password: process.env.YUQUE_PASSWORD,
      login: process.env.YUQUE_LOGIN,
      repo: process.env.YUQUE_REPO,
    }
  },
  deploy: {
    platform: 'local',
    local: {
      outputDir: './docs/docs',
      filename: 'title',
      format: 'markdown',
      catalog: true,
      formatExt: './elog.format.js'
    }
  },
  image: {
    enable: true,
    platform: 'github',
    local: {
      outputDir: './docs/images',
      pathFollowDoc: true,
    },
    github: {
      token: process.env.GITHUB_TOKEN, // GitHub 的 Personal Access Token
      user: process.env.GITHUB_USER, // GitHub 用户名
      repo: process.env.GITHUB_REPO, // 仓库名
      branch: 'main', // 分支名，默认是 main
      path: 'img/', // 图片在仓库中的保存路径
    }
  }
}

export const data = {
  "key": "v-2d0ad528",
  "path": "/zh/",
  "title": "",
  "lang": "zh-CN",
  "frontmatter": {
    "home": true,
    "heroImage": "/images/logo.png",
    "actionText": "快速上手 →",
    "actionLink": "/zh/guide/",
    "features": [
      {
        "title": "简洁至上 我是中文",
        "details": "以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。"
      },
      {
        "title": "Vue驱动",
        "details": "享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。"
      },
      {
        "title": "高性能",
        "details": "VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。"
      }
    ],
    "footer": "浙ICP备2021028057号-1"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "zh/README.md",
  "git": {
    "updatedTime": 1636915070000,
    "contributors": [
      {
        "name": "make",
        "email": "1183461339@qq.com",
        "commits": 1
      }
    ]
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

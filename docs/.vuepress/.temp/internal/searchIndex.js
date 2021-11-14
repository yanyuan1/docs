export const searchIndex = [
  {
    "title": "redis启动",
    "headers": [],
    "path": "/about/",
    "pathLocale": "/",
    "extraFields": [
      "vue"
    ]
  },
  {
    "title": "guide",
    "headers": [],
    "path": "/guide/",
    "pathLocale": "/",
    "extraFields": [
      "烤",
      "鸭子"
    ]
  },
  {
    "title": "烤鸭的做法",
    "headers": [
      {
        "level": 2,
        "title": "二级标题",
        "slug": "二级标题",
        "children": [
          {
            "level": 3,
            "title": "三级标题",
            "slug": "三级标题",
            "children": []
          }
        ]
      }
    ],
    "path": "/food/",
    "pathLocale": "/",
    "extraFields": [
      "烤",
      "鸭子"
    ]
  },
  {
    "title": "",
    "headers": [],
    "path": "/zh/",
    "pathLocale": "/zh/",
    "extraFields": []
  },
  {
    "title": "【vue】跨域解决方案之proxyTable 中文",
    "headers": [],
    "path": "/zh/about/",
    "pathLocale": "/zh/",
    "extraFields": [
      "vue"
    ]
  },
  {
    "title": "烤鸭的做法 中文",
    "headers": [],
    "path": "/zh/food/",
    "pathLocale": "/zh/",
    "extraFields": [
      "烤",
      "鸭子"
    ]
  },
  {
    "title": "",
    "headers": [],
    "path": "/zh/guide/REANME.html",
    "pathLocale": "/zh/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}

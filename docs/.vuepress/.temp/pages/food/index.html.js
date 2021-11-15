export const data = {
  "key": "v-14948038",
  "path": "/food/",
  "title": "烤鸭的做法",
  "lang": "en-US",
  "frontmatter": {
    "title": "烤鸭的做法",
    "date": "2019-08-08 08:00:00",
    "sidebar": "auto",
    "categories": [
      "烹饪",
      "爱好"
    ],
    "tags": [
      "烤",
      "鸭子"
    ],
    "keys": [
      "123456"
    ],
    "publish": false
  },
  "excerpt": "",
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
  "filePathRelative": "food/README.md",
  "git": {
    "updatedTime": 1636915070000,
    "contributors": [
      {
        "name": "make",
        "email": "1183461339@qq.com",
        "commits": 2
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

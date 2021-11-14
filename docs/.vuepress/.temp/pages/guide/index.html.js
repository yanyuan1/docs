export const data = {
  "key": "v-fffb8e28",
  "path": "/guide/",
  "title": "guide",
  "lang": "en-US",
  "frontmatter": {
    "title": "guide",
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
  "headers": [],
  "filePathRelative": "guide/README.md",
  "git": {
    "updatedTime": null,
    "contributors": []
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

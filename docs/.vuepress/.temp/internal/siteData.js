export const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "",
  "description": "",
  "head": [],
  "locales": {
    "/": {
      "lang": "en-US",
      "title": "yang  Blog ",
      "description": "this is my first blog site",
      "data": "2021-11-14"
    },
    "/zh/": {
      "lang": "zh-CN",
      "title": "杨远的Blog ",
      "description": "这是我的第一个博客 站点",
      "data": "2021-11-14"
    }
  }
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}

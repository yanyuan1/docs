import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","",["/index.html","/README.md"]],
  ["v-74bc627b","/about/","redis启动",["/about/index.html","/about/README.md"]],
  ["v-14948038","/food/","烤鸭的做法",["/food/index.html","/food/README.md"]],
  ["v-14f0b8a8","/make/","guide",["/make/index.html","/make/README.md"]],
  ["v-2d0ad528","/zh/","",["/zh/index.html","/zh/README.md"]],
  ["v-2b85a369","/zh/food/","烤鸭的做法 中文",["/zh/food/index.html","/zh/food/README.md"]],
  ["v-3befa56a","/zh/about/","【vue】跨域解决方案之proxyTable 中文",["/zh/about/index.html","/zh/about/README.md"]],
  ["v-884fa434","/zh/guide/REANME.html","",["/zh/guide/REANME","/zh/guide/REANME.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)

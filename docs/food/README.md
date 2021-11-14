---
title: 烤鸭的做法
date: '2019-08-08 08:00:00'
sidebar: 'auto'
categories:
- 烹饪
- 爱好
tags:
- 烤
- 鸭子
keys:
- '123456'
publish: false
---
[[toc]]
- VuePress - <Badge type="tip" text="v2" vertical="top" />
- VuePress - <Badge type="warning" text="v2" vertical="middle" />
- VuePress - <Badge type="danger" text="v2" vertical="bottom" />
---
::: tip
这是一个提示
:::
---
[[toc]]
# 一级标题
VuePress 2 已经发布 :tada: ！
你怀孕了:pregnant_woman:
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```ts{1,6-8}
import type { UserConfig } from '@vuepress/cli'

export const config: UserConfig = {
title: '你好， VuePress',

themeConfig: {
logo: 'https://vuejs.org/images/logo.png',
},
}
```
```md
<!-- 默认情况下，这里会被保持原样 -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```md:no-v-pre
<!-- 这里会被 Vue 编译 -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```js:no-v-pre
// 由于 JS 代码高亮，这里不会被正确编译
const onePlusTwoPlusThree = {{ 1 + 2 + 3 }}
```



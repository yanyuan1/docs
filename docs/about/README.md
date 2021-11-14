---
title: redis启动
sidebar: false
date: 2017-12-28
categories:
- frontEnd
tags:
- vue
---


var MarkdownIt = require('markdown-it'),
md = new MarkdownIt();
var result = md.render('# markdown-it rulezz!');


首先

redis-server.exe

这是一个链接 [菜鸟教程](https://www.runoob.com)

| 左对齐 | 右对齐 | 居中对齐 |
| :-----| ----: | :----: |
| 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 |

* 第一项
  > 菜鸟教程
  > 学的不仅是技术更是梦想
* 第二项


_你好， {{ msg }}_

_傻子_


<RedDiv>

_当前计数为： {{ count }}_

</RedDiv>

<button @click="count++">点我！</button>


<script>
import { h, ref } from 'vue' 

const RedDiv = (_, ctx) => h(
  'div',
  {
    class: 'red-div',
  },
  ctx.slots.default()
)

export default {
  components: {
    RedDiv,
  },

  setup() {
    const msg = 'Markdown 中的 Vue'
    const count = ref(0)

    return {
      msg,
      count,
    }
  }
}
</script>

<style>
.red-div {
  color: greenyellow;
}
</style>
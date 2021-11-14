<template><p>var MarkdownIt = require('markdown-it'),
md = new MarkdownIt();
var result = md.render('# markdown-it rulezz!');</p>
<p>首先</p>
<p>redis-server.exe</p>
<p>这是一个链接 <a href="https://www.runoob.com" target="_blank" rel="noopener noreferrer">菜鸟教程<OutboundLink/></a></p>
<table>
<thead>
<tr>
<th style="text-align:left">左对齐</th>
<th style="text-align:right">右对齐</th>
<th style="text-align:center">居中对齐</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">单元格</td>
<td style="text-align:right">单元格</td>
<td style="text-align:center">单元格</td>
</tr>
<tr>
<td style="text-align:left">单元格</td>
<td style="text-align:right">单元格</td>
<td style="text-align:center">单元格</td>
</tr>
</tbody>
</table>
<ul>
<li>第一项
<blockquote>
<p>菜鸟教程
学的不仅是技术更是梦想</p>
</blockquote>
</li>
<li>第二项</li>
</ul>
<p><em>你好， {{ msg }}</em></p>
<p><em>傻子</em></p>
<RedDiv>
<p><em>当前计数为： {{ count }}</em></p>
</RedDiv>
<p><button @click="count++">点我！</button></p>
</template>

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
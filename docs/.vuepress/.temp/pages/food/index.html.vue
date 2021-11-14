<template><nav class="table-of-contents"><ul><li><RouterLink to="#二级标题">二级标题</RouterLink><ul><li><RouterLink to="#三级标题">三级标题</RouterLink></li></ul></li></ul></nav>
<ul>
<li>VuePress - <Badge type="tip" text="v2" vertical="top" /></li>
<li>VuePress - <Badge type="warning" text="v2" vertical="middle" /></li>
<li>VuePress - <Badge type="danger" text="v2" vertical="bottom" /></li>
</ul>
<hr>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<p>这是一个提示</p>
</div>
<hr>
<nav class="table-of-contents"><ul><li><RouterLink to="#二级标题">二级标题</RouterLink><ul><li><RouterLink to="#三级标题">三级标题</RouterLink></li></ul></li></ul></nav>
<h1 id="一级标题" tabindex="-1"><a class="header-anchor" href="#一级标题" aria-hidden="true">#</a> 一级标题</h1>
<p>VuePress 2 已经发布 🎉 ！
你怀孕了🤰</p>
<h2 id="二级标题" tabindex="-1"><a class="header-anchor" href="#二级标题" aria-hidden="true">#</a> 二级标题</h2>
<h3 id="三级标题" tabindex="-1"><a class="header-anchor" href="#三级标题" aria-hidden="true">#</a> 三级标题</h3>
<h4 id="四级标题" tabindex="-1"><a class="header-anchor" href="#四级标题" aria-hidden="true">#</a> 四级标题</h4>
<h5 id="五级标题" tabindex="-1"><a class="header-anchor" href="#五级标题" aria-hidden="true">#</a> 五级标题</h5>
<h6 id="六级标题" tabindex="-1"><a class="header-anchor" href="#六级标题" aria-hidden="true">#</a> 六级标题</h6>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> UserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@vuepress/cli'</span>

<span class="token keyword">export</span> <span class="token keyword">const</span> config<span class="token operator">:</span> UserConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
title<span class="token operator">:</span> <span class="token string">'你好， VuePress'</span><span class="token punctuation">,</span>

themeConfig<span class="token operator">:</span> <span class="token punctuation">{</span>
logo<span class="token operator">:</span> <span class="token string">'https://vuejs.org/images/logo.png'</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="highlight-lines"><div class="highlight-line">&nbsp;</div><br><br><br><br><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><div class="highlight-line">&nbsp;</div><br></div><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><div class="language-markdown ext-md line-numbers-mode"><pre v-pre class="language-markdown"><code><span class="token comment">&lt;!-- 默认情况下，这里会被保持原样 --></span>
1 + 2 + 3 = {{ 1 + 2 + 3 }}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-markdown ext-md line-numbers-mode"><pre class="language-markdown"><code><span class="token comment">&lt;!-- 这里会被 Vue 编译 --></span>
1 + 2 + 3 = {{ 1 + 2 + 3 }}
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 由于 JS 代码高亮，这里不会被正确编译</span>
<span class="token keyword">const</span> onePlusTwoPlusThree <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">{</span> <span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></template>

<template><div><blockquote>
<p><a href="http://www.goyth.com/2018/12/23/AST/" target="_blank" rel="noopener noreferrer">原文链接<ExternalLinkIcon/></a></p>
</blockquote>
<h2 id="为什么要了解-ast" tabindex="-1"><a class="header-anchor" href="#为什么要了解-ast" aria-hidden="true">#</a> 为什么要了解 AST</h2>
<p>如果你想了解 js 编译执行的原理，那么你就得了解 AST，目前前端常用的一些插件或者工具，比如说 javascript 转译、代码压缩、css 预处理器、elint、pretiier 等功能的实现，都是建立在 AST 的基础之上。</p>
<h2 id="javascript-编译执行流程" tabindex="-1"><a class="header-anchor" href="#javascript-编译执行流程" aria-hidden="true">#</a> JavaScript 编译执行流程</h2>
<p>js 执行的第一步是读取 js 文件中的字符流，然后通过词法分析生成 token，之后再通过语法分析生成 AST（Abstract Syntax Tree），最后生成机器码执行。</p>
<h2 id="词法分析" tabindex="-1"><a class="header-anchor" href="#词法分析" aria-hidden="true">#</a> 词法分析</h2>
<p>词法分析，也称之为<code v-pre>扫描（scanner）</code>，简单来说就是调用 <code v-pre>next()</code> 方法，一个一个字母的来读取字符，然后与定义好的 <code v-pre>JavaScript</code> 关键字符做比较，生成对应的 <code v-pre>Token</code>。<strong><code v-pre>Token</code> 是一个不可分割的最小单元</strong>，例如 <code v-pre>var</code> 这三个字符，它只能作为一个整体，语义上不能再被分解，因此它是一个 <code v-pre>Token</code>。词法分析器里，每个关键字是一个 <code v-pre>Token</code>，每个标识符是一个 <code v-pre>Token</code>，每个操作符是一个 <code v-pre>Token</code>，每个标点符号也都是一个 <code v-pre>Token</code>。<strong>除此之外，还会过滤掉源程序中的注释和空白字符（换行符、空格、制表符等）。</strong></p>
<p>最终，整个代码将被分割进一个 tokens 列表（或者说一维数组）。</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code>n * n;

<span class="token punctuation">[</span>
  <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">"n"</span><span class="token punctuation">,</span>  loc<span class="token operator">:</span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">"*"</span><span class="token punctuation">,</span>  loc<span class="token operator">:</span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> type<span class="token operator">:</span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span><span class="token punctuation">,</span> value<span class="token operator">:</span> <span class="token string">"n"</span><span class="token punctuation">,</span>  loc<span class="token operator">:</span> <span class="token punctuation">{</span> ... <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  ...
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每一个 type 有一组属性来描述该令牌：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token punctuation">{</span>
    label<span class="token operator">:</span> 'name'<span class="token punctuation">,</span>
    keyword<span class="token operator">:</span> undefined<span class="token punctuation">,</span>
    beforeExpr<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    startsExpr<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    rightAssociative<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    isLoop<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    isAssign<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    prefix<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    postfix<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    binop<span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    updateContext<span class="token operator">:</span> <span class="token null keyword">null</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  ...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="语法分析" tabindex="-1"><a class="header-anchor" href="#语法分析" aria-hidden="true">#</a> 语法分析</h2>
<p>语法分析会将词法分析出来的 Token 转化成有语法含义的抽象语法树结构。同时，验证语法，语法如果有错的话，抛出语法错误。</p>
<h2 id="什么是-ast-抽象语法树" tabindex="-1"><a class="header-anchor" href="#什么是-ast-抽象语法树" aria-hidden="true">#</a> 什么是 AST（抽象语法树）</h2>
<p><strong>抽象语法树（Abstract Syntax Tree，AST），或简称语法树（Syntax tree），是源代码语法结构的一种抽象表示。它以树状的形式表现编程语言的语法结构，树上的每个节点都表示源代码中的一种结构。</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">square</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> n <span class="token operator">*</span> n<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的程序可以被表示成如下的一棵树：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>- FunctionDeclaration:
  - id:
    - Identifier:
      - name: square
  - params <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
    - Identifier
      - name: n
  - body:
    - BlockStatement
      - body <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
        - ReturnStatement
          - argument
            - BinaryExpression
              - operator: *
              - left
                - Identifier
                  - name: n
              - right
                - Identifier
                  - name: n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或是如下所示的 JavaScript Object（对象）：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"FunctionDeclaration"</span><span class="token punctuation">,</span>
  <span class="token property">"id"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"Identifier"</span><span class="token punctuation">,</span>
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"square"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"params"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"Identifier"</span><span class="token punctuation">,</span>
      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"n"</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"body"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"BlockStatement"</span><span class="token punctuation">,</span>
    <span class="token property">"body"</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"ReturnStatement"</span><span class="token punctuation">,</span>
        <span class="token property">"argument"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"BinaryExpression"</span><span class="token punctuation">,</span>
          <span class="token property">"operator"</span><span class="token operator">:</span> <span class="token string">"*"</span><span class="token punctuation">,</span>
          <span class="token property">"left"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"Identifier"</span><span class="token punctuation">,</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"n"</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">"right"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"Identifier"</span><span class="token punctuation">,</span>
            <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"n"</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你会留意到 AST 的每一层都拥有相同的结构：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">"FunctionDeclaration"</span><span class="token punctuation">,</span>
  id<span class="token operator">:</span> <span class="token punctuation">{</span>...<span class="token punctuation">}</span><span class="token punctuation">,</span>
  params<span class="token operator">:</span> <span class="token punctuation">[</span>...<span class="token punctuation">]</span><span class="token punctuation">,</span>
  body<span class="token operator">:</span> <span class="token punctuation">{</span>...<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">"Identifier"</span><span class="token punctuation">,</span>
  name<span class="token operator">:</span> ...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">"BinaryExpression"</span><span class="token punctuation">,</span>
  operator<span class="token operator">:</span> ...<span class="token punctuation">,</span>
  left<span class="token operator">:</span> <span class="token punctuation">{</span>...<span class="token punctuation">}</span><span class="token punctuation">,</span>
  right<span class="token operator">:</span> <span class="token punctuation">{</span>...<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>这样的每一层结构也被叫做 <code v-pre>节点（Node）</code>。 一个 AST 可以由单一的节点或是成百上千个节点构成。 它们组合在一起可以描述用于静态分析的程序语法。</strong></p>
<p>每一个节点都有如下所示的接口（Interface）：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>字符串形式的 type 字段表示节点的类型（如： “FunctionDeclaration“，”Identifier“，或 “BinaryExpression“）。 每一种类型的节点定义了一些附加属性用来进一步描述该节点类型。</p>
</div></template>

<template><div><blockquote>
<p>摘录至 <a href="https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/plugin-handbook.md" target="_blank" rel="noopener noreferrer">Babel 插件手册<ExternalLinkIcon/></a>，Babel 用户手册<a href="https://github.com/jamiebuilds/babel-handbook/blob/master/translations/zh-Hans/user-handbook.md" target="_blank" rel="noopener noreferrer">点这里<ExternalLinkIcon/></a></p>
</blockquote>
<h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> 介绍</h2>
<p>Babel 是一个通用的多功能的 JavaScript 编译器。此外它还拥有众多模块可用于不同形式的静态分析。</p>
<blockquote>
<p>静态分析是在不需要执行代码的前提下对代码进行分析的处理过程 （执行代码的同时进行代码分析即是动态分析）。 静态分析的目的是多种多样的， 它可用于语法检查，编译，代码高亮，代码转换，优化，压缩等等场景。</p>
</blockquote>
<h2 id="基础" tabindex="-1"><a class="header-anchor" href="#基础" aria-hidden="true">#</a> 基础</h2>
<p>Babel 是 JavaScript 编译器，更确切地说是源码到源码的编译器，通常也叫做“转换编译器（transpiler）”。 意思是说你为 Babel 提供一些 JavaScript 代码，Babel 更改这些代码，然后返回给你新生成的代码。</p>
<h3 id="编译器和转译器" tabindex="-1"><a class="header-anchor" href="#编译器和转译器" aria-hidden="true">#</a> 编译器和转译器</h3>
<p>编译的定义就是从一种编程语言转成另一种编程语言。主要指的是高级语言到低级语言。</p>
<blockquote>
<p>高级语言：有很多用于描述逻辑的语言特性，比如分支、循环、函数、面向对象等，接近人的思维，可以让开发者快速的通过它来表达各种逻辑。比如 c++、javascript。
低级语言：与硬件和执行细节有关，会操作寄存器、内存，具体做内存与寄存器之间的复制，需要开发者理解熟悉计算机的工作原理，熟悉具体的执行细节。比如汇编语言、机器语言。</p>
</blockquote>
<p>一般编译器 Compiler 是指高级语言到低级语言的转换工具，对于高级语言到高级语言的转换工具，被叫做转换编译器，简称转译器 (Transpiler)。</p>
<p>babel 就是一个 Javascript Transpiler。</p>
<h3 id="抽象语法树-asts" tabindex="-1"><a class="header-anchor" href="#抽象语法树-asts" aria-hidden="true">#</a> 抽象语法树（ASTs）</h3>
<p>js 执行的第一步是读取 js 文件中的字符流，然后通过词法分析生成 token，之后再通过语法分析生成 AST（Abstract Syntax Tree），最后生成机器码执行。</p>
<p>这个处理过程中的每一步都涉及到创建或是操作<a href="https://en.wikipedia.org/wiki/Abstract_syntax_tree" target="_blank" rel="noopener noreferrer">抽象语法树<ExternalLinkIcon/></a>，亦称 AST。</p>
<blockquote>
<p>Babel 使用一个基于 <a href="https://github.com/estree/estree" target="_blank" rel="noopener noreferrer">ESTree<ExternalLinkIcon/></a> 并修改过的 AST，它的内核说明文档可以在<a href="https://github.com/babel/babel/blob/master/doc/ast/spec.md" target="_blank" rel="noopener noreferrer">这里<ExternalLinkIcon/></a>找到。</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">square</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> n <span class="token operator">*</span> n<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><a href="http://astexplorer.net/" target="_blank" rel="noopener noreferrer">AST Explorer<ExternalLinkIcon/></a> 可以让你对 AST 节点有一个更好的感性认识。 <a href="http://astexplorer.net/#/Z1exs6BWMq" target="_blank" rel="noopener noreferrer">这里<ExternalLinkIcon/></a>是上述代码的一个示例链接。</p>
</blockquote>
<p>这个程序可以被表示成如下的一棵树：</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意：出于简化的目的移除了某些属性</p>
</blockquote>
<p>这样的每一层结构也被叫做 <strong>节点（Node）</strong>。 一个 AST 可以由单一的节点或是成百上千个节点构成。 它们组合在一起可以描述用于静态分析的程序语法。</p>
<p>每一个节点都有如下所示的接口（Interface）：</p>
<div class="language-typescript ext-ts line-numbers-mode"><pre v-pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">Node</span> <span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>字符串形式的 type 字段表示节点的类型（如： &quot;FunctionDeclaration&quot;，&quot;Identifier&quot;，或 &quot;BinaryExpression&quot;）。 每一种类型的节点定义了一些附加属性用来进一步描述该节点类型。</p>
<p>Babel 还为每个节点额外生成了一些属性，用于描述该节点在原始代码中的位置。</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  type<span class="token operator">:</span> ...<span class="token punctuation">,</span>
  start<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  end<span class="token operator">:</span> <span class="token number">38</span><span class="token punctuation">,</span>
  loc<span class="token operator">:</span> <span class="token punctuation">{</span>
    start<span class="token operator">:</span> <span class="token punctuation">{</span>
      line<span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      column<span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    end<span class="token operator">:</span> <span class="token punctuation">{</span>
      line<span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
      column<span class="token operator">:</span> <span class="token number">1</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  ...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每一个节点都会有 start，end，loc 这几个属性。</p>
<h3 id="babel-的处理步骤" tabindex="-1"><a class="header-anchor" href="#babel-的处理步骤" aria-hidden="true">#</a> Babel 的处理步骤</h3>
<p>Babel 的三个主要处理步骤分别是： <strong>解析（parse）</strong>，<strong>转换（transform）</strong>，<strong>生成（generate）</strong>。</p>
<h4 id="解析" tabindex="-1"><a class="header-anchor" href="#解析" aria-hidden="true">#</a> 解析</h4>
<p>解析步骤接收代码并输出 AST。 这个步骤分为两个阶段：**<a href="https://en.wikipedia.org/wiki/Lexical_analysis" target="_blank" rel="noopener noreferrer">词法分析（Lexical Analysis）<ExternalLinkIcon/></a> **和 <a href="https://en.wikipedia.org/wiki/Parsing" target="_blank" rel="noopener noreferrer">语法分析（Syntactic Analysis）<ExternalLinkIcon/></a>。</p>
<h5 id="词法分析" tabindex="-1"><a class="header-anchor" href="#词法分析" aria-hidden="true">#</a> 词法分析</h5>
<p>词法分析，也称之为<code v-pre>扫描（scanner）</code>，简单来说就是调用 <code v-pre>next()</code> 方法，一个一个字母的来读取字符，然后与定义好的 <code v-pre>JavaScript</code> 关键字符做比较，生成对应的 <code v-pre>Token</code>。<strong><code v-pre>Token</code> 是一个不可分割的最小单元</strong>，例如 <code v-pre>var</code> 这三个字符，它只能作为一个整体，语义上不能再被分解，因此它是一个 <code v-pre>Token</code>。词法分析器里，每个关键字是一个 <code v-pre>Token</code>，每个标识符是一个 <code v-pre>Token</code>，每个操作符是一个 <code v-pre>Token</code>，每个标点符号也都是一个 <code v-pre>Token</code>。<strong>除此之外，还会过滤掉源程序中的注释和空白字符（换行符、空格、制表符等）。</strong></p>
<p>最终，整个代码将被分割进一个 tokens 列表（或者说一维数组）。</p>
<p>词法分析阶段把字符串形式的代码转换为 <strong>令牌（tokens）</strong> 流。</p>
<p>你可以把令牌看作是一个扁平的语法片段数组：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>n * n<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"n"</span><span class="token punctuation">,</span> <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token literal-property property">end</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">loc</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"*"</span><span class="token punctuation">,</span> <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token literal-property property">end</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token literal-property property">loc</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">"n"</span><span class="token punctuation">,</span> <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token literal-property property">end</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token literal-property property">loc</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token operator">...</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每一个 type 有一组属性来描述该令牌：</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>和 AST 节点一样它们也有 start，end，loc 属性。.</p>
<h5 id="语法分析" tabindex="-1"><a class="header-anchor" href="#语法分析" aria-hidden="true">#</a> 语法分析</h5>
<p>语法分析阶段会把一个令牌流转换成 AST 的形式。 这个阶段会使用令牌中的信息把它们转换成一个 AST 的表述结构，这样更易于后续的操作。</p>
<p>语法分析会将词法分析出来的 Token 转化成有语法含义的抽象语法树结构。同时，验证语法，语法如果有错的话，抛出语法错误。</p>
<h4 id="转换" tabindex="-1"><a class="header-anchor" href="#转换" aria-hidden="true">#</a> 转换</h4>
<p><a href="https://en.wikipedia.org/wiki/Program_transformation" target="_blank" rel="noopener noreferrer">转换<ExternalLinkIcon/></a>步骤接收 AST 并对其进行遍历，在此过程中对节点进行添加、更新及移除等操作。 这是 Babel 或是其他编译器中最复杂的过程 同时也是插件将要介入工作的部分，这将是本手册的主要内容， 因此让我们慢慢来。</p>
<h4 id="生成" tabindex="-1"><a class="header-anchor" href="#生成" aria-hidden="true">#</a> 生成</h4>
<p><a href="https://en.wikipedia.org/wiki/Code_generation_(compiler)" target="_blank" rel="noopener noreferrer">代码生成<ExternalLinkIcon/></a>步骤把最终（经过一系列转换之后）的 AST 转换成字符串形式的代码，同时还会创建<a href="http://www.html5rocks.com/en/tutorials/developertools/sourcemaps/" target="_blank" rel="noopener noreferrer">源码映射（source maps）<ExternalLinkIcon/></a>。</p>
<p>代码生成其实很简单：深度优先遍历整个 AST，然后构建可以表示转换后代码的字符串。</p>
<h3 id="遍历" tabindex="-1"><a class="header-anchor" href="#遍历" aria-hidden="true">#</a> 遍历</h3>
<p>想要转换 AST 你需要进行递归的<a href="https://en.wikipedia.org/wiki/Tree_traversal" target="_blank" rel="noopener noreferrer">树形遍历<ExternalLinkIcon/></a>。</p>
<p>比方说我们有一个 FunctionDeclaration 类型。它有几个属性：id，params，和 body，每一个都有一些内嵌节点。</p>
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>于是我们从 FunctionDeclaration 开始并且我们知道它的内部属性（即：id，params，body），所以我们依次访问每一个属性及它们的子节点。</p>
<p>接着我们来到 id，它是一个 Identifier。Identifier 没有任何子节点属性，所以我们继续。</p>
<p>之后是 params，由于它是一个数组节点所以我们访问其中的每一个，它们都是 Identifier 类型的单一节点，然后我们继续。</p>
<p>此时我们来到了 body，这是一个 BlockStatement 并且也有一个 body 节点，而且也是一个数组节点，我们继续访问其中的每一个。</p>
<p>这里唯一的一个属性是 ReturnStatement 节点，它有一个 argument，我们访问 argument 就找到了 BinaryExpression。.</p>
<p>BinaryExpression 有一个 operator，一个 left，和一个 right。 Operator 不是一个节点，它只是一个值因此我们不用继续向内遍历，我们只需要访问 left 和 right。.</p>
<p>Babel 的转换步骤全都是这样的遍历过程。</p>
<h3 id="visitors-访问者" tabindex="-1"><a class="header-anchor" href="#visitors-访问者" aria-hidden="true">#</a> Visitors（访问者）</h3>
<p>当我们谈及“进入”一个节点，实际上是说我们在访问它们， 之所以使用这样的术语是因为有一个<a href="https://en.wikipedia.org/wiki/Visitor_pattern" target="_blank" rel="noopener noreferrer">访问者模式（visitor）<ExternalLinkIcon/></a>的概念。</p>
<p>访问者是一个用于 AST 遍历的跨语言的模式。 简单的说它们就是一个对象，定义了用于在一个树状结构中获取具体节点的方法。 这么说有些抽象所以让我们来看一个例子。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> MyVisitor <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">Identifier</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Called!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 你也可以先创建一个访问者对象，并在稍后给它添加方法。</span>
<span class="token keyword">let</span> visitor <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
visitor<span class="token punctuation">.</span><span class="token function-variable function">MemberExpression</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
visitor<span class="token punctuation">.</span><span class="token function-variable function">FunctionDeclaration</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意：Identifier() { ... } 是 Identifier: { enter() { ... } } 的简写形式。</p>
</blockquote>
<p>这是一个简单的访问者，把它用于遍历中时，每当在树中遇见一个 Identifier 的时候会调用 Identifier() 方法。</p>
<p>所以在下面的代码中 Identifier() 方法会被调用四次（包括 square 在内，总共有四个 Identifier）。)</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">square</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> n <span class="token operator">*</span> n<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>path<span class="token punctuation">.</span><span class="token function">traverse</span><span class="token punctuation">(</span>MyVisitor<span class="token punctuation">)</span><span class="token punctuation">;</span>
Called<span class="token operator">!</span>
Called<span class="token operator">!</span>
Called<span class="token operator">!</span>
Called<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些调用都发生在进入节点时，不过有时候我们也可以在退出时调用访问者方法。.</p>
<p>假设我们有一个树状结构：</p>
<div class="language-bash ext-sh line-numbers-mode"><pre v-pre class="language-bash"><code>- FunctionDeclaration
  - Identifier <span class="token punctuation">(</span>id<span class="token punctuation">)</span>
  - Identifier <span class="token punctuation">(</span>params<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  - BlockStatement <span class="token punctuation">(</span>body<span class="token punctuation">)</span>
    - ReturnStatement <span class="token punctuation">(</span>body<span class="token punctuation">)</span>
      - BinaryExpression <span class="token punctuation">(</span>argument<span class="token punctuation">)</span>
        - Identifier <span class="token punctuation">(</span>left<span class="token punctuation">)</span>
        - Identifier <span class="token punctuation">(</span>right<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们向下遍历这颗树的每一个分支时我们最终会走到尽头，于是我们需要往上遍历回去从而获取到下一个节点。 向下遍历这棵树我们进入每个节点，向上遍历回去时我们退出每个节点。</p>
<p>让我们以上面那棵树为例子走一遍这个过程。</p>
<ul>
<li>进入 FunctionDeclaration</li>
<li>
<ul>
<li>进入 Identifier (id)</li>
</ul>
</li>
<li>
<ul>
<li>走到尽头</li>
</ul>
</li>
<li>
<ul>
<li>退出 Identifier (id)</li>
</ul>
</li>
<li>
<ul>
<li>进入 Identifier (params[0])</li>
</ul>
</li>
<li>
<ul>
<li>走到尽头</li>
</ul>
</li>
<li>
<ul>
<li>退出 Identifier (params[0])</li>
</ul>
</li>
<li>
<ul>
<li>进入 BlockStatement (body)</li>
</ul>
</li>
<li>
<ul>
<li>进入 ReturnStatement (body)</li>
</ul>
</li>
<li>
<ul>
<li>
<ul>
<li>进入 BinaryExpression (argument)</li>
</ul>
</li>
</ul>
</li>
<li>
<ul>
<li>
<ul>
<li>进入 Identifier (left)</li>
</ul>
</li>
</ul>
</li>
<li>
<ul>
<li>
<ul>
<li>
<ul>
<li>走到尽头</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<ul>
<li>
<ul>
<li>退出 Identifier (left)</li>
</ul>
</li>
</ul>
</li>
<li>
<ul>
<li>
<ul>
<li>进入 Identifier (right)</li>
</ul>
</li>
</ul>
</li>
<li>
<ul>
<li>
<ul>
<li>
<ul>
<li>走到尽头</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li>
<ul>
<li>
<ul>
<li>退出 Identifier (right)</li>
</ul>
</li>
</ul>
</li>
<li>
<ul>
<li>
<ul>
<li>退出 BinaryExpression (argument)</li>
</ul>
</li>
</ul>
</li>
<li>
<ul>
<li>退出 ReturnStatement (body)</li>
</ul>
</li>
<li>
<ul>
<li>退出 BlockStatement (body)</li>
</ul>
</li>
<li>退出 FunctionDeclaration</li>
</ul>
<p>所以当创建访问者时你实际上有两次机会来访问一个节点。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> MyVisitor <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">Identifier</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">enter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Entered!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function">exit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Exited!'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5768a7c151914586ab2a5b09b698b4d7~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp" alt="image" loading="lazy"></p>
<p>如有必要，你还可以把方法名用|分割成 Idenfifier |MemberExpression 形式的字符串，把同一个函数应用到多种访问节点。.</p>
<p>在 <a href="https://github.com/babel/babel/blob/2b6ff53459d97218b0cf16f8a51c14a165db1fd2/packages/babel-plugin-transform-flow-comments/src/index.js#L47" target="_blank" rel="noopener noreferrer">flow-comments<ExternalLinkIcon/></a> 插件中的例子如下：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> MyVisitor <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token string">'ExportNamedDeclaration|Flow'</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你也可以在访问者中使用别名(如<a href="https://github.com/babel/babel/tree/master/packages/babel-types/src/definitions" target="_blank" rel="noopener noreferrer">babel-types<ExternalLinkIcon/></a>定义).</p>
<p>例如，</p>
<p>Function is an alias for FunctionDeclaration, FunctionExpression, ArrowFunctionExpression, ObjectMethod and ClassMethod.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> MyVisitor <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">Function</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="paths-路径" tabindex="-1"><a class="header-anchor" href="#paths-路径" aria-hidden="true">#</a> Paths（路径）</h3>
<p>AST 通常会有许多节点，那么节点直接如何相互关联呢？ 我们可以使用一个可操作和访问的巨大可变对象表示节点之间的关联关系，或者也可以用 Paths（路径）来简化这件事情。</p>
<p>Path 是表示两个节点之间连接的对象。</p>
<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/538aefbdff92426c98c7f1da1feeb246~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp" alt="image" loading="lazy"></p>
<p>例如，如果有下面这样一个节点及其子节点︰</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token string">"FunctionDeclaration"</span><span class="token punctuation">,</span>
  id<span class="token operator">:</span> <span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">"Identifier"</span><span class="token punctuation">,</span>
    name<span class="token operator">:</span> <span class="token string">"square"</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  ...
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将子节点 Identifier 表示为一个路径（Path）的话，看起来是这样的：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"parent"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"FunctionDeclaration"</span><span class="token punctuation">,</span>
    <span class="token property">"id"</span><span class="token operator">:</span> <span class="token punctuation">{</span>...<span class="token punctuation">}</span><span class="token punctuation">,</span>
    ....
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"node"</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"Identifier"</span><span class="token punctuation">,</span>
    <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"square"</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同时它还包含关于该路径的其他元数据：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">"parent"</span><span class="token operator">:</span> <span class="token punctuation">{</span>...<span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"node"</span><span class="token operator">:</span> <span class="token punctuation">{</span>...<span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"hub"</span><span class="token operator">:</span> <span class="token punctuation">{</span>...<span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"contexts"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">"shouldSkip"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"shouldStop"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"removed"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"state"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">"opts"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">"skipKeys"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">"parentPath"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">"context"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">"container"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">"listKey"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">"inList"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">"parentKey"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">"key"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">"scope"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">"type"</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
  <span class="token property">"typeAnnotation"</span><span class="token operator">:</span> <span class="token null keyword">null</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然路径对象还包含添加、更新、移动和删除节点有关的其他很多方法，稍后我们再来看这些方法。</p>
<p>在某种意义上，路径是一个节点在树中的位置以及关于该节点各种信息的响应式 Reactive 表示。 当你调用一个修改树的方法后，路径信息也会被更新。 Babel 帮你管理这一切，从而使得节点操作简单，尽可能做到无状态。</p>
<h4 id="paths-in-visitors-存在于访问者中的路径" tabindex="-1"><a class="header-anchor" href="#paths-in-visitors-存在于访问者中的路径" aria-hidden="true">#</a> Paths in Visitors（存在于访问者中的路径）</h4>
<p>当你有一个 Identifier() 成员方法的访问者时，你实际上是在访问路径而非节点。 通过这种方式，你操作的就是节点的响应式表示（译注：即路径）而非节点本身。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> MyVisitor <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">Identifier</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'Visiting: '</span> <span class="token operator">+</span> path<span class="token punctuation">.</span>node<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>a <span class="token operator">+</span> b <span class="token operator">+</span> c<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>path<span class="token punctuation">.</span><span class="token function">traverse</span><span class="token punctuation">(</span>MyVisitor<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token literal-property property">Visiting</span><span class="token operator">:</span> a<span class="token punctuation">;</span>
<span class="token literal-property property">Visiting</span><span class="token operator">:</span> b<span class="token punctuation">;</span>
<span class="token literal-property property">Visiting</span><span class="token operator">:</span> c<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>确实，path 的 api 是学习 babel 插件最核心的。</p>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/96ed2f4589d341de9b407ef7e58e58a0~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp" alt="image" loading="lazy"></p>
<h3 id="state-状态" tabindex="-1"><a class="header-anchor" href="#state-状态" aria-hidden="true">#</a> State（状态）</h3>
<p>状态是抽象语法树 AST 转换的敌人，状态管理会不断牵扯你的精力，而且几乎所有你对状态的假设，总是会有一些未考虑到的语法最终证明你的假设是错误的。</p>
<p>考虑下列代码：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">square</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> n <span class="token operator">*</span> n<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>让我们写一个把 n 重命名为 x 的访问者的快速实现.</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">let</span> paramName<span class="token punctuation">;</span>

<span class="token keyword">const</span> MyVisitor <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">FunctionDeclaration</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> param <span class="token operator">=</span> path<span class="token punctuation">.</span>node<span class="token punctuation">.</span>params<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    paramName <span class="token operator">=</span> param<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
    param<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'x'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>

  <span class="token function">Identifier</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>path<span class="token punctuation">.</span>node<span class="token punctuation">.</span>name <span class="token operator">===</span> paramName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      path<span class="token punctuation">.</span>node<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'x'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对上面的例子代码这段访问者代码也许能工作，但它很容易被打破：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">square</span><span class="token punctuation">(</span><span class="token parameter">n</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> n <span class="token operator">*</span> n<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
n<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更好的处理方式是使用递归，下面让我们来像克里斯托佛·诺兰的电影盗梦空间那样来把一个访问者放进另外一个访问者里面。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> updateParamNameVisitor <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">Identifier</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>path<span class="token punctuation">.</span>node<span class="token punctuation">.</span>name <span class="token operator">===</span> <span class="token keyword">this</span><span class="token punctuation">.</span>paramName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      path<span class="token punctuation">.</span>node<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'x'</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> MyVisitor <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">FunctionDeclaration</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> param <span class="token operator">=</span> path<span class="token punctuation">.</span>node<span class="token punctuation">.</span>params<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> paramName <span class="token operator">=</span> param<span class="token punctuation">.</span>name<span class="token punctuation">;</span>
    param<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'x'</span><span class="token punctuation">;</span>

    path<span class="token punctuation">.</span><span class="token function">traverse</span><span class="token punctuation">(</span>updateParamNameVisitor<span class="token punctuation">,</span> <span class="token punctuation">{</span> paramName <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

path<span class="token punctuation">.</span><span class="token function">traverse</span><span class="token punctuation">(</span>MyVisitor<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当然，这只是一个刻意编写的例子，不过它演示了如何从访问者中消除全局状态。</p>
<h3 id="scopes-作用域" tabindex="-1"><a class="header-anchor" href="#scopes-作用域" aria-hidden="true">#</a> Scopes（作用域）</h3>
<p>接下来让我们介绍<a href="https://en.wikipedia.org/wiki/Scope_(computer_science)" target="_blank" rel="noopener noreferrer">作用域（scope）<ExternalLinkIcon/></a>的概念。 JavaScript 支持<a href="https://en.wikipedia.org/wiki/Scope_(computer_science)#Lexical_scoping_vs._dynamic_scoping" target="_blank" rel="noopener noreferrer">词法作用域<ExternalLinkIcon/></a>，在树状嵌套结构中代码块创建出新的作用域。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// global scope</span>

<span class="token keyword">function</span> <span class="token function">scopeOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// scope 1</span>

  <span class="token keyword">function</span> <span class="token function">scopeTwo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// scope 2</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 JavaScript 中，每当你创建了一个引用，不管是通过变量（variable）、函数（function）、类型（class）、参数（params）、模块导入（import）还是标签（label）等，它都属于当前作用域。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> global <span class="token operator">=</span> <span class="token string">'I am in the global scope'</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">scopeOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> one <span class="token operator">=</span> <span class="token string">'I am in the scope created by `scopeOne()`'</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">scopeTwo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> two <span class="token operator">=</span> <span class="token string">'I am in the scope created by `scopeTwo()`'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>更深的内部作用域代码可以使用外层作用域中的引用。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">scopeOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> one <span class="token operator">=</span> <span class="token string">'I am in the scope created by `scopeOne()`'</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">scopeTwo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    one <span class="token operator">=</span> <span class="token string">'I am updating the reference in `scopeOne` inside `scopeTwo`'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>内层作用域也可以创建和外层作用域同名的引用。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">scopeOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> one <span class="token operator">=</span> <span class="token string">'I am in the scope created by `scopeOne()`'</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">scopeTwo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> one <span class="token operator">=</span> <span class="token string">'I am creating a new `one` but leaving reference in `scopeOne()` alone.'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当编写一个转换时，必须小心作用域。我们得确保在改变代码的各个部分时不会破坏已经存在的代码。</p>
<p>我们在添加一个新的引用时需要确保新增加的引用名字和已有的所有引用不冲突。 或者我们仅仅想找出使用一个变量的所有引用， 我们只想在给定的作用域（Scope）中找出这些引用。</p>
<p>作用域可以被表示为如下形式：</p>
<div class="language-json ext-json line-numbers-mode"><pre v-pre class="language-json"><code><span class="token punctuation">{</span>
  path<span class="token operator">:</span> path<span class="token punctuation">,</span>
  block<span class="token operator">:</span> path.node<span class="token punctuation">,</span>
  parentBlock<span class="token operator">:</span> path.parent<span class="token punctuation">,</span>
  parent<span class="token operator">:</span> parentScope<span class="token punctuation">,</span>
  bindings<span class="token operator">:</span> <span class="token punctuation">[</span>...<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当你创建一个新的作用域时，需要给出它的路径和父作用域，之后在遍历过程中它会在该作用域内收集所有的引用(“绑定”)。</p>
<p>一旦引用收集完毕，你就可以在作用域（Scopes）上使用各种方法，稍后我们会了解这些方法。</p>
<h4 id="bindings-绑定" tabindex="-1"><a class="header-anchor" href="#bindings-绑定" aria-hidden="true">#</a> Bindings（绑定）</h4>
<p>所有引用属于特定的作用域，引用和作用域的这种关系被称作：绑定（binding）。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">scopeOnce</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> ref <span class="token operator">=</span> <span class="token string">'This is a binding'</span><span class="token punctuation">;</span>

  ref<span class="token punctuation">;</span> <span class="token comment">// This is a reference to a binding</span>

  <span class="token keyword">function</span> <span class="token function">scopeTwo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    ref<span class="token punctuation">;</span> <span class="token comment">// This is a reference to a binding from a lower scope</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>单个绑定看起来像这样︰</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>Text <span class="token keyword">for</span> Translation
<span class="token punctuation">{</span>
  <span class="token literal-property property">identifier</span><span class="token operator">:</span> node<span class="token punctuation">,</span>
  <span class="token literal-property property">scope</span><span class="token operator">:</span> scope<span class="token punctuation">,</span>
  <span class="token literal-property property">path</span><span class="token operator">:</span> path<span class="token punctuation">,</span>
  <span class="token literal-property property">kind</span><span class="token operator">:</span> <span class="token string">'var'</span><span class="token punctuation">,</span>

  <span class="token literal-property property">referenced</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">references</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
  <span class="token literal-property property">referencePaths</span><span class="token operator">:</span> <span class="token punctuation">[</span>path<span class="token punctuation">,</span> path<span class="token punctuation">,</span> path<span class="token punctuation">]</span><span class="token punctuation">,</span>

  <span class="token literal-property property">constant</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token literal-property property">constantViolations</span><span class="token operator">:</span> <span class="token punctuation">[</span>path<span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有了这些信息你就可以查找一个绑定的所有引用，并且知道这是什么类型的绑定(参数，定义等等)，查找它所属的作用域，或者拷贝它的标识符。 你甚至可以知道它是不是常量，如果不是，那么是哪个路径修改了它。</p>
<p>在很多情况下，知道一个绑定是否是常量非常有用，最有用的一种情形就是代码压缩时。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">scopeOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> ref1 <span class="token operator">=</span> <span class="token string">'This is a constant binding'</span><span class="token punctuation">;</span>

  <span class="token function">becauseNothingEverChangesTheValueOf</span><span class="token punctuation">(</span>ref1<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">function</span> <span class="token function">scopeTwo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> ref2 <span class="token operator">=</span> <span class="token string">'This is *not* a constant binding'</span><span class="token punctuation">;</span>
    ref2 <span class="token operator">=</span> <span class="token string">'Because this changes the value'</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>

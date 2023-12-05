<template><div><p>学习了 babel 的编译流程和 AST 之后，我们就大概知道了 babel 做了什么。但还要学习下 babel 的 api，然后通过这些 api 来操作 AST，完成代码的转换。</p>
<blockquote>
<p>注意，我们学习的 api 是 babel 7.x 的，babel 6 的 api 还没有按照 scope 来划分，也就是 babel-parser 这种，而 babel 7 变成了@babel/parser 这种。对应的插件也是从 babel-plugin-xxx 变成了 @babel/plugin-xxx。但只是包名变了，api 没啥大的变动，我们学的是一些原理性的东西，这些东西在版本迭代中是不会变的。</p>
</blockquote>
<h2 id="babel-的-api-有哪些" tabindex="-1"><a class="header-anchor" href="#babel-的-api-有哪些" aria-hidden="true">#</a> babel 的 api 有哪些</h2>
<p>我们知道 babel 的编译流程分为三步：parse、transform、generate，每一步都暴露了一些 api 出来。</p>
<ul>
<li>parse 阶段有@babel/parser，功能是把源码转成 AST</li>
<li>transform 阶段有 @babel/traverse，可以遍历 AST，并调用 visitor 函数修改 AST，修改 AST 自然涉及到 AST 的判断、创建、修改等，这时候就需要 @babel/types 了，当需要批量创建 AST 的时候可以使用 @babel/template 来简化 AST 创建逻辑。</li>
<li>generate 阶段会把 AST 打印为目标代码字符串，同时生成 sourcemap，需要 @babel/generator 包</li>
<li>中途遇到错误想打印代码位置的时候，使用 @babel/code-frame 包</li>
<li>babel 的整体功能通过 @babel/core 提供，基于上面的包完成 babel 整体的编译流程，并应用 plugin 和 preset。</li>
</ul>
<p>我们主要学习的就是 <code v-pre>@babel/parser</code>，<code v-pre>@babel/traverse</code>，<code v-pre>@babel/generator</code>，<code v-pre>@babel/types</code>，`@babel/template`` 这五个包的 api 的使用。</p>
<p>这些包的 api 都可以在文档里查看：</p>
<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0ecd921de24f401b93672d7c0ad4b81d~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="image" loading="lazy"></p>
<h2 id="babel-core" tabindex="-1"><a class="header-anchor" href="#babel-core" aria-hidden="true">#</a> @babel/core</h2>
<p>babel 的功能就是通过 <code v-pre>@babel/parser</code>、<code v-pre>@babel/traverse</code>、<code v-pre>@babel/generaotr</code>、<code v-pre>@babel/types</code>、<code v-pre>@babel/template</code> 这些包来实现的。</p>
<p>babel 基于这些包来实现编译、插件、预设等功能的包就是 <code v-pre>@babel/core</code>。</p>
<blockquote>
<p>这个包的功能就是完成整个编译流程，从源码到目标代码，生成 sourcemap。实现 plugin 和 preset 的调用。</p>
</blockquote>
<p>api 也有好几个：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">transformSync</span><span class="token punctuation">(</span>code<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => { code, map, ast }</span>

<span class="token function">transformFileSync</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => { code, map, ast }</span>

<span class="token function">transformFromAstSync</span><span class="token punctuation">(</span>parsedAst<span class="token punctuation">,</span> sourceCode<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// => { code, map, ast }</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>比如这三个 transformXxx 的 api 分别是从源代码、源代码文件、源代码 AST 开始处理，最终生成目标代码和 sourcemap。</strong></p>
<p>options 主要配置 plugins 和 presets，指定具体要做什么转换。</p>
<p>这些 api 也同样提供了异步的版本，异步地进行编译，返回一个 promise</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">transformAsync</span><span class="token punctuation">(</span><span class="token string">'code();'</span><span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">transformFileAsync</span><span class="token punctuation">(</span><span class="token string">'filename.js'</span><span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">transformFromAstAsync</span><span class="token punctuation">(</span>parsedAst<span class="token punctuation">,</span> sourceCode<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">result</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注意：不带 sync、async 的 api 已经被标记过时了，也就是 transformXxx 这些，后续会删掉，不建议用，直接用 transformXxxSync 和 transformXxxAsync。也就是明确是同步还是异步。</p>
</blockquote>
<blockquote>
<p>@babel/core 支持 plugin 和 preset，一半我们配置的都是对象的格式，其实也有一个 api 来创建，也就是 createConfigItem：</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">createConfigItem</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// configItem</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>不过用和不用的没啥区别，常用的还是直接写配置对象。</p>
<h2 id="babel-parser" tabindex="-1"><a class="header-anchor" href="#babel-parser" aria-hidden="true">#</a> @babel/parser</h2>
<p>babel parser 叫 babylon，是基于 acorn 实现的，扩展了很多语法，可以支持 es next（现在支持到 es2020）、jsx、flow、typescript 等语法的解析。</p>
<p>babel parser 默认只能 parse js 代码，jsx、flow、typescript 这些非标准的语法的解析需要指定语法插件。</p>
<p>它提供了有两个 api：parse 和 parseExpression。两者都是把源码转成 AST，不过 parse 返回的 AST 根节点是 File（整个 AST），parseExpression 返回的 AST 根节点是是 Expression（表达式的 AST），粒度不同。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">parse</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">input</span><span class="token operator">:</span> string<span class="token punctuation">,</span> options<span class="token operator">?</span><span class="token operator">:</span> ParserOptions</span><span class="token punctuation">)</span><span class="token operator">:</span> File
<span class="token keyword">function</span> <span class="token function">parseExpression</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">input</span><span class="token operator">:</span> string<span class="token punctuation">,</span> options<span class="token operator">?</span><span class="token operator">:</span> ParserOptions</span><span class="token punctuation">)</span><span class="token operator">:</span> Expression
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>详细的 options 可以查看<a href="https://link.juejin.cn/?target=https%3A%2F%2Fbabeljs.io%2Fdocs%2Fen%2Fbabel-parser%23options" target="_blank" rel="noopener noreferrer">文档<ExternalLinkIcon/></a>。其实主要分为两类，一是 parse 的内容是什么，二是以什么方式去 parse</p>
<h3 id="parse-的内容是什么" tabindex="-1"><a class="header-anchor" href="#parse-的内容是什么" aria-hidden="true">#</a> parse 的内容是什么：</h3>
<ul>
<li>plugins： 指定 jsx、typescript、flow 等插件来解析对应的语法</li>
<li>allowXxx： 指定一些语法是否允许，比如函数外的 await、没声明的 export 等</li>
<li>sourceType： 指定是否支持解析模块语法，有 module、script、unambiguous 3 个取值：</li>
<li>
<ul>
<li>module：解析 es module 语法</li>
</ul>
</li>
<li>
<ul>
<li>script：不解析 es module 语法</li>
</ul>
</li>
<li>
<ul>
<li>unambiguous：根据内容是否有 import 和 export 来自动设置 module 还是 script</li>
</ul>
</li>
</ul>
<p>一般我们会指定 sourceType 为 unambiguous。</p>
<p>比如：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> parser <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@babel/parser'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> ast <span class="token operator">=</span> parser<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span><span class="token string">'代码'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">sourceType</span><span class="token operator">:</span> <span class="token string">'unambiguous'</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'jsx'</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以什么方式 parse</p>
<ul>
<li>strictMode 是否是严格模式</li>
<li>startLine 从源码哪一行开始 parse</li>
<li>errorRecovery 出错时是否记录错误并继续往下 parse</li>
<li>tokens parse 的时候是否保留 token 信息</li>
<li>ranges 是否在 ast 节点中添加 ranges 属性</li>
</ul>
<p>用 <a href="http://astexplorer.net" target="_blank" rel="noopener noreferrer">astexplorer.net<ExternalLinkIcon/></a> 来查看 AST 的时候，也同样支持 parser options 的设置：</p>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8418549479854741bd8f4410e81acfac~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="image" loading="lazy"></p>
<h2 id="babel-traverse" tabindex="-1"><a class="header-anchor" href="#babel-traverse" aria-hidden="true">#</a> @babel/traverse</h2>
<p>parse 出的 AST 由 @babel/traverse 来遍历和修改，babel traverse 包提供了 traverse 方法：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">traverse</span><span class="token punctuation">(</span><span class="token parameter">parent<span class="token punctuation">,</span> opts</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>常用的就前面两个参数，parent 指定要遍历的 AST 节点，opts 指定 visitor 函数。babel 会在遍历 parent 对应的 AST 时调用相应的 visitor 函数。</p>
<h3 id="遍历过程" tabindex="-1"><a class="header-anchor" href="#遍历过程" aria-hidden="true">#</a> 遍历过程</h3>
<p>visitor 是指定对什么 AST 做什么处理的函数，babel 会在遍历到对应的 AST 时回调它们。</p>
<p>而且可以指定刚开始遍历（enter）和遍历结束后（exit）两个阶段的回调函数，</p>
<p>比如：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">traverse</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">FunctionDeclaration</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">enter</span><span class="token punctuation">(</span><span class="token parameter">path<span class="token punctuation">,</span> state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 进入节点时调用</span>
    <span class="token function">exit</span><span class="token punctuation">(</span><span class="token parameter">path<span class="token punctuation">,</span> state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 离开节点时调用</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果只指定了一个函数，那就是 enter 阶段会调用的：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">traverse</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">FunctionDeclaration</span><span class="token punctuation">(</span><span class="token parameter">path<span class="token punctuation">,</span> state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 进入节点时调用</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>enter 时调用是在遍历当前节点的子节点前调用，exit 时调用是遍历完当前节点的子节点后调用。</p>
<p>而且同一个 visitor 函数可以用于多个 AST 节点的处理，方式是指定一系列 AST，用 | 连接：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 进入 FunctionDeclaration 和 VariableDeclaration 节点时调用</span>
<span class="token function">traverse</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token string">'FunctionDeclaration|VariableDeclaration'</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> state<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此外，AST 还有别名的，比如各种 XxxStatement 有个 Statement 的别名，各种 XxxDeclaration 有个 Declaration 的别名，那自然可以通过别名来指定对这些 AST 的处理：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 通过别名指定离开各种 Declaration 节点时调用</span>
<span class="token function">traverse</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">Declaration</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token function">exit</span><span class="token punctuation">(</span><span class="token parameter">path<span class="token punctuation">,</span> state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>具体的别名有哪些在 <a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fbabel%2Fbabel%2Fblob%2Fmain%2Fpackages%2Fbabel-types%2Fsrc%2Fast-types%2Fgenerated%2Findex.ts%23L2059" target="_blank" rel="noopener noreferrer">babel-types 的类型定义<ExternalLinkIcon/></a>可以查。</p>
<p>当然，babel 文档里也有：</p>
<p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fwww.babeljs.cn%2Fdocs%2Fbabel-types%23aliases" target="_blank" rel="noopener noreferrer">https://link.juejin.cn/?target=https%3A%2F%2Fwww.babeljs.cn%2Fdocs%2Fbabel-types%23aliases<ExternalLinkIcon/></a></p>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2e50557005e74a7f91530cff9abafee9~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="image" loading="lazy"></p>
<p>每个 visitor 都有 path 和 state 的参数，这些是干啥的呢？</p>
<h4 id="path" tabindex="-1"><a class="header-anchor" href="#path" aria-hidden="true">#</a> path</h4>
<p>AST 是棵树，遍历过程中肯定是有个路径的，path 就记录了这个路径：</p>
<p><img src="https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/538aefbdff92426c98c7f1da1feeb246~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp" alt="image" loading="lazy"></p>
<p>如图，节点 1、节点 2、节点 3 是三层 AST，通过两个 path 关联了起来，</p>
<p>path1 就关联了节点 1 和 节点 2，记录了节点 1 是父节点，节点 2 是子节点。</p>
<p>path2 关联了节点 2 和节点 3，记录了节点 2 是父节点，节点 3 是子节点。</p>
<p>而且 path1 和 path2 还有父子关系。</p>
<p>通过这样的 path 对象，那不就把遍历的路径串联起来了么。</p>
<p>而且，最重要的是 path 有很多属性和方法，比如记录父子、兄弟等关系的：</p>
<ul>
<li>path.node 指向当前 AST 节点</li>
<li>path.parent 指向父级 AST 节点</li>
<li>path.getSibling、path.getNextSibling、path.getPrevSibling 获取兄弟节点</li>
<li>path.find 从当前节点向上查找节点</li>
<li>path.get、path.set 获取 / 设置属性的 path</li>
</ul>
<p>还有作用域相关的：</p>
<ul>
<li>path.scope 获取当前节点的作用域信息</li>
</ul>
<p>判断 AST 类型的：</p>
<ul>
<li>path.isXxx 判断当前节点是不是 xx 类型</li>
<li>path.assertXxx 判断当前节点是不是 xx 类型，不是则抛出异常</li>
</ul>
<p>增删改 AST 的：</p>
<ul>
<li>path.insertBefore、path.insertAfter 插入节点</li>
<li>path.replaceWith、path.replaceWithMultiple、replaceWithSourceString 替换节点</li>
<li>path.remove 删除节点</li>
</ul>
<p>跳过遍历的：</p>
<ul>
<li>path.skip 跳过当前节点的子节点的遍历</li>
<li>path.stop 结束后续遍历</li>
</ul>
<p>可以增删改 AST，可以按照路径查找任意的节点，还有作用域的信息，那怎么转换和分析代码不就呼之欲出了么。</p>
<p>确实，path 的 api 是学习 babel 插件最核心的。</p>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/96ed2f4589d341de9b407ef7e58e58a0~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp" alt="image" loading="lazy"></p>
<p>上面罗列了一些常用的 api，可以通过这些 api 完成对 AST 的操作。当然，path 的 api 不是只有这些，后面实战案例用到了再介绍。</p>
<h4 id="state" tabindex="-1"><a class="header-anchor" href="#state" aria-hidden="true">#</a> state</h4>
<p>第二个参数 state 则是遍历过程中在不同节点之间传递数据的机制，插件会通过 state 传递 options 和 file 信息，我们也可以通过 state 存储一些遍历过程中的共享数据。</p>
<p><img src="https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ee26748e8dd54dcca660e593271411be~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp" alt="image" loading="lazy"></p>
<p>这个很容易理解，节点之间是有传输数据的需求的。不同状态下可能会做不同的处理，这就是为什么这个参数叫做 state。</p>
<h4 id="babel-types" tabindex="-1"><a class="header-anchor" href="#babel-types" aria-hidden="true">#</a> @babel/types</h4>
<p>遍历 AST 的过程中需要创建一些 AST 和判断 AST 的类型，这时候就需要 @babel/types 包。</p>
<p>举例来说，如果要创建 IfStatement 就可以调用</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>t<span class="token punctuation">.</span><span class="token function">ifStatement</span><span class="token punctuation">(</span>test<span class="token punctuation">,</span> consequent<span class="token punctuation">,</span> alternate<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>而判断节点是否是 IfStatement 就可以调用 isIfStatement 或者 assertIfStatement</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>t<span class="token punctuation">.</span><span class="token function">isIfStatement</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> opts<span class="token punctuation">)</span><span class="token punctuation">;</span>
t<span class="token punctuation">.</span><span class="token function">assertIfStatement</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> opts<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>opts 可以指定一些属性是什么值，增加更多限制条件，做更精确的判断。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>t<span class="token punctuation">.</span><span class="token function">isIdentifier</span><span class="token punctuation">(</span>node<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'paths'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>isXxx 和 assertXxx 看起来很像，但是功能不大一样：isXxx 会返回 boolean，而 assertXxx 则会在类型不一致时抛异常。</p>
<p>所有的 AST 的 build、assert 的 api 可以在 <a href="https://link.juejin.cn/?target=https%3A%2F%2Fbabeljs.io%2Fdocs%2Fen%2Fbabel-types%23api" target="_blank" rel="noopener noreferrer">babel types 文档<ExternalLinkIcon/></a>中查。</p>
<h4 id="babel-template" tabindex="-1"><a class="header-anchor" href="#babel-template" aria-hidden="true">#</a> @babel/template</h4>
<p>通过 @babel/types 创建 AST 还是比较麻烦的，要一个个的创建然后组装，如果 AST 节点比较多的话需要写很多代码，这时候就可以使用 @babel/template 包来批量创建。</p>
<p>这个包有这些 api：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> ast <span class="token operator">=</span> <span class="token function">template</span><span class="token punctuation">(</span>code<span class="token punctuation">,</span> <span class="token punctuation">[</span>opts<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> ast <span class="token operator">=</span> template<span class="token punctuation">.</span><span class="token function">ast</span><span class="token punctuation">(</span>code<span class="token punctuation">,</span> <span class="token punctuation">[</span>opts<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> ast <span class="token operator">=</span> template<span class="token punctuation">.</span><span class="token function">program</span><span class="token punctuation">(</span>code<span class="token punctuation">,</span> <span class="token punctuation">[</span>opts<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这些都是传入一段字符串，返回创建好的 AST，区别只是返回的 AST 粒度不大一样：</p>
<p>template.ast 返回的是整个 AST。</p>
<p>template.program 返回的是 Program 根节点。</p>
<p>template.expression 返回创建的 expression 的 AST。</p>
<p>template.statements 返回创建的 statems 数组的 AST。</p>
<p>可能有的同学会说，都是创建 AST，搞这么多 api。</p>
<p>还是有意义的，比如上节说表达式作为语句执行的时候，<a href="https://link.juejin.cn/?target=https%3A%2F%2Fastexplorer.net%2F%23%2Fgist%2F3af72fdd39c4950fd8afbcd488a18f7f%2F9fef2ce1da52b1698ded918e0c29eb7a1591a05f" target="_blank" rel="noopener noreferrer">AST 会有一层 ExpressionStatement 么<ExternalLinkIcon/></a>：</p>
<p><img src="https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c533f7c66391490684f521aeb0ec01fa~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp?" alt="image" loading="lazy"></p>
<p>所以用 template.ast 创建的 Expression 会被包裹一层 ExpressionStatement 节点，而 template.expression 方法创建的 AST 就不会。</p>
<p>所以，当你明确知道了创建的 AST 的类型的话，用更细粒度的 api 会方便一些。</p>
<p>模版也支持占位符，可以在模版里设置一些占位符，调用时再传入这些占位符参数对应的 AST 节点。</p>
<p>比如：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> fn <span class="token operator">=</span> <span class="token function">template</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">console.log(NAME)</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> ast <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token constant">NAME</span><span class="token operator">:</span> t<span class="token punctuation">.</span><span class="token function">stringLiteral</span><span class="token punctuation">(</span><span class="token string">'guang'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>或者</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> fn <span class="token operator">=</span> <span class="token function">template</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">console.log(%%NAME%%)</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> ast <span class="token operator">=</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token constant">NAME</span><span class="token operator">:</span> t<span class="token punctuation">.</span><span class="token function">stringLiteral</span><span class="token punctuation">(</span><span class="token string">'guang'</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样就是通过模版来批量创建 AST，但是其中的占位符是用传入的 AST。</p>
<p>加不加 %% 都行，当占位符和其他变量名冲突时可以加上。</p>
<h2 id="babel-generator" tabindex="-1"><a class="header-anchor" href="#babel-generator" aria-hidden="true">#</a> @babel/generator</h2>
<p>AST 转换完之后就要打印成目标代码字符串，通过 @babel/generator 包的 generate api</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">ast</span><span class="token operator">:</span> Object<span class="token punctuation">,</span> <span class="token literal-property property">opts</span><span class="token operator">:</span> Object<span class="token punctuation">,</span> <span class="token literal-property property">code</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">{</span>code<span class="token punctuation">,</span> map<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>第一个参数是要打印的 AST。</p>
<p>第二个参数是 options，指定打印的一些细节，比如通过 comments 指定是否包含注释，通过 minified 指定是否包含空白字符。</p>
<p>第三个参数当多个文件合并打印的时候需要用到，这部分直接看文档即可，基本用不到。</p>
<p>options 中常用的是 sourceMaps，开启了这个选项才会生成 sourcemap。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> generate <span class="token keyword">from</span> <span class="token string">'@babel/generator'</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> code<span class="token punctuation">,</span> map <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">generate</span><span class="token punctuation">(</span>ast<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">sourceMaps</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="babel-code-frame" tabindex="-1"><a class="header-anchor" href="#babel-code-frame" aria-hidden="true">#</a> @babel/code-frame</h3>
<p>babel 的报错一半都会直接打印错误位置的代码，而且还能高亮，</p>
<p>我们打印错误信息的时候也可以用，就是 @babel/code-frame 这个包。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">codeFrameColumns</span><span class="token punctuation">(</span>rawLines<span class="token punctuation">,</span> location<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token comment">/* options */</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>options 可以设置 highlighted （是否高亮）、message（展示啥错误信息）。</p>
<p>比如</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> codeFrameColumns <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">'@babel/code-frame'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">try</span> <span class="token punctuation">{</span>
  <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'xxx 错误'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>
    <span class="token function">codeFrameColumns</span><span class="token punctuation">(</span>
      <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">const name = guang</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">line</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token literal-property property">column</span><span class="token operator">:</span> <span class="token number">14</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">highlightCode</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token literal-property property">message</span><span class="token operator">:</span> err<span class="token punctuation">.</span>message<span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">)</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>打印的错误就是这样的：</p>
<p><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e31ce65fd2f644439f2848b0e0e94c1b~tplv-k3u1fbpfcp-zoom-in-crop-mark:3024:0:0:0.awebp" alt="image" loading="lazy"></p>
<p>在控制台展示这样的错误，是不是比直接打印个错误堆栈好很多呀～</p>
<p>这种控制台打印代码格式的功能就叫做 <code v-pre>code frame</code>。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p>这一节我们了解了编译过程中各阶段的 api：</p>
<ul>
<li>@babel/parser 对源码进行 parse，可以通过 plugins、sourceType 等来指定 parse 语法</li>
<li>@babel/traverse 通过 visitor 函数对遍历到的 ast 进行处理，分为 enter 和 exit 两个阶段，具体操作 AST 使用 path 的 api，还可以通过 state 来在遍历过程中传递一些数据</li>
<li>@babel/types 用于创建、判断 AST 节点，提供了 xxx、isXxx、assertXxx 的 api</li>
<li>@babel/template 用于批量创建节点</li>
<li>@babel/code-frame 可以创建友好的报错信息</li>
<li>@babel/generator 打印 AST 成目标代码字符串，支持 comments、minified、sourceMaps 等选项。</li>
<li>@babel/core 基于上面的包来完成 babel 的编译流程，可以从源码字符串、源码文件、AST 开始。</li>
</ul>
</div></template>

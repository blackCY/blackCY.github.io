<template><div><h2 id="一、什么是-es-module" tabindex="-1"><a class="header-anchor" href="#一、什么是-es-module" aria-hidden="true">#</a> 一、什么是 ES Module</h2>
<blockquote>
<p>历史上，JavaScript 一直没有模块（module）体系，无法将一个大程序拆分成互相依赖的小文件，再用简单的方法拼装起来。其他语言都有这项功能，比 Python 的 import，甚至就连 CSS 都有@import，但是 JavaScript 任何这方面的支持都没有，这对开发大型的、复杂的项目形成了巨大障碍。
在 ES6 之前，社区制定了一些模块加载方案，最主要的有 CommonJS 和 AMD 两种。前者用于服务器，后者用于浏览器。
ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，完全可以取代 CommonJS 和 AMD 规范，成为浏览器和服务器通用的模块解决方案。
ES6 模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量。
CommonJS 和 AMD 模块，都只能在运行时确定这些东西。比如，CommonJS 模块就是对象，输入时必须查找对象属性。</p>
</blockquote>
<h3 id="can-i-use" tabindex="-1"><a class="header-anchor" href="#can-i-use" aria-hidden="true">#</a> Can I Use</h3>
<p>截止本篇文章为止（2022-05-15），通过参看 <a href="https://link.zhihu.com/?target=https%3A//caniuse.com/%3Fsearch%3Desm" target="_blank" rel="noopener noreferrer">Can I Use<ExternalLinkIcon/></a> 上 ES Module 的使用情况可知：在浏览器中的整体使用率为 93%，在各大主流浏览器都得到支持（除 IE 外）。</p>
<p><img src="https://pic1.zhimg.com/80/v2-e391286e443f0771dc2e186176d85768_1440w.jpg" alt="image" loading="lazy"></p>
<h3 id="es-module-和-commonjs" tabindex="-1"><a class="header-anchor" href="#es-module-和-commonjs" aria-hidden="true">#</a> ES Module 和 CommonJS</h3>
<p><strong>区别</strong></p>
<ul>
<li>ES Module 输出的是值的引用，而 CommonJS 输出的是值的拷贝；</li>
<li>ES Module 是编译时执行，而 CommonJS 模块是在运行时加载；</li>
<li>ES6 Module 可以导出多个值，而 CommonJs 是单个值导出；</li>
<li>ES6 Module 静态语法只能写在顶层，而 CommonJs 是动态语法可以写在判断里；</li>
<li>ES6 Module 的 this 是 undefined，而 CommonJs 的 this 是当前模块；</li>
</ul>
<h3 id="使用比较" tabindex="-1"><a class="header-anchor" href="#使用比较" aria-hidden="true">#</a> 使用比较</h3>
<h4 id="commonjs-模块" tabindex="-1"><a class="header-anchor" href="#commonjs-模块" aria-hidden="true">#</a> CommonJS 模块</h4>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// CommonJS模块</span>
<span class="token keyword">let</span> <span class="token punctuation">{</span> stat<span class="token punctuation">,</span> exists<span class="token punctuation">,</span> readfile <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"fs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 等同于</span>
<span class="token keyword">let</span> _fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"fs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> stat <span class="token operator">=</span> _fs<span class="token punctuation">.</span>stat<span class="token punctuation">;</span>
<span class="token keyword">let</span> exists <span class="token operator">=</span> _fs<span class="token punctuation">.</span>exists<span class="token punctuation">;</span>
<span class="token keyword">let</span> readfile <span class="token operator">=</span> _fs<span class="token punctuation">.</span>readfile<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>CommonJS 模块代码的实质是整体加载 fs 模块（即加载 fs 的所有方法），生成一个对象（<code v-pre>_fs</code>），然后再从这个对象上面读取 3 个方法。</strong></p>
<p><strong>这种加载称为“运行时加载”，因为只有运行时才能得到这个对象，导致完全没办法在编译时做“静态优化”。</strong></p>
<h4 id="es6-模块" tabindex="-1"><a class="header-anchor" href="#es6-模块" aria-hidden="true">#</a> ES6 模块</h4>
<p><strong>ES6 模块不是对象，而是通过 export 命令显式指定输出的代码，再通过 import 命令输入。</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// ES6模块</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> stat<span class="token punctuation">,</span> exists<span class="token punctuation">,</span> readFile <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"fs"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>ES6 模块代码的实质是从 fs 模块加载 3 个方法，其他方法不加载。这种加载称为“编译时加载”或者静态加载，即 ES6 可以在编译时就完成模块加载，效率要比 CommonJS 模块的加载方式高。当然，这也导致了没法引用 ES6 模块本身，因为它不是对象。</strong></p>
<p><strong>由于 ES6 模块是编译时加载，使得静态分析成为可能。有了它，就能进一步拓宽 JavaScript 的语法，比如引入宏（macro）和类型检验（type system）这些只能靠静态分析实现的功能。</strong></p>
<p>除了静态加载带来的各种好处，ES6 模块还有以下好处。</p>
<ul>
<li>不再需要 UMD 模块格式了，将来服务器和浏览器都会支持 ES6 模块格式。</li>
<li>浏览器的新 API 就能用模块格式提供，不再必须做成全局变量或者 navigator 对象的属性。</li>
<li>不再需要对象作为命名空间（比如 Math 对象），这些功能可以通过模块提供。</li>
</ul>
<h2 id="二、es-module-语法" tabindex="-1"><a class="header-anchor" href="#二、es-module-语法" aria-hidden="true">#</a> 二、ES Module 语法</h2>
<h3 id="_1、export-命令" tabindex="-1"><a class="header-anchor" href="#_1、export-命令" aria-hidden="true">#</a> 1、export 命令</h3>
<ul>
<li>export 命令用于规定模块的对外接口，即允许外部引用的部分；</li>
<li>export 命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系；</li>
<li>export 语句输出的接口，与其对应的值是动态绑定关系（可以理解为引用类型），即通过该接口，可以取到模块内部<strong>实时的值</strong>；</li>
<li>export 命令可以出现在模块顶层作用域的任何位置。如果处于块级作用域内，就会报错；</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// export</span>

<span class="token comment">// export方式1</span>
<span class="token keyword">export</span> <span class="token keyword">var</span><span class="token operator">/</span><span class="token keyword">let</span><span class="token operator">/</span><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token string">'hello'</span><span class="token operator">/</span><span class="token number">1</span><span class="token operator">/</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token operator">/</span><span class="token keyword">class</span><span class="token operator">/</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token operator">/</span><span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">//导出的可以是类型类型，包括类（class）</span>

<span class="token comment">// export方式2</span>
<span class="token keyword">var</span><span class="token operator">/</span><span class="token keyword">let</span><span class="token operator">/</span><span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token string">'hello'</span><span class="token operator">/</span><span class="token number">1</span><span class="token operator">/</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token operator">/</span><span class="token keyword">class</span><span class="token operator">/</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token operator">/</span><span class="token boolean">true</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span>b<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// export方式3：export命令除了输出变量，还可以输出函数或类（class）</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">addNum</span><span class="token punctuation">(</span><span class="token parameter">x<span class="token punctuation">,</span> y</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> x <span class="token operator">+</span> y<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2、import-命令" tabindex="-1"><a class="header-anchor" href="#_2、import-命令" aria-hidden="true">#</a> 2、import 命令</h3>
<ul>
<li>import 命令用于输入其他模块提供的功能，通过 import 命令加载引入模块；</li>
<li>import 命令输入的变量都是只读的，它的本质是输入接口，不允许在加载模块的文件中修改进入变量的值；但是如果引入变量是一个对象，改写引入变量的属性是允许的；</li>
<li>import 后面的 from 指定模块文件的位置，可以是相对路径，也可以是绝对路径；</li>
<li>import 命令具有提升效果，会提升到整个模块作用域的头部，首先执行；</li>
<li>import 是静态执行，引入语句中<strong>不能使用表达式和变量</strong>（表达式和变量是在运行时才能得到结果的语法结构）；</li>
<li>import 语句会执行所加载的模块，重复执行同一句 import 语句，那么只会执行一次；</li>
<li>import 除了指定加载某个输出值，还可以使用整体加载，即用星号（<code v-pre>*</code>）指定一个引入对象，所有输出值都加载在这个对象上；</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 引入提升</span>
<span class="token function">a</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> a <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"test"</span><span class="token punctuation">;</span>

<span class="token comment">// 整体引入</span>
<span class="token keyword">import</span> <span class="token operator">*</span> <span class="token keyword">as</span> b <span class="token keyword">from</span> <span class="token string">"test"</span><span class="token punctuation">;</span>
b<span class="token punctuation">.</span><span class="token function">fn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 修改引入对象的属性</span>
b<span class="token punctuation">.</span>c <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>静态执行特点</strong></p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// 报错：引入使用 表达式</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token string">'he'</span> <span class="token operator">+</span> <span class="token string">'llo'</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sayHi'</span><span class="token punctuation">;</span>

<span class="token comment">// 报错：引入使用 变量</span>
<span class="token keyword">let</span> module <span class="token operator">=</span> <span class="token string">'sayHi'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> hello <span class="token punctuation">}</span> from module<span class="token punctuation">;</span>

<span class="token comment">// 报错：引入使用 代码块结构</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>x <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> hello <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sayHi'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
  <span class="token keyword">import</span> <span class="token punctuation">{</span> baybay <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'sayHi'</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面引入都会报错，因为<strong>在静态分析阶段，这些语法都是没法得到值的</strong>。</p>
<p><strong>报错原因</strong></p>
<p>import 命令会被 JavaScript 引擎静态分析，先于模块内的其他语句执行；</p>
<p>引擎处理 import 语句是在编译时，这时不会去分析或执行<strong>表达式、变量和代码块结构</strong>，所以 import 语句中包含表达式、变量或者放在代码块结构没有意义。</p>
<h3 id="_3、export-default" tabindex="-1"><a class="header-anchor" href="#_3、export-default" aria-hidden="true">#</a> 3、export default</h3>
<p>按照正常逻辑，使用 import 命令的时候，开发者需要知道所要加载的变量名或函数名，否则无法加载，但是为了方便开发者使用，不拘泥于文档说明，于是提供了 export default 命令，为模块指定默认输出。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token comment">// export-default</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"sayHi"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">// import-default</span>
<span class="token keyword">import</span> dfName <span class="token keyword">from</span> <span class="token string">"./export-default"</span><span class="token punctuation">;</span>
<span class="token function">dfName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 'sayHi'</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>区别</strong></p>
<p>一个模块只能有一个默认输出，export default 命令只能使用一次；对于 import 命令后面不用加大括号，因为只有唯一对应 export default 命令。</p>
<p>本质：export default 输出了一个叫做 default 的变量或方法，引入时系统允许你为它取任意名字；</p>
<p>import 语句中，可以同时输入<strong>默认方法和其他接口</strong>：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> _<span class="token punctuation">,</span> <span class="token punctuation">{</span> hello <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"sayHi"</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>对应 export:</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ···</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">hello</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// ···</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> hello <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4、export-与-import-的复合" tabindex="-1"><a class="header-anchor" href="#_4、export-与-import-的复合" aria-hidden="true">#</a> 4、export 与 import 的复合</h3>
<p>在一个模块之中，先输入一个模块，最后再输出同一个模块：</p>
<p>注意：写成一行的方式中，hello 实际上并没有被导入当前模块，只是相当于对外转发了这个接口，于是当前模块不能使用 hello。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token punctuation">{</span> hello <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"sayHi"</span><span class="token punctuation">;</span>

<span class="token comment">// 理解为</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> hello <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"sayHi"</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> hello <span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5、import" tabindex="-1"><a class="header-anchor" href="#_5、import" aria-hidden="true">#</a> 5、import()</h3>
<p><strong>import 的不足</strong></p>
<p><strong>import 静态分析有利于编译器提高效率，但导致无法在运行时加载模块</strong>。因此，条件加载就无法实现。因此 import 无法取代 Node 的 require 方法。因为 require 是运行时加载模块，import 命令无法取代 require 的动态加载功能。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token string">"./"</span> <span class="token operator">+</span> fileNamePath<span class="token punctuation">;</span>
<span class="token keyword">const</span> myModual <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>import()函数</strong></p>
<p>import()函数在 <a href="https://link.zhihu.com/?target=https%3A//github.com/tc39/proposal-dynamic-import" target="_blank" rel="noopener noreferrer">ES2020 提案<ExternalLinkIcon/></a> 中被引入，用以支持动态加载模块。</p>
<blockquote>
<p>import(from)</p>
</blockquote>
<ul>
<li>import 函数的参数 from，即加载的模块的位置。</li>
<li>import 命令能够接受什么参数，import()函数就能接受什么参数，两者区别主要是后者为动态加载。</li>
<li>import()返回一个 <strong>Promise 对象</strong>；</li>
</ul>
<p><strong>特点</strong></p>
<ul>
<li>import()函数可以用在任何地方，模块，非模块的脚本都可以使用；</li>
<li>运行时执行（什么时候运行到这一句，就会加载指定的模块）；</li>
<li>import()函数与所加载的模块不是静态连接关系，与 import 语句完全不同；</li>
<li>import()更像 require 方法，主要区别是 import()是异步加载，require 是同步加载；</li>
</ul>
<h2 id="三、es-modules-如何工作" tabindex="-1"><a class="header-anchor" href="#三、es-modules-如何工作" aria-hidden="true">#</a> 三、ES Modules 如何工作</h2>
<p>当前，在浏览器中通过</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">"module"</span><span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>已原生支持 ESM。以 vite 创建的 Vue3 项目为例：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token comment">&lt;!-- index.html文件 --></span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>en<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>icon<span class="token punctuation">"</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>favicon.png<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>xxxx<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>module<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>/src/main.ts<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中/src/main.ts 是 Vue3 的入口文件。</p>
<blockquote>
<p>注意：浏览器中 ES Module 是异步加载，不会堵塞浏览器，即等到整个页面渲染完，再执行模块脚本。如果网页有多个 ESM，它们会按照在页面出现的顺序依次执行。</p>
</blockquote>
<h3 id="流程简析" tabindex="-1"><a class="header-anchor" href="#流程简析" aria-hidden="true">#</a> 流程简析</h3>
<ol>
<li>创建 AST 当使用 ES Modules 进行开发时，实际上以入口节点为根节点（如 main.js）创建出一张依赖关系图。不同依赖项之间通过 export\import 语句来进行关联。</li>
</ol>
<p><img src="https://pic4.zhimg.com/80/v2-6efffd77227016841383de16cc8b1437_720w.jpg" alt="image" loading="lazy"></p>
<ol start="2">
<li>生成 Module Record</li>
</ol>
<p>浏览器无法直接使用文件本身，但是浏览器会解析这些文件，根据 import/export 语句构成模块记录(Module Record)，每个模块文件对应生成一个 Module Record，记录当前模块的信息：</p>
<p><img src="https://pic3.zhimg.com/80/v2-aeb587290243ca500263c0bf9bb79f42_720w.jpg" alt="image" loading="lazy"></p>
<ol start="3">
<li>转化 Module Instance</li>
</ol>
<p>模块记录转化为模块实例，浏览器最终能够读取也就是 Module Instance。</p>
<h2 id="四、模块加载" tabindex="-1"><a class="header-anchor" href="#四、模块加载" aria-hidden="true">#</a> 四、模块加载</h2>
<p>模块加载的过程就是从入口文件到拥有一个完整的模块实例图的过程，对于 ES Module 来说，分三步进行：</p>
<ol>
<li>构造：查找、下载并解析所有文件到模块记录中。</li>
<li>实例化：在内存中寻找一块区域来存储所有导出的变量（但还没有填充值）。然后让 export 和 import 都指向这些内存块。这个过程叫做链接（linking）</li>
<li>求值：在内存块中填入变量的实际值。</li>
</ol>
<p><img src="https://pic1.zhimg.com/80/v2-5bccb2202555e33b1ac5c1fa82960988_720w.jpg" alt="image" loading="lazy"></p>
<h3 id="_1、构造" tabindex="-1"><a class="header-anchor" href="#_1、构造" aria-hidden="true">#</a> 1、构造</h3>
<p>在构造阶段，每个模块都会经历三件事情：</p>
<ul>
<li>查找：找出从哪里下载包含该模块的文件（也称为模块解析）；</li>
</ul>
<blockquote>
<p>通常会有一个入口文件，然后通过 import 代码去寻找与之关联的其他模块，形成一个依赖关系树（AST）；</p>
</blockquote>
<ul>
<li>下载：获取文件（从 URL 下载或从文件系统加载）；</li>
</ul>
<blockquote>
<p>解析文件前，需要一层一层地遍历树，找出它的依赖项，然后找到并加载这些依赖项；</p>
</blockquote>
<ul>
<li>解析：将文件解析为模块记录；</li>
</ul>
<blockquote>
<p>把解析出来的模块构成表 称为 Module Record（模块记录）。
Module Record 包含了当前模块的 AST，引用了哪些模块的变量，以及一些特定属性和方法。 一旦
Module Record 被创建，它会被记录在模块映射 Module Map 中。被记录后，如果再有对相同 URL 的请求，Loader 将直接采用 Module Map 中 URL 对应的 Module Record。</p>
</blockquote>
<p>在构造过程结束时，从主入口文件变成了一堆模块记录 Module Record：</p>
<p><img src="https://pic2.zhimg.com/80/v2-9f331c9b295a471d14cc1adfbdf27b7d_720w.jpg" alt="image" loading="lazy"></p>
<h3 id="_2、实例化" tabindex="-1"><a class="header-anchor" href="#_2、实例化" aria-hidden="true">#</a> 2、实例化</h3>
<p>实例化阶段：将构造的模块实例化并将所有实例链接在一起。</p>
<p>模块实例包含两部分：<strong>代码</strong>、<strong>状态</strong>。</p>
<p>状态存在于内存中，因此实例化步骤就是写入内存。</p>
<p>首先，JS 引擎创建一个模块环境记录(Module Enviroment Record)来管理 Module Record 的变量。然后它在内存中找到所有导出内容对应的位置。模块环境记录将跟踪内存中导出内容对应的位置与导出内容间的联系。</p>
<p>此时内存中的这些位置中还不会存放值，只有在计算后才会有值。</p>
<blockquote>
<p>注意，导出和导入都指向内存中的同一位置。首先链接导出，可确保所有导入都可以链接到匹配的导出。
ES Module 的这种连接方式被称为 Live Bindings（动态绑定）;
ES 模块使用称为动态绑定的东西。两个模块都指向内存中的相同位置。这意味着当导出模块更改值时，该更改将显示在导入模块中。导出值的模块可以随时更改这些值，但导入模块不能更改其导入的值，虽然有此限制，但是如果一个模块导入一个对象，导入模块中可以更改该对象上的属性值。</p>
</blockquote>
<p><img src="https://pic2.zhimg.com/80/v2-143dbd0fed7919252da26fc2a7de3cb9_720w.jpg" alt="image" loading="lazy"></p>
<p>拥有这样的动态绑定可以使我们在不运行任何代码的情况下连接所有模块。</p>
<p>实例化结束时，已经连接了 export/import 变量的所有实例和内存位置。</p>
<h3 id="_3、求值" tabindex="-1"><a class="header-anchor" href="#_3、求值" aria-hidden="true">#</a> 3、求值</h3>
<p>最后一步，在内存区中填充绑定的数据的值。</p>
<p>JS 引擎通过执行顶层代码（函数之外的代码，此处可以理解为模块文件中顶层作用域中的代码）来给内存区的引用赋值。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2>
<p><img src="https://pic2.zhimg.com/80/v2-92f95553f64204f299e36383844b17d5_720w.jpg" alt="image" loading="lazy"></p>
<ul>
<li>ES Module 执行分为两个阶段：构造阶段、实例化阶段、求值阶段</li>
<li>构造阶段:</li>
</ul>
<blockquote>
<p>1、根据入口创建依赖关系的 AST;
2、下载 module 文件，用于解析；
3、解析每个 module 文件，生成 Module Record（包含当前 module 的 AST、变量等）；
4、将 Module Record 映射到 Module Map 中，保持每个 module 文件的唯一性；</p>
</blockquote>
<p>构造阶段最后生成根据依赖关系 AST 的 Module Record 的依赖树，同时将每个 Module Record 映射保存到 Module Map 中。</p>
<ul>
<li>实例化阶段：</li>
</ul>
<blockquote>
<p>1、生成模每个 Module Record 的块环境记录(Module Enviroment Record)，用来管理 Module Record
的变量等;
2、在内存中写入每个 Module 的数据，同时 Module 文件的导出 export 和引用文件的 import 指向该地址；</p>
</blockquote>
<p>实例化阶段确定了 export 和 import 内存中的指向，同时该内存空间中定义了 Module 文件的变量（但是还未赋值）；</p>
<ul>
<li>求值阶段：</li>
</ul>
<blockquote>
<p>执行对应 Module 文件中顶层作用域的代码，确定实例化阶段中定义变量的值，放入内存中；</p>
</blockquote>
<p>求值阶段确定了 Module 文件中变量的值，由于 ES Module 使用的是动态绑定（指向内存地址），export 中修改数据会映射到内存中，import 数据相应也会改变。</p>
<h2 id="参考文章" tabindex="-1"><a class="header-anchor" href="#参考文章" aria-hidden="true">#</a> 参考文章</h2>
<ul>
<li><a href="https://es6.ruanyifeng.com/#docs/module" target="_blank" rel="noopener noreferrer">ECMAScript6 入门—ES Module<ExternalLinkIcon/></a></li>
<li><a href="https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/" target="_blank" rel="noopener noreferrer">ES modules: A cartoon deep-dive<ExternalLinkIcon/></a></li>
</ul>
</div></template>

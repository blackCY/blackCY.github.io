<template><div><p>只有理解了 JavaScrip 的执行上下文，你才能更好地理解 JavaScript 语言本身</p>
<p>所谓的变量提升，是指在 JavaScript 代码执行过程中，JavaScript 引擎把变量的声明部分和函数的声明部分提升到代码开头的“行为”。变量被提升后，会给变量设置默认值，这个默认值就是我们熟悉的 undefined。</p>
<p>可以在定义之前使用变量或者函数的原因：函数和变量在执行之前都提升到了代码开头。</p>
<blockquote>
<p>实际上变量和函数声明在代码里的位置是不会改变的，而且是在编译阶段被 JavaScript 引擎放入内存中。</p>
</blockquote>
<blockquote>
<p>一段 JavaScript 代码在执行之前需要被 JavaScript 引擎编译，编译完成之后，才会进入执行阶段。大致流程你可以参考下图：</p>
</blockquote>
<p><img src="/images/browser/JavaScript的执行流程图.webp" alt="Image" loading="lazy"></p>
<h3 id="编译阶段" tabindex="-1"><a class="header-anchor" href="#编译阶段" aria-hidden="true">#</a> 编译阶段</h3>
<p>那么编译阶段和变量提升存在什么关系呢？</p>
<p>第一部分：变量提升部分的代码。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> myname <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">showName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'函数showName被执行'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二部分：执行部分的代码。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">showName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myname<span class="token punctuation">)</span><span class="token punctuation">;</span>
myname <span class="token operator">=</span> <span class="token string">'极客时间'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>把 JavaScript 的执行流程细化，如下图所示：</p>
<p><img src="/images/browser/JavaScript执行流程细化图.webp" alt="" loading="lazy"></p>
<p>从上图可以看出，输入一段代码，经过编译后，会生成两部分内容：<strong>执行上下文（Execution context）</strong> 和 <strong>可执行代码</strong>。</p>
<blockquote>
<p>执行上下文是 JavaScript 执行一段代码时的运行环境，比如调用一个函数，就会进入这个函数的执行上下文，确定该函数在执行期间用到的诸如 this、变量、对象以及函数等。</p>
</blockquote>
<p>关于执行上下文的细节，会在文章《<a href="#%E8%B0%83%E7%94%A8%E6%A0%88%EF%BC%9A%E4%B8%BA%E4%BB%80%E4%B9%88JavaScript%E4%BB%A3%E7%A0%81%E4%BC%9A%E5%87%BA%E7%8E%B0%E6%A0%88%E6%BA%A2%E5%87%BA%EF%BC%9F">调用栈：为什么 JavaScript 代码会出现栈溢出？</a>》做详细介绍，现在你只需要知道，<strong>在执行上下文中存在一个变量环境的对象（Viriable Environment）</strong>，该对象中保存了变量提升的内容，比如上面代码中的变量 myname 和函数 showName，都保存在该对象中。</p>
<p>你可以简单地把变量环境对象看成是如下结构：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">VariableEnvironment</span><span class="token operator">:</span>
  myname <span class="token operator">-</span><span class="token operator">></span> <span class="token keyword">undefined</span><span class="token punctuation">,</span>
  showName <span class="token operator">-</span><span class="token operator">></span><span class="token keyword">function</span> <span class="token operator">:</span> <span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myname<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>了解完变量环境对象的结构后，接下来，我们再结合下面这段代码来分析下是如何生成变量环境对象的。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">showName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myname<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> myname <span class="token operator">=</span> <span class="token string">'极客时间'</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">showName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'函数showName被执行'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>第 1 行和第 2 行，由于这两行代码不是声明操作，所以 JavaScript 引擎不会做任何处理；</li>
<li>第 3 行，由于这行是经过 var 声明的，因此 JavaScript 引擎将在环境对象中创建一个名为 myname 的属性，并使用 undefined 对其初始化；</li>
<li>第 4 行，JavaScript 引擎发现了一个通过 function 定义的函数，所以它将函数定义存储到堆 (HEAP）中，并在环境对象中创建一个 showName 的属性，然后将该属性值指向堆中函数的位置（不了解堆也没关系，JavaScript 的执行堆和执行栈会在后续文章中介绍）。</li>
</ul>
<p>这样就<strong>生成了变量环境对象。接下来 JavaScript 引擎会把声明以外的代码编译为字节码</strong>，至于字节码的细节，我也会在后面文章中做详细介绍，你可以类比如下的模拟代码：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token function">showName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myname<span class="token punctuation">)</span><span class="token punctuation">;</span>
myname <span class="token operator">=</span> <span class="token string">'极客时间'</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="执行阶段" tabindex="-1"><a class="header-anchor" href="#执行阶段" aria-hidden="true">#</a> 执行阶段</h3>
<p>JavaScript 引擎开始执行“可执行代码”，按照顺序一行一行地执行。下面我们就来一行一行分析下这个执行过程：</p>
<ul>
<li>当执行到 showName 函数时，JavaScript 引擎便开始在变量环境对象中查找该函数，由于变量环境对象中存在该函数的引用，所以 JavaScript 引擎便开始执行该函数，并输出“函数 showName 被执行”结果。</li>
<li>接下来打印“myname”信息，JavaScript 引擎继续在变量环境对象中查找该对象，由于变量环境存在 myname 变量，并且其值为 undefined，所以这时候就输出 undefined。</li>
<li>接下来执行第 3 行，把“极客时间”赋给 myname 变量，赋值后变量环境中的 myname 属性值改变为“极客时间”，变量环境如下所示：</li>
</ul>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token literal-property property">VariableEnvironment</span><span class="token operator">:</span>
  myname <span class="token operator">-</span><span class="token operator">></span> <span class="token string">"极客时间"</span><span class="token punctuation">,</span>
  showName <span class="token operator">-</span><span class="token operator">></span><span class="token keyword">function</span> <span class="token operator">:</span> <span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myname<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>好了，以上就是一段代码的编译和执行流程。实际上，编译阶段和执行阶段都是非常复杂的，包括了词法分析、语法解析、代码优化、代码生成等，这些内容会在《<a href="#%E7%BC%96%E8%AF%91%E5%99%A8%E5%92%8C%E8%A7%A3%E9%87%8A%E5%99%A8%EF%BC%9AV8%E6%98%AF%E5%A6%82%E4%BD%95%E6%89%A7%E8%A1%8C%E4%B8%80%E6%AE%B5JavaScript%E4%BB%A3%E7%A0%81%E7%9A%84%EF%BC%9F">编译器和解释器：V8 是如何执行一段 JavaScript 代码的？</a>》那节详细介绍，在本篇文章中你只需要知道 JavaScript 代码经过编译生成了什么内容就可以了。</p>
<h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h3>
<ul>
<li>JavaScript 代码执行过程中，需要先做变量提升，而<strong>之所以需要实现变量提升，是因为 JavaScript 代码在执行之前需要先编译。</strong></li>
<li>在编译阶段，变量和函数会被存放到变量环境中，变量的默认值会被设置为 undefined；在代码执行阶段，JavaScript 引擎会从变量环境中去查找自定义的变量和函数。</li>
<li>如果在编译阶段，存在两个相同的函数，那么最终存放在变量环境中的是最后定义的那个，这是因为后定义的会覆盖掉之前定义的。</li>
</ul>
<h2 id="调用栈-为什么-javascript-代码会出现栈溢出" tabindex="-1"><a class="header-anchor" href="#调用栈-为什么-javascript-代码会出现栈溢出" aria-hidden="true">#</a> 调用栈：为什么 JavaScript 代码会出现栈溢出？</h2>
<p>在上篇文章中，我们讲到了，当一段代码被执行时，JavaScript 引擎先会对其进行编译，并创建执行上下文。但是并没有明确说明到底什么样的代码才算符合规范。</p>
<p>那么接下来我们就来明确下，哪些情况下代码才算是“一段”代码，才会在执行之前就进行编译并创建执行上下文。一般说来，有这么三种情况：</p>
<ul>
<li>当 JavaScript 执行全局代码的时候，会编译全局代码并创建全局执行上下文，而且在整个页面的生存周期内，全局执行上下文只有一份。</li>
<li>当调用一个函数的时候，函数体内的代码会被编译，并创建函数执行上下文，一般情况下，函数执行结束之后，创建的函数执行上下文会被销毁。</li>
<li>当使用 eval 函数的时候，eval 的代码也会被编译，并创建执行上下文。</li>
</ul>
<p>学习调用栈至少有以下三点好处：</p>
<ul>
<li>可以帮助你了解 JavaScript 引擎背后的工作原理；</li>
<li>让你有调试 JavaScript 代码的能力；</li>
<li>帮助你搞定面试，因为面试过程中，调用栈也是出境率非常高的题目。</li>
</ul>
<p><strong>调用栈就是用来管理函数调用关系的一种数据结构。<strong>因此要讲清楚调用栈，你还要先弄明白</strong>函数调用</strong>和<strong>栈结构</strong>。</p>
<h3 id="什么是函数调用" tabindex="-1"><a class="header-anchor" href="#什么是函数调用" aria-hidden="true">#</a> 什么是函数调用</h3>
</div></template>

<template><div><h2 id="调用栈-为什么-javascript-代码会出现栈溢出" tabindex="-1"><a class="header-anchor" href="#调用栈-为什么-javascript-代码会出现栈溢出" aria-hidden="true">#</a> 调用栈：为什么 JavaScript 代码会出现栈溢出？</h2>
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
<p>函数调用就是运行一个函数</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> b <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> b<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在执行到函数 add() 之前，JavaScript 引擎会为上面这段代码创建全局执行上下文，包含了声明的函数和变量，你可以参考下图：</p>
<p><img src="/images/javascript/execute/全局执行上下文.webp" alt="Image" loading="lazy"></p>
<p>从图中可以看出，代码中全局变量和函数都保存在全局上下文的变量环境中。</p>
<p>执行上下文准备好之后，便开始执行全局代码，当执行到 add 这儿时，JavaScript 判断这是一个函数调用，那么将执行以下操作：</p>
<ul>
<li>首先，从全局执行上下文中，取出 add 函数代码。</li>
<li>其次，对 add 函数的这段代码进行编译，并创建该函数的执行上下文和可执行代码。</li>
<li>最后，执行代码，输出结果。</li>
</ul>
<p>完整流程你可以参考下图：</p>
<p><img src="/images/javascript/execute/函数调用过程.webp" alt="image" loading="lazy"></p>
<p>就这样，当执行到 add 函数的时候，我们就有了两个执行上下文了——全局执行上下文和 add 函数的执行上下文。</p>
<p>也就是说在执行 JavaScript 时，可能会存在多个执行上下文，那么 JavaScript 引擎是如何管理这些执行上下文的呢？</p>
<p>答案是<strong>通过一种叫栈的数据结构来管理的</strong>。那什么是栈呢？它又是如何管理这些执行上下文呢？</p>
<h3 id="什么是-javascript-的调用栈" tabindex="-1"><a class="header-anchor" href="#什么是-javascript-的调用栈" aria-hidden="true">#</a> 什么是 JavaScript 的调用栈</h3>
<blockquote>
<p>在执行上下文创建好后，JavaScript 引擎会将执行上下文压入栈中，通常把这种用来管理执行上下文的栈称为执行上下文栈，又称调用栈。</p>
</blockquote>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">return</span> b <span class="token operator">+</span> c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">addAll</span><span class="token punctuation">(</span><span class="token parameter">b<span class="token punctuation">,</span> c</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> d <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
  result <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> c<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> a <span class="token operator">+</span> result <span class="token operator">+</span> d<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">addAll</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**第一步，创建全局上下文，并将其压入栈底。**如下图所示：</p>
<p><img src="/images/javascript/execute/全局执行上下文压栈.webp" alt="image" loading="lazy"></p>
<blockquote>
<p>全局执行上下文压入到调用栈后，JavaScript 引擎便开始执行全局代码了。</p>
</blockquote>
<p>首先会执行 a=2 的赋值操作，执行该语句会将全局上下文变量环境中 a 的值设置为 2。设置后的全局上下文的状态如下图所示：</p>
<p><img src="/images/javascript/execute/赋值操作改变执行上下文中的值.webp" alt="image" loading="lazy"></p>
<p>**第二步是调用 addAll 函数。**当调用该函数时，JavaScript 引擎会编译该函数，并为其创建一个执行上下文，最后还将该函数的执行上下文压入栈中，如下图所示：</p>
<p><img src="/images/javascript/execute/执行addAll函数时的调用栈.webp" alt="image" loading="lazy"></p>
<p>addAll <strong>函数的执行上下文创建好之后，便进入了函数代码的执行阶段了</strong>，这里先执行的是 d=10 的赋值操作，执行语句会将 addAll 函数执行上下文中的 d 由 undefined 变成了 10。</p>
<p>然后接着往下执行，第三步，当执行到 add 函数调用语句时，同样会为其创建执行上下文，并将其压入调用栈，如下图所示：</p>
<p><img src="/images/javascript/execute/执行add函数时的调用栈.webp" alt="image" loading="lazy"></p>
<p>当 add 函数返回时，该函数的执行上下文就会从栈顶弹出，并将 result 的值设置为 add 函数的返回值，也就是 9。如下图所示：</p>
<p><img src="/images/javascript/execute/add函数执行结束时的调用栈.webp" alt="image" loading="lazy"></p>
<p>紧接着 addAll 执行最后一个相加操作后并返回，addAll 的执行上下文也会从栈顶部弹出，此时调用栈中就只剩下全局上下文了。最终如下图所示：</p>
<p><img src="/images/javascript/execute/addAll函数执行结束时的调用栈.webp" alt="image" loading="lazy"></p>
<p>至此，整个 JavaScript 流程执行结束了。</p>
<p>好了，现在你应该知道了<strong>调用栈是 JavaScript 引擎追踪函数执行的一个机制</strong>，当<strong>一次有多个函数被调用时，通过调用栈就能够追踪到哪个函数正在被执行以及各函数之间的调用关系</strong>。</p>
<h3 id="在开发中-如何利用好调用栈" tabindex="-1"><a class="header-anchor" href="#在开发中-如何利用好调用栈" aria-hidden="true">#</a> 在开发中，如何利用好调用栈</h3>
<p>鉴于调用栈的重要性和实用性，那么接下来我们就一起来看看在实际工作中，应该如何查看和利用好调用栈。</p>
<ol>
<li>如何利用浏览器查看调用栈的信息</li>
</ol>
<p>当你执行一段复杂的代码时，你可能很难从代码文件中分析其调用关系，这时候你可以在你想要查看的函数中加入断点，然后当执行到该函数时，就可以查看该函数的调用栈了。</p>
<p><img src="/images/javascript/execute/查看函数调用关系.webp" alt="image" loading="lazy"></p>
<p>从图中可以看出，右边的“call stack”下面显示出来了函数的调用关系：栈的最底部是 anonymous，也就是全局的函数入口；中间是 addAll 函数；顶部是 add 函数。这就清晰地反映了函数的调用关系，所以在分析复杂结构代码，或者检查 Bug 时，调用栈都是非常有用的。</p>
<p>除了通过断点来查看调用栈，你还可以使用 console.trace() 来输出当前的函数调用关系，比如在示例代码中的 add 函数里面加上了 console.trace()，你就可以看到控制台输出的结果，如下图：</p>
<p><img src="/images/javascript/execute/使用trace函数输出当前调用栈信息.webp" alt="image" loading="lazy"></p>
<ol start="2">
<li>栈溢出（Stack Overflow）</li>
</ol>
<p>现在你知道了调用栈是一种用来管理执行上下文的数据结构，符合后进先出的规则。不过还有一点你要注意，<strong>调用栈是有大小的</strong>，当入栈的执行上下文超过一定数目，JavaScript 引擎就会报错，我们把这种错误叫做<strong>栈溢出</strong>。</p>
<blockquote>
<p>当 JavaScript 引擎开始执行这段代码时，它首先调用函数 division，并创建执行上下文，压入栈中；然而，这个函数是递归的，并且没有任何终止条件，所以它会一直创建新的函数执行上下文，并反复将其压入栈中，但栈是有容量限制的，超过最大数量后就会出现栈溢出的错误。</p>
</blockquote>
<blockquote>
<p>理解了栈溢出原因后，你就可以使用一些方法来避免或者解决栈溢出的问题，比如把递归调用的形式改造成其他形式，或者使用加入定时器的方法来把当前任务拆分为其他很多小任务。</p>
</blockquote>
</div></template>

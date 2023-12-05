<template><div><p>对于前端开发者来说，JavaScript 的内存机制是一个不被经常提及的概念 ，因此很容易被忽视。特别是一些非计算机专业的同学，对内存机制可能没有非常清晰的认识，甚至有些同学根本就不知道 JavaScript 的内存机制是什么。</p>
<p>但是如果你想成为行业专家，并打造高性能前端应用，那么你就必须要搞清楚 JavaScript 的内存机制了。</p>
<p>其实，要搞清楚 JavaScript 的内存机制并不是一件很困难的事，在接下来的三篇文章（数据在内存中的存放、JavaScript 处理垃圾回收以及 V8 执行代码）中，我们将通过内存机制的介绍，循序渐进带你走进 JavaScript 内存的世界。</p>
<p>今天我们讲述第一部分的内容——JavaScript 中的数据是如何存储在内存中的。虽然 <strong>JavaScript 并不需要直接去管理内存</strong>，但是在实际项目中为了能避开一些不必要的坑，你还是需要了解数据在内存中的存储方式的。</p>
<h2 id="让人疑惑的代码" tabindex="-1"><a class="header-anchor" href="#让人疑惑的代码" aria-hidden="true">#</a> 让人疑惑的代码</h2>
<p>首先，我们先看下面这两段代码：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> b <span class="token operator">=</span> a<span class="token punctuation">;</span>
  a <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'极客时间'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> b <span class="token operator">=</span> a<span class="token punctuation">;</span>
  a<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">'极客邦'</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你会发现，仅仅改变了 a 中 name 的属性值，但是最终 a 和 b 打印出来的值都是{name:&quot;极客邦&quot;}。这就和我们预期的不一致了，因为我们想改变的仅仅是 a 的内容，但 b 的内容也同时被改变了。</p>
<p>要彻底弄清楚这个问题，我们就得先从“JavaScript 是什么类型的语言”讲起。</p>
<h2 id="javascript-是什么类型的语言" tabindex="-1"><a class="header-anchor" href="#javascript-是什么类型的语言" aria-hidden="true">#</a> JavaScript 是什么类型的语言</h2>
<p>每种编程语言都具有内建的数据类型，但它们的数据类型常有不同之处，使用方式也很不一样，比如 C 语言在定义变量之前，就需要确定变量的类型，你可以看下面这段 C 代码：</p>
<div class="language-c++ ext-c++ line-numbers-mode"><pre v-pre class="language-c++"><code>int main()
{
  int a = 1;
  char* b = &quot;极客时间&quot;;
  bool c = true;
  return 0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述代码声明变量的特点是：<strong>在声明变量之前需要先定义变量类型。我们把这种在使用之前就需要确认其变量数据类型的称为静态语言。</strong></p>
<p><strong>相反地，我们把在运行过程中需要检查数据类型的语言称为动态语言。</strong></p>
<p>比如我们所讲的 JavaScript 就是动态语言，因为在声明变量之前并不需要确认其数据类型。</p>
<p>虽然 C 语言是静态，但是在 C 语言中，我们可以把其他类型数据赋予给一个声明好的变量，如：</p>
<div class="language-c++ ext-c++ line-numbers-mode"><pre v-pre class="language-c++"><code>c = a
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>前面代码中，我们把 int 型的变量 a 赋值给了 bool 型的变量 c，这段代码也是可以编译执行的，因为在赋值过程中，C 编译器会把 int 型的变量悄悄转换为 bool 型的变量，我们通常把这种偷偷转换的操作称为<strong>隐式类型转换</strong>。而<strong>支持隐式类型转换的语言称为弱类型语言，不支持隐式类型转换的语言称为强类型语言</strong>。在这点上，<strong>C 和 JavaScript 都是弱类型语言</strong>。</p>
<p>对于各种语言的类型，你可以参考下图：</p>
<p><img src="/images/browser/语言类型图.webp" alt="image" loading="lazy"></p>
<h2 id="内存空间" tabindex="-1"><a class="header-anchor" href="#内存空间" aria-hidden="true">#</a> 内存空间</h2>
<p>要理解 JavaScript 在运行过程中数据是如何存储的，你就得先搞清楚其存储空间的种类。下面是 JavaScript 的内存模型，你可以参考下：</p>
<p><img src="/images/browser/JavaScript内存模型.webp" alt="image" loading="lazy"></p>
<p>从图中可以看出， 在 JavaScript 的执行过程中， 主要有三种类型内存空间，分别是代码空间、栈空间和堆空间。</p>
<p>其中的代码空间主要是存储可执行代码的，这个我们后面再做介绍，今天主要来说说栈空间和堆空间。</p>
<h3 id="栈空间和堆空间" tabindex="-1"><a class="header-anchor" href="#栈空间和堆空间" aria-hidden="true">#</a> 栈空间和堆空间</h3>
<p>这里的栈空间就是我们之前反复提及的调用栈，是用来存储执行上下文的。为了搞清楚栈空间是如何存储数据的，我们还是先看下面这段代码：</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token string">'极客时间'</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> b <span class="token operator">=</span> a<span class="token punctuation">;</span>
  <span class="token keyword">var</span> c <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'极客时间'</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> d <span class="token operator">=</span> c<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>前面文章我们已经讲解过了，当执行一段代码时，需要先编译，并创建执行上下文，然后再按照顺序执行代码。那么下面我们来看看，当执行到第 3 行代码时，其调用栈的状态，你可以参考下面这张调用栈状态图：</p>
<p><img src="/images/browser/执行到第3行时的调用栈状态图.webp" alt="image" loading="lazy"></p>
<p>接下来继续执行第 4 行代码，由于 JavaScript 引擎判断右边的值是一个引用类型，这时候处理的情况就不一样了，<strong>JavaScript 引擎并不是直接将该对象存放到变量环境中，而是将它分配到堆空间里面，分配后该对象会有一个在“堆”中的地址</strong>，然后再将该数据的地址写进 c 的变量值，最终分配好内存的示意图如下所示：</p>
<p><img src="/images/browser/对象类型是“堆”来存储.webp" alt="image" loading="lazy"></p>
<p>从上图你可以清晰地观察到，<strong>对象类型是存放在堆空间的，在栈空间中只是保留了对象的引用地址，当 JavaScript 需要访问该数据的时候，是通过栈中的引用地址来访问的，相当于多了一道转手流程。</strong></p>
<p>好了，现在你应该知道了<strong>原始类型的数据值都是直接保存在“栈”中的，引用类型的值是存放在“堆”中的</strong>。不过你也许会好奇，<strong>为什么一定要分“堆”和“栈”两个存储空间呢？所有数据直接存放在“栈”中不就可以了吗？</strong></p>
<p>答案是不可以的。</p>
<blockquote>
<p>这是因为 JavaScript 引擎需要用栈来维护程序执行期间上下文的状态，如果栈空间大了话，所有的数据都存放在栈空间里面，那么会影响到上下文切换的效率，进而又影响到整个程序的执行效率。比如文中的 foo 函数执行结束了，JavaScript 引擎需要离开当前的执行上下文，只需要将指针下移到上个执行上下文的地址就可以了，foo 函数执行上下文栈区空间全部回收，具体过程你可以参考下图：</p>
</blockquote>
<p><img src="/images/browser/调用栈中切换执行上下文状态.webp" alt="image" loading="lazy"></p>
<p>所以通常情况下，<strong>栈空间都不会设置太大，主要用来存放一些原始类型的小数据</strong>。而引用类型的数据占用的空间都比较大，所以这一类数据会被存放到堆中，<strong>堆空间很大，能存放很多大的数据，不过缺点是分配内存和回收内存都会占用一定的时间。</strong></p>
<p>解释了程序在执行过程中为什么需要堆和栈两种数据结构后，我们还是回到示例代码那里，看看它最后一步将变量 c 赋值给变量 d 是怎么执行的？</p>
<blockquote>
<p>在 JavaScript 中，赋值操作和其他语言有很大的不同，原始类型的赋值会完整复制变量值，而引用类型的赋值是复制引用地址。</p>
</blockquote>
<p>所以 d=c 的操作就是把 c 的引用地址赋值给 d，你可以参考下图：</p>
<p><img src="/images/browser/引用赋值.webp" alt="image" loading="lazy"></p>
<p>从图中你可以看到，变量 c 和变量 d 都指向了同一个堆中的对象，所以这就很好地解释了文章开头的那个问题，通过 c 修改 name 的值，变量 d 的值也跟着改变，归根结底它们是同一个对象。</p>
<h2 id="再谈闭包" tabindex="-1"><a class="header-anchor" href="#再谈闭包" aria-hidden="true">#</a> 再谈闭包</h2>
<p>现在你知道了作用域内的原始类型数据会被存储到栈空间，引用类型会被存储到堆空间，基于这两点的认知，我们再深入一步，探讨下闭包的内存模型。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> myName <span class="token operator">=</span> <span class="token string">'极客时间'</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> test1 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> test2 <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> innerBar <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">setName</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">newName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      myName <span class="token operator">=</span> newName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">getName</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>test1<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> myName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> innerBar<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> bar <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bar<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">'极客邦'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bar<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bar<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当执行这段代码的时候，你应该有过这样的分析：由于变量 myName、test1、test2 都是原始类型数据，所以在执行 foo 函数的时候，它们会被压入到调用栈中；当 foo 函数执行结束之后，调用栈中 foo 函数的执行上下文会被销毁(即当前执行状态的指针下移到栈中的全局执行上下文的位置)，其内部变量 myName、test1、test2 也应该一同被销毁。</p>
<p>但是当 foo 函数的执行上下文销毁时，由于 foo 函数产生了闭包，所以变量 myName 和 test1 并没有被销毁，而是保存在内存中，那么应该如何解释这个现象呢？</p>
<p>要解释这个现象，我们就得站在内存模型的角度来分析这段代码的执行流程。</p>
<ol>
<li>当 JavaScript 引擎执行到 foo 函数时，首先会编译，并创建一个空执行上下文。</li>
<li>在编译过程中，遇到内部函数 setName，JavaScript 引擎还要对内部函数做一次快速的词法扫描，发现该内部函数引用了 foo 函数中的 myName 变量，由于是内部函数引用了外部函数的变量，所以 JavaScript 引擎判断这是一个闭包，于是在堆空间创建换一个“closure(foo)”的对象（这是一个内部对象，JavaScript 是无法访问的），用来保存 myName 变量。</li>
<li>接着继续扫描到 getName 方法时，发现该函数内部还引用变量 test1，于是 JavaScript 引擎又将 test1 添加到“closure(foo)”对象中。这时候堆中的“closure(foo)”对象中就包含了 myName 和 test1 两个变量了。</li>
<li>由于 test2 并没有被内部函数引用，所以 test2 依然保存在调用栈中。</li>
</ol>
<p>通过上面的分析，我们可以画出执行到 foo 函数中“return innerBar”语句时的调用栈状态，如下图所示：</p>
<p><img src="/images/browser/闭包的产生过程.webp" alt="image" loading="lazy"></p>
<p>从上图你可以清晰地看出，当执行到 foo 函数时，闭包就产生了；当 foo 函数执行结束之后，返回的 getName 和 setName 方法都引用“closure(foo)”对象，所以即使 foo 函数退出了，“ closure(foo)”依然被其内部的 getName 和 setName 方法引用。所以在下次调用 bar.setName 或者 bar.getName 时，创建的执行上下文中就包含了“closure(foo)”。</p>
<blockquote>
<p>总的来说，产生闭包的核心有两步：</p>
</blockquote>
<ul>
<li>第一步是需要预扫描内部函数；</li>
<li>第二步是把内部函数引用的外部变量保存到堆中。</li>
</ul>
</div></template>

import{_ as o,r as c,o as i,c as l,a,b as t,w as e,d as n,e as p}from"./app.98155842.js";var u="/images/javascript/execute/\u5E26\u6709\u5916\u90E8\u5F15\u7528\u7684\u8C03\u7528\u6808\u793A\u610F\u56FE.webp",r="/images/javascript/execute/\u8BCD\u6CD5\u4F5C\u7528\u57DF.webp",k="/images/javascript/execute/\u5757\u7EA7\u4F5C\u7528\u57DF\u4E2D\u662F\u5982\u4F55\u67E5\u627E\u53D8\u91CF\u7684.webp",d="/images/javascript/execute/\u6267\u884C\u5230return_bar\u65F6\u5019\u7684\u8C03\u7528\u6808.webp",m="/images/javascript/execute/\u95ED\u5305\u7684\u4EA7\u751F\u8FC7\u7A0B.webp",v="/images/javascript/execute/\u6267\u884Cbar\u65F6\u8C03\u7528\u6808\u72B6\u6001.webp",b="/images/javascript/execute/\u5F00\u53D1\u8005\u5DE5\u5177\u4E2D\u7684\u95ED\u5305\u5C55\u793A.webp";const g={},f=n("\u5728"),_=n("\u4E0A\u4E00\u7BC7\u6587\u7AE0"),h=n("\u4E2D\u6211\u4EEC\u8BB2\u5230\u4E86\u4EC0\u4E48\u662F\u4F5C\u7528\u57DF\uFF0C\u4EE5\u53CA ES6 \u662F\u5982\u4F55\u901A\u8FC7\u53D8\u91CF\u73AF\u5883\u548C\u8BCD\u6CD5\u73AF\u5883\u6765\u540C\u65F6\u652F\u6301\u53D8\u91CF\u63D0\u5347\u548C\u5757\u7EA7\u4F5C\u7528\u57DF\uFF0C\u5728\u6700\u540E\u6211\u4EEC\u4E5F\u63D0\u5230\u4E86\u5982\u4F55\u901A\u8FC7\u8BCD\u6CD5\u73AF\u5883\u548C\u53D8\u91CF\u73AF\u5883\u6765\u67E5\u627E\u53D8\u91CF\uFF0C\u8FD9\u5176\u4E2D\u5C31\u6D89\u53CA\u5230\u4F5C\u7528\u57DF\u94FE\u7684\u6982\u5FF5\u3002"),y=p(`<blockquote><p>\u7406\u89E3\u4F5C\u7528\u57DF\u94FE\u662F\u7406\u89E3\u95ED\u5305\u7684\u57FA\u7840\uFF0C\u800C\u95ED\u5305\u5728 JavaScript \u4E2D\u51E0\u4E4E\u65E0\u5904\u4E0D\u5728\uFF0C\u540C\u65F6\u4F5C\u7528\u57DF\u548C\u4F5C\u7528\u57DF\u94FE\u8FD8\u662F\u6240\u6709\u7F16\u7A0B\u8BED\u8A00\u7684\u57FA\u7840\u3002\u6240\u4EE5\uFF0C\u5982\u679C\u4F60\u60F3\u5B66\u900F\u4E00\u95E8\u8BED\u8A00\uFF0C\u4F5C\u7528\u57DF\u548C\u4F5C\u7528\u57DF\u94FE\u4E00\u5B9A\u662F\u7ED5\u4E0D\u5F00\u7684\u3002</p></blockquote><h2 id="\u4F5C\u7528\u57DF\u94FE" tabindex="-1"><a class="header-anchor" href="#\u4F5C\u7528\u57DF\u94FE" aria-hidden="true">#</a> \u4F5C\u7528\u57DF\u94FE</h2><blockquote><p>\u5176\u5B9E\u5728\u6BCF\u4E2A\u6267\u884C\u4E0A\u4E0B\u6587\u7684\u53D8\u91CF\u73AF\u5883\u4E2D\uFF0C\u90FD\u5305\u542B\u4E86\u4E00\u4E2A\u5916\u90E8\u5F15\u7528\uFF0C\u7528\u6765\u6307\u5411\u5916\u90E8\u7684\u6267\u884C\u4E0A\u4E0B\u6587\uFF0C\u6211\u4EEC\u628A\u8FD9\u4E2A\u5916\u90E8\u5F15\u7528\u79F0\u4E3A outer\u3002</p></blockquote><p>\u5F53\u4E00\u6BB5\u4EE3\u7801\u4F7F\u7528\u4E86\u4E00\u4E2A\u53D8\u91CF\u65F6\uFF0CJavaScript \u5F15\u64CE\u9996\u5148\u4F1A\u5728\u201C\u5F53\u524D\u7684\u6267\u884C\u4E0A\u4E0B\u6587\u201D\u4E2D\u67E5\u627E\u8BE5\u53D8\u91CF\uFF0C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>myName<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> myName <span class="token operator">=</span> <span class="token string">&#39;\u6781\u5BA2\u90A6&#39;</span><span class="token punctuation">;</span>
  <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> myName <span class="token operator">=</span> <span class="token string">&#39;\u6781\u5BA2\u65F6\u95F4&#39;</span><span class="token punctuation">;</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6BD4\u5982\u4E0A\u9762\u90A3\u6BB5\u4EE3\u7801\u5728\u67E5\u627E myName \u53D8\u91CF\u65F6\uFF0C\u5982\u679C\u5728\u5F53\u524D\u7684\u53D8\u91CF\u73AF\u5883\u4E2D\u6CA1\u6709\u67E5\u627E\u5230\uFF0C\u90A3\u4E48 JavaScript \u5F15\u64CE\u4F1A\u7EE7\u7EED\u5728 outer \u6240\u6307\u5411\u7684\u6267\u884C\u4E0A\u4E0B\u6587\u4E2D\u67E5\u627E\u3002</p><p><img src="`+u+'" alt="image" loading="lazy"></p><p>\u4ECE\u56FE\u4E2D\u53EF\u4EE5\u770B\u51FA\uFF0Cbar \u51FD\u6570\u548C foo \u51FD\u6570\u7684 outer \u90FD\u662F\u6307\u5411\u5168\u5C40\u4E0A\u4E0B\u6587\u7684\uFF0C\u8FD9\u4E5F\u5C31\u610F\u5473\u7740\u5982\u679C\u5728 bar \u51FD\u6570\u6216\u8005 foo \u51FD\u6570\u4E2D\u4F7F\u7528\u4E86\u5916\u90E8\u53D8\u91CF\uFF0C\u90A3\u4E48 JavaScript \u5F15\u64CE\u4F1A\u53BB\u5168\u5C40\u6267\u884C\u4E0A\u4E0B\u6587\u4E2D\u67E5\u627E\u3002\u6211\u4EEC\u628A\u8FD9\u4E2A\u67E5\u627E\u7684\u94FE\u6761\u5C31\u79F0\u4E3A<strong>\u4F5C\u7528\u57DF\u94FE</strong>\u3002</p><p>\u73B0\u5728\u4F60\u77E5\u9053\u53D8\u91CF\u662F\u901A\u8FC7\u4F5C\u7528\u57DF\u94FE\u6765\u67E5\u627E\u7684\u4E86\uFF0C\u4E0D\u8FC7\u8FD8\u6709\u4E00\u4E2A\u7591\u95EE\u6CA1\u6709\u89E3\u5F00\uFF0Cfoo \u51FD\u6570\u8C03\u7528\u7684 bar \u51FD\u6570\uFF0C\u90A3\u4E3A\u4EC0\u4E48 bar \u51FD\u6570\u7684\u5916\u90E8\u5F15\u7528\u662F\u5168\u5C40\u6267\u884C\u4E0A\u4E0B\u6587\uFF0C\u800C\u4E0D\u662F foo \u51FD\u6570\u7684\u6267\u884C\u4E0A\u4E0B\u6587\uFF1F</p><p>\u8981\u56DE\u7B54\u8FD9\u4E2A\u95EE\u9898\uFF0C\u4F60\u8FD8\u9700\u8981\u77E5\u9053\u4EC0\u4E48\u662F<strong>\u8BCD\u6CD5\u4F5C\u7528\u57DF</strong>\u3002\u8FD9\u662F\u56E0\u4E3A<strong>\u5728 JavaScript \u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u5176\u4F5C\u7528\u57DF\u94FE\u662F\u7531\u8BCD\u6CD5\u4F5C\u7528\u57DF\u51B3\u5B9A\u7684</strong>\u3002</p><h2 id="\u8BCD\u6CD5\u4F5C\u7528\u57DF" tabindex="-1"><a class="header-anchor" href="#\u8BCD\u6CD5\u4F5C\u7528\u57DF" aria-hidden="true">#</a> \u8BCD\u6CD5\u4F5C\u7528\u57DF</h2><blockquote><p>\u8BCD\u6CD5\u4F5C\u7528\u57DF\u5C31\u662F\u6307\u4F5C\u7528\u57DF\u662F\u7531\u4EE3\u7801\u4E2D\u51FD\u6570\u58F0\u660E\u7684\u4F4D\u7F6E\u6765\u51B3\u5B9A\u7684\uFF0C\u6240\u4EE5\u8BCD\u6CD5\u4F5C\u7528\u57DF\u662F\u9759\u6001\u7684\u4F5C\u7528\u57DF\uFF0C\u901A\u8FC7\u5B83\u5C31\u80FD\u591F\u9884\u6D4B\u4EE3\u7801\u5728\u6267\u884C\u8FC7\u7A0B\u4E2D\u5982\u4F55\u67E5\u627E\u6807\u8BC6\u7B26\u3002</p></blockquote><p>\u8FD9\u4E48\u8BB2\u53EF\u80FD\u4E0D\u592A\u597D\u7406\u89E3\uFF0C\u4F60\u53EF\u4EE5\u770B\u4E0B\u9762\u8FD9\u5F20\u56FE\uFF1A</p><p><img src="'+r+`" alt="image" loading="lazy"></p><p>\u4ECE\u56FE\u4E2D\u53EF\u4EE5\u770B\u51FA\uFF0C\u8BCD\u6CD5\u4F5C\u7528\u57DF\u5C31\u662F\u6839\u636E\u4EE3\u7801\u7684\u4F4D\u7F6E\u6765\u51B3\u5B9A\u7684\uFF0C\u5176\u4E2D main \u51FD\u6570\u5305\u542B\u4E86 bar \u51FD\u6570\uFF0Cbar \u51FD\u6570\u4E2D\u5305\u542B\u4E86 foo \u51FD\u6570\uFF0C\u56E0\u4E3A JavaScript \u4F5C\u7528\u57DF\u94FE\u662F\u7531\u8BCD\u6CD5\u4F5C\u7528\u57DF\u51B3\u5B9A\u7684\uFF0C\u6240\u4EE5\u6574\u4E2A\u8BCD\u6CD5\u4F5C\u7528\u57DF\u94FE\u7684\u987A\u5E8F\u662F\uFF1Afoo \u51FD\u6570\u4F5C\u7528\u57DF\u2014&gt;bar \u51FD\u6570\u4F5C\u7528\u57DF\u2014&gt;main \u51FD\u6570\u4F5C\u7528\u57DF\u2014&gt; \u5168\u5C40\u4F5C\u7528\u57DF\u3002</p><p>\u4E86\u89E3\u4E86\u8BCD\u6CD5\u4F5C\u7528\u57DF\u4EE5\u53CA JavaScript \u4E2D\u7684\u4F5C\u7528\u57DF\u94FE\uFF0C\u6211\u4EEC\u518D\u56DE\u8FC7\u5934\u6765\u770B\u770B\u4E0A\u9762\u7684\u90A3\u4E2A\u95EE\u9898\uFF1A\u5728\u5F00\u5934\u90A3\u6BB5\u4EE3\u7801\u4E2D\uFF0Cfoo \u51FD\u6570\u8C03\u7528\u4E86 bar \u51FD\u6570\uFF0C\u90A3\u4E3A\u4EC0\u4E48 bar \u51FD\u6570\u7684\u5916\u90E8\u5F15\u7528\u662F\u5168\u5C40\u6267\u884C\u4E0A\u4E0B\u6587\uFF0C\u800C\u4E0D\u662F foo \u51FD\u6570\u7684\u6267\u884C\u4E0A\u4E0B\u6587?</p><p>\u8FD9\u662F\u56E0\u4E3A\u6839\u636E\u8BCD\u6CD5\u4F5C\u7528\u57DF\uFF0Cfoo \u548C bar \u7684\u4E0A\u7EA7\u4F5C\u7528\u57DF\u90FD\u662F\u5168\u5C40\u4F5C\u7528\u57DF\uFF0C\u6240\u4EE5\u5982\u679C foo \u6216\u8005 bar \u51FD\u6570\u4F7F\u7528\u4E86\u4E00\u4E2A\u5B83\u4EEC\u6CA1\u6709\u5B9A\u4E49\u7684\u53D8\u91CF\uFF0C\u90A3\u4E48\u5B83\u4EEC\u4F1A\u5230\u5168\u5C40\u4F5C\u7528\u57DF\u53BB\u67E5\u627E\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C<strong>\u8BCD\u6CD5\u4F5C\u7528\u57DF\u662F\u4EE3\u7801\u7F16\u8BD1\u9636\u6BB5\u5C31\u51B3\u5B9A\u597D\u7684\uFF0C\u548C\u51FD\u6570\u662F\u600E\u4E48\u8C03\u7528\u7684\u6CA1\u6709\u5173\u7CFB\u3002</strong></p><p><strong>\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5728\u7F16\u8BD1\u9636\u6BB5\uFF0C\u5982\u679C\u67D0\u4E2A\u51FD\u6570\u58F0\u660E\u88AB\u7F16\u8BD1\u5230\u4E86\u5F53\u524D\u7684\u7F16\u8BD1\u7684\u4EE3\u7801\u7684\u53D8\u91CF\u73AF\u5883\u5F53\u4E2D\uFF0C\u90A3\u4E48\u5B83\u7684\u8BCD\u6CD5\u4F5C\u7528\u57DF\u5C31\u662F\u5F53\u524D\u7F16\u8BD1\u7684\u4EE3\u7801\u7684\u533A\u57DF\uFF0C\u4E5F\u5C31\u662F\u51FD\u6570\u58F0\u660E\u7684\u4F4D\u7F6E</strong></p><h2 id="\u5757\u7EA7\u4F5C\u7528\u57DF\u4E2D\u7684\u53D8\u91CF\u67E5\u627E" tabindex="-1"><a class="header-anchor" href="#\u5757\u7EA7\u4F5C\u7528\u57DF\u4E2D\u7684\u53D8\u91CF\u67E5\u627E" aria-hidden="true">#</a> \u5757\u7EA7\u4F5C\u7528\u57DF\u4E2D\u7684\u53D8\u91CF\u67E5\u627E</h2><p>\u524D\u9762\u6211\u4EEC\u901A\u8FC7\u5168\u5C40\u4F5C\u7528\u57DF\u548C\u51FD\u6570\u7EA7\u4F5C\u7528\u57DF\u6765\u5206\u6790\u4E86\u4F5C\u7528\u57DF\u94FE\uFF0C\u90A3\u63A5\u4E0B\u6765\u6211\u4EEC\u518D\u6765\u770B\u770B\u5757\u7EA7\u4F5C\u7528\u57DF\u4E2D\u53D8\u91CF\u662F\u5982\u4F55\u67E5\u627E\u7684\uFF1F<strong>\u5728\u7F16\u5199\u4EE3\u7801\u7684\u65F6\u5019\uFF0C\u5982\u679C\u4F60\u4F7F\u7528\u4E86\u4E00\u4E2A\u5728\u5F53\u524D\u4F5C\u7528\u57DF\u4E2D\u4E0D\u5B58\u5728\u7684\u53D8\u91CF\uFF0C\u8FD9\u65F6 JavaScript \u5F15\u64CE\u5C31\u9700\u8981\u6309\u7167\u4F5C\u7528\u57DF\u94FE\u5728\u5176\u4ED6\u4F5C\u7528\u57DF\u4E2D\u67E5\u627E\u8BE5\u53D8\u91CF</strong>\uFF0C\u5982\u679C\u4F60\u4E0D\u4E86\u89E3\u8BE5\u8FC7\u7A0B\uFF0C\u90A3\u5C31\u4F1A\u6709\u5F88\u5927\u6982\u7387\u5199\u51FA\u4E0D\u7A33\u5B9A\u7684\u4EE3\u7801\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> myName <span class="token operator">=</span> <span class="token string">&#39;\u6781\u5BA2\u4E16\u754C&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> test1 <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> myName <span class="token operator">=</span> <span class="token string">&#39;Chrome\u6D4F\u89C8\u5668&#39;</span><span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>test<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> myName <span class="token operator">=</span> <span class="token string">&#39;\u6781\u5BA2\u90A6&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> test <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">let</span> test <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
    <span class="token function">bar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> myName <span class="token operator">=</span> <span class="token string">&#39;\u6781\u5BA2\u65F6\u95F4&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> myAge <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> test <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8981\u60F3\u5F97\u51FA\u5176\u6267\u884C\u7ED3\u679C\uFF0C\u90A3\u63A5\u4E0B\u6765\u6211\u4EEC\u5C31\u5F97\u7AD9\u5728\u4F5C\u7528\u57DF\u94FE\u548C\u8BCD\u6CD5\u73AF\u5883\u7684\u89D2\u5EA6\u6765\u5206\u6790\u4E0B\u5176\u6267\u884C\u8FC7\u7A0B\u3002</p>`,22),N=n("\u5728"),w=n("\u4E0A\u7BC7\u6587\u7AE0"),x=n("\u4E2D\u6211\u4EEC\u5DF2\u7ECF\u4ECB\u7ECD\u8FC7\u4E86\uFF0CES6 \u662F\u652F\u6301\u5757\u7EA7\u4F5C\u7528\u57DF\u7684\uFF0C\u5F53\u6267\u884C\u5230\u4EE3\u7801\u5757\u65F6\uFF0C\u5982\u679C\u4EE3\u7801\u5757\u4E2D\u6709 let \u6216\u8005 const \u58F0\u660E\u7684\u53D8\u91CF\uFF0C\u90A3\u4E48\u53D8\u91CF\u5C31\u4F1A\u5B58\u653E\u5230\u8BE5\u51FD\u6570\u7684\u8BCD\u6CD5\u73AF\u5883\u4E2D\u3002\u5BF9\u4E8E\u4E0A\u9762\u8FD9\u6BB5\u4EE3\u7801\uFF0C\u5F53\u6267\u884C\u5230 bar \u51FD\u6570\u5185\u90E8\u7684 if \u8BED\u53E5\u5757\u65F6\uFF0C\u5176\u8C03\u7528\u6808\u7684\u60C5\u51B5\u5982\u4E0B\u56FE\u6240\u793A\uFF1A"),S=a("p",null,[a("img",{src:k,alt:"image",loading:"lazy"})],-1),j=a("p",null,"\u73B0\u5728\u662F\u6267\u884C\u5230 bar \u51FD\u6570\u7684 if \u8BED\u5757\u4E4B\u5185\uFF0C\u9700\u8981\u6253\u5370\u51FA\u6765\u53D8\u91CF test\uFF0C\u90A3\u4E48\u5C31\u9700\u8981\u67E5\u627E\u5230 test \u53D8\u91CF\u7684\u503C\uFF0C\u5176\u67E5\u627E\u8FC7\u7A0B\u6211\u5DF2\u7ECF\u5728\u4E0A\u56FE\u4E2D\u4F7F\u7528\u5E8F\u53F7 1\u30012\u30013\u30014\u30015 \u6807\u8BB0\u51FA\u6765\u4E86\u3002",-1),J=a("p",null,"\u4E0B\u9762\u6211\u5C31\u6765\u89E3\u91CA\u4E0B\u8FD9\u4E2A\u8FC7\u7A0B\u3002\u9996\u5148\u662F\u5728 bar \u51FD\u6570\u7684\u6267\u884C\u4E0A\u4E0B\u6587\u4E2D\u67E5\u627E\uFF0C\u4F46\u56E0\u4E3A bar \u51FD\u6570\u7684\u6267\u884C\u4E0A\u4E0B\u6587\u4E2D\u6CA1\u6709\u5B9A\u4E49 test \u53D8\u91CF\uFF0C\u6240\u4EE5\u6839\u636E\u8BCD\u6CD5\u4F5C\u7528\u57DF\u7684\u89C4\u5219\uFF0C\u4E0B\u4E00\u6B65\u5C31\u5728 bar \u51FD\u6570\u7684\u5916\u90E8\u4F5C\u7528\u57DF\u4E2D\u67E5\u627E\uFF0C\u4E5F\u5C31\u662F\u5168\u5C40\u4F5C\u7528\u57DF\u3002",-1),q=n("\u81F3\u4E8E\u5355\u4E2A\u6267\u884C\u4E0A\u4E0B\u6587\u4E2D\u5982\u4F55\u67E5\u627E\u53D8\u91CF\uFF0C\u5728"),B=n("\u4E0A\u7BC7\u6587\u7AE0"),z=n("\u4E2D\u5DF2\u7ECF\u505A\u4E86\u4ECB\u7ECD\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u91CD\u590D\u4E86\u3002"),C=p(`<h2 id="\u95ED\u5305" tabindex="-1"><a class="header-anchor" href="#\u95ED\u5305" aria-hidden="true">#</a> \u95ED\u5305</h2><p>\u4E86\u89E3\u4E86\u4F5C\u7528\u57DF\u94FE\uFF0C\u63A5\u7740\u6211\u4EEC\u5C31\u53EF\u4EE5\u6765\u804A\u804A\u95ED\u5305\u4E86\u3002\u5173\u4E8E\u95ED\u5305\uFF0C\u7406\u89E3\u8D77\u6765\u53EF\u80FD\u4F1A\u662F\u4E00\u9053\u574E\uFF0C\u7279\u522B\u662F\u5728\u4F60\u4E0D\u592A\u719F\u6089 JavaScript \u8FD9\u95E8\u8BED\u8A00\u7684\u65F6\u5019\uFF0C\u63A5\u89E6\u95ED\u5305\u5F88\u53EF\u80FD\u4F1A\u8BA9\u4F60\u4EA7\u751F\u4E00\u4E9B\u632B\u8D25\u611F\uFF0C\u56E0\u4E3A\u4F60\u5F88\u96BE\u901A\u8FC7\u7406\u89E3\u80CC\u540E\u7684\u539F\u7406\u6765\u5F7B\u5E95\u7406\u89E3\u95ED\u5305\uFF0C\u4ECE\u800C\u5BFC\u81F4\u5B66\u4E60\u8FC7\u7A0B\u4E2D\u4F3C\u4E4E\u603B\u662F\u4F3C\u61C2\u975E\u61C2\u3002\u6700\u8981\u547D\u7684\u662F\uFF0CJavaScript \u4EE3\u7801\u4E2D\u8FD8\u603B\u662F\u5145\u65A5\u7740\u5927\u91CF\u7684\u95ED\u5305\u4EE3\u7801\u3002</p><p>\u4F46\u7406\u89E3\u4E86\u53D8\u91CF\u73AF\u5883\u3001\u8BCD\u6CD5\u73AF\u5883\u548C\u4F5C\u7528\u57DF\u94FE\u7B49\u6982\u5FF5\uFF0C\u90A3\u63A5\u4E0B\u6765\u4F60\u518D\u7406\u89E3\u4EC0\u4E48\u662F JavaScript \u4E2D\u7684\u95ED\u5305\u5C31\u5BB9\u6613\u591A\u4E86\u3002\u8FD9\u91CC\u4F60\u53EF\u4EE5\u7ED3\u5408\u4E0B\u9762\u8FD9\u6BB5\u4EE3\u7801\u6765\u7406\u89E3\u4EC0\u4E48\u662F\u95ED\u5305\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> myName <span class="token operator">=</span> <span class="token string">&#39;\u6781\u5BA2\u65F6\u95F4&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> test1 <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> test2 <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
  <span class="token keyword">var</span> innerBar <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">getName</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>test1<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> myName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">setName</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">newName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      myName <span class="token operator">=</span> newName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> innerBar<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> bar <span class="token operator">=</span> <span class="token function">foo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bar<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&#39;\u6781\u5BA2\u90A6&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
bar<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>bar<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9996\u5148\u6211\u4EEC\u770B\u770B\u5F53\u6267\u884C\u5230 foo \u51FD\u6570\u5185\u90E8\u7684 return innerBar \u8FD9\u884C\u4EE3\u7801\u65F6\u8C03\u7528\u6808\u7684\u60C5\u51B5\uFF0C\u4F60\u53EF\u4EE5\u53C2\u8003\u4E0B\u56FE\uFF1A</p><p><img src="`+d+'" alt="image" loading="lazy"></p><p>\u4ECE\u4E0A\u9762\u7684\u4EE3\u7801\u53EF\u4EE5\u770B\u51FA\uFF0CinnerBar \u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u5305\u542B\u4E86 getName \u548C setName \u7684\u4E24\u4E2A\u65B9\u6CD5\uFF08\u901A\u5E38\u6211\u4EEC\u628A\u5BF9\u8C61\u5185\u90E8\u7684\u51FD\u6570\u79F0\u4E3A\u65B9\u6CD5\uFF09\u3002\u4F60\u53EF\u4EE5\u770B\u5230\uFF0C\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u90FD\u662F\u5728 foo \u51FD\u6570\u5185\u90E8\u5B9A\u4E49\u7684\uFF0C\u5E76\u4E14\u8FD9\u4E24\u4E2A\u65B9\u6CD5\u5185\u90E8\u90FD\u4F7F\u7528\u4E86 myName \u548C test1 \u4E24\u4E2A\u53D8\u91CF\u3002</p><p>\u6839\u636E\u8BCD\u6CD5\u4F5C\u7528\u57DF\u7684\u89C4\u5219\uFF0C\u5185\u90E8\u51FD\u6570 getName \u548C setName \u603B\u662F\u53EF\u4EE5\u8BBF\u95EE\u5B83\u4EEC\u7684\u5916\u90E8\u51FD\u6570 foo \u4E2D\u7684\u53D8\u91CF\uFF0C\u6240\u4EE5\u5F53 innerBar \u5BF9\u8C61\u8FD4\u56DE\u7ED9\u5168\u5C40\u53D8\u91CF bar \u65F6\uFF0C\u867D\u7136 foo \u51FD\u6570\u5DF2\u7ECF\u6267\u884C\u7ED3\u675F\uFF0C\u4F46\u662F getName \u548C setName \u51FD\u6570\u4F9D\u7136\u53EF\u4EE5\u4F7F\u7528 foo \u51FD\u6570\u4E2D\u7684\u53D8\u91CF myName \u548C test1\u3002\u6240\u4EE5\u5F53 foo \u51FD\u6570\u6267\u884C\u5B8C\u6210\u4E4B\u540E\uFF0C\u5176\u6574\u4E2A\u8C03\u7528\u6808\u7684\u72B6\u6001\u5982\u4E0B\u56FE\u6240\u793A\uFF1A</p><p><img src="'+m+'" alt="image" loading="lazy"></p><p>\u4ECE\u4E0A\u56FE\u53EF\u4EE5\u770B\u51FA\uFF0Cfoo \u51FD\u6570\u6267\u884C\u5B8C\u6210\u4E4B\u540E\uFF0C\u5176\u6267\u884C\u4E0A\u4E0B\u6587\u4ECE\u6808\u9876\u5F39\u51FA\u4E86\uFF0C\u4F46\u662F\u7531\u4E8E\u8FD4\u56DE\u7684 setName \u548C getName \u65B9\u6CD5\u4E2D\u4F7F\u7528\u4E86 foo \u51FD\u6570\u5185\u90E8\u7684\u53D8\u91CF myName \u548C test1\uFF0C\u6240\u4EE5\u8FD9\u4E24\u4E2A\u53D8\u91CF\u4F9D\u7136\u4FDD\u5B58\u5728\u5185\u5B58\u4E2D\u3002\u8FD9\u50CF\u6781\u4E86 setName \u548C getName \u65B9\u6CD5\u80CC\u7684\u4E00\u4E2A\u4E13\u5C5E\u80CC\u5305\uFF0C\u65E0\u8BBA\u5728\u54EA\u91CC\u8C03\u7528\u4E86 setName \u548C getName \u65B9\u6CD5\uFF0C\u5B83\u4EEC\u90FD\u4F1A\u80CC\u7740\u8FD9\u4E2A foo \u51FD\u6570\u7684\u4E13\u5C5E\u80CC\u5305\u3002</p><p>\u4E4B\u6240\u4EE5\u662F\u4E13\u5C5E\u80CC\u5305\uFF0C\u662F\u56E0\u4E3A\u9664\u4E86 setName \u548C getName \u51FD\u6570\u4E4B\u5916\uFF0C\u5176\u4ED6\u4EFB\u4F55\u5730\u65B9\u90FD\u662F\u65E0\u6CD5\u8BBF\u95EE\u8BE5\u80CC\u5305\u7684\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u628A\u8FD9\u4E2A\u80CC\u5305\u79F0\u4E3A foo \u51FD\u6570\u7684\u95ED\u5305\u3002</p><p>\u597D\u4E86\uFF0C\u73B0\u5728\u6211\u4EEC\u7EC8\u4E8E\u53EF\u4EE5\u7ED9\u95ED\u5305\u4E00\u4E2A\u6B63\u5F0F\u7684\u5B9A\u4E49\u4E86\u3002</p><blockquote><p>\u5728 JavaScript \u4E2D\uFF0C\u6839\u636E\u8BCD\u6CD5\u4F5C\u7528\u57DF\u7684\u89C4\u5219\uFF0C\u5185\u90E8\u51FD\u6570\u603B\u662F\u53EF\u4EE5\u8BBF\u95EE\u5176\u5916\u90E8\u51FD\u6570\u4E2D\u58F0\u660E\u7684\u53D8\u91CF\uFF0C\u5F53\u901A\u8FC7\u8C03\u7528\u4E00\u4E2A\u5916\u90E8\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u5185\u90E8\u51FD\u6570\u540E\uFF0C\u5373\u4F7F\u8BE5\u5916\u90E8\u51FD\u6570\u5DF2\u7ECF\u6267\u884C\u7ED3\u675F\u4E86\uFF0C\u4F46\u662F\u5185\u90E8\u51FD\u6570\u5F15\u7528\u5916\u90E8\u51FD\u6570\u7684\u53D8\u91CF\u4F9D\u7136\u4FDD\u5B58\u5728\u5185\u5B58\u4E2D\uFF0C\u6211\u4EEC\u5C31\u628A\u8FD9\u4E9B\u53D8\u91CF\u7684\u96C6\u5408\u79F0\u4E3A\u95ED\u5305\u3002\u6BD4\u5982\u5916\u90E8\u51FD\u6570\u662F foo\uFF0C\u90A3\u4E48\u8FD9\u4E9B\u53D8\u91CF\u7684\u96C6\u5408\u5C31\u79F0\u4E3A foo \u51FD\u6570\u7684\u95ED\u5305\u3002</p></blockquote><p>\u90A3\u8FD9\u4E9B\u95ED\u5305\u662F\u5982\u4F55\u4F7F\u7528\u7684\u5462\uFF1F\u5F53\u6267\u884C\u5230 bar.setName \u65B9\u6CD5\u4E2D\u7684 myName = &quot;\u6781\u5BA2\u90A6&quot; \u8FD9\u53E5\u4EE3\u7801\u65F6\uFF0CJavaScript \u5F15\u64CE\u4F1A\u6CBF\u7740\u201C\u5F53\u524D\u6267\u884C\u4E0A\u4E0B\u6587\u2013&gt;foo \u51FD\u6570\u95ED\u5305\u2013&gt; \u5168\u5C40\u6267\u884C\u4E0A\u4E0B\u6587\u201D\u7684\u987A\u5E8F\u6765\u67E5\u627E myName \u53D8\u91CF\uFF0C\u4F60\u53EF\u4EE5\u53C2\u8003\u4E0B\u9762\u7684\u8C03\u7528\u6808\u72B6\u6001\u56FE\uFF1A</p><p><img src="'+v+'" alt="image" loading="lazy"></p><p>\u4ECE\u56FE\u4E2D\u53EF\u4EE5\u770B\u51FA\uFF0CsetName \u7684\u6267\u884C\u4E0A\u4E0B\u6587\u4E2D\u6CA1\u6709 myName \u53D8\u91CF\uFF0Cfoo \u51FD\u6570\u7684\u95ED\u5305\u4E2D\u5305\u542B\u4E86\u53D8\u91CF myName\uFF0C\u6240\u4EE5\u8C03\u7528 setName \u65F6\uFF0C\u4F1A\u4FEE\u6539 foo \u95ED\u5305\u4E2D\u7684 myName \u53D8\u91CF\u7684\u503C\u3002\u540C\u6837\u7684\u6D41\u7A0B\uFF0C\u5F53\u8C03\u7528 bar.getName \u7684\u65F6\u5019\uFF0C\u6240\u8BBF\u95EE\u7684\u53D8\u91CF myName \u4E5F\u662F\u4F4D\u4E8E foo \u51FD\u6570\u95ED\u5305\u4E2D\u7684\u3002</p><p>\u540C\u6837\u7684\u6D41\u7A0B\uFF0C\u5F53\u8C03\u7528 bar.getName \u7684\u65F6\u5019\uFF0C\u6240\u8BBF\u95EE\u7684\u53D8\u91CF myName \u4E5F\u662F\u4F4D\u4E8E foo \u51FD\u6570\u95ED\u5305\u4E2D\u7684\u3002</p><p>\u4F60\u4E5F\u53EF\u4EE5\u901A\u8FC7\u201C\u5F00\u53D1\u8005\u5DE5\u5177\u201D\u6765\u770B\u770B\u95ED\u5305\u7684\u60C5\u51B5\uFF0C\u6253\u5F00 Chrome \u7684\u201C\u5F00\u53D1\u8005\u5DE5\u5177\u201D\uFF0C\u5728 bar \u51FD\u6570\u4EFB\u610F\u5730\u65B9\u6253\u4E0A\u65AD\u70B9\uFF0C\u7136\u540E\u5237\u65B0\u9875\u9762\uFF0C\u53EF\u4EE5\u770B\u5230\u5982\u4E0B\u5185\u5BB9\uFF1A</p><p><img src="'+b+'" alt="image" loading="lazy"></p><p>\u4ECE\u56FE\u4E2D\u53EF\u4EE5\u770B\u51FA\u6765\uFF0C\u5F53\u8C03\u7528 bar.getName \u7684\u65F6\u5019\uFF0C\u53F3\u8FB9 Scope \u9879\u5C31\u4F53\u73B0\u51FA\u4E86\u4F5C\u7528\u57DF\u94FE\u7684\u60C5\u51B5\uFF1ALocal \u5C31\u662F\u5F53\u524D\u7684 getName \u51FD\u6570\u7684\u4F5C\u7528\u57DF\uFF0CClosure(foo) \u662F\u6307 foo \u51FD\u6570\u7684\u95ED\u5305\uFF0C\u6700\u4E0B\u9762\u7684 Global \u5C31\u662F\u6307\u5168\u5C40\u4F5C\u7528\u57DF\uFF0C\u4ECE\u201CLocal\u2013&gt;Closure(foo)\u2013&gt;Global\u201D\u5C31\u662F\u4E00\u4E2A\u5B8C\u6574\u7684\u4F5C\u7528\u57DF\u94FE\u3002</p><p>\u6240\u4EE5\u8BF4\uFF0C\u4F60\u4EE5\u540E\u4E5F\u53EF\u4EE5\u901A\u8FC7 Scope \u6765\u67E5\u770B\u5B9E\u9645\u4EE3\u7801\u4F5C\u7528\u57DF\u94FE\u7684\u60C5\u51B5\uFF0C\u8FD9\u6837\u8C03\u8BD5\u4EE3\u7801\u4E5F\u4F1A\u6BD4\u8F83\u65B9\u4FBF\u3002</p><h3 id="\u95ED\u5305\u662F\u600E\u4E48\u56DE\u6536\u7684" tabindex="-1"><a class="header-anchor" href="#\u95ED\u5305\u662F\u600E\u4E48\u56DE\u6536\u7684" aria-hidden="true">#</a> \u95ED\u5305\u662F\u600E\u4E48\u56DE\u6536\u7684</h3><p>\u7406\u89E3\u4EC0\u4E48\u662F\u95ED\u5305\u4E4B\u540E\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u518D\u6765\u7B80\u5355\u804A\u804A\u95ED\u5305\u662F\u4EC0\u4E48\u65F6\u5019\u9500\u6BC1\u7684\u3002\u56E0\u4E3A\u5982\u679C\u95ED\u5305\u4F7F\u7528\u4E0D\u6B63\u786E\uFF0C\u4F1A\u5F88\u5BB9\u6613\u9020\u6210\u5185\u5B58\u6CC4\u6F0F\u7684\uFF0C\u5173\u6CE8\u95ED\u5305\u662F\u5982\u4F55\u56DE\u6536\u7684\u80FD\u8BA9\u4F60\u6B63\u786E\u5730\u4F7F\u7528\u95ED\u5305\u3002</p><blockquote><p>\u901A\u5E38\uFF0C\u5982\u679C\u5F15\u7528\u95ED\u5305\u7684\u51FD\u6570\u662F\u4E00\u4E2A\u5168\u5C40\u53D8\u91CF\uFF0C\u90A3\u4E48\u95ED\u5305\u4F1A\u4E00\u76F4\u5B58\u5728\u76F4\u5230\u9875\u9762\u5173\u95ED\uFF1B\u4F46\u5982\u679C\u8FD9\u4E2A\u95ED\u5305\u4EE5\u540E\u4E0D\u518D\u4F7F\u7528\u7684\u8BDD\uFF0C\u5C31\u4F1A\u9020\u6210\u5185\u5B58\u6CC4\u6F0F\u3002</p></blockquote><blockquote><p>\u5982\u679C\u5F15\u7528\u95ED\u5305\u7684\u51FD\u6570\u662F\u4E2A\u5C40\u90E8\u53D8\u91CF\uFF0C\u7B49\u51FD\u6570\u9500\u6BC1\u540E\uFF0C\u5728\u4E0B\u6B21 JavaScript \u5F15\u64CE\u6267\u884C\u5783\u573E\u56DE\u6536\u65F6\uFF0C\u5224\u65AD\u95ED\u5305\u8FD9\u5757\u5185\u5BB9\u5982\u679C\u5DF2\u7ECF\u4E0D\u518D\u88AB\u4F7F\u7528\u4E86\uFF0C\u90A3\u4E48 JavaScript \u5F15\u64CE\u7684\u5783\u573E\u56DE\u6536\u5668\u5C31\u4F1A\u56DE\u6536\u8FD9\u5757\u5185\u5B58\u3002</p></blockquote><blockquote><p>\u6240\u4EE5\u5728\u4F7F\u7528\u95ED\u5305\u7684\u65F6\u5019\uFF0C\u4F60\u8981\u5C3D\u91CF\u6CE8\u610F\u4E00\u4E2A\u539F\u5219\uFF1A\u5982\u679C\u8BE5\u95ED\u5305\u4F1A\u4E00\u76F4\u4F7F\u7528\uFF0C\u90A3\u4E48\u5B83\u53EF\u4EE5\u4F5C\u4E3A\u5168\u5C40\u53D8\u91CF\u800C\u5B58\u5728\uFF1B\u4F46\u5982\u679C\u4F7F\u7528\u9891\u7387\u4E0D\u9AD8\uFF0C\u800C\u4E14\u5360\u7528\u5185\u5B58\u53C8\u6BD4\u8F83\u5927\u7684\u8BDD\uFF0C\u90A3\u5C31\u5C3D\u91CF\u8BA9\u5B83\u6210\u4E3A\u4E00\u4E2A\u5C40\u90E8\u53D8\u91CF\u3002</p></blockquote><p>\u5173\u4E8E\u95ED\u5305\u56DE\u6536\u7684\u95EE\u9898\u672C\u6587\u53EA\u662F\u505A\u4E86\u4E2A\u7B80\u5355\u7684\u4ECB\u7ECD\uFF0C\u5176\u5B9E\u95ED\u5305\u662F\u5982\u4F55\u56DE\u6536\u7684\u8FD8\u7275\u6D89\u5230\u4E86 JavaScript \u7684\u5783\u573E\u56DE\u6536\u673A\u5236\uFF0C\u800C\u5173\u4E8E\u5783\u573E\u56DE\u6536\uFF0C\u540E\u7EED\u7AE0\u8282\u4F1A\u518D\u8BE6\u7EC6\u4ECB\u7ECD\u7684\u3002</p><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><ul><li>\u9996\u5148\uFF0C\u4ECB\u7ECD\u4E86\u4EC0\u4E48\u662F\u4F5C\u7528\u57DF\u94FE\uFF0C\u6211\u4EEC\u628A\u901A\u8FC7\u4F5C\u7528\u57DF\u67E5\u627E\u53D8\u91CF\u7684\u94FE\u6761\u79F0\u4E3A\u4F5C\u7528\u57DF\u94FE\uFF1B\u4F5C\u7528\u57DF\u94FE\u662F\u901A\u8FC7\u8BCD\u6CD5\u4F5C\u7528\u57DF\u6765\u786E\u5B9A\u7684\uFF0C\u800C\u8BCD\u6CD5\u4F5C\u7528\u57DF\u53CD\u6620\u4E86\u4EE3\u7801\u7684\u7ED3\u6784\u3002</li><li>\u5176\u6B21\uFF0C\u4ECB\u7ECD\u4E86\u5728\u5757\u7EA7\u4F5C\u7528\u57DF\u4E2D\u662F\u5982\u4F55\u901A\u8FC7\u4F5C\u7528\u57DF\u94FE\u6765\u67E5\u627E\u53D8\u91CF\u7684\u3002</li><li>\u6700\u540E\uFF0C\u53C8\u57FA\u4E8E\u4F5C\u7528\u57DF\u94FE\u548C\u8BCD\u6CD5\u73AF\u5883\u4ECB\u7ECD\u4E86\u5230\u5E95\u4EC0\u4E48\u662F\u95ED\u5305\u3002</li></ul><p>\u901A\u8FC7\u5C55\u5F00\u8BCD\u6CD5\u4F5C\u7528\u57DF\uFF0C\u6211\u4EEC\u4ECB\u7ECD\u4E86 JavaScript \u4E2D\u7684\u4F5C\u7528\u57DF\u94FE\u548C\u95ED\u5305\uFF1B\u901A\u8FC7\u8BCD\u6CD5\u4F5C\u7528\u57DF\uFF0C\u6211\u4EEC\u5206\u6790\u4E86\u5728 JavaScript \u7684\u6267\u884C\u8FC7\u7A0B\u4E2D\uFF0C\u4F5C\u7528\u57DF\u94FE\u662F\u5DF2\u7ECF\u6CE8\u5B9A\u597D\u4E86\uFF0C\u6BD4\u5982\u5373\u4F7F\u5728 foo \u51FD\u6570\u4E2D\u8C03\u7528\u4E86 bar \u51FD\u6570\uFF0C\u4F60\u4E5F\u65E0\u6CD5\u5728 bar \u51FD\u6570\u4E2D\u76F4\u63A5\u4F7F\u7528 foo \u51FD\u6570\u4E2D\u7684\u53D8\u91CF\u4FE1\u606F\u3002</p>',30);function L(V,E){const s=c("RouterLink");return i(),l("div",null,[a("p",null,[f,t(s,{to:"/code/js/execute/block_scope.html"},{default:e(()=>[_]),_:1}),h]),y,a("p",null,[N,t(s,{to:"/code/js/execute/block_scope.html"},{default:e(()=>[w]),_:1}),x]),S,j,J,a("p",null,[q,t(s,{to:"/code/js/execute/block_scope.html"},{default:e(()=>[B]),_:1}),z]),C])}var R=o(g,[["render",L],["__file","closure.html.vue"]]);export{R as default};

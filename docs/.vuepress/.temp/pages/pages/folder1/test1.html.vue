<template><div><h2 id="关于vue下组件引入第三方外部外链js几种方式" tabindex="-1"><a class="header-anchor" href="#关于vue下组件引入第三方外部外链js几种方式" aria-hidden="true">#</a> 关于Vue下组件引入第三方外部外链Js几种方式</h2>
<p><a href="https://blog.csdn.net/u010881899/article/details/80895661" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/u010881899/article/details/80895661<ExternalLinkIcon/></a></p>
<h2 id="nginx一键配置" tabindex="-1"><a class="header-anchor" href="#nginx一键配置" aria-hidden="true">#</a> nginx一键配置</h2>
<p><a href="https://nginxconfig.io/" target="_blank" rel="noopener noreferrer">https://nginxconfig.io/<ExternalLinkIcon/></a></p>
<p><img src="/logo.png" alt="" loading="lazy"></p>
<h2 id="lodash按需加载" tabindex="-1"><a class="header-anchor" href="#lodash按需加载" aria-hidden="true">#</a> lodash按需加载</h2>
<p><a href="https://www.jianshu.com/p/f03ff4f3a8b3" target="_blank" rel="noopener noreferrer">https://www.jianshu.com/p/f03ff4f3a8b3<ExternalLinkIcon/></a></p>
<h2 id="threejs" tabindex="-1"><a class="header-anchor" href="#threejs" aria-hidden="true">#</a> threeJs</h2>
<h4 id="中文教程" tabindex="-1"><a class="header-anchor" href="#中文教程" aria-hidden="true">#</a> 中文教程</h4>
<div class="custom-container warning"><p class="custom-container-title">注意</p>
<p>This is a warning</p>
</div>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code>
<span class="token doc-comment comment">/**
 * Promise 实现 遵循promise/A+规范
 * Promise/A+规范译文:
 * https://malcolmyu.github.io/2015/06/12/Promises-A-Plus/#note-4
 */</span>

<span class="token comment">// promise 三个状态</span>
<span class="token keyword">const</span> <span class="token constant">PENDING</span> <span class="token operator">=</span> <span class="token string">"pending"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token constant">FULFILLED</span> <span class="token operator">=</span> <span class="token string">"fulfilled"</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token constant">REJECTED</span> <span class="token operator">=</span> <span class="token string">"rejected"</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">Promise</span><span class="token punctuation">(</span><span class="token parameter">excutor</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> that <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span> <span class="token comment">// 缓存当前promise实例对象</span>
    that<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token constant">PENDING</span><span class="token punctuation">;</span> <span class="token comment">// 初始状态</span>
    that<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">// fulfilled状态时 返回的信息</span>
    that<span class="token punctuation">.</span>reason <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">// rejected状态时 拒绝的原因</span>
    that<span class="token punctuation">.</span>onFulfilledCallbacks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 存储fulfilled状态对应的onFulfilled函数</span>
    that<span class="token punctuation">.</span>onRejectedCallbacks <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 存储rejected状态对应的onRejected函数</span>

    <span class="token keyword">function</span> <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// value成功态时接收的终值</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>value <span class="token keyword">instanceof</span> <span class="token class-name">Promise</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span> value<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token comment">// 为什么resolve 加setTimeout?</span>
        <span class="token comment">// 2.2.4规范 onFulfilled 和 onRejected 只允许在 execution context 栈仅包含平台代码时运行.</span>

        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token comment">// 调用resolve 回调对应onFulfilled函数</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>that<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token constant">PENDING</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 只能由pending状态 => fulfilled状态 (避免调用多次resolve reject)</span>
                that<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token constant">FULFILLED</span><span class="token punctuation">;</span>
                that<span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
                that<span class="token punctuation">.</span>onFulfilledCallbacks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">cb</span> <span class="token operator">=></span> <span class="token function">cb</span><span class="token punctuation">(</span>that<span class="token punctuation">.</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">function</span> <span class="token function">reject</span><span class="token punctuation">(</span><span class="token parameter">reason</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// reason失败态时接收的拒因</span>
        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
            <span class="token comment">// 调用reject 回调对应onRejected函数</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>that<span class="token punctuation">.</span>status <span class="token operator">===</span> <span class="token constant">PENDING</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token comment">// 只能由pending状态 => rejected状态 (避免调用多次resolve reject)</span>
                that<span class="token punctuation">.</span>status <span class="token operator">=</span> <span class="token constant">REJECTED</span><span class="token punctuation">;</span>
                that<span class="token punctuation">.</span>reason <span class="token operator">=</span> reason<span class="token punctuation">;</span>
                that<span class="token punctuation">.</span>onRejectedCallbacks<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">cb</span> <span class="token operator">=></span> <span class="token function">cb</span><span class="token punctuation">(</span>that<span class="token punctuation">.</span>reason<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 捕获在excutor执行器中抛出的异常</span>
    <span class="token comment">// new Promise((resolve, reject) => {</span>
    <span class="token comment">//     throw new Error('error in excutor')</span>
    <span class="token comment">// })</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token function">excutor</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">reject</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>

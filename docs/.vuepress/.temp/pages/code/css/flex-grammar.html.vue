<template><div><h1 id="flex-布局教程-语法篇" tabindex="-1"><a class="header-anchor" href="#flex-布局教程-语法篇" aria-hidden="true">#</a> Flex 布局教程：语法篇</h1>
<blockquote>
<p>Flex 是 Flexible Box 的缩写，意为&quot;弹性布局&quot;，用来为盒状模型提供最大的灵活性。</p>
</blockquote>
<p>任何一个容器都可以指定为 Flex 布局。</p>
<blockquote>
<p>采用 Flex 布局的元素，称为 Flex 容器（flex container），简称&quot;容器&quot;。它的所有子元素自动成为容器成员，称为 Flex 项目（flex item），简称&quot;项目&quot;。</p>
</blockquote>
<p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071004.png" alt="image" loading="lazy"></p>
<blockquote>
<p>容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。主轴的开始位置（与边框的交叉点）叫做 main start，结束位置叫做 main end；交叉轴的开始位置叫做 cross start，结束位置叫做 cross end。</p>
</blockquote>
<blockquote>
<p>项目默认沿主轴排列。单个项目占据的主轴空间叫做 main size，占据的交叉轴空间叫做 cross size。</p>
</blockquote>
<p>容器的属性，以下 6 个属性设置在容器上：</p>
<ul>
<li>flex-direction</li>
<li>flex-wrap</li>
<li>
<ul>
<li>wrap-reverse：换行，第一行在下方。</li>
</ul>
</li>
<li>flex-flow</li>
<li>
<ul>
<li>flex-flow 属性是 flex-direction 属性和 flex-wrap 属性的简写形式，默认值为 row nowrap。</li>
</ul>
</li>
<li>justify-content</li>
<li>align-items</li>
<li>align-content</li>
<li>
<ul>
<li>定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。</li>
</ul>
</li>
</ul>
<p><img src="https://www.ruanyifeng.com/blogimg/asset/2015/bg2015071012.png" alt="image" loading="lazy"></p>
<ul>
<li>
<ul>
<li>
<ul>
<li>flex-start：与交叉轴的起点对齐。</li>
</ul>
</li>
</ul>
</li>
<li>
<ul>
<li>
<ul>
<li>flex-end：与交叉轴的终点对齐。</li>
</ul>
</li>
</ul>
</li>
<li>
<ul>
<li>
<ul>
<li>center：与交叉轴的中点对齐。</li>
</ul>
</li>
</ul>
</li>
<li>
<ul>
<li>
<ul>
<li>space-between：与交叉轴两端对齐，轴线之间的间隔平均分布。</li>
</ul>
</li>
</ul>
</li>
<li>
<ul>
<li>
<ul>
<li>space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。</li>
</ul>
</li>
</ul>
</li>
<li>
<ul>
<li>
<ul>
<li>stretch（默认值）：轴线占满整个交叉轴。</li>
</ul>
</li>
</ul>
</li>
</ul>
<p>项目的属性，以下 6 个属性设置在项目上：</p>
<ul>
<li>order</li>
<li>
<ul>
<li>order 属性定义项目的排列顺序。数值越小，排列越靠前，默认为 0。</li>
</ul>
</li>
<li>flex-grow</li>
<li>
<ul>
<li>flex-grow 属性定义项目的放大比例，默认为 0，即如果存在剩余空间，也不放大。</li>
</ul>
</li>
<li>
<ul>
<li>如果所有项目的 flex-grow 属性都为 1，则它们将等分剩余空间（如果有的话）。如果一个项目的 flex-grow 属性为 2，其他项目都为 1，则前者占据的剩余空间将比其他项多一倍。</li>
</ul>
</li>
<li>flex-shrink</li>
<li>
<ul>
<li>flex-shrink 属性定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小。</li>
</ul>
</li>
<li>
<ul>
<li>如果所有项目的 flex-shrink 属性都为 1，当空间不足时，都将等比例缩小。如果一个项目的 flex-shrink 属性为 0，其他项目都为 1，则空间不足时，前者不缩小。</li>
</ul>
</li>
<li>
<ul>
<li>负值对该属性无效。</li>
</ul>
</li>
<li>flex-basis</li>
<li>
<ul>
<li>flex-basis 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为 auto，即项目的本来大小。</li>
</ul>
</li>
<li>
<ul>
<li>它可以设为跟 width 或 height 属性一样的值（比如 350px），则项目将占据固定空间。</li>
</ul>
</li>
<li>flex</li>
<li>
<ul>
<li>flex 属性是 flex-grow, flex-shrink 和 flex-basis 的简写，默认值为 0 1 auto。后两个属性可选。</li>
</ul>
</li>
<li>
<ul>
<li>该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。</li>
</ul>
</li>
<li>
<ul>
<li>建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。</li>
</ul>
</li>
<li>align-self</li>
<li>
<ul>
<li>align-self 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 align-items 属性。默认值为 auto，表示继承父元素的 align-items 属性，如果没有父元素，则等同于 stretch。</li>
</ul>
</li>
</ul>
</div></template>

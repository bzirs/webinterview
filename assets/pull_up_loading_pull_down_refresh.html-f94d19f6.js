import{ab as p,E as e,F as o,C as n,Q as a,L as t,ac as c,U as l}from"./framework-c74165a4.js";const i={},u=c(`<h1 id="面试官-如何实现上拉加载-下拉刷新" tabindex="-1"><a class="header-anchor" href="#面试官-如何实现上拉加载-下拉刷新" aria-hidden="true">#</a> 面试官：如何实现上拉加载，下拉刷新？</h1><figure><img src="https://static.vue-js.com/89cd1850-8adc-11eb-ab90-d9ae814b240d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="一、前言" tabindex="-1"><a class="header-anchor" href="#一、前言" aria-hidden="true">#</a> 一、前言</h2><p>下拉刷新和上拉加载这两种交互方式通常出现在移动端中</p><p>本质上等同于PC网页中的分页，只是交互形式不同</p><p>开源社区也有很多优秀的解决方案，如<code>iscroll</code>、<code>better-scroll</code>、<code>pulltorefresh.js</code>库等等</p><p>这些第三方库使用起来非常便捷</p><p>我们通过原生的方式实现一次上拉加载，下拉刷新，有助于对第三方库有更好的理解与使用</p><h2 id="二、实现原理" tabindex="-1"><a class="header-anchor" href="#二、实现原理" aria-hidden="true">#</a> 二、实现原理</h2><p>上拉加载及下拉刷新都依赖于用户交互</p><p>最重要的是要理解在什么场景，什么时机下触发交互动作</p><h3 id="上拉加载" tabindex="-1"><a class="header-anchor" href="#上拉加载" aria-hidden="true">#</a> 上拉加载</h3><p>首先可以看一张图</p><figure><img src="https://static.vue-js.com/df498a00-8ae3-11eb-ab90-d9ae814b240d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>上拉加载的本质是页面触底，或者快要触底时的动作</p><p>判断页面触底我们需要先了解一下下面几个属性</p><ul><li><p><code>scrollTop</code>：滚动视窗的高度距离<code>window</code>顶部的距离，它会随着往上滚动而不断增加，初始值是0，它是一个变化的值</p></li><li><p><code>clientHeight</code>:它是一个定值，表示屏幕可视区域的高度；</p></li><li><p><code>scrollHeight</code>：页面不能滚动时也是存在的,此时scrollHeight等于clientHeight。scrollHeight表示<code>body</code>所有元素的总长度(包括body元素自身的padding)</p></li></ul><p>综上我们得出一个触底公式：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>scrollTop <span class="token operator">+</span> clientHeight <span class="token operator">&gt;=</span> scrollHeight
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>简单实现</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> clientHeight  <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>clientHeight<span class="token punctuation">;</span> <span class="token comment">//浏览器高度</span>
<span class="token keyword">let</span> scrollHeight <span class="token operator">=</span> document<span class="token punctuation">.</span>body<span class="token punctuation">.</span>scrollHeight<span class="token punctuation">;</span>
<span class="token keyword">let</span> scrollTop <span class="token operator">=</span> document<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>scrollTop<span class="token punctuation">;</span>
 
<span class="token keyword">let</span> distance <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span>  <span class="token comment">//距离视窗还用50的时候，开始触发；</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>scrollTop <span class="token operator">+</span> clientHeight<span class="token punctuation">)</span> <span class="token operator">&gt;=</span> <span class="token punctuation">(</span>scrollHeight <span class="token operator">-</span> distance<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;开始加载数据&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="下拉刷新" tabindex="-1"><a class="header-anchor" href="#下拉刷新" aria-hidden="true">#</a> 下拉刷新</h3><p>下拉刷新的本质是页面本身置于顶部时，用户下拉时需要触发的动作</p><p>关于下拉刷新的原生实现，主要分成三步：</p><ul><li>监听原生<code>touchstart</code>事件，记录其初始位置的值，<code>e.touches[0].pageY</code>；</li><li>监听原生<code>touchmove</code>事件，记录并计算当前滑动的位置值与初始位置值的差值，大于<code>0</code>表示向下拉动，并借助CSS3的<code>translateY</code>属性使元素跟随手势向下滑动对应的差值，同时也应设置一个允许滑动的最大值；</li><li>监听原生<code>touchend</code>事件，若此时元素滑动达到最大值，则触发<code>callback</code>，同时将<code>translateY</code>重设为<code>0</code>，元素回到初始位置</li></ul><p>举个例子：</p><p><code>Html</code>结构如下：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>main<span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;refreshText&quot;</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span>p <span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>ul id<span class="token operator">=</span><span class="token string">&quot;refreshContainer&quot;</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span><span class="token number">111</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span><span class="token number">222</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span><span class="token number">333</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span><span class="token number">444</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>li<span class="token operator">&gt;</span><span class="token number">555</span><span class="token operator">&lt;</span><span class="token operator">/</span>li<span class="token operator">&gt;</span>
        <span class="token operator">...</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>ul<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>监听<code>touchstart</code>事件，记录初始的值</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> _element <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;refreshContainer&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    _refreshText <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;.refreshText&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    _startPos <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span>  <span class="token comment">// 初始的值</span>
    _transitionHeight <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 移动的距离</span>

_element<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;touchstart&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    _startPos <span class="token operator">=</span> e<span class="token punctuation">.</span>touches<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>pageY<span class="token punctuation">;</span> <span class="token comment">// 记录初始位置</span>
    _element<span class="token punctuation">.</span>style<span class="token punctuation">.</span>position <span class="token operator">=</span> <span class="token string">&#39;relative&#39;</span><span class="token punctuation">;</span>
    _element<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transition <span class="token operator">=</span> <span class="token string">&#39;transform 0s&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>监听<code>touchmove</code>移动事件，记录滑动差值</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>_element<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;touchmove&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// e.touches[0].pageY 当前位置</span>
    _transitionHeight <span class="token operator">=</span> e<span class="token punctuation">.</span>touches<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>pageY <span class="token operator">-</span> _startPos<span class="token punctuation">;</span> <span class="token comment">// 记录差值</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>_transitionHeight <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> _transitionHeight <span class="token operator">&lt;</span> <span class="token number">60</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> 
        _refreshText<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">&#39;下拉刷新&#39;</span><span class="token punctuation">;</span> 
        _element<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token string">&#39;translateY(&#39;</span><span class="token operator">+</span>_transitionHeight<span class="token operator">+</span><span class="token string">&#39;px)&#39;</span><span class="token punctuation">;</span>

        <span class="token keyword">if</span> <span class="token punctuation">(</span>_transitionHeight <span class="token operator">&gt;</span> <span class="token number">55</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            _refreshText<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">&#39;释放更新&#39;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>                
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后，就是监听<code>touchend</code>离开的事件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>_element<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;touchend&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    _element<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transition <span class="token operator">=</span> <span class="token string">&#39;transform 0.5s ease 1s&#39;</span><span class="token punctuation">;</span>
    _element<span class="token punctuation">.</span>style<span class="token punctuation">.</span>transform <span class="token operator">=</span> <span class="token string">&#39;translateY(0px)&#39;</span><span class="token punctuation">;</span>
    _refreshText<span class="token punctuation">.</span>innerText <span class="token operator">=</span> <span class="token string">&#39;更新中...&#39;</span><span class="token punctuation">;</span>
    <span class="token comment">// todo...</span>

<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面可以看到，在下拉到松手的过程中，经历了三个阶段：</p><ul><li>当前手势滑动位置与初始位置差值大于零时，提示正在进行下拉刷新操作</li><li>下拉到一定值时，显示松手释放后的操作提示</li><li>下拉到达设定最大值松手时，执行回调，提示正在进行更新操作</li></ul><h2 id="三、案例" tabindex="-1"><a class="header-anchor" href="#三、案例" aria-hidden="true">#</a> 三、案例</h2><p>在实际开发中，我们更多的是使用第三方库，下面以<code>better-scroll</code>进行举例：</p><p>HTML结构</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">&quot;position-wrapper&quot;</span><span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;refresh&quot;</span><span class="token operator">&gt;</span>下拉刷新<span class="token operator">&lt;</span><span class="token operator">/</span>p <span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;position-list&quot;</span><span class="token operator">&gt;</span>
   <span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>列表内容<span class="token operator">--</span><span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
        <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">&quot;more&quot;</span><span class="token operator">&gt;</span>查看更多<span class="token operator">&lt;</span><span class="token operator">/</span>p <span class="token operator">&gt;</span>
    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实例化上拉下拉插件，通过<code>use</code>来注册插件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> BScroll <span class="token keyword">from</span> <span class="token string">&quot;@better-scroll/core&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> PullDown <span class="token keyword">from</span> <span class="token string">&quot;@better-scroll/pull-down&quot;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> PullUp <span class="token keyword">from</span> <span class="token string">&#39;@better-scroll/pull-up&#39;</span><span class="token punctuation">;</span>
BScroll<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>PullDown<span class="token punctuation">)</span><span class="token punctuation">;</span>
BScroll<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>PullUp<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实例化<code>BetterScroll</code>，并传入相关的参数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">let</span> pageNo <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">,</span>pageSize <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">,</span>dataList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span>isMore <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>  
<span class="token keyword">var</span> scroll<span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BScroll</span><span class="token punctuation">(</span><span class="token string">&quot;#position-wrapper&quot;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
    <span class="token literal-property property">scrollY</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//垂直方向滚动</span>
    <span class="token literal-property property">click</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//默认会阻止浏览器的原生click事件，如果需要点击，这里要设为true</span>
    <span class="token literal-property property">pullUpLoad</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//上拉加载更多</span>
    <span class="token literal-property property">pullDownRefresh</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">threshold</span><span class="token operator">:</span><span class="token number">50</span><span class="token punctuation">,</span><span class="token comment">//触发pullingDown事件的位置</span>
        <span class="token literal-property property">stop</span><span class="token operator">:</span><span class="token number">0</span><span class="token comment">//下拉回弹后停留的位置</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//监听下拉刷新</span>
scroll<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;pullingDown&quot;</span><span class="token punctuation">,</span>pullingDownHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//监测实时滚动</span>
scroll<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;scroll&quot;</span><span class="token punctuation">,</span>scrollHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//上拉加载更多</span>
scroll<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;pullingUp&quot;</span><span class="token punctuation">,</span>pullingUpHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">pullingDownHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    dataList<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    pageNo<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span>
    isMore<span class="token operator">=</span><span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;.more&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string">&quot;查看更多&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> <span class="token function">getlist</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//请求数据</span>
    scroll<span class="token punctuation">.</span><span class="token function">finishPullDown</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//每次下拉结束后，需要执行这个操作</span>
    scroll<span class="token punctuation">.</span><span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//当滚动区域的dom结构有变化时，需要执行这个操作</span>
<span class="token punctuation">}</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">pullingUpHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>isMore<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&quot;.more&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string">&quot;没有更多数据了&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        scroll<span class="token punctuation">.</span><span class="token function">finishPullUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//每次上拉结束后，需要执行这个操作</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    pageNo<span class="token operator">++</span><span class="token punctuation">;</span>
    <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getlist</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//请求数据</span>
    scroll<span class="token punctuation">.</span><span class="token function">finishPullUp</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//每次上拉结束后，需要执行这个操作</span>
    scroll<span class="token punctuation">.</span><span class="token function">refresh</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//当滚动区域的dom结构有变化时，需要执行这个操作    </span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">scrollHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>y<span class="token operator">&gt;</span><span class="token number">50</span><span class="token punctuation">)</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.refresh&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string">&quot;松手开始加载&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span> <span class="token function">$</span><span class="token punctuation">(</span><span class="token string">&#39;.refresh&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">text</span><span class="token punctuation">(</span><span class="token string">&quot;下拉刷新&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">getlist</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//返回的数据</span>
    <span class="token keyword">let</span> result<span class="token operator">=</span><span class="token operator">...</span><span class="token punctuation">.</span><span class="token punctuation">;</span>
    dataList<span class="token operator">=</span>dataList<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">//判断是否已加载完</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>result<span class="token punctuation">.</span>length<span class="token operator">&lt;</span>pageSize<span class="token punctuation">)</span> isMore<span class="token operator">=</span><span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token comment">//将dataList渲染到html内容中</span>
<span class="token punctuation">}</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意点：</p><p>使用<code>better-scroll </code>实现下拉刷新、上拉加载时要注意以下几点：</p><ul><li><code>wrapper</code>里必须只有一个子元素</li><li>子元素的高度要比<code>wrapper</code>要高</li><li>使用的时候，要确定<code>DOM</code>元素是否已经生成，必须要等到<code>DOM</code>渲染完成后，再<code>new BScroll()</code></li><li>滚动区域的<code>DOM</code>元素结构有变化后，需要执行刷新 <code>refresh() </code></li><li>上拉或者下拉，结束后，需要执行<code>finishPullUp()</code>或者<code>finishPullDown()</code>，否则将不会执行下次操作</li><li><code>better-scroll</code>，默认会阻止浏览器的原生<code>click</code>事件，如果滚动内容区要添加点击事件，需要在实例化属性里设置<code>click:true</code></li></ul><h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h3><p>下拉刷新、上拉加载原理本身都很简单，真正复杂的是封装过程中，要考虑的兼容性、易用性、性能等诸多细节</p><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2>`,50),r={href:"https://segmentfault.com/a/1190000014423308",target:"_blank",rel:"noopener noreferrer"},k={href:"https://github.com/ustbhuangyi/better-scroll",target:"_blank",rel:"noopener noreferrer"};function d(v,m){const s=l("ExternalLinkIcon");return e(),o("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[a("https://segmentfault.com/a/1190000014423308"),t(s)])]),n("li",null,[n("a",k,[a("https://github.com/ustbhuangyi/better-scroll"),t(s)])])])])}const g=p(i,[["render",d],["__file","pull_up_loading_pull_down_refresh.html.vue"]]);export{g as default};
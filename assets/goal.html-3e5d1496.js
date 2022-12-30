import{ab as p,F as t,G as o,D as n,R as a,M as e,ac as c,V as i}from"./framework-faf0f72c.js";const l={},u=c(`<h1 id="面试官-vue3-0的设计目标是什么-做了哪些优化" tabindex="-1"><a class="header-anchor" href="#面试官-vue3-0的设计目标是什么-做了哪些优化" aria-hidden="true">#</a> 面试官：Vue3.0的设计目标是什么？做了哪些优化</h1><figure><img src="https://static.vue-js.com/b93b49c0-5c58-11eb-85f6-6fac77c0c9b3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="一、设计目标" tabindex="-1"><a class="header-anchor" href="#一、设计目标" aria-hidden="true">#</a> 一、设计目标</h2><p>不以解决实际业务痛点的更新都是耍流氓，下面我们来列举一下<code>Vue3</code>之前我们或许会面临的问题</p><ul><li><p>随着功能的增长，复杂组件的代码变得越来越难以维护</p></li><li><p>缺少一种比较「干净」的在多个组件之间提取和复用逻辑的机制</p></li><li><p>类型推断不够友好</p></li><li><p><code>bundle</code>的时间太久了</p></li></ul><p>而 <code>Vue3</code> 经过长达两三年时间的筹备，做了哪些事情？</p><p>我们从结果反推</p><ul><li>更小</li><li>更快</li><li>TypeScript支持</li><li>API设计一致性</li><li>提高自身可维护性</li><li>开放更多底层功能</li></ul><p>一句话概述，就是更小更快更友好了</p><h3 id="更小" tabindex="-1"><a class="header-anchor" href="#更小" aria-hidden="true">#</a> 更小</h3><p><code>Vue3</code>移除一些不常用的 <code>API</code></p><p>引入<code>tree-shaking</code>，可以将无用模块“剪辑”，仅打包需要的，使打包的整体体积变小了</p><h3 id="更快" tabindex="-1"><a class="header-anchor" href="#更快" aria-hidden="true">#</a> 更快</h3><p>主要体现在编译方面：</p><ul><li>diff算法优化</li><li>静态提升</li><li>事件监听缓存</li><li>SSR优化</li></ul><p>下篇文章我们会进一步介绍</p><h3 id="更友好" tabindex="-1"><a class="header-anchor" href="#更友好" aria-hidden="true">#</a> 更友好</h3><p><code>vue3</code>在兼顾<code>vue2</code>的<code>options API</code>的同时还推出了<code>composition API</code>，大大增加了代码的逻辑组织和代码复用能力</p><p>这里代码简单演示下：</p><p>存在一个获取鼠标位置的函数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> toRefs<span class="token punctuation">,</span> reactive <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">useMouse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token literal-property property">y</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">update</span> <span class="token operator">=</span> <span class="token parameter">e</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        state<span class="token punctuation">.</span>x <span class="token operator">=</span> e<span class="token punctuation">.</span>pageX<span class="token punctuation">;</span>
        state<span class="token punctuation">.</span>y <span class="token operator">=</span> e<span class="token punctuation">.</span>pageY<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;mousemove&#39;</span><span class="token punctuation">,</span>update<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;mousemove&#39;</span><span class="token punctuation">,</span>update<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们只需要调用这个函数，即可获取<code>x</code>、<code>y</code>的坐标，完全不用关注实现过程</p><p>试想一下，如果很多类似的第三方库，我们只需要调用即可，不必关注实现过程，开发效率大大提高</p><p>同时，<code>VUE3</code>是基于<code>typescipt</code>编写的，可以享受到自动的类型定义提示</p><h2 id="三、优化方案" tabindex="-1"><a class="header-anchor" href="#三、优化方案" aria-hidden="true">#</a> 三、优化方案</h2><p><code>vue3</code>从很多层面都做了优化，可以分成三个方面：</p><ul><li>源码</li><li>性能</li><li>语法 API</li></ul><h3 id="源码" tabindex="-1"><a class="header-anchor" href="#源码" aria-hidden="true">#</a> 源码</h3><p>源码可以从两个层面展开：</p><ul><li>源码管理</li><li>TypeScript</li></ul><h4 id="源码管理" tabindex="-1"><a class="header-anchor" href="#源码管理" aria-hidden="true">#</a> 源码管理</h4><p><code>vue3</code>整个源码是通过 <code>monorepo </code>的方式维护的，根据功能将不同的模块拆分到<code>packages </code>目录下面不同的子目录中</p><figure><img src="https://static.vue-js.com/d7c32520-5c58-11eb-ab90-d9ae814b240d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>这样使得模块拆分更细化，职责划分更明确，模块之间的依赖关系也更加明确，开发人员也更容易阅读、理解和更改所有模块源码，提高代码的可维护性</p><p>另外一些 <code>package</code>（比如 <code>reactivity</code> 响应式库）是可以独立于 <code>Vue</code> 使用的，这样用户如果只想使用 <code>Vue3 </code>的响应式能力，可以单独依赖这个响应式库而不用去依赖整个 <code>Vue</code></p><h4 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h4><p><code>Vue3</code>是基于<code>typeScript</code>编写的，提供了更好的类型检查，能支持复杂的类型推导</p><h3 id="性能" tabindex="-1"><a class="header-anchor" href="#性能" aria-hidden="true">#</a> 性能</h3><p><code>vue3</code>是从什么哪些方面对性能进行进一步优化呢？</p><ul><li>体积优化</li><li>编译优化</li><li>数据劫持优化</li></ul><p>这里讲述数据劫持：</p><p>在<code>vue2</code>中，数据劫持是通过<code>Object.defineProperty </code>，这个 API 有一些缺陷，并不能检测对象属性的添加和删除</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
  <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// track</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">// trigger</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>尽管<code> Vue</code>为了解决这个问题提供了 <code>set </code>和<code>delete </code>实例方法，但是对于用户来说，还是增加了一定的心智负担</p><p>同时在面对嵌套层级比较深的情况下，就存在性能问题</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token literal-property property">d</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>相比之下，<code>vue3</code>是通过<code>proxy</code>监听整个对象，那么对于删除还是监听当然也能监听到</p><p>同时<code>Proxy </code> 并不能监听到内部深层次的对象变化，而 <code>Vue3</code> 的处理方式是在<code> getter</code> 中去递归响应式，这样的好处是真正访问到的内部对象才会变成响应式，而不是无脑递归</p><h3 id="语法-api" tabindex="-1"><a class="header-anchor" href="#语法-api" aria-hidden="true">#</a> 语法 API</h3><p>这里当然说的就是<code>composition API</code>，其两大显著的优化：</p><ul><li>优化逻辑组织</li><li>优化逻辑复用</li></ul><h4 id="逻辑组织" tabindex="-1"><a class="header-anchor" href="#逻辑组织" aria-hidden="true">#</a> 逻辑组织</h4><p>一张图，我们可以很直观地感受到 <code>Composition API </code>在逻辑组织方面的优势</p><figure><img src="https://static.vue-js.com/e5804bc0-5c58-11eb-85f6-6fac77c0c9b3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>相同功能的代码编写在一块，而不像<code>options API</code>那样，各个功能的代码混成一块</p><h4 id="逻辑复用" tabindex="-1"><a class="header-anchor" href="#逻辑复用" aria-hidden="true">#</a> 逻辑复用</h4><p>在<code>vue2</code>中，我们是通过<code>mixin</code>实现功能混合，如果多个<code>mixin</code>混合，会存在两个非常明显的问题：命名冲突和数据来源不清晰</p><p>而通过<code>composition</code>这种形式，可以将一些复用的代码抽离出来作为一个函数，只要的使用的地方直接进行调用即可</p><p>同样是上文的获取鼠标位置的例子</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> toRefs<span class="token punctuation">,</span> reactive<span class="token punctuation">,</span> onUnmounted<span class="token punctuation">,</span> onMounted <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">useMouse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">x</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token literal-property property">y</span><span class="token operator">:</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">const</span> <span class="token function-variable function">update</span> <span class="token operator">=</span> <span class="token parameter">e</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        state<span class="token punctuation">.</span>x <span class="token operator">=</span> e<span class="token punctuation">.</span>pageX<span class="token punctuation">;</span>
        state<span class="token punctuation">.</span>y <span class="token operator">=</span> e<span class="token punctuation">.</span>pageY<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        window<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;mousemove&#39;</span><span class="token punctuation">,</span>update<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token function">onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        window<span class="token punctuation">.</span><span class="token function">removeEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;mousemove&#39;</span><span class="token punctuation">,</span>update<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> <span class="token function">toRefs</span><span class="token punctuation">(</span>state<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组件使用</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> useMousePosition <span class="token keyword">from</span> <span class="token string">&#39;./mouse&#39;</span>
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useMousePosition</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，整个数据来源清晰了，即使去编写更多的<code>hook</code>函数，也不会出现命名冲突的问题</p><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2>`,64),d={href:"https://juejin.cn/post/6850418112878575629#heading-5",target:"_blank",rel:"noopener noreferrer"},r={href:"https://vue3js.cn/docs/zh",target:"_blank",rel:"noopener noreferrer"};function k(v,m){const s=i("ExternalLinkIcon");return t(),o("div",null,[u,n("ul",null,[n("li",null,[n("a",d,[a("https://juejin.cn/post/6850418112878575629#heading-5"),e(s)])]),n("li",null,[n("a",r,[a("https://vue3js.cn/docs/zh"),e(s)])])])])}const b=p(l,[["render",k],["__file","goal.html.vue"]]);export{b as default};

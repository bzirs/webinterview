import{ab as n,F as a,G as s,ac as t}from"./framework-faf0f72c.js";const e={},p=t(`<h1 id="面试官-为什么data属性是一个函数而不是一个对象" tabindex="-1"><a class="header-anchor" href="#面试官-为什么data属性是一个函数而不是一个对象" aria-hidden="true">#</a> 面试官：为什么data属性是一个函数而不是一个对象？</h1><figure><img src="https://static.vue-js.com/83e51560-3acc-11eb-85f6-6fac77c0c9b3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="一、实例和组件定义data的区别" tabindex="-1"><a class="header-anchor" href="#一、实例和组件定义data的区别" aria-hidden="true">#</a> 一、实例和组件定义data的区别</h2><p><code>vue</code>实例的时候定义<code>data</code>属性既可以是一个对象，也可以是一个函数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token string">&quot;#app&quot;</span><span class="token punctuation">,</span>
    <span class="token comment">// 对象格式</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">foo</span><span class="token operator">:</span><span class="token string">&quot;foo&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// 函数格式</span>
    <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
             <span class="token literal-property property">foo</span><span class="token operator">:</span><span class="token string">&quot;foo&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>组件中定义<code>data</code>属性，只能是一个函数</p><p>如果为组件<code>data</code>直接定义为一个对象</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">&#39;component1&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
    <span class="token literal-property property">template</span><span class="token operator">:</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">&lt;div&gt;组件&lt;/div&gt;</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">data</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token literal-property property">foo</span><span class="token operator">:</span><span class="token string">&quot;foo&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>则会得到警告信息</p><figure><img src="https://static.vue-js.com/8e6fc0c0-3acc-11eb-ab90-d9ae814b240d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>警告说明：返回的<code>data</code>应该是一个函数在每一个组件实例中</p><h2 id="二、组件data定义函数与对象的区别" tabindex="-1"><a class="header-anchor" href="#二、组件data定义函数与对象的区别" aria-hidden="true">#</a> 二、组件data定义函数与对象的区别</h2><p>上面讲到组件<code>data</code>必须是一个函数，不知道大家有没有思考过这是为什么呢？</p><p>在我们定义好一个组件的时候，<code>vue</code>最终都会通过<code>Vue.extend()</code>构成组件实例</p><p>这里我们模仿组件构造函数，定义<code>data</code>属性，采用对象的形式</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
 
<span class="token punctuation">}</span>
<span class="token class-name">Component</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token punctuation">{</span>
	<span class="token literal-property property">count</span> <span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>创建两个组件实例</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>const componentA = new Component()
const componentB = new Component()
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>修改<code>componentA</code>组件<code>data</code>属性的值，<code>componentB</code>中的值也发生了改变</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>componentB<span class="token punctuation">.</span>data<span class="token punctuation">.</span>count<span class="token punctuation">)</span>  <span class="token comment">// 0</span>
componentA<span class="token punctuation">.</span>data<span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>componentB<span class="token punctuation">.</span>data<span class="token punctuation">.</span>count<span class="token punctuation">)</span>  <span class="token comment">// 1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>产生这样的原因这是两者共用了同一个内存地址，<code>componentA</code>修改的内容，同样对<code>componentB</code>产生了影响</p><p>如果我们采用函数的形式，则不会出现这种情况（函数返回的对象内存地址并不相同）</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
	<span class="token keyword">this</span><span class="token punctuation">.</span>data <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token class-name">Component</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">data</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">{</span>
   		<span class="token literal-property property">count</span> <span class="token operator">:</span> <span class="token number">0</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改<code>componentA</code>组件<code>data</code>属性的值，<code>componentB</code>中的值不受影响</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>componentB<span class="token punctuation">.</span>data<span class="token punctuation">.</span>count<span class="token punctuation">)</span>  <span class="token comment">// 0</span>
componentA<span class="token punctuation">.</span>data<span class="token punctuation">.</span>count <span class="token operator">=</span> <span class="token number">1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>componentB<span class="token punctuation">.</span>data<span class="token punctuation">.</span>count<span class="token punctuation">)</span>  <span class="token comment">// 0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>vue</code>组件可能会有很多个实例，采用函数返回一个全新<code>data</code>形式，使每个实例对象的数据不会受到其他实例对象数据的污染</p><h2 id="三、原理分析" tabindex="-1"><a class="header-anchor" href="#三、原理分析" aria-hidden="true">#</a> 三、原理分析</h2><p>首先可以看看<code>vue</code>初始化<code>data</code>的代码，<code>data</code>的定义可以是函数也可以是对象</p><p>源码位置：<code>/vue-dev/src/core/instance/state.js</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">initData</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">vm</span><span class="token operator">:</span> Component</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> data <span class="token operator">=</span> vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>data
  data <span class="token operator">=</span> vm<span class="token punctuation">.</span>_data <span class="token operator">=</span> <span class="token keyword">typeof</span> data <span class="token operator">===</span> <span class="token string">&#39;function&#39;</span>
    <span class="token operator">?</span> <span class="token function">getData</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> vm<span class="token punctuation">)</span>
    <span class="token operator">:</span> data <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token operator">...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>data</code>既能是<code>object</code>也能是<code>function</code>，那为什么还会出现上文警告呢？</p><p>别急，继续看下文</p><p>组件在创建的时候，会进行选项的合并</p><p>源码位置：<code>/vue-dev/src/core/util/options.js</code></p><p>自定义组件会进入<code>mergeOptions</code>进行选项合并</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token class-name">Vue</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">_init</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">options<span class="token operator">?</span><span class="token operator">:</span> Object</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token operator">...</span>
    <span class="token comment">// merge options</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>options <span class="token operator">&amp;&amp;</span> options<span class="token punctuation">.</span>_isComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// optimize internal component instantiation</span>
      <span class="token comment">// since dynamic options merging is pretty slow, and none of the</span>
      <span class="token comment">// internal component options needs special treatment.</span>
      <span class="token function">initInternalComponent</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      vm<span class="token punctuation">.</span>$options <span class="token operator">=</span> <span class="token function">mergeOptions</span><span class="token punctuation">(</span>
        <span class="token function">resolveConstructorOptions</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>constructor<span class="token punctuation">)</span><span class="token punctuation">,</span>
        options <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        vm
      <span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token operator">...</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义<code>data</code>会进行数据校验</p><p>源码位置：<code>/vue-dev/src/core/instance/init.js</code></p><p>这时候<code>vm</code>实例为<code>undefined</code>，进入<code>if</code>判断，若<code>data</code>类型不是<code>function</code>，则出现警告提示</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>strats<span class="token punctuation">.</span><span class="token function-variable function">data</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>
  <span class="token parameter"><span class="token literal-property property">parentVal</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
  <span class="token literal-property property">childVal</span><span class="token operator">:</span> any<span class="token punctuation">,</span>
  vm<span class="token operator">?</span><span class="token operator">:</span> Component</span>
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token operator">?</span>Function <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>vm<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>childVal <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> childVal <span class="token operator">!==</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&quot;production&quot;</span> <span class="token operator">&amp;&amp;</span>
        <span class="token function">warn</span><span class="token punctuation">(</span>
          <span class="token string">&#39;The &quot;data&quot; option should be a function &#39;</span> <span class="token operator">+</span>
            <span class="token string">&quot;that returns a per-instance value in component &quot;</span> <span class="token operator">+</span>
            <span class="token string">&quot;definitions.&quot;</span><span class="token punctuation">,</span>
          vm
        <span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">return</span> parentVal<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token function">mergeDataOrFn</span><span class="token punctuation">(</span>parentVal<span class="token punctuation">,</span> childVal<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> <span class="token function">mergeDataOrFn</span><span class="token punctuation">(</span>parentVal<span class="token punctuation">,</span> childVal<span class="token punctuation">,</span> vm<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="四、结论" tabindex="-1"><a class="header-anchor" href="#四、结论" aria-hidden="true">#</a> 四、结论</h3><ul><li>根实例对象<code>data</code>可以是对象也可以是函数（根实例是单例），不会产生数据污染情况</li><li>组件实例对象<code>data</code>必须为函数，目的是为了防止多个组件实例对象之间共用一个<code>data</code>，产生数据污染。采用函数的形式，<code>initData</code>时会将其作为工厂函数都会返回全新<code>data</code>对象</li></ul>`,42),o=[p];function c(i,l){return a(),s("div",null,o)}const d=n(e,[["render",c],["__file","data.html.vue"]]);export{d as default};

import{ab as t,F as o,G as c,D as a,R as e,M as s,ac as i,V as p}from"./framework-faf0f72c.js";const l={},d=i(`<h1 id="面试官-vue3有了解过吗-能说说跟vue2的区别吗" tabindex="-1"><a class="header-anchor" href="#面试官-vue3有了解过吗-能说说跟vue2的区别吗" aria-hidden="true">#</a> 面试官：vue3有了解过吗？能说说跟vue2的区别吗？</h1><figure><img src="https://static.vue-js.com/774b6950-5087-11eb-85f6-6fac77c0c9b3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="一、vue3介绍" tabindex="-1"><a class="header-anchor" href="#一、vue3介绍" aria-hidden="true">#</a> 一、Vue3介绍</h2><p>关于<code>vue3</code>的重构背景，尤大是这样说的：</p><p>「Vue 新版本的理念成型于 2018 年末，当时 Vue 2 的代码库已经有两岁半了。比起通用软件的生命周期来这好像也没那么久，但在这段时期，前端世界已经今昔非比了</p><p>在我们更新（和重写）Vue 的主要版本时，主要考虑两点因素：首先是新的 JavaScript 语言特性在主流浏览器中的受支持水平；其次是当前代码库中随时间推移而逐渐暴露出来的一些设计和架构问题」</p><p>简要就是：</p><ul><li>利用新的语言特性(es6)</li><li>解决架构问题</li></ul><h2 id="哪些变化" tabindex="-1"><a class="header-anchor" href="#哪些变化" aria-hidden="true">#</a> 哪些变化</h2><figure><img src="https://static.vue-js.com/9169a900-5087-11eb-85f6-6fac77c0c9b3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>从上图中，我们可以概览<code>Vue3</code>的新特性，如下：</p><ul><li>速度更快</li><li>体积减少</li><li>更易维护</li><li>更接近原生</li><li>更易使用</li></ul><h3 id="速度更快" tabindex="-1"><a class="header-anchor" href="#速度更快" aria-hidden="true">#</a> 速度更快</h3><p><code>vue3</code>相比<code>vue2</code></p><ul><li><p>重写了虚拟<code>Dom</code>实现</p></li><li><p>编译模板的优化</p></li><li><p>更高效的组件初始化</p></li><li><p><code>undate</code>性能提高1.3~2倍</p></li><li><p><code>SSR</code>速度提高了2~3倍</p></li></ul><figure><img src="https://static.vue-js.com/ac1d23d0-5087-11eb-ab90-d9ae814b240d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="体积更小" tabindex="-1"><a class="header-anchor" href="#体积更小" aria-hidden="true">#</a> 体积更小</h3><p>通过<code>webpack</code>的<code>tree-shaking</code>功能，可以将无用模块“剪辑”，仅打包需要的</p><p>能够<code>tree-shaking</code>，有两大好处：</p><ul><li><p>对开发人员，能够对<code>vue</code>实现更多其他的功能，而不必担忧整体体积过大</p></li><li><p>对使用者，打包出来的包体积变小了</p></li></ul><p><code>vue</code>可以开发出更多其他的功能，而不必担忧<code>vue</code>打包出来的整体体积过多</p><figure><img src="https://static.vue-js.com/c01af010-5087-11eb-85f6-6fac77c0c9b3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="更易维护" tabindex="-1"><a class="header-anchor" href="#更易维护" aria-hidden="true">#</a> 更易维护</h3><h4 id="compositon-api" tabindex="-1"><a class="header-anchor" href="#compositon-api" aria-hidden="true">#</a> compositon Api</h4><ul><li>可与现有的<code>Options API</code>一起使用</li><li>灵活的逻辑组合与复用</li><li><code>Vue3</code>模块可以和其他框架搭配使用</li></ul><figure><img src="https://static.vue-js.com/c5c919b0-5087-11eb-ab90-d9ae814b240d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="更好的typescript支持" tabindex="-1"><a class="header-anchor" href="#更好的typescript支持" aria-hidden="true">#</a> 更好的Typescript支持</h4><p><code>VUE3</code>是基于<code>typescipt</code>编写的，可以享受到自动的类型定义提示</p><figure><img src="https://static.vue-js.com/cc688120-5087-11eb-ab90-d9ae814b240d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h4 id="编译器重写" tabindex="-1"><a class="header-anchor" href="#编译器重写" aria-hidden="true">#</a> 编译器重写</h4><figure><img src="https://static.vue-js.com/fcd33800-5087-11eb-85f6-6fac77c0c9b3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="更接近原生" tabindex="-1"><a class="header-anchor" href="#更接近原生" aria-hidden="true">#</a> 更接近原生</h3><p>可以自定义渲染 API</p><figure><img src="https://static.vue-js.com/0c7d88a0-5088-11eb-ab90-d9ae814b240d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="更易使用" tabindex="-1"><a class="header-anchor" href="#更易使用" aria-hidden="true">#</a> 更易使用</h3><p>响应式 <code>Api</code> 暴露出来</p><figure><img src="https://static.vue-js.com/26070260-5088-11eb-ab90-d9ae814b240d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>轻松识别组件重新渲染原因</p><figure><img src="https://static.vue-js.com/43b2fcb0-5088-11eb-ab90-d9ae814b240d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="二、vue3新增特性" tabindex="-1"><a class="header-anchor" href="#二、vue3新增特性" aria-hidden="true">#</a> 二、Vue3新增特性</h2><p>Vue 3 中需要关注的一些新功能包括：</p><ul><li>framents</li><li>Teleport</li><li>composition Api</li><li>createRenderer</li></ul><h3 id="framents" tabindex="-1"><a class="header-anchor" href="#framents" aria-hidden="true">#</a> framents</h3><p>在 <code>Vue3.x</code> 中，组件现在支持有多个根节点</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span> Layout<span class="token punctuation">.</span>vue <span class="token operator">--</span><span class="token operator">&gt;</span>
<span class="token operator">&lt;</span>template<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>header<span class="token operator">&gt;</span><span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>header<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>main v<span class="token operator">-</span>bind<span class="token operator">=</span><span class="token string">&quot;$attrs&quot;</span><span class="token operator">&gt;</span><span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>main<span class="token operator">&gt;</span>
  <span class="token operator">&lt;</span>footer<span class="token operator">&gt;</span><span class="token operator">...</span><span class="token operator">&lt;</span><span class="token operator">/</span>footer<span class="token operator">&gt;</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="teleport" tabindex="-1"><a class="header-anchor" href="#teleport" aria-hidden="true">#</a> Teleport</h3><p><code>Teleport</code> 是一种能够将我们的模板移动到 <code>DOM</code> 中 <code>Vue app</code> 之外的其他位置的技术，就有点像哆啦A梦的“任意门”</p><p>在<code>vue2</code>中，像 <code>modals</code>,<code>toast</code> 等这样的元素，如果我们嵌套在 <code>Vue</code> 的某个组件内部，那么处理嵌套组件的定位、<code>z-index</code> 和样式就会变得很困难</p><p>通过<code>Teleport</code>，我们可以在组件的逻辑位置写模板代码，然后在 <code>Vue</code> 应用范围之外渲染它</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showToast<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>btn<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>打开 toast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">&gt;</span></span>
<span class="token comment">&lt;!-- to 属性就是目标位置 --&gt;</span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>teleport</span> <span class="token attr-name">to</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#teleport-target<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>visible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>toast-wrap<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>toast-msg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>我是一个 Toast 文案<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>teleport</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="createrenderer" tabindex="-1"><a class="header-anchor" href="#createrenderer" aria-hidden="true">#</a> createRenderer</h3><p>通过<code>createRenderer</code>，我们能够构建自定义渲染器，我们能够将 <code>vue</code> 的开发模型扩展到其他平台</p><p>我们可以将其生成在<code>canvas</code>画布上</p><figure><img src="https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/da4437845ec54eb3829313c92fc81afe~tplv-k3u1fbpfcp-watermark.image" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>关于<code>createRenderer</code>，我们了解下基本使用，就不展开讲述了</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createRenderer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vue/runtime-core&#39;</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> render<span class="token punctuation">,</span> createApp <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">createRenderer</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  patchProp<span class="token punctuation">,</span>
  insert<span class="token punctuation">,</span>
  remove<span class="token punctuation">,</span>
  createElement<span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span> render<span class="token punctuation">,</span> createApp <span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token operator">*</span> <span class="token keyword">from</span> <span class="token string">&#39;@vue/runtime-core&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="composition-api" tabindex="-1"><a class="header-anchor" href="#composition-api" aria-hidden="true">#</a> composition Api</h3><p>composition Api，也就是组合式<code>api</code>，通过这种形式，我们能够更加容易维护我们的代码，将相同功能的变量进行一个集中式的管理</p><figure><img src="https://static.vue-js.com/5e0bfb70-5088-11eb-ab90-d9ae814b240d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>关于<code>compositon api</code>的使用，这里以下图展开</p><figure><img src="https://static.vue-js.com/6f67a590-5088-11eb-85f6-6fac77c0c9b3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>简单使用:</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
    <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">const</span> double <span class="token operator">=</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> count<span class="token punctuation">.</span>value <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span>
        <span class="token keyword">function</span> <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            count<span class="token punctuation">.</span>value<span class="token operator">++</span>
        <span class="token punctuation">}</span>
        <span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;component mounted!&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token punctuation">{</span>
            count<span class="token punctuation">,</span>
            double<span class="token punctuation">,</span>
            increment
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三、非兼容变更" tabindex="-1"><a class="header-anchor" href="#三、非兼容变更" aria-hidden="true">#</a> 三、非兼容变更</h3><h3 id="global-api" tabindex="-1"><a class="header-anchor" href="#global-api" aria-hidden="true">#</a> Global API</h3><ul><li>全局 <code>Vue API</code> 已更改为使用应用程序实例</li><li>全局和内部 <code>API</code> 已经被重构为可 <code>tree-shakable</code></li></ul><h3 id="模板指令" tabindex="-1"><a class="header-anchor" href="#模板指令" aria-hidden="true">#</a> 模板指令</h3><ul><li>组件上 <code>v-model</code> 用法已更改</li><li><code>&lt;template v-for&gt;</code>和 非 <code>v-for</code>节点上<code>key</code>用法已更改</li><li>在同一元素上使用的 <code>v-if</code> 和 <code>v-for</code> 优先级已更改</li><li><code>v-bind=&quot;object&quot;</code> 现在排序敏感</li><li><code>v-for</code> 中的 <code>ref</code> 不再注册 <code>ref</code> 数组</li></ul><h3 id="组件" tabindex="-1"><a class="header-anchor" href="#组件" aria-hidden="true">#</a> 组件</h3><ul><li>只能使用普通函数创建功能组件</li><li><code>functional</code> 属性在单文件组件 <code>(SFC) </code></li><li>异步组件现在需要 <code>defineAsyncComponent</code> 方法来创建</li></ul><h3 id="渲染函数" tabindex="-1"><a class="header-anchor" href="#渲染函数" aria-hidden="true">#</a> 渲染函数</h3><ul><li>渲染函数<code>API</code>改变</li><li><code>$scopedSlots</code> property 已删除，所有插槽都通过 <code>$slots</code> 作为函数暴露</li><li>自定义指令 API 已更改为与组件生命周期一致</li><li>一些转换 <code>class</code> 被重命名了： <ul><li><code>v-enter</code> -&gt; <code>v-enter-from</code></li><li><code>v-leave</code> -&gt; <code>v-leave-from</code></li></ul></li><li>组件 <code>watch</code> 选项和实例方法 <code>$watch</code>不再支持点分隔字符串路径，请改用计算函数作为参数</li><li>在 <code>Vue 2.x</code> 中，应用根容器的 <code>outerHTML</code> 将替换为根组件模板 (如果根组件没有模板/渲染选项，则最终编译为模板)。<code>VUE3.x</code> 现在使用应用程序容器的 <code>innerHTML</code>。</li></ul><h3 id="其他小改变" tabindex="-1"><a class="header-anchor" href="#其他小改变" aria-hidden="true">#</a> 其他小改变</h3><ul><li><code>destroyed</code> 生命周期选项被重命名为 <code>unmounted</code></li><li><code>beforeDestroy</code> 生命周期选项被重命名为 <code>beforeUnmount</code></li><li><code>[prop default</code>工厂函数不再有权访问 <code>this</code> 是上下文</li><li>自定义指令 API 已更改为与组件生命周期一致</li><li><code>data</code> 应始终声明为函数</li><li>来自 <code>mixin</code> 的 <code>data</code> 选项现在可简单地合并</li><li><code>attribute</code> 强制策略已更改</li><li>一些过渡 <code>class</code> 被重命名</li><li>组建 watch 选项和实例方法 <code>$watch</code>不再支持以点分隔的字符串路径。请改用计算属性函数作为参数。</li><li><code>&lt;template&gt;</code> 没有特殊指令的标记 (<code>v-if/else-if/else</code>、<code>v-for</code> 或 <code>v-slot</code>) 现在被视为普通元素，并将生成原生的 <code>&lt;template&gt;</code> 元素，而不是渲染其内部内容。</li><li>在<code> Vue 2.x</code> 中，应用根容器的 <code>outerHTML</code> 将替换为根组件模板 (如果根组件没有模板/渲染选项，则最终编译为模板)。<code>Vue 3.x</code> 现在使用应用容器的 <code>innerHTML</code>，这意味着容器本身不再被视为模板的一部分。</li></ul><h3 id="移除-api" tabindex="-1"><a class="header-anchor" href="#移除-api" aria-hidden="true">#</a> 移除 API</h3><ul><li><code>keyCode</code> 支持作为 <code>v-on</code> 的修饰符</li><li><code>$on</code>，<code>$off </code>和<code> $once</code> 实例方法</li><li>过滤<code>filter</code></li><li>内联模板 <code>attribute</code></li><li><code>$destroy</code> 实例方法。用户不应再手动管理单个<code> Vue</code> 组件的生命周期。</li></ul><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2>`,77),r={href:"https://vue3js.cn/docs/zh/guide/migration/introduction.html#%E6%A8%A1%E6%9D%BF%E6%8C%87%E4%BB%A4",target:"_blank",rel:"noopener noreferrer"},u={href:"https://composition-api.vuejs.org/zh/#api-%E4%BB%8B%E7%BB%8D",target:"_blank",rel:"noopener noreferrer"};function k(h,v){const n=p("ExternalLinkIcon");return o(),c("div",null,[d,a("ul",null,[a("li",null,[a("a",r,[e("https://vue3js.cn/docs/zh/guide/migration/introduction.html#模板指令"),s(n)])]),a("li",null,[a("a",u,[e("https://composition-api.vuejs.org/zh/#api-介绍"),s(n)])])])])}const m=t(l,[["render",k],["__file","vue3_vue2.html.vue"]]);export{m as default};

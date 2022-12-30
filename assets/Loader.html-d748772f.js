import{ab as p,F as o,G as l,D as s,R as n,M as e,ac as t,V as r}from"./framework-faf0f72c.js";const c={},i=t(`<h1 id="面试官-说说webpack中常见的loader-解决了什么问题" tabindex="-1"><a class="header-anchor" href="#面试官-说说webpack中常见的loader-解决了什么问题" aria-hidden="true">#</a> 面试官：说说webpack中常见的Loader？解决了什么问题？</h1><figure><img src="https://static.vue-js.com/5660fc40-a6ff-11eb-85f6-6fac77c0c9b3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="一、是什么" tabindex="-1"><a class="header-anchor" href="#一、是什么" aria-hidden="true">#</a> 一、是什么</h2><p><code>loader</code> 用于对模块的&quot;源代码&quot;进行转换，在 <code>import</code> 或&quot;加载&quot;模块时预处理文件</p><p><code>webpack</code>做的事情，仅仅是分析出各种模块的依赖关系，然后形成资源列表，最终打包生成到指定的文件中。如下图所示：</p><figure><img src="https://static.vue-js.com/7b8d9640-a6ff-11eb-ab90-d9ae814b240d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在<code>webpack</code>内部中，任何文件都是模块，不仅仅只是<code>js</code>文件</p><p>默认情况下，在遇到<code>import</code>或者<code>require</code>加载模块的时候，<code>webpack</code>只支持对<code>js</code> 和 <code>json</code> 文件打包</p><p>像<code>css</code>、<code>sass</code>、<code>png</code>等这些类型的文件的时候，<code>webpack</code>则无能为力，这时候就需要配置对应的<code>loader</code>进行文件内容的解析</p><p>在加载模块的时候，执行顺序如下：</p><figure><img src="https://static.vue-js.com/9c2c43b0-a6ff-11eb-85f6-6fac77c0c9b3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>当 <code>webpack</code> 碰到不识别的模块的时候，<code>webpack</code> 会在配置的中查找该文件解析规则</p><p>关于配置<code>loader</code>的方式有三种：</p><ul><li>配置方式（推荐）：在 webpack.config.js文件中指定 loader</li><li>内联方式：在每个 import 语句中显式指定 loader</li><li>CLI 方式：在 shell 命令中指定它们</li></ul><h3 id="配置方式" tabindex="-1"><a class="header-anchor" href="#配置方式" aria-hidden="true">#</a> 配置方式</h3><p>关于<code>loader</code>的配置，我们是写在<code>module.rules</code>属性中，属性介绍如下：</p><ul><li><p><code>rules</code>是一个数组的形式，因此我们可以配置很多个<code>loader</code></p></li><li><p>每一个<code>loader</code>对应一个对象的形式，对象属性<code>test</code> 为匹配的规则，一般情况为正则表达式</p></li><li><p>属性<code>use</code>针对匹配到文件类型，调用对应的 <code>loader</code> 进行处理</p></li></ul><p>代码编写，如下形式：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;style-loader&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span>
            <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">{</span> <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&#39;sass-loader&#39;</span> <span class="token punctuation">}</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、特性" tabindex="-1"><a class="header-anchor" href="#二、特性" aria-hidden="true">#</a> 二、特性</h2><p>这里继续拿上述代码，来讲讲<code>loader</code>的特性</p><p>从上述代码可以看到，在处理<code>css</code>模块的时候，<code>use</code>属性中配置了三个<code>loader</code>分别处理<code>css</code>文件</p><p>因为<code>loader </code>支持链式调用，链中的每个<code>loader</code>会处理之前已处理过的资源，最终变为<code>js</code>代码。顺序为相反的顺序执行，即上述执行方式为<code>sass-loader</code>、<code>css-loader</code>、<code>style-loader</code></p><p>除此之外，<code>loader</code>的特性还有如下：</p><ul><li>loader 可以是同步的，也可以是异步的</li><li>loader 运行在 Node.js 中，并且能够执行任何操作</li><li>除了常见的通过 <code>package.json</code> 的 <code>main</code> 来将一个 npm 模块导出为 loader，还可以在 module.rules 中使用 <code>loader</code> 字段直接引用一个模块</li><li>插件(plugin)可以为 loader 带来更多特性</li><li>loader 能够产生额外的任意文件</li></ul><p>可以通过 loader 的预处理函数，为 JavaScript 生态系统提供更多能力。用户现在可以更加灵活地引入细粒度逻辑，例如：压缩、打包、语言翻译和更多其他特性</p><h2 id="三、常见的loader" tabindex="-1"><a class="header-anchor" href="#三、常见的loader" aria-hidden="true">#</a> 三、常见的loader</h2><p>在页面开发过程中，我们经常性加载除了<code>js</code>文件以外的内容，这时候我们就需要配置响应的<code>loader</code>进行加载</p><p>常见的<code>loader</code>如下：</p><ul><li>style-loader: 将css添加到DOM的内联样式标签style里</li><li>css-loader :允许将css文件通过require的方式引入，并返回css代码</li><li>less-loader: 处理less</li><li>sass-loader: 处理sass</li><li>postcss-loader: 用postcss来处理CSS</li><li>autoprefixer-loader: 处理CSS3属性前缀，已被弃用，建议直接使用postcss</li><li>file-loader: 分发文件到output目录并返回相对路径</li><li>url-loader: 和file-loader类似，但是当文件小于设定的limit时可以返回一个Data Url</li><li>html-minify-loader: 压缩HTML</li><li>babel-loader :用babel来转换ES6文件到ES</li></ul><p>下面给出一些常见的<code>loader</code>的使用：</p><h3 id="css-loader" tabindex="-1"><a class="header-anchor" href="#css-loader" aria-hidden="true">#</a> css-loader</h3><p>分析 <code>css</code> 模块之间的关系，并合成⼀个 <code>css</code></p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev css-loader
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token operator">...</span><span class="token punctuation">,</span>
 <span class="token punctuation">{</span>
  <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
     <span class="token comment">// 启用/禁用 url() 处理</span>
     <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
     <span class="token comment">// 启用/禁用 @import 处理</span>
     <span class="token keyword">import</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token comment">// 启用/禁用 Sourcemap</span>
        <span class="token literal-property property">sourceMap</span><span class="token operator">:</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果只通过<code>css-loader</code>加载文件，这时候页面代码设置的样式并没有生效</p><p>原因在于，<code>css-loader</code>只是负责将<code>.css</code>文件进行一个解析，而并不会将解析后的<code>css</code>插入到页面中</p><p>如果我们希望再完成插入<code>style</code>的操作，那么我们还需要另外一个<code>loader</code>，就是<code>style-loader</code></p><h3 id="style-loader" tabindex="-1"><a class="header-anchor" href="#style-loader" aria-hidden="true">#</a> style-loader</h3><p>把 <code>css-loader</code> 生成的内容，用 <code>style</code> 标签挂载到页面的 <code>head</code> 中</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev style-loader
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token operator">...</span><span class="token punctuation">,</span>
 <span class="token punctuation">{</span>
  <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">]</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>同一个任务的 <code>loader</code> 可以同时挂载多个，处理顺序为：从右到左，从下往上</p><h3 id="less-loader" tabindex="-1"><a class="header-anchor" href="#less-loader" aria-hidden="true">#</a> less-loader</h3><p>开发中，我们也常常会使用<code>less</code>、<code>sass</code>、<code>stylus</code>预处理器编写<code>css</code>样式，使开发效率提高，这里需要使用<code>less-loader</code></p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>npm install less-loader -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token operator">...</span><span class="token punctuation">,</span>
 <span class="token punctuation">{</span>
  <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.css$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;style-loader&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;css-loader&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;less-loader&quot;</span><span class="token punctuation">]</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="raw-loader" tabindex="-1"><a class="header-anchor" href="#raw-loader" aria-hidden="true">#</a> raw-loader</h3><p>在 <code>webpack </code>中通过 <code>import </code>方式导入文件内容，该<code>loader </code>并不是内置的，所以首先要安装</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev raw-loader
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后在 webpack.config.js 中进行配置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(txt|md)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
        <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token string">&#39;raw-loader&#39;</span>
     <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="file-loader" tabindex="-1"><a class="header-anchor" href="#file-loader" aria-hidden="true">#</a> file-loader</h3><p>把识别出的资源模块，移动到指定的输出⽬目录，并且返回这个资源在输出目录的地址(字符串)</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev file-loader
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token operator">...</span><span class="token punctuation">,</span>
 <span class="token punctuation">{</span>
  <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|jpe?g|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;file-loader&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// placeholder 占位符 [name] 源资源模块的名称</span>
        <span class="token comment">// [ext] 源资源模块的后缀</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;[name]_[hash].[ext]&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">//打包后的存放位置</span>
        <span class="token literal-property property">outputPath</span><span class="token operator">:</span> <span class="token string">&quot;./images&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">// 打包后文件的 url</span>
        <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&#39;./images&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="url-loader" tabindex="-1"><a class="header-anchor" href="#url-loader" aria-hidden="true">#</a> url-loader</h3><p>可以处理理 <code>file-loader</code> 所有的事情，但是遇到图片格式的模块，可以选择性的把图片转成 <code>base64</code> 格式的字符串，并打包到 <code>js</code> 中，对小体积的图片比较合适，大图片不合适。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev url-loader
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token operator">...</span><span class="token punctuation">,</span>
 <span class="token punctuation">{</span>
  <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.(png|jpe?g|gif)$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
    <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">loader</span><span class="token operator">:</span> <span class="token string">&quot;url-loader&quot;</span><span class="token punctuation">,</span>
      <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token comment">// placeholder 占位符 [name] 源资源模块的名称</span>
        <span class="token comment">// [ext] 源资源模块的后缀</span>
        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&quot;[name]_[hash].[ext]&quot;</span><span class="token punctuation">,</span>
        <span class="token comment">//打包后的存放位置</span>
        <span class="token literal-property property">outputPath</span><span class="token operator">:</span> <span class="token string">&quot;./images&quot;</span>
        <span class="token comment">// 打包后文件的 url</span>
        <span class="token literal-property property">publicPath</span><span class="token operator">:</span> <span class="token string">&#39;./images&#39;</span><span class="token punctuation">,</span>
        <span class="token comment">// 小于 100 字节转成 base64 格式</span>
        <span class="token literal-property property">limit</span><span class="token operator">:</span> <span class="token number">100</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2>`,61),d={href:"https://webpack.docschina.org/concepts/loaders/",target:"_blank",rel:"noopener noreferrer"},u={href:"https://segmentfault.com/a/1190000018680530",target:"_blank",rel:"noopener noreferrer"},v={href:"https://vue3js.cn/interview/",target:"_blank",rel:"noopener noreferrer"};function k(m,b){const a=r("ExternalLinkIcon");return o(),l("div",null,[i,s("ul",null,[s("li",null,[s("a",d,[n("https://webpack.docschina.org/concepts/loaders/"),e(a)])]),s("li",null,[s("a",u,[n("https://segmentfault.com/a/1190000018680530"),e(a)])]),s("li",null,[s("a",v,[n("https://vue3js.cn/interview/"),e(a)])])])])}const h=p(c,[["render",k],["__file","Loader.html.vue"]]);export{h as default};

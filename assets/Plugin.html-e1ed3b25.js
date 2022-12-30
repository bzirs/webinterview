import{ab as t,F as p,G as c,D as n,R as a,M as e,ac as l,V as o}from"./framework-faf0f72c.js";const i={},u=l(`<h1 id="面试官-说说webpack中常见的plugin-解决了什么问题" tabindex="-1"><a class="header-anchor" href="#面试官-说说webpack中常见的plugin-解决了什么问题" aria-hidden="true">#</a> 面试官：说说webpack中常见的Plugin？解决了什么问题？</h1><figure><img src="https://static.vue-js.com/8d3978a0-a7c2-11eb-85f6-6fac77c0c9b3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="一、是什么" tabindex="-1"><a class="header-anchor" href="#一、是什么" aria-hidden="true">#</a> 一、是什么</h2><p><code>Plugin</code>（Plug-in）是一种计算机应用程序，它和主应用程序互相交互，以提供特定的功能</p><p>是一种遵循一定规范的应用程序接口编写出来的程序，只能运行在程序规定的系统下，因为其需要调用原纯净系统提供的函数库或者数据</p><p><code>webpack</code>中的<code>plugin</code>也是如此，<code>plugin</code>赋予其各种灵活的功能，例如打包优化、资源管理、环境变量注入等，它们会运行在 <code>webpack</code> 的不同阶段（钩子 / 生命周期），贯穿了<code>webpack</code>整个编译周期</p><figure><img src="https://static.vue-js.com/9a04ec40-a7c2-11eb-ab90-d9ae814b240d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>目的在于解决<code>loader</code> 无法实现的其他事</p><h3 id="配置方式" tabindex="-1"><a class="header-anchor" href="#配置方式" aria-hidden="true">#</a> 配置方式</h3><p>这里讲述文件的配置方式，一般情况，通过配置文件导出对象中<code>plugins</code>属性传入<code>new</code>实例对象。如下所示：</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;html-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 通过 npm 安装</span>
<span class="token keyword">const</span> webpack <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 访问内置的插件</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token operator">...</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token keyword">new</span> <span class="token class-name">webpack<span class="token punctuation">.</span>ProgressPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&#39;./src/index.html&#39;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、特性" tabindex="-1"><a class="header-anchor" href="#二、特性" aria-hidden="true">#</a> 二、特性</h2><p>其本质是一个具有<code>apply</code>方法<code>javascript</code>对象</p><p><code>apply</code> 方法会被 <code>webpack compiler </code>调用，并且在整个编译生命周期都可以访问 <code>compiler </code>对象</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> pluginName <span class="token operator">=</span> <span class="token string">&#39;ConsoleLogOnBuildWebpackPlugin&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">class</span> <span class="token class-name">ConsoleLogOnBuildWebpackPlugin</span> <span class="token punctuation">{</span>
  <span class="token function">apply</span><span class="token punctuation">(</span><span class="token parameter">compiler</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    compiler<span class="token punctuation">.</span>hooks<span class="token punctuation">.</span>run<span class="token punctuation">.</span><span class="token function">tap</span><span class="token punctuation">(</span>pluginName<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">compilation</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;webpack 构建过程开始！&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> ConsoleLogOnBuildWebpackPlugin<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>compiler hook</code> 的 <code>tap </code>方法的第一个参数，应是驼峰式命名的插件名称</p><p>关于整个编译生命周期钩子，有如下：</p><ul><li>entry-option ：初始化 option</li><li>run</li><li>compile： 真正开始的编译，在创建 compilation 对象之前</li><li>compilation ：生成好了 compilation 对象</li><li>make 从 entry 开始递归分析依赖，准备对每个模块进行 build</li><li>after-compile： 编译 build 过程结束</li><li>emit ：在将内存中 assets 内容写到磁盘文件夹之前</li><li>after-emit ：在将内存中 assets 内容写到磁盘文件夹之后</li><li>done： 完成所有的编译过程</li><li>failed： 编译失败的时候</li></ul><h2 id="三、常见的plugin" tabindex="-1"><a class="header-anchor" href="#三、常见的plugin" aria-hidden="true">#</a> 三、常见的Plugin</h2><p>常见的<code>plugin</code>有如图所示：</p><figure><img src="https://static.vue-js.com/bd749400-a7c2-11eb-85f6-6fac77c0c9b3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>下面介绍几个常用的插件用法：</p><h3 id="htmlwebpackplugin" tabindex="-1"><a class="header-anchor" href="#htmlwebpackplugin" aria-hidden="true">#</a> HtmlWebpackPlugin</h3><p>在打包结束后，⾃动生成⼀个 <code>html</code> ⽂文件，并把打包生成的<code> js</code> 模块引⼊到该 <code>html</code> 中</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev html-webpack-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// webpack.config.js</span>
<span class="token keyword">const</span> HtmlWebpackPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;html-webpack-plugin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token operator">...</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
     <span class="token keyword">new</span> <span class="token class-name">HtmlWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
       <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&quot;My App&quot;</span><span class="token punctuation">,</span>
       <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&quot;app.html&quot;</span><span class="token punctuation">,</span>
       <span class="token literal-property property">template</span><span class="token operator">:</span> <span class="token string">&quot;./src/html/index.html&quot;</span>
     <span class="token punctuation">}</span><span class="token punctuation">)</span> 
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token comment">&lt;!--./src/html/index.html--&gt;</span>
<span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">http-equiv</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>X-UA-Compatible<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ie=edge<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>&lt;%=htmlWebpackPlugin.options.title%&gt;<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>html-webpack-plugin<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 <code>html</code> 模板中，可以通过 <code>&lt;%=htmlWebpackPlugin.options.XXX%&gt;</code> 的方式获取配置的值</p><p>更多的配置可以自寻查找</p><h3 id="clean-webpack-plugin" tabindex="-1"><a class="header-anchor" href="#clean-webpack-plugin" aria-hidden="true">#</a> clean-webpack-plugin</h3><p>删除（清理）构建目录</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev clean-webpack-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span>CleanWebpackPlugin<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;clean-webpack-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token operator">...</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token operator">...</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">CleanWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="mini-css-extract-plugin" tabindex="-1"><a class="header-anchor" href="#mini-css-extract-plugin" aria-hidden="true">#</a> mini-css-extract-plugin</h3><p>提取 <code>CSS</code> 到一个单独的文件中</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> --save-dev mini-css-extract-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> MiniCssExtractPlugin <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mini-css-extract-plugin&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token operator">...</span><span class="token punctuation">,</span>
  <span class="token literal-property property">module</span><span class="token operator">:</span> <span class="token punctuation">{</span>
   <span class="token literal-property property">rules</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
     <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.s[ac]ss$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span>
     <span class="token literal-property property">use</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
       <span class="token literal-property property">loader</span><span class="token operator">:</span> MiniCssExtractPlugin<span class="token punctuation">.</span>loader
     <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token string">&#39;css-loader&#39;</span><span class="token punctuation">,</span>
          <span class="token string">&#39;sass-loader&#39;</span>
        <span class="token punctuation">]</span>
   <span class="token punctuation">}</span>
   <span class="token punctuation">]</span>
 <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token operator">...</span><span class="token punctuation">,</span>
    <span class="token keyword">new</span> <span class="token class-name">MiniCssExtractPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
     <span class="token literal-property property">filename</span><span class="token operator">:</span> <span class="token string">&#39;[name].css&#39;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="defineplugin" tabindex="-1"><a class="header-anchor" href="#defineplugin" aria-hidden="true">#</a> DefinePlugin</h3><p>允许在编译时创建配置的全局对象，是一个<code>webpack</code>内置的插件，不需要安装</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> DefinePlugun <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;webpack&#39;</span><span class="token punctuation">)</span>

module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
 <span class="token operator">...</span>
    <span class="token literal-property property">plugins</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token keyword">new</span> <span class="token class-name">DefinePlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
            <span class="token constant">BASE_URL</span><span class="token operator">:</span><span class="token string">&#39;&quot;./&quot;&#39;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这时候编译<code>template</code>模块的时候，就能通过下述形式获取全局对象</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>&lt;link rel=&quot;icon&quot; href=&quot;&lt;%= BASE_URL%&gt;favicon.ico&gt;&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="copy-webpack-plugin" tabindex="-1"><a class="header-anchor" href="#copy-webpack-plugin" aria-hidden="true">#</a> copy-webpack-plugin</h3><p>复制文件或目录到执行区域，如<code>vue</code>的打包过程中，如果我们将一些文件放到<code>public</code>的目录下，那么这个目录会被复制到<code>dist</code>文件夹中</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>npm install copy-webpack-plugin -D
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">new</span> <span class="token class-name">CopyWebpackPlugin</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">parrerns</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token literal-property property">from</span><span class="token operator">:</span><span class="token string">&quot;public&quot;</span><span class="token punctuation">,</span>
            <span class="token literal-property property">globOptions</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token literal-property property">ignore</span><span class="token operator">:</span><span class="token punctuation">[</span>
                    <span class="token string">&#39;**/index.html&#39;</span>
                <span class="token punctuation">]</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>复制的规则在<code>patterns</code>属性中设置：</p><ul><li><p>from：设置从哪一个源中开始复制</p></li><li><p>to：复制到的位置，可以省略，会默认复制到打包的目录下</p></li><li><p>globOptions：设置一些额外的选项，其中可以编写需要忽略的文件</p></li></ul><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2>`,49),r={href:"https://webpack.docschina.org/concepts/plugins/",target:"_blank",rel:"noopener noreferrer"},d={href:"https://baike.baidu.com/item/Plugin",target:"_blank",rel:"noopener noreferrer"},k={href:"https://segmentfault.com/a/1190000018695134",target:"_blank",rel:"noopener noreferrer"},v={href:"https://vue3js.cn/interview",target:"_blank",rel:"noopener noreferrer"};function m(g,b){const s=o("ExternalLinkIcon");return p(),c("div",null,[u,n("ul",null,[n("li",null,[n("a",r,[a("https://webpack.docschina.org/concepts/plugins/"),e(s)])]),n("li",null,[n("a",d,[a("https://baike.baidu.com/item/Plugin"),e(s)])]),n("li",null,[n("a",k,[a("https://segmentfault.com/a/1190000018695134"),e(s)])]),n("li",null,[n("a",v,[a("https://vue3js.cn/interview"),e(s)])])])])}const f=t(i,[["render",m],["__file","Plugin.html.vue"]]);export{f as default};

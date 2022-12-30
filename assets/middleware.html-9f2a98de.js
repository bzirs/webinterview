import{ab as p,F as o,G as e,D as n,R as a,M as t,ac as c,V as i}from"./framework-faf0f72c.js";const u={},l=c(`<h1 id="面试官-说说对中间件概念的理解-如何封装-node-中间件" tabindex="-1"><a class="header-anchor" href="#面试官-说说对中间件概念的理解-如何封装-node-中间件" aria-hidden="true">#</a> 面试官：说说对中间件概念的理解，如何封装 node 中间件？</h1><figure><img src="https://static.vue-js.com/614ae480-cce4-11eb-ab90-d9ae814b240d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="一、是什么" tabindex="-1"><a class="header-anchor" href="#一、是什么" aria-hidden="true">#</a> 一、是什么</h2><p>中间件（Middleware）是介于应用系统和系统软件之间的一类软件，它使用系统软件所提供的基础服务（功能），衔接网络上应用系统的各个部分或不同的应用，能够达到资源共享、功能共享的目的</p><p>在<code>NodeJS</code>中，中间件主要是指封装<code>http</code>请求细节处理的方法</p><p>例如在<code>express</code>、<code>koa</code>等<code>web</code>框架中，中间件的本质为一个回调函数，参数包含请求对象、响应对象和执行下一个中间件的函数</p><figure><img src="https://static.vue-js.com/6a6ed3f0-cce4-11eb-85f6-6fac77c0c9b3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在这些中间件函数中，我们可以执行业务逻辑代码，修改请求和响应对象、返回响应数据等操作</p><h2 id="二、封装" tabindex="-1"><a class="header-anchor" href="#二、封装" aria-hidden="true">#</a> 二、封装</h2><p><code>koa</code>是基于<code>NodeJS</code>当前比较流行的<code>web</code>框架，本身支持的功能并不多，功能都可以通过中间件拓展实现。通过添加不同的中间件，实现不同的需求，从而构建一个 <code>Koa</code> 应用</p><p><code>Koa</code> 中间件采用的是洋葱圈模型，每次执行下一个中间件传入两个参数：</p><ul><li>ctx ：封装了request 和 response 的变量</li><li>next ：进入下一个要执行的中间件的函数</li></ul><figure><img src="https://static.vue-js.com/7507b020-cce4-11eb-ab90-d9ae814b240d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>下面就针对<code>koa</code>进行中间件的封装：</p><p><code>Koa </code>的中间件就是函数，可以是<code> async</code> 函数，或是普通函数</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// async 函数</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> start <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> ms <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> start<span class="token punctuation">;</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>ctx<span class="token punctuation">.</span>method<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>ctx<span class="token punctuation">.</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> - </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>ms<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">ms</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 普通函数</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> start <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> ms <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> start<span class="token punctuation">;</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>ctx<span class="token punctuation">.</span>method<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>ctx<span class="token punctuation">.</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> - </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>ms<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">ms</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下面则通过中间件封装<code>http</code>请求过程中几个常用的功能：</p><h3 id="token校验" tabindex="-1"><a class="header-anchor" href="#token校验" aria-hidden="true">#</a> token校验</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">async</span> <span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> next<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token comment">// 获取 token</span>
    <span class="token keyword">const</span> token <span class="token operator">=</span> ctx<span class="token punctuation">.</span>header<span class="token punctuation">.</span>authorization
    <span class="token keyword">if</span> <span class="token punctuation">(</span>token<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">try</span> <span class="token punctuation">{</span>
          <span class="token comment">// verify 函数验证 token，并获取用户相关信息</span>
          <span class="token keyword">await</span> <span class="token function">verify</span><span class="token punctuation">(</span>token<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// 进入下一个中间件</span>
    <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="日志模块" tabindex="-1"><a class="header-anchor" href="#日志模块" aria-hidden="true">#</a> 日志模块</h3><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> startTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> requestTime <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token keyword">const</span> ms <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> startTime<span class="token punctuation">;</span>
  <span class="token keyword">let</span> logout <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>ctx<span class="token punctuation">.</span>request<span class="token punctuation">.</span>ip<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> -- </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>requestTime<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> -- </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>ctx<span class="token punctuation">.</span>method<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> -- </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>ctx<span class="token punctuation">.</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> -- </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>ms<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">ms</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
  <span class="token comment">// 输出日志文件</span>
  fs<span class="token punctuation">.</span><span class="token function">appendFileSync</span><span class="token punctuation">(</span><span class="token string">&#39;./log.txt&#39;</span><span class="token punctuation">,</span> logout <span class="token operator">+</span> <span class="token string">&#39;\\n&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>Koa</code>存在很多第三方的中间件，如<code>koa-bodyparser</code>、<code>koa-static</code>等</p><p>下面再来看看它们的大体的简单实现：</p><h3 id="koa-bodyparser" tabindex="-1"><a class="header-anchor" href="#koa-bodyparser" aria-hidden="true">#</a> koa-bodyparser</h3><p><code>koa-bodyparser</code> 中间件是将我们的 <code>post</code> 请求和表单提交的查询字符串转换成对象，并挂在 <code>ctx.request.body</code> 上，方便我们在其他中间件或接口处取值</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// 文件：my-koa-bodyparser.js</span>
<span class="token keyword">const</span> querystring <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;querystring&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">bodyParser</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">await</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token comment">// 存储数据的数组</span>
            <span class="token keyword">let</span> dataArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

            <span class="token comment">// 接收数据</span>
            ctx<span class="token punctuation">.</span>req<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;data&quot;</span><span class="token punctuation">,</span> <span class="token parameter">data</span> <span class="token operator">=&gt;</span> dataArr<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 整合数据并使用 Promise 成功</span>
            ctx<span class="token punctuation">.</span>req<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&quot;end&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                <span class="token comment">// 获取请求数据的类型 json 或表单</span>
                <span class="token keyword">let</span> contentType <span class="token operator">=</span> ctx<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;Content-Type&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token comment">// 获取数据 Buffer 格式</span>
                <span class="token keyword">let</span> data <span class="token operator">=</span> Buffer<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span>dataArr<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token keyword">if</span> <span class="token punctuation">(</span>contentType <span class="token operator">===</span> <span class="token string">&quot;application/x-www-form-urlencoded&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// 如果是表单提交，则将查询字符串转换成对象赋值给 ctx.request.body</span>
                    ctx<span class="token punctuation">.</span>request<span class="token punctuation">.</span>body <span class="token operator">=</span> querystring<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>contentType <span class="token operator">===</span> <span class="token string">&quot;applaction/json&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token comment">// 如果是 json，则将字符串格式的对象转换成对象赋值给 ctx.request.body</span>
                    ctx<span class="token punctuation">.</span>request<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>

                <span class="token comment">// 执行成功的回调</span>
                <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 继续向下执行</span>
        <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="koa-static" tabindex="-1"><a class="header-anchor" href="#koa-static" aria-hidden="true">#</a> koa-static</h3><p><code>koa-static</code> 中间件的作用是在服务器接到请求时，帮我们处理静态文件</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;fs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;path&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> mime <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;mime&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> promisify <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&quot;util&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 将 stat 和 access 转换成 Promise</span>
<span class="token keyword">const</span> stat <span class="token operator">=</span> <span class="token function">promisify</span><span class="token punctuation">(</span>fs<span class="token punctuation">.</span>stat<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> access <span class="token operator">=</span> <span class="token function">promisify</span><span class="token punctuation">(</span>fs<span class="token punctuation">.</span>access<span class="token punctuation">)</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">dir</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx<span class="token punctuation">,</span> next</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token comment">// 将访问的路由处理成绝对路径，这里要使用 join 因为有可能是 /</span>
        <span class="token keyword">let</span> realPath <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>dir<span class="token punctuation">,</span> ctx<span class="token punctuation">.</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">try</span> <span class="token punctuation">{</span>
            <span class="token comment">// 获取 stat 对象</span>
            <span class="token keyword">let</span> statObj <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">stat</span><span class="token punctuation">(</span>realPath<span class="token punctuation">)</span><span class="token punctuation">;</span>

            <span class="token comment">// 如果是文件，则设置文件类型并直接响应内容，否则当作文件夹寻找 index.html</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>statObj<span class="token punctuation">.</span><span class="token function">isFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                ctx<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;Content-Type&quot;</span><span class="token punctuation">,</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>mime<span class="token punctuation">.</span><span class="token function">getType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">;charset=utf8</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span>realPath<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
                <span class="token keyword">let</span> filename <span class="token operator">=</span> path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>realPath<span class="token punctuation">,</span> <span class="token string">&quot;index.html&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token comment">// 如果不存在该文件则执行 catch 中的 next 交给其他中间件处理</span>
                <span class="token keyword">await</span> <span class="token function">access</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token comment">// 存在设置文件类型并响应内容</span>
                ctx<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">&quot;Content-Type&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;text/html;charset=utf8&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> fs<span class="token punctuation">.</span><span class="token function">createReadStream</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">await</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、总结" tabindex="-1"><a class="header-anchor" href="#三、总结" aria-hidden="true">#</a> 三、总结</h2><p>在实现中间件时候，单个中间件应该足够简单，职责单一，中间件的代码编写应该高效，必要的时候通过缓存重复获取数据</p><p><code>koa</code>本身比较简洁，但是通过中间件的机制能够实现各种所需要的功能，使得<code>web</code>应用具备良好的可拓展性和组合性</p><p>通过将公共逻辑的处理编写在中间件中，可以不用在每一个接口回调中做相同的代码编写，减少了冗杂代码，过程就如装饰者模式</p><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2>`,34),k={href:"https://segmentfault.com/a/1190000017897279",target:"_blank",rel:"noopener noreferrer"},r={href:"https://www.jianshu.com/p/81b6ebc0dd85",target:"_blank",rel:"noopener noreferrer"},d={href:"https://baike.baidu.com/item/%E4%B8%AD%E9%97%B4%E4%BB%B6",target:"_blank",rel:"noopener noreferrer"};function v(m,b){const s=i("ExternalLinkIcon");return o(),e("div",null,[l,n("ul",null,[n("li",null,[n("a",k,[a("https://segmentfault.com/a/1190000017897279"),t(s)])]),n("li",null,[n("a",r,[a("https://www.jianshu.com/p/81b6ebc0dd85"),t(s)])]),n("li",null,[n("a",d,[a("https://baike.baidu.com/item/中间件"),t(s)])])])])}const g=p(u,[["render",v],["__file","middleware.html.vue"]]);export{g as default};

import{ab as d,F as a,G as o,D as e,R as c,M as t,ac as l,V as r}from"./framework-faf0f72c.js";const n={},s=l(`<h1 id="说说对git-pull-和-git-fetch-的理解-有什么区别" tabindex="-1"><a class="header-anchor" href="#说说对git-pull-和-git-fetch-的理解-有什么区别" aria-hidden="true">#</a> 说说对git pull 和 git fetch 的理解？有什么区别？</h1><figure><img src="https://static.vue-js.com/cc90c050-fac2-11eb-991d-334fd31f0201.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="一、是什么" tabindex="-1"><a class="header-anchor" href="#一、是什么" aria-hidden="true">#</a> 一、是什么</h2><p>先回顾两个命令的定义</p><ul><li>git fetch 命令用于从另一个存储库下载对象和引用</li><li>git pull 命令用于从另一个存储库或本地分支获取并集成(整合)</li></ul><p>再来看一次<code>git</code>的工作流程图，如下所示：</p><figure><img src="https://static.vue-js.com/d523ba60-fac2-11eb-991d-334fd31f0201.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>可以看到，<code>git fetch</code>是将远程主机的最新内容拉到本地，用户在检查了以后决定是否合并到工作本机分支中</p><p>而<code>git pull</code> 则是将远程主机的最新内容拉下来后直接合并，即：<code>git pull = git fetch + git merge</code>，这样可能会产生冲突，需要手动解决</p><p>在我们本地的<code>git</code>文件中对应也存储了<code>git</code>本地仓库分支的<code>commit ID </code>和 跟踪的远程分支的<code>commit ID</code>，对应文件如下：</p><ul><li>.git/refs/head/[本地分支]</li><li>.git/refs/remotes/[正在跟踪的分支]</li></ul><p>使用 <code>git fetch</code>更新代码，本地的库中<code>master</code>的<code>commitID</code>不变</p><p>但是与<code>git</code>上面关联的那个<code>orign/master</code>的<code>commit ID</code>发生改变</p><p>这时候我们本地相当于存储了两个代码的版本号，我们还要通过<code>merge</code>去合并这两个不同的代码版本</p><figure><img src="https://static.vue-js.com/fd23ff70-fb12-11eb-bc6f-3f06e1491664.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>也就是<code>fetch</code>的时候本地的<code>master</code>没有变化，但是与远程仓关联的那个版本号被更新了，接下来就是在本地<code>merge</code>合并这两个版本号的代码</p><p>相比之下，使用<code>git pull</code>就更加简单粗暴，会将本地的代码更新至远程仓库里面最新的代码版本，如下图：</p><figure><img src="https://static.vue-js.com/091b8140-fb13-11eb-bc6f-3f06e1491664.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="二、用法" tabindex="-1"><a class="header-anchor" href="#二、用法" aria-hidden="true">#</a> 二、用法</h2><p>一般远端仓库里有新的内容更新，当我们需要把新内容下载的时候，就使用到<code>git pull</code>或者<code>git fetch</code>命令</p><h3 id="fetch" tabindex="-1"><a class="header-anchor" href="#fetch" aria-hidden="true">#</a> fetch</h3><p>用法如下：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>git fetch &lt;远程主机名&gt; &lt;远程分支名&gt;:&lt;本地分支名&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如从远程的<code>origin</code>仓库的<code>master</code>分支下载代码到本地并新建一个<code>temp</code>分支</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>git fetch origin master:temp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果上述没有冒号，则表示将远程<code>origin</code>仓库的<code>master</code>分支拉取下来到本地当前分支</p><p>这里<code>git fetch</code>不会进行合并，执行后需要手动执行<code>git merge</code>合并，如下：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>git merge temp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="pull" tabindex="-1"><a class="header-anchor" href="#pull" aria-hidden="true">#</a> pull</h3><p>两者的用法十分相似，<code>pull</code>用法如下：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>git pull &lt;远程主机名&gt; &lt;远程分支名&gt;:&lt;本地分支名&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>例如将远程主机<code>origin</code>的<code>master</code>分支拉取过来，与本地的<code>branchtest</code>分支合并，命令如下：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>git pull origin master:branchtest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>同样如果上述没有冒号，则表示将远程<code>origin</code>仓库的<code>master</code>分支拉取下来与本地当前分支合并</p><h2 id="三、区别" tabindex="-1"><a class="header-anchor" href="#三、区别" aria-hidden="true">#</a> 三、区别</h2><p>相同点：</p><ul><li>在作用上他们的功能是大致相同的，都是起到了更新代码的作用</li></ul><p>不同点：</p><ul><li>git pull是相当于从远程仓库获取最新版本，然后再与本地分支merge，即git pull = git fetch + git merge</li><li>相比起来，git fetch 更安全也更符合实际要求，在 merge 前，我们可以查看更新情况，根据实际情况再决定是否合并</li></ul><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2>`,40),g={href:"https://zhuanlan.zhihu.com/p/123370920",target:"_blank",rel:"noopener noreferrer"},p={href:"https://segmentfault.com/a/1190000017030384",target:"_blank",rel:"noopener noreferrer"},h={href:"https://juejin.cn/post/6844903921794859021",target:"_blank",rel:"noopener noreferrer"};function u(m,f){const i=r("ExternalLinkIcon");return a(),o("div",null,[s,e("ul",null,[e("li",null,[e("a",g,[c("https://zhuanlan.zhihu.com/p/123370920"),t(i)])]),e("li",null,[e("a",p,[c("https://segmentfault.com/a/1190000017030384"),t(i)])]),e("li",null,[e("a",h,[c("https://juejin.cn/post/6844903921794859021"),t(i)])])])])}const v=d(n,[["render",u],["__file","git pull _git fetch.html.vue"]]);export{v as default};

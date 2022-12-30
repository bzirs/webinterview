import{ab as c,F as o,G as d,D as e,R as t,M as a,ac as l,V as n}from"./framework-faf0f72c.js";const r={},s=l(`<h1 id="面试官-说说你对git的理解" tabindex="-1"><a class="header-anchor" href="#面试官-说说你对git的理解" aria-hidden="true">#</a> 面试官：说说你对Git的理解？</h1><figure><img src="https://static.vue-js.com/213eba50-f79c-11eb-bc6f-3f06e1491664.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="一、是什么" tabindex="-1"><a class="header-anchor" href="#一、是什么" aria-hidden="true">#</a> 一、是什么</h2><p>git，是一个分布式版本控制软件，最初目的是为更好地管理<code>Linux</code>内核开发而设计</p><p>分布式版本控制系统的客户端并不只提取最新版本的文件快照，而是把代码仓库完整地镜像下来。这么一来，任何一处协同工作用的服务器发生故障，事后都可以用任何一个镜像出来的本地仓库恢复</p><figure><img src="https://static.vue-js.com/29240f40-f79c-11eb-991d-334fd31f0201.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>项目开始，只有一个原始版仓库，别的机器可以<code>clone</code>这个原始版本库，那么所有<code>clone</code>的机器，它们的版本库其实都是一样的，并没有主次之分</p><p>所以在实现团队协作的时候，只要有一台电脑充当服务器的角色，其他每个人都从这个“服务器”仓库<code>clone</code>一份到自己的电脑上，并且各自把各自的提交推送到服务器仓库里，也从服务器仓库中拉取别人的提交</p><p><code>github</code>实际就可以充当这个服务器角色，其是一个开源协作社区，提供<code>Git</code>仓库托管服务，既可以让别人参与你的开源项目，也可以参与别人的开源项目</p><h2 id="二、工作原理" tabindex="-1"><a class="header-anchor" href="#二、工作原理" aria-hidden="true">#</a> 二、工作原理</h2><p>当我们通过<code>git init</code>创建或者<code>git clone</code>一个项目的时候，项目目录会隐藏一个<code>.git</code>子目录，其作用是用来跟踪管理版本库的</p><p><code>Git</code> 中所有数据在存储前都计算校验和，然后以校验和来引用，所以在我们修改或者删除文件的时候，<code>git</code>能够知道</p><p><code>Git </code>用以计算校验和的机制叫做 SHA-1 散列（hash，哈希）， 这是一个由 40 个十六进制字符（0-9 和 a-f）组成字符串，基于 Git 中文件的内容或目录结构计算出来，如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>24b9da6552252987aa493b52f8696cd6d3b00373
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>当我们修改文件的时候，<code>git</code>就会修改文件的状态，可以通过<code>git status</code>进行查询，状态情况如下：</p><ul><li>已修改（modified）：表示修改了文件，但还没保存到数据库中。</li><li>已暂存（staged）：表示对一个已修改文件的当前版本做了标记，使之包含在下次提交的快照中。</li><li>已提交（committed）：表示数据已经安全的保存在本地数据库中。</li></ul><p>文件状态对应的，不同状态的文件在<code>Git</code>中处于不同的工作区域，主要分成了四部分：</p><ul><li>工作区：相当于本地写代码的区域，如 git clone 一个项目到本地，相当于本地克隆了远程仓库项目的一个副本</li><li>暂存区：暂存区是一个文件，保存了下次将提交的文件列表信息，一般在 Git 仓库目录中</li><li>本地仓库：提交更新，找到暂存区域的文件，将快照永久性存储到 Git 本地仓库</li><li>远程仓库：远程的仓库，如 github</li></ul><figure><img src="https://static.vue-js.com/3273c9a0-f79c-11eb-bc6f-3f06e1491664.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="三、命令" tabindex="-1"><a class="header-anchor" href="#三、命令" aria-hidden="true">#</a> 三、命令</h2><p>从上图可以看到，<code>git</code>日常简单的使用就只有上图6个命令：</p><ul><li>add</li><li>commit</li><li>push</li><li>pull</li><li>clone</li><li>checkout</li></ul><p>但实际上还有很多命令，如果想要熟练使用，还有60个多命令，通过这些命令的配合使用，能够提高个人工作效率和团队协助能力</p><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2>`,24),h={href:"https://zh.wikipedia.org/wiki/Git",target:"_blank",rel:"noopener noreferrer"},p={href:"https://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html",target:"_blank",rel:"noopener noreferrer"};function g(u,f){const i=n("ExternalLinkIcon");return o(),d("div",null,[s,e("ul",null,[e("li",null,[e("a",h,[t("https://zh.wikipedia.org/wiki/Git"),a(i)])]),e("li",null,[e("a",p,[t("https://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html"),a(i)])])])])}const m=c(r,[["render",g],["__file","Git.html.vue"]]);export{m as default};

import{ab as r,E as c,F as o,C as e,Q as n,L as a,ac as i,U as l}from"./framework-c74165a4.js";const s={},p=i('<h1 id="_16-nexttick-是干什么的" tabindex="-1"><a class="header-anchor" href="#_16-nexttick-是干什么的" aria-hidden="true">#</a> 16. nextTick 是干什么的？</h1><h2 id="逐字稿" tabindex="-1"><a class="header-anchor" href="#逐字稿" aria-hidden="true">#</a> 逐字稿</h2><p>Vue 在更新DOM 时是异步执行的。当数据发生变化， Vue 将开启一个异步更新队列，视图需要等队列中所有数据变化完成之后，再统一进行更新. 如输入框他显示的的时候自动聚焦</p><p>-----------以下不是-----------</p><p>页面的 DOM 还未渲染，这时候也没办法操作 DOM，如果想要操作 DOM，需要使用 nextTick 来解决这个问题</p><p>实现原理：nextTick 的核心是利用了原生 JavaScript 方法来模拟对应的微/宏任务的实现，本质是为了利用 JavaScript 的这些异步回调任务队列来实现 Vue 框架中自己的异步回调队列。</p><p>使用场景：</p><ol><li>在数据变化后执行的某个操作，而这个操作需要使用随数据变化而变化的 DOM 结构的时候，这个操作就需要方法在的回调函数中。</li><li>在 vue 生命周期中，如果在 created()钩子进行 DOM 操作，也一定要放在的回调函数中。</li></ol>',8),_={href:"http://fanyouf.gitee.io/interview/vue/05.html",target:"_blank",rel:"noopener noreferrer"},d={href:"https://www.yuque.com/silence1224/zvw0fi/kcado0#9c11266b",target:"_blank",rel:"noopener noreferrer"},h=e("p",null,"(@赵泓鉴)",-1);function u(f,x){const t=l("ExternalLinkIcon");return c(),o("div",null,[p,e("p",null,[e("a",_,[n("原文档"),a(t)])]),e("p",null,[e("a",d,[n("原文档"),a(t)])]),h])}const m=r(s,[["render",u],["__file","nexttick.html.vue"]]);export{m as default};
import{ab as a,E as e,F as t,ac as r}from"./framework-c74165a4.js";const s={},c=r('<h1 id="_04-如何理解-javascript-的异步" tabindex="-1"><a class="header-anchor" href="#_04-如何理解-javascript-的异步" aria-hidden="true">#</a> 04. 如何理解 JavaScript 的异步</h1><h2 id="逐字稿" tabindex="-1"><a class="header-anchor" href="#逐字稿" aria-hidden="true">#</a> 逐字稿</h2><p>JS是一门单线程的语言, 这是因为它运行在浏览器的<strong>渲染主线程</strong>中, 而渲染主线程只有一个</p><p>而渲染主线程承担着诸多的工作, 渲染页面、执行 JS 都在其中运行.</p><p>如果使用同步的方式, 就极有可能导致主线程<strong>产生阻塞</strong>, 从而导致消息队列中的很多其他任务无法得到执行. 这样一来, 一方面会导致繁忙的主线程白白的消耗时间, 另一方面导致页面无法及时更新, 给用户造成卡死现象.</p><p>所以浏览器采用异步的方式来避免. 具体做法是当某些任务发生时, 比如计时器、网络、事件监听, 主线程将任务交给其他线程去处理, 自身立即结束任务的执行, 转而执行后续代码. 当其他线程完成时, 将事先传递的回调函数包装成任务, 加入到消息队列的末尾排队, 等待主线程调度执行.</p><p>在这种异步模式下, 浏览器永不阻塞, 从而最大限度的保证了单线程的流畅运行.</p><p>(@赵泓鉴)</p>',8),n=[c];function o(i,p){return e(),t("div",null,n)}const d=a(s,[["render",o],["__file","js异步.html.vue"]]);export{d as default};

# 16. nextTick 是干什么的？

## 逐字稿

页面的 DOM 还未渲染，这时候也没办法操作 DOM，如果想要操作 DOM，需要使用 nextTick 来解决这个问题

实现原理：nextTick 的核心是利用了原生 JavaScript 方法来模拟对应的微/宏任务的实现，本质是为了利用 JavaScript 的这些异步回调任务队列来实现 Vue 框架中自己的异步回调队列。

使用场景：

1. 在数据变化后执行的某个操作，而这个操作需要使用随数据变化而变化的 DOM 结构的时候，这个操作就需要方法在的回调函数中。
2. 在 vue 生命周期中，如果在 created()钩子进行 DOM 操作，也一定要放在的回调函数中。

[原文档](http://fanyouf.gitee.io/interview/vue/05.html)

(@赵泓鉴)

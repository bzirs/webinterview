# 14. v-model 和 .sync 的区别

## 逐字稿

它们都是语法糖, 都可以实现父子组件的数据双向通信. 一个组件只能绑定一个v-model, 可以使用多个 .sync 修饰符同时双向绑定多个'prop'. v-model 针对更多的是最终操作结果, 是双向绑定的结果, 是value, 是change 操作. .sync针对更多的是状态, 是状态的互相传递, 是state ,是update 操作.

[原文档](https://www.yuque.com/silence1224/zvw0fi/kcado0#94c7f2e1)

(@赵泓鉴)

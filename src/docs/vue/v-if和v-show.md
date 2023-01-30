# 05. v-if 和 v-show 之间的区别

## 逐字稿

1. 底层原理不同
   - `v-if`是根据条件动态的添加`dom`节点。而`v-show`是根据条件切换`dom`元素的`css`的`display`样式。

2. 特性不同
   - `v-if`根据条件切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件。（简单说，v-if 是有惰性的，条件为 false 时，不会渲染 dom 元素）所以，v-if 的初始渲染成本低，但频繁切换时，会不断地添加或删除 dom 元素节点，所以它的切换成本很高。
   单 v-show 无论条件如何都会创建 dom，所以它的初始成本高，但切换成本低。

3. 当表达式内 boolean 值发生变化时，是否会触发生命周期
   - `v-show`内的表达式的布尔值发生改变时，不会触发`vue`组件的生命周期。因为`v-show`只是切换 dom 元素的 css 样式,没改变数据，它已经完成了初始化和挂载阶段内的四个钩子。
   - `v-if`表达式内由`false`变为`true`的时候，触发组件的`beforeCreate`、`create`、`beforeMount`、`mounted`钩子，由`true`变为`false`的时候触发组件的`beforeDestory`、`destoryed`钩子.

[原面试题](http://fanyouf.gitee.io/interview/vue/07.html#%E7%AE%80%E7%89%88)

(@王功道)

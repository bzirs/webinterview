# 09. v-model 的本质

## 逐字稿

v-model 的本质是一个语法糖, 它的底层做了两件事. 第一个是给input 绑定了一个value 属性. 第二个是个input 绑定了input 事件, 事件触发时将绑定的变量重新赋值.

v-model 也可以给组件实现props.value 的数据双向绑定

[原文档](https://www.yuque.com/silence1224/zvw0fi/kcado0#6f53c722)

(@赵泓鉴)

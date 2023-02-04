# 13. Vue的生命周期

## 逐字稿

首先vue的生命周期是指vc/vm实例从创建到销毁的过程。

主要的8个钩子，分别是初始化阶段的beforeCreate、created，挂载阶段：beforeMount、mounted，更新阶段：beforeUpdate、updated，销毁阶段：beforeDestroy、destroyed。

常用的2个钩子分别是created，mounted

created钩子中data和method已初始化完成，一般用于发ajax

mounted钩子中dom渲染完成 ，一般用于操作dom

还有不常用的3个钩子

keep-alive :用于保留组件状态或避免重新渲染

activated：只有keep-alive组件激活时调用

deactivated：只有keep-alive组件停用时调用

keep-alive之后beforeDestroy不会执行，会执行的是deactivated
(@王功道)

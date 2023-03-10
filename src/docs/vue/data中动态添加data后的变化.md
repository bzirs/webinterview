# 02. 动态给vue的data添加一个新的属性时会发生什么？怎样解决？

## 逐字稿

### 发生什么

1. 动态给vue的data添加一个新属性会造成：“数据更新，页面不更新”的现象。但这只是Vue2存在的问题。原因是vue2用的是Object.defineProperty()实现数据响应式的，而Vue3的响应式原理是porxy，劫持的是整个对象，所以不存在此问题。
2. Object.defineProperty()的工作原理是将遍历对象内的property转为getter/setter，劫持的不是对象本身。所以当我们给对象添加新属性时，无法触发事件属性的拦截。

### 解决

1. 通过Vue.set()构造函数方法给响应式对象添加一个property。这种方法适用于添加少量的新属性。
2. 先创建一个新对象，通过Object.assign()，将原响应式对象和新对象合并，混入新属性。这种方法适用于添加大量的新属性。
3. 还有就是通过$forceUpdate强制更新，但不推荐使用。

[原面试题](http://fanyouf.gitee.io/interview/vue/21.html#%E7%AE%80%E7%89%88)

(@王功道)

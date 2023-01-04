import{ab as e,F as a,G as t,ac as r}from"./framework-cbf81522.js";const i={},d=r('<h1 id="动态给vue的data添加一个新属性会发生什么-如何解决" tabindex="-1"><a class="header-anchor" href="#动态给vue的data添加一个新属性会发生什么-如何解决" aria-hidden="true">#</a> 动态给vue的data添加一个新属性会发生什么？如何解决？</h1><h2 id="逐字稿" tabindex="-1"><a class="header-anchor" href="#逐字稿" aria-hidden="true">#</a> 逐字稿</h2><h3 id="发生什么" tabindex="-1"><a class="header-anchor" href="#发生什么" aria-hidden="true">#</a> 发生什么</h3><ol><li>动态给vue的data添加一个新属性会造成：“数据更新，页面不更新”的现象。但这只是Vue2存在的问题。原因是vue2用的是Object.defineProperty()实现数据响应式的，而Vue3的响应式原理是porxy，劫持的是整个对象，所以不存在此问题。</li><li>Object.defineProperty()的工作原理是将遍历对象内的property转为getter/setter，劫持的不是对象本身。所以当我们给对象添加新属性时，无法触发事件属性的拦截。</li></ol><h3 id="解决" tabindex="-1"><a class="header-anchor" href="#解决" aria-hidden="true">#</a> 解决</h3><ol><li>通过Vue.set()构造函数方法给响应式对象添加一个property。这种方法适用于添加少量的新属性。</li><li>先创建一个新对象，通过Object.assign()，将原响应式对象和新对象合并，混入新属性。这种方法适用于添加大量的新属性。</li><li>还有就是通过$forceUpdate强制更新，但不推荐使用。</li></ol>',6),c=[d];function h(o,_){return a(),t("div",null,c)}const l=e(i,[["render",h],["__file","vue动态data添加属性会怎么样怎么解决.html.vue"]]);export{l as default};

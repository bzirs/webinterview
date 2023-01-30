# 03. vue常用修饰符

## v-on

- `.stop`: 阻止默认冒泡行为(event.stopPropagation)
- `.prevent`: 阻止表单默认提交行为(event.preventDefault)
- `.native`: 监听组件元素的原生事件

## v-bind

- `.prop`: 作为一个DOM property绑定而不是作为attribute绑定。
- `.camel`: 将kebab-case attribute名转换为camelCase(2.1.0+)
- `.sync`: 语法糖，会扩展成一个更新父组件绑定值的v-on侦听器(2.3.0+)

## v-model

- `.lazy`: 取代**input**监听**change**事件
- `.number`: 输入字符串转为有效的数字
- `.trim`: 输入首尾空格过滤

[参考文档](https://www.yuque.com/silence1224/zvw0fi/kcado0#27adf32f)

(@赵泓鉴)

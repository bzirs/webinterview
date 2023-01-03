# vue常用修饰符

## v-on

- `.stop`: 调用event.stopPropagation(),阻止默认冒泡行为
- `.prevent`: 调用event.preventDefault(),阻止表单默认提交行为
- `.native`: 监听组件元素的原生事件

## v-bind

- `.prop`: 作为一个DOM property绑定而不是作为attribute绑定。
- `.camel`: (2.1.0+)将kebab-case attribute名转换为camelCase。2.1.0开始支持
- `.sync`: (2.3.0+)语法糖，会扩展成一个更新父组件绑定值的v-on侦听器

## v-model

- `.lazy`: 取代**input**监听**change**事件
- `.number`: 输入字符串转为有效的数字
- `.trim`: 输入首尾空格过滤

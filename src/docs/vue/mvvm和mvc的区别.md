# mvvm 和 mvc 的区别

## 逐字稿

## 定义

mvvm 的定义是:mvvm 是 Model-View-ViewModel 的简写,即模型-视图-视图模型。
模型（Model）指的是后端传递的数据。视图(View)指的是所看到的页面。视图模型(ViewModel)是 mvvm 模式的核心，它是连接 view 和 model 的桥梁。我们称之为数据的双向绑定。
mvc 的定义是:Model-View- Controller 的简写,即模型-视图-控制器。
M 和 V 指的意思和 MVVM 中的 M 和 V 意思一样。C 即 Controller 指的是页面业务逻辑。使用 MVC 的目的就是将 M 和 V 的代码分离。MVC 是单向通信。

## 区别

一、MVC 和 MVVM 的区别并不是 VM 完全取代了 C，只是在 MVC 的基础上增加了一层 VM，只不过是弱化了 C 的概念，ViewModel 存在目的在于抽离 Controller 中展示的业务逻辑，而不是替代 Controller，其它视图操作业务等还是应该放在 Controller 中实现。也就是说 MVVM 实现的是业务逻辑组件的重用，使开发更高效，结构更清晰，增加代码的复用性。
二、Vue 数据驱动，通过数据来显示视图层而不是节点操作。

## 总结使用场景

数据操作比较多的场景，需要大量操作 DOM 元素时，采用 MVVM 的开发方式，会更加便捷， 让开发者更多的精力放在数据的变化上，解放繁琐的操作 DOM 元素。

(@任伟)

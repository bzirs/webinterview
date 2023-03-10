# Markdown常用语法

语法有个特点就是使用符号之后要加一个空格才可以识别这个语法

我自己markdown中最常用的语法就是标题和段落的语法

首先是标题

标题要使用符号#来代表,markdown中有六个标题1-6

演示一下比如二级标题

首先两个#号
只输入两个##后并不会识别出这个是语法 但是我们加上空格后

就识别出来这是md语法了

## 标题相关

### 这是一个三级标题

#### 这是一个四级标题

##### 这是一个五级标题

###### 这是一个六级标题

md标题只有六个

md中可以在每个段落最后使用两个或以上空格加换行来换行  
就像这个

或者像这样,中间留一行空行

这是段落的语法

我个人更喜欢使用中间加空行

字体的格式

字体可以在要加粗的字体两侧添加两个**让字体加粗

**我要加粗了**

一个*号代表倾斜

*倾斜中*

加粗同时倾斜 使用三个***

***这里***

波浪线可以添加删除线

~~删除~~

最常用的还有列表
无序列表可以使用* 或者+ 或者- 加空格的方式 我个人喜欢- 这样

- 我是列表
- 回车后下一行会自动作为第二个列表
- 想要下一行不作为列表就回车两次

有序列表 使用数字加英文符号.空格的方式

1. 我是有序列表
2. 它的回车和无序列表一样

列表嵌套如下

- 我是一级的
  - 我是耳机的
    - 我是三级的
  
就像这样

我最常用的就是无序和有序,没怎么用过嵌套 嵌套的时候就按tab键

试试有序能不能嵌套

1. 一二三
   - 这样呢
   - 也可以
   - 真滴牛逼

区块就和列表相似的语法了

> 这是区块
>> 这个也是
>>> 这个三级的区块

还有最常用的就是md文档中插入代码

```
这样就是代码块
```

同时可以指明代码块的语言 比如

```js
const a = 1
```

然后是md文档中插入链接

格式是[这里写单击的文字](这里写跳转的链接)

[点我](https://blog.iuiun.com)

我们试试

可以跳转

<包裹>也可以

<https://baidu.com>

不好看不如上一个

插入图片

![图片失效显式地文字](https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.pn2g)

如上

其他的不是很常用,还有就是md文档中支持html标签

<img src="https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png">

<b>123</b>
123

如上

大概就这些有其他想了解的可以参考[菜鸟教程](https://www.runoob.com/markdown/md-tutorial.html)

最后说一下不习惯食用代码的方式写md文档也可以使用typora写md,只要写出来就可以不强求

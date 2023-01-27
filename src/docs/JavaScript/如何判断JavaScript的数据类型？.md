# 如何判断 JavaScript 的数据类型？

## Typeof

我们都使用 typeof 是用来判断数据类型的命令, 在常规的场景中足以应付数据类型判断的需求:

```javascript
var obj = {
  name: 'zhangxiang',
}

function foo() {
  console.log('this is a function')
}

var arr = [1, 2, 3]

console.log(typeof 1) // number
console.log(typeof '1') //string
console.log(typeof true) //boolean
console.log(typeof null) //object
console.log(typeof undefined) //undefined
console.log(typeof obj) //object
console.log(typeof foo) //function
console.log(typeof arr) //object复制代码
```

可以看到, typeof 命令可以判断所有 javascript 中的基本数据类型(Null, Undefined, Boolean, String, Number), 虽然 null 使用 typeof 返回的是 object 字符串, 但是无碍
它的基本使用, 但是在一些复杂的场景比如 object 与 null, array 与 object, function 与 object 等等的类型区分, typeof 就会显得心有余力不足了.
所以一般来说, typeof 会使用在比较简单的场景, 比如你几乎可以确定数据是哪一类数据然后稍微加以区分的时候.举个简单的例子来说明情况:

```ini
function unique(array){
  var hash = {};
  var result = [], key;
  array.forEach(function(item, index){
    key = item;
    if(typeof item === 'string') {
      key = '_' + item;
    }
    if(!hash[key]) {
      result.push(item);
    } else {
      hash[key] = true;
    }
  });
  return result;
}复制代码
```

## instanceof

instanceof 其实适合用于判断自定义的类实例对象, 而不是用来判断原生的数据类型, 举个例子:

```css
// a.html
<script>
  var a = [1,2,3];
</script>复制代码
//main.html
<iframe src="a.html"></iframe>

<script>
  var frame = window.frame[0];
  var a = frame.a;
  console.log(a instanceof Array);  // false
  console.log(a.contructor === Array);  //false
  console.log(a instanceof frame.Array); // true
</script>复制代码
```

是什么原因导致上面的结果呢? 其实 iframe 之间不会共享原型链, 因为他们有独立的执行环境, 所以 frame a 中的数组 a 不会是本执行环境的实例对象. 通过特性嗅探同样不靠谱, 像通过 contructor
sort, slice 等等的特有的数组(或者其他数据类型)方法或属性, 万一对象中也有 sort, slice 属性, 就会发生误判. 所以最靠谱的方法是使用 Object.prototype.toString 方法.

## Object.prototype.toString

使用 Object.prototype.toString 方法, 可以获取到变量的准确的类型.

```javascript
function foo(){};

Object.prototype.toString.call(1);  '[object Number]'
Object.prototype.toString.call('1'); '[object String]'
Object.prototype.toString.call(NaN); '[object Number]'
Object.prototype.toString.call(foo);  '[object Function]'
Object.prototype.toString.call([1,2,3]); '[object Array]'
Object.prototype.toString.call(undefined); '[object Undefined]'
Object.prototype.toString.call(null); '[object Null]'
Object.prototype.toString.call(true); '[object Boolean]'
....复制代码
```

Object.prototype.toString 的原理是当调用的时候, 就取值内部的 [[Class]] 属性值, 然后拼接成 '[object ' + [[Class]] + ']' 这样的字符串并返回. 然后我们使用 call 方法来获取任何值的数据类型.

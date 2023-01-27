import{ab as a,E as e,F as t,ac as r}from"./framework-c74165a4.js";const n={},c=r(`<h1 id="_04-请解释一下-javascript-的同源策略" tabindex="-1"><a class="header-anchor" href="#_04-请解释一下-javascript-的同源策略" aria-hidden="true">#</a> 04. 请解释一下 JavaScript 的同源策略?</h1><h2 id="为什么要有同源与不同源" tabindex="-1"><a class="header-anchor" href="#为什么要有同源与不同源" aria-hidden="true">#</a> 为什么要有同源与不同源？</h2><p>同源策略是一种安全协议，客户端脚本的重要的安全度量标准 。浏览器为了用户安全 ： 不允许，页面向不同源的接口请求数据，因为如果 接口 和 网页不同源，浏览器认为是 2 个不同的 服务器，</p><p>同源策略是浏览器的行为，是为了保护本地数据不被 JavaScript 代码获取回来的数据污染，因此拦截的是&quot;客户端发出的请求回来的数据接收，即请求发送了，服务器响应了，但是无法被浏览器接收</p><p>总结说人话： 浏览器为了保护你的电脑安全 ● 举个栗子： 你去肯德基店里点餐，店员只允许你点肯德基的产品（炸鸡，可乐，上校鸡块），如果此时你在美团肯德基店里面点麦当劳的产品，浏览器会认为你是坏人，就会让保安把你赶出去..(此时浏览器(自己)是可以发请求,服务器(肯德基店)也能收到请求(点单),服务器也会返回响应(点的鸡),只不过是被浏览器拦截了)</p><h2 id="什么是同源" tabindex="-1"><a class="header-anchor" href="#什么是同源" aria-hidden="true">#</a> 什么是同源？</h2><pre><code>* 同源定义 ： 两个url地址的 协议 与 主机 与 端口 均一致 (&amp;&amp;)
    * 协议：http , https , file
    * 主机 ： 域名或者ip地址 （127.0.0.1）
    * 端口 ：3000， 4399
* 不同源定义： 两个url地址，协议 主机 端口任何一个不一致 （||）
    * 当前页面：http:127.0.0.1:3000/abc
    * 同源(协议 ip 端口一致)：http:127.0.0.1:3000/efg
    * 不同源(协议不一致): https:127.0.0.1:3000/efg
    * 不同源(ip不一致): http:192.0.0.1:3000/efg
    * 不同源(端口一致): http:127.0.0.1:4399/abc
</code></pre>`,7),h=[c];function i(p,d){return e(),t("div",null,h)}const o=a(n,[["render",i],["__file","11.html.vue"]]);export{o as default};

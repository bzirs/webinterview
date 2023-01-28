import{ab as n,E as r,F as c,C as e,Q as a,L as o,ac as h,U as s}from"./framework-c74165a4.js";const p={},d=e("h1",{id:"_02-什么是同源策略",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_02-什么是同源策略","aria-hidden":"true"},"#"),a(" 02. 什么是同源策略")],-1),i=e("h2",{id:"逐字稿",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#逐字稿","aria-hidden":"true"},"#"),a(" 逐字稿")],-1),_=e("p",null,"同源策略就是浏览器的一种安全机制, 来限制不同源的网站不能通信. 同源就是协议, 域名, 端口号一致.",-1),l={href:"https://www.yuque.com/silence1224/zvw0fi/kcado0#5bc09543",target:"_blank",rel:"noopener noreferrer"},f=h(`<p>(@赵泓鉴)</p><h2 id="逐字稿2" tabindex="-1"><a class="header-anchor" href="#逐字稿2" aria-hidden="true">#</a> 逐字稿2</h2><p>同源策略是一种安全协议，客户端脚本的重要的安全度量标准 。浏览器为了用户安全： 不允许，页面向不同源的接口请求数据，因为如果接口和网页不同源，浏览器认为是2个不同的服务器，</p><p>同源策略是浏览器的行为，是为了保护本地数据不被 JavaScript 代码获取回来的数据污染，因此拦截的是&quot;客户端发出的请求回来的数据接收，即请求发送了，服务器响应了，但是无法被浏览器接收</p><p>总结说人话： 浏览器为了保护你的电脑安全</p><p>举个栗子： 你去肯德基店里点餐，店员只允许你点肯德基的产品（炸鸡，可乐，上校鸡块），如果此时你在美团肯德基店里面点麦当劳的产品，浏览器会认为你是坏人，就会让保安把你赶出去..(此时浏览器(自己)是可以发请求,服务器(肯德基店)也能收到请求(点单),服务器也会返回响应(点的鸡),只不过是被浏览器拦截了)</p><h3 id="什么是同源" tabindex="-1"><a class="header-anchor" href="#什么是同源" aria-hidden="true">#</a> 什么是同源？</h3><pre><code>* 同源定义 ： 两个url地址的 协议 与 主机 与 端口 均一致 (&amp;&amp;)
    * 协议：http , https , file
    * 主机 ： 域名或者ip地址 （127.0.0.1）
    * 端口 ：3000， 4399
* 不同源定义： 两个url地址，协议 主机 端口任何一个不一致 （||）
    * 当前页面：http:127.0.0.1:3000/abc
    * 同源(协议 ip 端口一致)：http:127.0.0.1:3000/efg
    * 不同源(协议不一致): https:127.0.0.1:3000/efg
    * 不同源(ip不一致): http:192.0.0.1:3000/efg
    * 不同源(端口一致): http:127.0.0.1:4399/abc
</code></pre><p>(@任伟)</p>`,9);function u(m,x){const t=s("ExternalLinkIcon");return r(),c("div",null,[d,i,_,e("p",null,[e("a",l,[a("原文档"),o(t)])]),f])}const k=n(p,[["render",u],["__file","同源策略.html.vue"]]);export{k as default};

import{ab as a,F as o,G as l,D as e,R as c,M as i,ac as n,V as r}from"./framework-faf0f72c.js";const d={},p=n('<h1 id="面试官-什么是http-http-和-https-的区别" tabindex="-1"><a class="header-anchor" href="#面试官-什么是http-http-和-https-的区别" aria-hidden="true">#</a> 面试官：什么是HTTP? HTTP 和 HTTPS 的区别?</h1><figure><img src="https://static.vue-js.com/f50c71f0-b20b-11eb-ab90-d9ae814b240d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="一、http" tabindex="-1"><a class="header-anchor" href="#一、http" aria-hidden="true">#</a> 一、HTTP</h2><p><code>HTTP</code> (HyperText Transfer Protocol)，即超文本运输协议，是实现网络通信的一种规范</p><figure><img src="https://static.vue-js.com/fda119b0-b20b-11eb-85f6-6fac77c0c9b3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>在计算机和网络世界有，存在不同的协议，如广播协议、寻址协议、路由协议等等......</p><p>而<code>HTTP</code>是一个传输协议，即将数据由A传到B或将B传输到A，并且 A 与 B 之间能够存放很多第三方，如： A&lt;=&gt;X&lt;=&gt;Y&lt;=&gt;Z&lt;=&gt;B</p><p>传输的数据并不是计算机底层中的二进制包，而是完整的、有意义的数据，如HTML 文件, 图片文件, 查询结果等超文本，能够被上层应用识别</p><p>在实际应用中，<code>HTTP</code>常被用于在<code>Web</code>浏览器和网站服务器之间传递信息，以明文方式发送内容，不提供任何方式的数据加密</p><p>特点如下：</p><ul><li><p>支持客户/服务器模式</p></li><li><p>简单快速：客户向服务器请求服务时，只需传送请求方法和路径。由于HTTP协议简单，使得HTTP服务器的程序规模小，因而通信速度很快</p></li><li><p>灵活：HTTP允许传输任意类型的数据对象。正在传输的类型由Content-Type加以标记</p></li><li><p>无连接：无连接的含义是限制每次连接只处理一个请求。服务器处理完客户的请求，并收到客户的应答后，即断开连接。采用这种方式可以节省传输时间</p></li><li><p>无状态：HTTP协议无法根据之前的状态进行本次的请求处理</p></li></ul><h2 id="二、https" tabindex="-1"><a class="header-anchor" href="#二、https" aria-hidden="true">#</a> 二、HTTPS</h2><p>在上述介绍<code>HTTP</code>中，了解到<code>HTTP</code>传递信息是以明文的形式发送内容，这并不安全。而<code>HTTPS</code>出现正是为了解决<code>HTTP</code>不安全的特性</p><p>为了保证这些隐私数据能加密传输，让<code>HTTP</code>运行安全的<code>SSL/TLS</code>协议上，即 HTTPS = HTTP + SSL/TLS，通过 <code>SSL</code>证书来验证服务器的身份，并为浏览器和服务器之间的通信进行加密</p><p><code>SSL</code> 协议位于<code> TCP/IP</code> 协议与各种应用层协议之间，浏览器和服务器在使用 <code>SSL</code> 建立连接时需要选择一组恰当的加密算法来实现安全通信，为数据通讯提供安全支持</p><figure><img src="https://static.vue-js.com/078c50c0-b20c-11eb-ab90-d9ae814b240d.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>流程图如下所示：</p><figure><img src="https://static.vue-js.com/0e409fc0-b20c-11eb-85f6-6fac77c0c9b3.png" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><ul><li>首先客户端通过URL访问服务器建立SSL连接</li><li>服务端收到客户端请求后，会将网站支持的证书信息（证书中包含公钥）传送一份给客户端</li><li>客户端的服务器开始协商SSL连接的安全等级，也就是信息加密的等级</li><li>客户端的浏览器根据双方同意的安全等级，建立会话密钥，然后利用网站的公钥将会话密钥加密，并传送给网站</li><li>服务器利用自己的私钥解密出会话密钥</li><li>服务器利用会话密钥加密与客户端之间的通信</li></ul><h2 id="三、区别" tabindex="-1"><a class="header-anchor" href="#三、区别" aria-hidden="true">#</a> 三、区别</h2><ul><li>HTTPS是HTTP协议的安全版本，HTTP协议的数据传输是明文的，是不安全的，HTTPS使用了SSL/TLS协议进行了加密处理，相对更安全</li><li>HTTP 和 HTTPS 使用连接方式不同，默认端口也不一样，HTTP是80，HTTPS是443</li><li>HTTPS 由于需要设计加密以及多次握手，性能方面不如 HTTP</li><li>HTTPS需要SSL，SSL 证书需要钱，功能越强大的证书费用越高</li></ul><h2 id="参考文献" tabindex="-1"><a class="header-anchor" href="#参考文献" aria-hidden="true">#</a> 参考文献</h2>',22),T={href:"https://www.cnblogs.com/klb561/p/10289199.html",target:"_blank",rel:"noopener noreferrer"},s={href:"https://www.jianshu.com/p/205c0fc51c97",target:"_blank",rel:"noopener noreferrer"},h={href:"https://vue3js.cn/interview",target:"_blank",rel:"noopener noreferrer"};function f(g,u){const t=r("ExternalLinkIcon");return o(),l("div",null,[p,e("ul",null,[e("li",null,[e("a",T,[c("https://www.cnblogs.com/klb561/p/10289199.html"),i(t)])]),e("li",null,[e("a",s,[c("https://www.jianshu.com/p/205c0fc51c97"),i(t)])]),e("li",null,[e("a",h,[c("https://vue3js.cn/interview"),i(t)])])])])}const H=a(d,[["render",f],["__file","HTTP_HTTPS.html.vue"]]);export{H as default};

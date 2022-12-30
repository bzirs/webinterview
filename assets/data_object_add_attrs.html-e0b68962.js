const e=JSON.parse('{"key":"v-ca4d6638","path":"/docs/vue/data_object_add_attrs.html","title":"面试官：动态给vue的data添加一个新的属性时会发生什么？怎样解决？","lang":"zh-CN","frontmatter":{"description":"image.png 一、直接添加属性的问题 我们从一个例子开始 定义一个p标签，通过v-for指令进行遍历 然后给botton标签绑定点击事件，我们预期点击按钮时，数据新增一个属性，界面也 新增一行 实例化一个vue实例，定义data属性和methods方法 点击按钮，发现结果不及预期，数据虽然更新了（console打印出了新属性），但页面并没有更新 ...","head":[["meta",{"property":"og:url","content":"https://bzirs.github.io/webinterview/webinterview/docs/vue/data_object_add_attrs.html"}],["meta",{"property":"og:site_name","content":"文档演示"}],["meta",{"property":"og:title","content":"面试官：动态给vue的data添加一个新的属性时会发生什么？怎样解决？"}],["meta",{"property":"og:description","content":"image.png 一、直接添加属性的问题 我们从一个例子开始 定义一个p标签，通过v-for指令进行遍历 然后给botton标签绑定点击事件，我们预期点击按钮时，数据新增一个属性，界面也 新增一行 实例化一个vue实例，定义data属性和methods方法 点击按钮，发现结果不及预期，数据虽然更新了（console打印出了新属性），但页面并没有更新 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:updated_time","content":"2022-12-30T09:18:59.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:modified_time","content":"2022-12-30T09:18:59.000Z"}]]},"headers":[{"level":2,"title":"一、直接添加属性的问题","slug":"一、直接添加属性的问题","link":"#一、直接添加属性的问题","children":[]},{"level":2,"title":"二、原理分析","slug":"二、原理分析","link":"#二、原理分析","children":[]},{"level":2,"title":"三、解决方案","slug":"三、解决方案","link":"#三、解决方案","children":[{"level":3,"title":"Vue.set()","slug":"vue-set","link":"#vue-set","children":[]},{"level":3,"title":"Object.assign()","slug":"object-assign","link":"#object-assign","children":[]},{"level":3,"title":"$forceUpdate","slug":"forceupdate","link":"#forceupdate","children":[]},{"level":3,"title":"小结","slug":"小结","link":"#小结","children":[]}]},{"level":2,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]}],"git":{"createdTime":1672391939000,"updatedTime":1672391939000,"contributors":[{"name":"bzirs","email":"bzirs@outlook.com","commits":1}]},"readingTime":{"minutes":2.88,"words":865},"filePathRelative":"docs/vue/data_object_add_attrs.md","localizedDate":"2022年12月30日","autoDesc":true}');export{e as data};

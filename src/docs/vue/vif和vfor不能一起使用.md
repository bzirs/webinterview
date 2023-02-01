# 15. v-if 和 v-for 为什么不建议一起使用

## 逐字稿

v-for 优先级比v-if 高, 每一次都要遍历整个数组再进行v-if 判断, 造成过多的计算, 影响性能.

[原文档](https://www.yuque.com/silence1224/zvw0fi/kcado0#8eae7d6a)

(@赵泓鉴)

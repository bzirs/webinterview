import { defineUserConfig } from "vuepress";
import { searchProPlugin } from "vuepress-plugin-search-pro";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/webinterview/",

   plugins: [
    searchProPlugin({
      // 配置选项
      indexContent: true
    }),
  ],

  locales: {
    "/": {
      lang: "zh-CN",
      title: "",
      description: "前端面试宝典整理",
    },
  },

  theme,

  shouldPrefetch: false,
});

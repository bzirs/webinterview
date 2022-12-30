import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/webinterview/",

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

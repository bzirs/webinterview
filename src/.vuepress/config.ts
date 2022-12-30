/*
 * @Author: bzirs
 * @Date: 2022-12-30 08:44:10
 * @LastEditors: bzirs
 * @LastEditTime: 2022-12-30 09:17:24
 * @FilePath: /interview/src/.vuepress/config.ts
 * @Description: 
 * 
 * Copyright (c) 2022 by bzirs, All Rights Reserved. 
 */
import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/webinterview/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Docs Demo",
      description: "A docs demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "文档演示",
      description: "vuepress-theme-hope 的文档演示",
    },
  },

  theme,

  shouldPrefetch: false,
});

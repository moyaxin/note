import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "Yaxin",
  description: "",
  dest: './moyaxin.top',  // 设置输出目录
  base: '/',

  theme,
});

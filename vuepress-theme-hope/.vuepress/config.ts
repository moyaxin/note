import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "个人博客",
  description: "",

  base: "/",

  theme,
});

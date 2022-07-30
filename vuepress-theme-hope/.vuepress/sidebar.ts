import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/":[
  {
    text: "java基础",
    icon: "creative",
    prefix: "/java/",
    children: [
      {
        text: "java基础",
        icon: "note",
        collapsable: true,
        activeMatch: "^/java/$",
        children: [
          { text: "基本语法", link: "1.基本语法" },
          { text: "面向对象", link: "2.面向对象" },
          { text: "异常处理", link: "3.异常处理" },
          { text: "多线程", link: "4.多线程" },
          { text: "Java常用类",  link: "5.Java常用类" },
          { text: "枚举类&注解", link: "6.枚举类&注解" },
          { text: "Java集合",  link: "7.Java集合" },
          { text: "泛型", link: "8.泛型" },
          { text: "IO流", link: "9.IO流" },
          { text: "网络编程", link: "10.网络编程" },
          { text: "反射",  link: "11.反射" },
          { text: "jdk8新特性",  link: "12.jdk8新特性" },
        ],
      },
    ]
  },
  ],
  "/devTool":[
    {
      text: "工具｜部署",
      icon: "creative",
      prefix: "/devTool/",
      children: [
        {
          text: "Linux",
          prefix: "linux/",
          collapsable: true,// 可选的, 设置分组是否可以折叠，默认值是 false,
          children: [
            { text: "基础介绍",  link: "linux基础介绍" },
            { text: "用户、权限、进程",  link: "linux用户、权限、进程" },
            { text: "常用命令",  link: "linux常用命令" },
          ],
        },
        {
          text: "Git",
          prefix: "git/",
          collapsable: true,// 可选的, 设置分组是否可以折叠，默认值是 false,
          children: [
            { text: "git介绍",  link: "Git介绍" },
            { text: "git实操",  link: "Git实操" },
          ],
        },
        {
          text: "Docker",
          prefix: "docker/",
          collapsable: true,// 可选的, 设置分组是否可以折叠，默认值是 false,
          children: [
            { text: "docker介绍",  link: "docker介绍" },
          ],
        },
      ]
    }
  ],
  "/guide/": "structure",
});

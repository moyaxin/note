import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default hopeTheme({
  hostname: "https://github.com/moyaxin/note",

  author: {
    name: "Yaxin",
    url: "",
  },


  iconAssets: "iconfont",

  logo: "/logo2.png",//右上角的头像

  repo: "https://github.com/moyaxin/note",

  docsDir: "demo/src",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,
  //     {
  //   "/guide/": "structure",
  //   "/java/": "structure",
  // },

  footer: "编程改变未来",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    // name: pameng,
    // avatar头像
    roundAvatar:true,//头像被剪裁成圆形
    description: "一个java工程师",//介绍、座右铭或口号
    intro: "/",//个人介绍页地址,点击头像与姓名时会自动进行跳转
    articlePerPage:5,//分页配置
    medias: {
      Gitee: "https://gitee.com/moyaxin",
      GitHub: "https://github.com/moyaxin/",
    },
  },

  encrypt: {
    config: {
      // "/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      timeline: "Time is precious",
      autoExcerpt: true,//自动提取摘要
    },

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    comment: {
      /**
       * Using Giscus
       */
      provider: "Giscus",
      repo: "moyaxin/note",
      repoId: "R_kgDOHrAmpg",
      category: "Announcements",
      categoryId: "DIC_kwDOHrAmps4CQpm2",

    },

    mdEnhance: {
      enableAll: true,
      container: true,
      // 启用图片标记
      imageMark: true,
      // 启用图片大小
      imageSize: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});

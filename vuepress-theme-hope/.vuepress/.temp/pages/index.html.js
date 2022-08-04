export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"博客主页\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"layout\":\"Blog\",\"icon\":\"home\",\"title\":\"博客主页\",\"bgImage\":\"/bg-huTao.png\",\"heroText\":null,\"heroFullScreen\":true,\"tagline\":\"Welcome to Yaxin's personal world\",\"projects\":[{\"icon\":\"project\",\"name\":\"项目名称\",\"desc\":\"项目详细描述\",\"link\":\"http://note.moyaxin.top/404.html\"},{\"icon\":\"link\",\"name\":\"链接名称\",\"desc\":\"链接详细描述\",\"link\":\"http://note.moyaxin.top/404.html\"},{\"icon\":\"book\",\"name\":\"书籍名称\",\"desc\":\"书籍详细描述\",\"link\":\"http://note.moyaxin.top/404.html\"},{\"icon\":\"friend\",\"name\":\"伙伴名称\",\"desc\":\"伙伴详细介绍\",\"link\":\"http://note.moyaxin.top/404.html\"}],\"footer\":\"编程改变世界\",\"summary\":\"\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://vuepress-theme-hope-v2-demo.mrhope.site/\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"Yaxin\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"博客主页\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"website\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[],\"readingTime\":{\"minutes\":0.35,\"words\":104},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}

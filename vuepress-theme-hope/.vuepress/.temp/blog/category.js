export const categoryMap = {"category":{"/":{"path":"/category/","map":{"java基础":{"path":"/category/java%E5%9F%BA%E7%A1%80/","keys":["v-257d5954","v-60333e1a","v-5f814a62","v-706cca6a","v-86f14d40","v-12d5d43a","v-5ed030e2","v-274f4cde","v-2455dee8","v-67adda9c","v-30ac5c4a","v-31077d4c"]},"杂文":{"path":"/category/%E6%9D%82%E6%96%87/","keys":["v-62a03e4d"]},"工具":{"path":"/category/%E5%B7%A5%E5%85%B7/","keys":["v-7231641a","v-2e65851e","v-7d953cc0","v-c09ecb58","v-9913fa56","v-2f71ba40"]},"设计模式":{"path":"/category/%E8%AE%BE%E8%AE%A1%E6%A8%A1%E5%BC%8F/","keys":["v-31b59826","v-2498998e","v-76ca55ca","v-62cba141"]}}}},"tag":{"/":{"path":"/tag/","map":{"知识点":{"path":"/tag/%E7%9F%A5%E8%AF%86%E7%82%B9/","keys":["v-31b59826","v-2498998e","v-76ca55ca","v-257d5954","v-60333e1a","v-5f814a62","v-706cca6a","v-86f14d40","v-12d5d43a","v-5ed030e2","v-274f4cde","v-2455dee8","v-67adda9c","v-30ac5c4a","v-31077d4c","v-2f71ba40"]},"技术":{"path":"/tag/%E6%8A%80%E6%9C%AF/","keys":["v-62a03e4d"]},"入门":{"path":"/tag/%E5%85%A5%E9%97%A8/","keys":["v-62cba141","v-7231641a","v-2e65851e","v-7d953cc0"]},"命令":{"path":"/tag/%E5%91%BD%E4%BB%A4/","keys":["v-c09ecb58","v-9913fa56"]}}}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogCategory) {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ categoryMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogCategory(categoryMap)
  })
}

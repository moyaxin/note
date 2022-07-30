export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-4eaf9f84","v-0e503981","v-fffb8e28","v-4c863446","v-bf720700","v-0978b044","v-257d5954","v-60333e1a","v-5f814a62","v-706cca6a","v-86f14d40","v-12d5d43a","v-5ed030e2","v-274f4cde","v-2455dee8","v-67adda9c","v-30ac5c4a","v-31077d4c","v-7231641a","v-c09ecb58","v-2e65851e","v-9913fa56","v-2f71ba40","v-7d953cc0"]}},"encrypted":{"/":{"path":"/encrypted/","keys":["v-bf720700"]}},"slide":{"/":{"path":"/slide/","keys":["v-0e503981"]}},"star":{"/":{"path":"/star/","keys":["v-4eaf9f84"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-4eaf9f84"]}}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateBlogType) {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ typeMap }) => {
    __VUE_HMR_RUNTIME__.updateBlogType(typeMap)
  })
}

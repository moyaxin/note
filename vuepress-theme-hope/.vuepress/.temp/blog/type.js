export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-bac11736","v-038b9490","v-257d5954","v-60333e1a","v-5f814a62","v-706cca6a","v-86f14d40","v-12d5d43a","v-5ed030e2","v-274f4cde","v-2455dee8","v-67adda9c","v-30ac5c4a","v-31077d4c","v-7231641a","v-2e65851e","v-7d953cc0","v-9913fa56","v-2f71ba40","v-c09ecb58"]}},"encrypted":{"/":{"path":"/encrypted/","keys":[]}},"slide":{"/":{"path":"/slide/","keys":[]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/time-is-precious/","keys":["v-bac11736","v-038b9490","v-257d5954","v-60333e1a","v-5f814a62","v-706cca6a","v-86f14d40","v-12d5d43a","v-5ed030e2","v-274f4cde","v-2455dee8","v-67adda9c","v-30ac5c4a","v-31077d4c","v-7231641a","v-2e65851e","v-9913fa56","v-2f71ba40","v-c09ecb58"]}}}

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

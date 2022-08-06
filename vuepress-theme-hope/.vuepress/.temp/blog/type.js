export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-5ab9bf2c","v-7f43d6b4","v-38081070","v-257d5954","v-60333e1a","v-5f814a62","v-706cca6a","v-86f14d40","v-12d5d43a","v-5ed030e2","v-274f4cde","v-2455dee8","v-67adda9c","v-30ac5c4a","v-31077d4c","v-7231641a","v-2e65851e","v-7d953cc0","v-c09ecb58","v-9913fa56","v-2f71ba40","v-6e913126","v-c85c6644","v-2c35b364","v-41dc9500","v-3e4cf2fa","v-3b0e9402","v-137910ba","v-47e75e18","v-68049a6c","v-26022da7","v-7ffd61bc","v-7c801280"]}},"encrypted":{"/":{"path":"/encrypted/","keys":[]}},"slide":{"/":{"path":"/slide/","keys":[]}},"star":{"/":{"path":"/star/","keys":[]}},"timeline":{"/":{"path":"/time-is-precious/","keys":["v-5ab9bf2c","v-7f43d6b4","v-38081070","v-257d5954","v-60333e1a","v-5f814a62","v-706cca6a","v-86f14d40","v-12d5d43a","v-5ed030e2","v-274f4cde","v-2455dee8","v-67adda9c","v-30ac5c4a","v-31077d4c","v-7231641a","v-c09ecb58","v-2e65851e","v-9913fa56","v-2f71ba40","v-7d953cc0"]}}}

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

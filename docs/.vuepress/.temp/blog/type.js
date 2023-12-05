export const typeMap = {"article":{"/":{"path":"/article/","keys":["v-400fe2d9","v-a415b8a6","v-9550299e","v-1fa6a882","v-4cb5a3aa","v-74df6d6c","v-b0af65a4","v-43ea95bb","v-48ad6635","v-8cb494b8","v-196a7006","v-2feb3a82","v-0efd3f39","v-735e06f4","v-46ee1500","v-7a3dbab1","v-22aba4f1"]}},"encrypted":{"/":{"path":"/encrypted/","keys":["v-400fe2d9","v-2feb3a82","v-735e06f4"]}},"slide":{"/":{"path":"/slide/","keys":[]}},"star":{"/":{"path":"/star/","keys":["v-400fe2d9","v-4cb5a3aa","v-0efd3f39","v-46ee1500"]}},"timeline":{"/":{"path":"/timeline/","keys":["v-400fe2d9","v-a415b8a6","v-9550299e","v-1fa6a882","v-4cb5a3aa","v-74df6d6c","v-b0af65a4","v-43ea95bb","v-48ad6635","v-8cb494b8","v-196a7006","v-2feb3a82","v-0efd3f39","v-735e06f4","v-46ee1500"]}}}

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

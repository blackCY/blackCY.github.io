export const categoryMap = {"category":{"/":{"path":"/category/","map":{"好文记录":{"path":"/category/%E5%A5%BD%E6%96%87%E8%AE%B0%E5%BD%95/","keys":["v-46ee1500"]},"随笔":{"path":"/category/%E9%9A%8F%E7%AC%94/","keys":["v-4cb5a3aa"]},"故事":{"path":"/category/%E6%95%85%E4%BA%8B/","keys":["v-9550299e"]},"模块化":{"path":"/category/%E6%A8%A1%E5%9D%97%E5%8C%96/","keys":["v-400fe2d9"]},"es module":{"path":"/category/es-module/","keys":["v-400fe2d9"]},"Babel":{"path":"/category/babel/","keys":["v-2feb3a82","v-0efd3f39"]},"必知必会":{"path":"/category/%E5%BF%85%E7%9F%A5%E5%BF%85%E4%BC%9A/","keys":["v-1fa6a882","v-735e06f4"]},"浏览器":{"path":"/category/%E6%B5%8F%E8%A7%88%E5%99%A8/","keys":["v-a415b8a6","v-74df6d6c"]},"V8":{"path":"/category/v8/","keys":["v-a415b8a6","v-74df6d6c"]},"JavaScript":{"path":"/category/javascript/","keys":["v-b0af65a4","v-43ea95bb","v-8cb494b8","v-196a7006"]},"Javascript":{"path":"/category/javascript/","keys":["v-48ad6635"]}}}},"tag":{"/":{"path":"/tag/","map":{"feeling":{"path":"/tag/feeling/","keys":["v-4cb5a3aa","v-46ee1500"]},"知乎":{"path":"/tag/%E7%9F%A5%E4%B9%8E/","keys":["v-46ee1500"]},"story":{"path":"/tag/story/","keys":["v-9550299e"]},"module":{"path":"/tag/module/","keys":["v-400fe2d9"]},"babel api":{"path":"/tag/babel-api/","keys":["v-2feb3a82"]},"babel basic":{"path":"/tag/babel-basic/","keys":["v-0efd3f39"]},"ast":{"path":"/tag/ast/","keys":["v-0efd3f39"]},"work":{"path":"/tag/work/","keys":["v-1fa6a882","v-735e06f4"]},"zhihu":{"path":"/tag/zhihu/","keys":["v-1fa6a882"]},"garbage collection":{"path":"/tag/garbage-collection/","keys":["v-a415b8a6"]},"stack":{"path":"/tag/stack/","keys":["v-74df6d6c"]},"heap":{"path":"/tag/heap/","keys":["v-74df6d6c"]},"javascript basic":{"path":"/tag/javascript-basic/","keys":["v-b0af65a4","v-43ea95bb","v-48ad6635","v-8cb494b8","v-196a7006"]},"closure":{"path":"/tag/closure/","keys":["v-48ad6635"]},"this":{"path":"/tag/this/","keys":["v-8cb494b8"]}}}}}

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

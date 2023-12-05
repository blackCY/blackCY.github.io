export const data = JSON.parse("{\"key\":\"v-a415b8a6\",\"path\":\"/code/v8/garbage_collection.html\",\"title\":\"垃圾回收：垃圾数据是如何自动回收的？\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"垃圾回收：垃圾数据是如何自动回收的？\",\"home\":false,\"date\":\"2022-07-14T00:00:00.000Z\",\"icon\":\"note\",\"category\":[\"浏览器\",\"V8\"],\"tag\":[\"garbage collection\"],\"star\":false,\"summary\":\"在上一篇文章中，我们提到了 JavaScript 中的数据是如何存储的，并通过例子分析了原始数据类型是存储在栈空间中的，引用类型的数据是存储在堆空间中的。通过这种分配方式，我们解决了数据的内存分配的问题。 不过有些数据被使用之后，可能就不再需要了，我们把这种数据称为垃圾数据。如果这些垃圾数据一直保存在内存中，那么内存会越用越多，所以我们需要对这些垃圾数据进行\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://github.com/blackCY/code/v8/garbage_collection.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"落叶长安\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"垃圾回收：垃圾数据是如何自动回收的？\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"garbage collection\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-07-14T00:00:00.000Z\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"不同语言的垃圾回收策略\",\"slug\":\"不同语言的垃圾回收策略\",\"children\":[]},{\"level\":2,\"title\":\"调用栈中的数据是如何回收的\",\"slug\":\"调用栈中的数据是如何回收的\",\"children\":[]},{\"level\":2,\"title\":\"堆中的数据是如何回收的\",\"slug\":\"堆中的数据是如何回收的\",\"children\":[{\"level\":3,\"title\":\"代际假说和分代收集\",\"slug\":\"代际假说和分代收集\",\"children\":[]},{\"level\":3,\"title\":\"垃圾回收器的工作流程\",\"slug\":\"垃圾回收器的工作流程\",\"children\":[]},{\"level\":3,\"title\":\"副垃圾回收器\",\"slug\":\"副垃圾回收器\",\"children\":[]},{\"level\":3,\"title\":\"主垃圾回收器\",\"slug\":\"主垃圾回收器\",\"children\":[]}]},{\"level\":2,\"title\":\"全停顿\",\"slug\":\"全停顿\",\"children\":[]},{\"level\":2,\"title\":\"总结\",\"slug\":\"总结\",\"children\":[]}],\"readingTime\":{\"minutes\":14.4,\"words\":4319},\"filePathRelative\":\"code/v8/garbage_collection.md\",\"localizedDate\":\"2022年7月14日\"}")

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

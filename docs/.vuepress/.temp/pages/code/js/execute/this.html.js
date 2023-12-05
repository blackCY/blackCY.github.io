export const data = JSON.parse("{\"key\":\"v-8cb494b8\",\"path\":\"/code/js/execute/this.html\",\"title\":\"this：从JavaScript执行上下文的视角讲清楚this\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"this：从JavaScript执行上下文的视角讲清楚this\",\"home\":false,\"date\":\"2022-07-04T00:00:00.000Z\",\"icon\":\"javascript\",\"category\":[\"JavaScript\"],\"tag\":[\"javascript basic\",\"this\"],\"star\":false,\"summary\":\"相信你已经知道了，在 printName 函数里面使用的变量 myName 是属于全局作用域下面的，所以最终打印出来的值都是“极客邦”。这是因为 JavaScript 语言的作用域链是由词法作用域决定的，而词法作用域是由代码结构来确定的。 不过按照常理来说，调用 bar.printName 方法时，该方法内部的变量 myName 应该使用 bar 对象中的，\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://github.com/blackCY/code/js/execute/this.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"落叶长安\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"this：从JavaScript执行上下文的视角讲清楚this\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"javascript basic\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"this\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-07-04T00:00:00.000Z\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"JavaScript 中的 this 是什么\",\"slug\":\"javascript-中的-this-是什么\",\"children\":[]},{\"level\":2,\"title\":\"全局执行上下文中的 this\",\"slug\":\"全局执行上下文中的-this\",\"children\":[]},{\"level\":2,\"title\":\"函数执行上下文中的 this\",\"slug\":\"函数执行上下文中的-this\",\"children\":[{\"level\":3,\"title\":\"1.通过函数的 call 方法设置\",\"slug\":\"_1-通过函数的-call-方法设置\",\"children\":[]},{\"level\":3,\"title\":\"2.通过对象调用方法设置\",\"slug\":\"_2-通过对象调用方法设置\",\"children\":[]},{\"level\":3,\"title\":\"3.通过构造函数中设置\",\"slug\":\"_3-通过构造函数中设置\",\"children\":[]}]},{\"level\":2,\"title\":\"this 的设计缺陷以及应对方案\",\"slug\":\"this-的设计缺陷以及应对方案\",\"children\":[{\"level\":3,\"title\":\"1.嵌套函数中的 this 不会从外层函数中继承\",\"slug\":\"_1-嵌套函数中的-this-不会从外层函数中继承\",\"children\":[]},{\"level\":3,\"title\":\"2.普通函数中的 this 默认指向全局对象 window\",\"slug\":\"_2-普通函数中的-this-默认指向全局对象-window\",\"children\":[]}]},{\"level\":2,\"title\":\"总结\",\"slug\":\"总结\",\"children\":[]}],\"readingTime\":{\"minutes\":10.28,\"words\":3085},\"filePathRelative\":\"code/js/execute/this.md\",\"localizedDate\":\"2022年7月4日\"}")

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

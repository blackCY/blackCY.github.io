export const data = JSON.parse("{\"key\":\"v-b0af65a4\",\"path\":\"/code/js/execute/block_scope.html\",\"title\":\"块级作用域：var缺陷以及为什么要引入let和const？\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"块级作用域：var缺陷以及为什么要引入let和const？\",\"home\":false,\"date\":\"2022-07-04T00:00:00.000Z\",\"icon\":\"javascript\",\"category\":[\"JavaScript\"],\"tag\":[\"javascript basic\"],\"star\":false,\"summary\":\"在前面《变量提升：JavaScript 代码是按顺序执行的吗？》这篇文章中，我们已经讲解了 JavaScript 中变量提升的相关内容，正是由于 JavaScript 存在变量提升这种特性，从而导致了很多与直觉不符的代码，这也是 JavaScript 的一个重要设计缺陷。 虽然 ECMAScript6（以下简称 ES6）已经通过引入块级作用域并配合 let、\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://github.com/blackCY/code/js/execute/block_scope.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"落叶长安\"}],[\"meta\",{\"property\":\"og:title\",\"content\":\"块级作用域：var缺陷以及为什么要引入let和const？\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}],[\"meta\",{\"property\":\"article:tag\",\"content\":\"javascript basic\"}],[\"meta\",{\"property\":\"article:published_time\",\"content\":\"2022-07-04T00:00:00.000Z\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"作用域（scope）\",\"slug\":\"作用域-scope\",\"children\":[]},{\"level\":2,\"title\":\"变量提升所带来的问题\",\"slug\":\"变量提升所带来的问题\",\"children\":[{\"level\":3,\"title\":\"变量容易在不被察觉的情况下被覆盖掉\",\"slug\":\"变量容易在不被察觉的情况下被覆盖掉\",\"children\":[]},{\"level\":3,\"title\":\"本应销毁的变量没有被销毁\",\"slug\":\"本应销毁的变量没有被销毁\",\"children\":[]}]},{\"level\":2,\"title\":\"ES6 是如何解决变量提升带来的缺陷\",\"slug\":\"es6-是如何解决变量提升带来的缺陷\",\"children\":[]},{\"level\":2,\"title\":\"JavaScript 是如何支持块级作用域的\",\"slug\":\"javascript-是如何支持块级作用域的\",\"children\":[]}],\"readingTime\":{\"minutes\":9.66,\"words\":2897},\"filePathRelative\":\"code/js/execute/block_scope.md\",\"localizedDate\":\"2022年7月4日\"}")

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

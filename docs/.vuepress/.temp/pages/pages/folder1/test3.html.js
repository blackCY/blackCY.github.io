export const data = JSON.parse("{\"key\":\"v-8c2b1870\",\"path\":\"/pages/folder1/test3.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"summary\":\"lodash按需加载 https://www.jianshu.com/p/f03ff4f3a8b3\",\"head\":[[\"meta\",{\"property\":\"og:url\",\"content\":\"https://github.com/blackCY/pages/folder1/test3.html\"}],[\"meta\",{\"property\":\"og:site_name\",\"content\":\"落叶长安\"}],[\"meta\",{\"property\":\"og:type\",\"content\":\"article\"}],[\"meta\",{\"property\":\"og:locale\",\"content\":\"zh-CN\"}]]},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"lodash按需加载\",\"slug\":\"lodash按需加载\",\"children\":[]}],\"readingTime\":{\"minutes\":0.21,\"words\":62},\"filePathRelative\":\"pages/folder1/test3.md\"}")

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

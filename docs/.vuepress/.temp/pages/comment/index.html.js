export const data = JSON.parse("{\"key\":\"v-9a7e70ae\",\"path\":\"/comment/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"layout\":\"Comment\"},\"excerpt\":\"\",\"headers\":[]}")

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

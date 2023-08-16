export const useFetchNews = (page) => {
  const fetchData = async () => {
    const data = await fetch(
      `https://flems.github.io/test/api/news/${page.value}/`
    )
    const res = await data.json()
    return {
      news: res.items,
      current: res.nav.current,
      total: res.nav.total,
    }
  }

  onMounted(() => {
    fetchData()
  })

  watch(page, () => {
    fetchData()
  })

  return { fetchData }
}

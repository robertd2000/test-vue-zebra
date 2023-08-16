export const getNews = async (page) => {
  const data = await fetch(`https://flems.github.io/test/api/news/${page}/`)
  const res = await data.json()

  return res
}

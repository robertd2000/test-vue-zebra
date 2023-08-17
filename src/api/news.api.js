import { baseUrl } from '../constants/url'

export const getNews = async (page) => {
  try {
    const data = await fetch(`${baseUrl}/news/${page}/`)
    const res = await data.json()

    return res
  } catch (error) {
    throw error
  }
}

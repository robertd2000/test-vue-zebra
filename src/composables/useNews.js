import { ref, onMounted, watch } from 'vue'
import { usePagination } from './usePagination'
import { getNews } from '../api/news.api'

export const useNews = () => {
  const { page, hasNextPage, handleLoadMore, handleHasNextPage } =
    usePagination()

  const news = ref([])

  const fetchData = async () => {
    const res = await getNews(page.value)
    news.value.push(...(res?.items || []))
    handleHasNextPage(res?.nav?.current, res?.nav?.total)
  }

  onMounted(() => {
    fetchData()
  })

  watch(page, () => {
    fetchData()
  })

  return {
    news,
    hasNextPage,
    handleLoadMore,
  }
}

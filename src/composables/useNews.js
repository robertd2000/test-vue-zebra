import { ref, onMounted, watch } from 'vue'
import { usePagination } from './usePagination'
import { getNews } from '../api/news.api'

/**
 * Composable - отвечает за загрузку новостей
 *
 * Возвращает список новостей, флаги загрузки (loading) и ошибки,
 * флаг наличия следующей страницы и функцию загрузки новых новостей
 */
export const useNews = () => {
  const { page, hasNextPage, handleLoadMore, handleHasNextPage } =
    usePagination()

  const news = ref([])
  const loading = ref(true)
  const error = ref(false)

  const fetchData = async () => {
    try {
      const res = await getNews(page.value)
      news.value.push(...(res?.items || []))
      handleHasNextPage(res?.nav?.current, res?.nav?.total)
      error.value = false
    } catch (err) {
      error.value = true
    } finally {
      loading.value = false
    }
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
    loading,
    error,
    handleLoadMore,
  }
}

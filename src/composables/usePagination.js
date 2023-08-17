import { ref } from 'vue'

/**
 * Composable - отвечает за пагинацию
 *
 * Возвращает текущую страницу, флаг наличия следующей страницы
 * и функции мутации текущей страницы и флага наличия следующей страницы
 */
export const usePagination = () => {
  const page = ref(1)
  const hasNextPage = ref(false)

  const handleLoadMore = () => {
    page.value = page.value + 1
  }

  const handleHasNextPage = (current, total) => {
    hasNextPage.value = current < total
  }

  return {
    page,
    hasNextPage,
    handleLoadMore,
    handleHasNextPage,
  }
}

import { ref } from 'vue'

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

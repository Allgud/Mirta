export const createPostPagination = (array) => {
  const start = JSON.parse(JSON.stringify(array))
  const ITEMS_ON_PAGE = 10
  const result = {}

  for (let i = 0; i < ITEMS_ON_PAGE; i++) {
    result[i + 1] = start.splice(0, 10)
  }

  return result
}
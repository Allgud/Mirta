const ITEMS_ON_PAGE = 10

export const createPostPagination = (array) => {
  const start = JSON.parse(JSON.stringify(array))
  const edge = Math.ceil(array.length / ITEMS_ON_PAGE)
  const result = {}

  for (let i = 0; i < edge; i++) {
    result[i + 1] = start.splice(0, ITEMS_ON_PAGE)
  }

  return result
}
import yqRequest from "../request"

export function getHotSuggests() {
  return yqRequest.get({
    url: "/home/hotSuggests"
  })
}

export function getCategories() {
  return yqRequest.get({
    url: "/home/categories"
  })
}

export function getHouseList(currentPage) {
  return yqRequest.get({
    url: "/home/houselist",
    params: {
      page: currentPage
    }
  })
}
import yqRequest from "../request"

export function getFavorItem() {
  return yqRequest.get({
    url: "/favor/list"
  })
}

export function getBrowseItem() {
  return yqRequest.get({
    url: "/favor/history"
  })
}
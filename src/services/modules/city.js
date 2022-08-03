import yqRequest from "../request"

export function getCityAll() {
  return yqRequest.get({
    url: "/city/all"
  })
}
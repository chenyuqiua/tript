import yqRequest from "../request"

export function getOrderList(type = "all") {
  return yqRequest.get({
    url: `/order/list?type=${type}`
  })
}
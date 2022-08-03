import yqRequest from  "../request"

export function getDetailInfos(houseId) {
  return yqRequest.get({
    url: "/detail/infos",
    params: {
      houseId
    }
  })
}
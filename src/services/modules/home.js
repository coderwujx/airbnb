import WJXRequest from '..'

export function getHomeGoodPriceData() {
  return WJXRequest.get({
    url: '/home/goodprice'
  })
}

const url = 'https://api.coincap.io/v2'

function getAssets() {
  return fetch(`${url}/assets?limit=20`)
    .then(res => res.json()) // Indicamos que la respuestas la queremos en json
    .then(res => res.data) // data es el objeto que viene dentro del body de la respusta con la info, esta definido por la api
}

function getAsset(coin) {
  return fetch(`${url}/assets/${coin}`)
    .then(res => res.json())
    .then(res => res.data)
}

function getAssetHistory(coin) {
  const now = new Date()
  const end = now.getTime()
  now.setDate(now.getDate() - 1)
  const start = now.getTime()

  return fetch(
    `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  )
    .then(res => res.json())
    .then(res => res.data)
}

function getMarkets (coin) {
  return fetch(`${url}/assets/${coin}/markets?limit=5`)
    .then(res => res.json())
    .then(res => res.data)
}

function getExchange(id) {
  return fetch(`${url}/exchanges/${id}`)
    .then(res => res.json())
    .then(res => res.data)
}

export default {
  getAssets,
  getAsset,
  getAssetHistory,
  getMarkets,
  getExchange
}

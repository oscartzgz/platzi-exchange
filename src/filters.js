import numeral from 'numeral'

const dollarFilter = function(value) {
  // Si no existe / vacio / cero
  if (!value) {
    return '$ 0'
  }

  return numeral(value).format('($ 0.00a)')
}

const percentFilter = function(value) {
  if (!value) {
    return '0%'
  }

  return `${Number(value).toFixed(2)}%`
}

// No se hace export default porque
// se quiere usar de forma atómica
export { dollarFilter, percentFilter }


export default (value, digits = 0) => {
  let float = parseFloat(value)
  if (isNaN(float)) return '0%'
  else float = float * 100
  return `${float.toFixed(digits)}%`
}

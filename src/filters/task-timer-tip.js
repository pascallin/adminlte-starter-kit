
export default (value, type) => {
  if (value === '*') return `every ${type || ''}`
  else if (value === '?') return `when is current ${type || ''}`
  else if (value.startsWith('/')) return `every ${value.substring(1)} ${type || ''}`
  else return `when is ${type || ''} ${value}`
}

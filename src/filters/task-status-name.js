
export default (value) => {
  switch (value) {
    case 1 :
      return 'active'
    case 0 :
      return 'disabled'
    default:
      return value
  }
}

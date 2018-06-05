export function fetchList (context) {
  const data = [{
    id: 1,
    title: 'test'
  }]
  context.commit('increment', data)
}

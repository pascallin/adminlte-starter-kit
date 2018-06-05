const state = {
  all: []
}

const actions = {
  fetchList ({ commit }, data) {
    commit('fetchList', [{ id: 1, title: 'test' }])
  }
}

const mutations = {
  fetchList (state, data) {
    state.all = data
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

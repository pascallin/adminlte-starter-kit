import {
  RECEIVE_LIST
} from '../mutation-types'

//initial state
const state = {
  all: []
};

// mutations
const mutations = {
  RECEIVE_LIST (state, data) {
    state.all = data;
  }
};

export default {
  state,
  mutations
}

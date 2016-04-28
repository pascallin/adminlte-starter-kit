import {
  RECEIVE_TASK
} from '../mutation-types'

//initial state
const state = {
  all: []
};

// mutations
const mutations = {
  RECEIVE_TASK (state, tasks) {
    state.all = tasks;
  }
};

export default {
  state,
  mutations
}

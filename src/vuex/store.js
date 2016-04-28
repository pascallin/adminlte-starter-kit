import Vue from 'vue'
import Vuex from 'vuex'

import taskModule from './modules/task'

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    taskModule
  }
})

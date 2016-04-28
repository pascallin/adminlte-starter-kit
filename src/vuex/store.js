import Vue from 'vue'
import Vuex from 'vuex'

import pageModule from './modules/page'

Vue.use(Vuex);

export default new Vuex.Store({
  modules:{
    pageModule
  }
})

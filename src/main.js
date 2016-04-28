import Vue from 'vue'
import VueRouter  from 'vue-router'
import routerMap from './router'
import App from './App'

Vue.use(VueRouter);

const router = new VueRouter();
routerMap(router);

router.start(App, '#app');

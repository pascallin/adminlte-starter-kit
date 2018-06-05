import Vue from 'vue'
import Router from 'vue-router'

import BlankPage from '@/components/Common/BlankPage.vue'
import Page from '@/components/Page/PageContainer.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'BlankPage',
      path: '/',
      component: BlankPage
    },
    {
      name: 'Page',
      path: '/page',
      component: Page
    }
  ]
})

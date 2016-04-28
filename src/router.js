'use strict';

import BlankPage from './components/Common/BlankPage.vue'
import Page from 'components/Page/PageContainer.vue'

export default function (router) {
  router.map({
    '/': {
      component: BlankPage
    },
    '/page': {
      component: Page
    }
  });
}

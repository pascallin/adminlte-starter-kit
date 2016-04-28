'use strict';

import BlankPage from './components/Layout/BlankPage'
import Task from './components/Task/TaskContainer'

export default function (router) {
  router.map({
    '/': {
      component: BlankPage
    },
    '/task': {
      component: Task
    },
    '/worker': {
      component: BlankPage
    }
  });
}

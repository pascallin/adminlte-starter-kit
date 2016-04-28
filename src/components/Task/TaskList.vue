<template>
  <table class="table table-striped">
    <tr>
      <th style="width: 10px">#</th>
      <th>type</th>
      <th>cron</th>
      <th style="width: 80px">status</th>
    </tr>
    <tr v-for="task in tasks">
      <td>{{task.id}}</td>
      <td>{{task.code}}</td>
      <td>{{task.timer}}</td>
      <td><span class="badge bg-red">{{task.status | statusName}}</span></td>
    </tr>
  </table>
</template>

<script>
  import { getTasks } from '../../vuex/actions'

  import statusNameFilter from '../../filters/task-status-name'

  export default {
    vuex: {
      getters: {
        tasks: ({ taskModule }) => taskModule.all
      },
      actions: {
        getTasks
      }
    },
    created() {
      this.getTasks()
    },
    filters: {
      statusName: statusNameFilter
    }
  }

</script>

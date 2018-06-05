<template>
  <div class="box">
    <div class="box-header with-border">
      <h3 class="box-title">Bordered Table</h3>
    </div>
    <!-- /.box-header -->
    <div class="box-body">
      <table class="table table-bordered">
        <tr>
          <th>#</th>
          <th>title</th>
          <th>operation</th>
        </tr>
        <tr v-for="item in list" :key="item.id">
          <td>{{item.id}}.</td>
          <td>{{item.title}}</td>
          <td></td>
        </tr>
      </table>
    </div>
    <!-- /.box-body -->
  </div>
  <!-- /.box -->
</template>

<script>

import { mapState } from 'vuex'

export default {
  computed: mapState({
    list: (state) => {
      return state.page.all
    }
  }),
  created () {
    this.$store.dispatch('page/fetchList')
  }
}

</script>

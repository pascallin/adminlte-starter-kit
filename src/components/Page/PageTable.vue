<template>
  <div class="box">
    <div class="box-header with-border">
      <h3 class="box-title">Bordered Table</h3>
    </div>
    <!-- /.box-header -->
    <div class="box-body">
      <table class="table table-bordered">
        <tr>
          <th style="width: 10px">#</th>
          <th>title</th>
          <th style="width: 40px">operation</th>
        </tr>
        <tr v-for="item in list">
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
  import { getList } from '../../vuex/actions'

  export default {
    vuex: {
      getters: {
        list: function({ pageModule }){
          return pageModule.all
        }
      },
      actions: {
        getList
      }
    },
    created() {
      this.getList()
    }
  }

</script>

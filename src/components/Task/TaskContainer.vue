<template>
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <section class="content-header">
      <h1>
        Task Manage
      </h1>
      <!--<ol class="breadcrumb">-->
        <!--<li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>-->
        <!--<li><a href="#">Examples</a></li>-->
        <!--<li class="active">Blank page</li>-->
      <!--</ol>-->
    </section>

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-md-4">
        <!-- Default box -->
        <div class="box">
          <div class="box-header">
            <h3 class="box-title">Task List</h3>
          </div>
          <!-- /.box-header -->
          <div class="box-body no-padding">
            <task-list></task-list>
          </div>
          <!-- /.box-body -->
        </div>
        <!-- /.box -->
      </div>

      <div class="col-md-8">
        <!--<router-view></router-view>-->
      </div>
    </div>
    </section>
    <!-- /.content -->
  </div>
</template>

<script>
  import TaskList from './TaskList'

  export default {
    components: {
      TaskList
    }
  }

</script>

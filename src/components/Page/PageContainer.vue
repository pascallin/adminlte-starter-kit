<template>

  <div class="content-wrapper">

    <content-header text="Page Header"></content-header>

    <!-- Main content -->
    <section class="content">
      <div class="row">
        <div class="col-md-12">
          <page-table></page-table>
        </div>
    </div>
    </section>
    <!-- /.content -->

  </div>
</template>

<script>
  import ContentHeader from '../Common/ContentHeader.vue'
  import PageTable from './PageTable'

  export default {
    components: {
      ContentHeader,PageTable
    }
  }

</script>

<template>
  <section class="content-header">
    <h1>{{text}}</h1>
    <ol class="breadcrumb">
      <li><a href="#"><i class="fa fa-dashboard"></i>Home</a></li>
      <li v-for="path in paths"><a>{{path}}</a></li>
    </ol>
  </section>
</template>

<script>
  export default {
    props: ['text'],
    computed:{
      paths:function(){
        return this.$route.path.split('/').filter(function(item){
          return item != ""
        })
      }
    }
  }
</script>

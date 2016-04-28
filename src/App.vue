<template>
  <div class="app">
    <main-header></main-header>
    <side-bar></side-bar>

    <!--<blank-page></blank-page>-->
    <!-- use router-view element as route outlet -->
    <router-view></router-view>

    <main-footer></main-footer>
  </div>
</template>

<script>
  import store from './vuex/store';

  import MainHeader from './components/layout/Header'
  import SideBar from './components/layout/SideBar'
  import BlankPage from './components/Common/BlankPage'
  import MainFooter from './components/layout/Footer'

  export default {
    name: 'App',
    store: store,
    components:{
      MainHeader,SideBar,BlankPage,MainFooter
    }
  }
</script>

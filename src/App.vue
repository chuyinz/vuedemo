<template>
  <!-- <div id="app">
     <img src="./assets/logo.png">
     <div>
       <p>
         If Element is successfully added to this project, you'll see an
         <code v-text="'<el-button>'"></code>
         below
       </p>
       <el-button>el-button</el-button>
     </div>
     <HelloWorld msg="Welcome to Your Vue.js App"/>
   </div>-->
  <div>
    <headnav></headnav>
    <sidenav></sidenav>
    <router-view></router-view>
  </div>
</template>

<script>
import guide from './components/guide.vue'
import DefaultPage from "@/components/DefaultPage";
import headnav from "@/components/headnav";
import sidenav from "@/components/sidenav";

export default {
  name: 'app',
  components: {
    DefaultPage,
    guide,
    sidenav,
    headnav,
  }
}
</script>

<style>
#app {

}
</style>

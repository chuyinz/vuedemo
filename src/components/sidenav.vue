<template>
<div style="display: inline-block">
  <el-menu class="el-vertical-menu-class" :collapse="isCollapse"> <!--@open="handleOpen()" @close="handleClose()"-->
    <el-menu-item style="font-size: 20px;" @click="collapse()">
      <i v-bind:class="[isCollapse?'el-icon-s-fold':'el-icon-s-unfold']" v-model="isCollapse"></i>
    </el-menu-item>
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <!-- <i v-bind:class="[isopened?'el-icon-arrow-up':'el-icon-arrow-down']" style="margin-left: 150px"></i>-->
        <span slot="title">导航一</span>
      </template>
      <el-menu-item-group>
        <el-menu-item>侧栏二级菜单1</el-menu-item>
        <el-menu-item>侧栏二级菜单2</el-menu-item>
        <el-menu-item>侧栏二级菜单3</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </template>
      <el-menu-item-group>
        <el-menu-item>侧栏二级菜单4</el-menu-item>
        <el-menu-item>侧栏二级菜单5</el-menu-item>
        <el-menu-item>侧栏二级菜单6</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item>
      <i class="el-icon-document"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
  </el-menu>
</div>
</template>

<script>
export default {
  name: "sidenav",
  data() {
    return {
      isCollapse: true,
    }
  },
  methods: {
    collapse() {
      this.isCollapse = this.isCollapse ? false : true;
    }
  },
}
</script>

<style scoped>
.el-vertical-menu-class {
  height: auto;
  width: 65px;
  overflow-y: auto;
  display: inline-block;
}

.el-vertical-menu-class:not(.el-menu--collapse) {
  width: 200px;
  display: inline-block;
}
.el-menu-item.is-active {
  color: gray;
}
</style>
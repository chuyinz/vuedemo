<template>
  <div>
    <el-menu :default-active="activeIndex"
             mode="horizontal"
             menu-trigger="hover"
             @select="handleSelect"
             style="padding-left: 70px">
      <el-menu-item index="1">
        <router-link class="default" tag="li" :to="{ name: 'DefaultPage'}">首页</router-link>
      </el-menu-item>
      <el-menu-item index="2">
        <router-link class="guide" tag="li" :to="{ name: 'guide'}">指南</router-link>
      </el-menu-item>
      <el-menu-item index="3">主题</el-menu-item>
      <el-menu-item index="4">资源</el-menu-item>
      <el-dropdown class="dropdown-menu-class">
        <el-avatar icon="el-icon-user-solid" shape="circle" size="small" style="cursor: pointer"></el-avatar>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>设置</el-dropdown-item>
          <el-dropdown-item>账户</el-dropdown-item>
          <el-dropdown-item>注销</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-menu>



  </div>
</template>

<script>

export default {
  name: "headnav",
  data() {
    return {
      activeIndex: '1',
      /*  控制二级菜单打开/关闭时的箭头方向
      isopened:false,
      */
    }
  },
  methods: {
    /*二级菜单打开，箭头变化函数
    handleOpen(){
      this.isopened=true;
    },
    handleClose(){
      this.isopened=false;
    }
    */
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
}
</script>

<style scoped>

.dropdown-menu-class {
  float: right;
  margin-top: 20px;
  margin-right: 20px;
}

</style>
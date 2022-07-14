<template>
  <div id="app">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
    >
      <el-menu-item
        index="1"
        default-active
      >
        <router-link
          to="/"
          replace
        >
          Events
        </router-link>
      </el-menu-item>
      <el-menu-item
        index="2"
        disabled
      >
        Profile
      </el-menu-item>
    </el-menu>
    <router-view />
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      activeIndex: '1',
    };
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

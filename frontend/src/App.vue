<template>
  <div id="app">
    <el-menu
      :default-active="activeIndex"
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
body {
  background-color: #fbfcff;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

a {
  text-decoration: none;
}
</style>

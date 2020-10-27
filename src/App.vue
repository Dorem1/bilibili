<template>
  <div class="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepalive"/>
    </keep-alive>
    <router-view v-if="!$route.meta.keepalive" />
  </div>
</template>

<style scoped>
  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .app{
    background-color: #f4f4f4;
  }
  p{
    margin: 0;
    padding: 0;
  }
</style>
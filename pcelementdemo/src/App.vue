<template>
  <div id="app">
    <!--路由出口-->
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'app',
  data() {
    return {
      num:6
    }
  },
  methods: {
    handleChange(value) {
        console.log(value);
      }
  },
}
</script>

<style scoped lang="less">
    
</style>
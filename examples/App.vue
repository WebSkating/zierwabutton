<template>
  <div id="app">
    <uf-button type="primary" @click="clickHandle">按钮</uf-button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    clickHandle(){
      alert('点击了按钮')
    }
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
  margin-top: 60px;
}
</style>

<template>
  <div id="app">
    <button @click="showModal">打开弹窗</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    showModal() {
      this.$confirm({
        title: '提示',
        content: '这是内容',
        confirmButtonText: '确定按钮',
        cancelButtonText: '取消按钮',
      }).then(() => {
        console.log('success');
      }).catch((err) => {
        console.log('error', err);
      });
    }
  }
}
</script>

<style>
body {
  background: #f5f5f5;
  height: 100vh;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>

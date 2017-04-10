<template>
  <div class="first">
    <h1>{{msg}}</h1>
    <div class="item-box">
      <a class="page-link" href="#/list">列表</a>
    </div>
    <div class="item-box">
      <a class="page-link" href="#/btn">按钮</a>
    </div>
    <div class="item-box">
      <a class="page-link" href="#/nav">导航</a>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'index',
    data () {
      return {
        msg: '这是标题'
      }
    }
  }
</script>

<style scoped>
  h1 {
    color: #000;
  }

  .item-box {
    width: 100px;
    height: 100px;
    line-height: 100px;
    background: #0b97c4;
    margin: 0 auto;
  }

  .page-link{
    color: #fff;
    font-size: 20px;
  }
</style>

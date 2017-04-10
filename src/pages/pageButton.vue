<template>
  <div>
    <p>111</p>
    <wjj-btn @btnClick="newClick" msg="啦啦啦">
      <img slot="icon" src="../assets/logo.png" class="ico">
    </wjj-btn>
  </div>
</template>

<script type='text/ecmascript-6'>
  import wjjBtn from '../components/wjjButton.vue'
  export default{
    name: 'btn',
    components: {
      'wjj-btn': wjjBtn
    },
    methods: {
      newClick: function () {
        alert('我修改了click弹出的内容')
      }
    }
  }
</script>

<style scoped>
.ico{
  width: 15px;
  height: 15px;
}
</style>

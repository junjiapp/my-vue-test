<template>
  <div>
    <p>222</p>
    <wjj-list txt="这是一个新的文案，不是默认的文案" msg="弹层"></wjj-list>
    <wjj-list @btnClick="test"></wjj-list>
    <wjj-list txt="这个右边是一个箭头" currentView="wjj-arrow" ></wjj-list>
  </div>
</template>

<script type='text/ecmascript-6'>
  import wjjList from '../components/wjjList.vue'
  export default{
    name: 'list',
    components: {
      'wjj-list': wjjList
    },
    methods: {
      test: function () {
        alert('这是测试弹出')
        this.$emit('test')
      }
    }
  }
</script>

<style scoped>

</style>

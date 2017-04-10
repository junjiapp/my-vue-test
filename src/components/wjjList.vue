<template>
    <div class="wjj-list">
        <span class="list">{{txt}}</span>
        <component :is="currentView" @btnClick="btnClick" :msg=msg class="listBtn" keep-alive></component>
    </div>
</template>

<script type='text/ecmascript-6'>
  import wjjBtn from '../components/wjjButton.vue'
  import wjjArrow from '../components/wjjArrow.vue'
  export default {
    props: {
      msg: {
        default: '下载'
      },
      txt: {
        default: '默认的文案'
      },
      currentView: {
        default: 'wjj-btn'
      }
    },
    components: {
      'wjj-btn': wjjBtn,
      'wjj-arrow': wjjArrow
    },
    methods: {
      btnClick: function () {
        alert('这是一个新的弹出事件')
        this.$emit('btnClick')
      }
    }
  }
</script>

<style scoped>
  .wjj-list{
    width: 500px;
    height: 100px;
    line-height: 100px;
    overflow: hidden;
    color: skyblue;
    margin: 0 auto;
  }
.listBtn{
  float: right;
  width: 100px;
  height: 50px;
  margin-top: 40px!important;
}
</style>

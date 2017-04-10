<template>
    <button class="wjj-btn" @click="btnClick">
        <slot name="icon"></slot>
        <span>{{msg}}</span>
    </button>
</template>

<script type='text/ecmascript-6'>
  export default {
    props: {
      msg: {
        default: '下载'
      }
    },
    methods: {
      btnClick: function () {
        alert(this.msg)
        this.$emit('btnClick')
      }
    }
  }
</script>

<style scoped>
.wjj-btn{
  width: 100px;
  height: 20px;
  line-height: 20px;
  background: #ffc520;
  color: #fff;
  cursor: pointer;
  margin: 0 auto;
  outline: none;
  border: 0;
}
</style>

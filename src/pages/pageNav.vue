<template>
  <div>
    <p>333</p>
    <a v-for="(item, index) in items" :class="[commonClass, item.active ? activeClass : '']" @click="navTabClick(items, index)">
      <span class="nav-txt">{{item.text}}</span>
    </a>
  </div>
</template>

<script type='text/ecmascript-6'>
  export default{
    name: 'nav',
    data () {
      return {
        commonClass: 'nav-item',
        activeClass: 'active',
        items: [
          {
            text: '首页',
            active: false
          },
          {
            text: '列表',
            active: false
          },
          {
            text: '关于',
            active: true
          },
          {
            text: '招聘',
            active: false
          }
        ]
      }
    },
    methods: {
      navTabClick: function (items, index) {
        items.forEach(function (e) {
          e.active = false
        })
        items[index].active = true
        this.$emit('navTabClick', items, index)
      }
    }
  }
</script>

<style scoped>
  .nav-txt{
    display: inline-block;
    width: 100px;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
.active{
  padding-bottom: 20px;
  border-bottom: 2px solid #f9cd0b;
}
</style>

<template>
  <div id="header">
    <div class="logo">logo</div>
    <ul>
      <li v-for='navbar in navbars'>
        {{navbar}}
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'header',
    data () {
      return {
        navbars: [ '首页', '关于我' ]
      }
    }
  }
</script>
<style scoped lang="less">
  #header{
    border-bottom:1px solid #666;
    height:40px;
    display:flex;
    flex-direction:row;
    justify-content:flex-start;
    .logo{
      width:40px;
      height:40px;
      line-height:40px;
      text-align:center;
      margin-left:60px;
      color:blue;
    }
    ul{
      display:flex;
      justify-content:flex-start;
      margin-left:60px;
      li{
        height:40px;
        width:60px;
        line-height:40px;
        text-align:center;

      }
    }
  }
</style>

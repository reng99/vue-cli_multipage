<template>
  <div id="home">
    <header-component></header-component>
    <div class="content">
      <img src="../assets/logo.png">
      <h1>this is home</h1>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
  import HeaderComponent from './common/Header_component.vue'
  import FooterComponent from './common/Footer_component.vue'
  export default {
    name: 'home',
    components: {
      HeaderComponent,
      FooterComponent
    }
  }
</script>

<style lang='less' scoped>
  #home{
    .content{
      text-align:center;
      background:#999;
      height:600px;
      img{
        padding-top:150px;
        width:140px;
        height:140px;
      }
      h1{
        line-height:100px;
      }
    }
  }
</style>

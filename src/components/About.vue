<template>
  <div id="about">
    <header-component></header-component>
    <div class="content">
      <h1>about page</h1>
    </div>
    <footer-component></footer-component>
  </div>

</template>
<script>
  import HeaderComponent from './common/Header_component.vue'
  import FooterComponent from './common/Footer_component.vue'
  export default {
    name: 'about',
    components: {
      HeaderComponent,
      FooterComponent
    }
  }
</script>
<style scoped lang="less">
  #about{
    .content{
      line-height:600px;
      text-align:center;
      background:#999;
      height:600px;
    }
  }
</style>

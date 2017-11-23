<template>
  <div id="app">
    <NavHeader></NavHeader>
    <router-view class="view"> </router-view>
  </div>
</template>

<script>
import NavHeader from './components/Nav.vue'


export default {
  name: 'app',
  components: {NavHeader}

}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
.view{
  margin-left: 260px;
}
@media screen and (max-width: 768px){
  .view{
    margin-left:0px;
    margin-top: 52px;
  }
}



</style>

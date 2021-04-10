<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <testPackage :params="123"></testPackage>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
// import testPackage from "./components/testPackage/testPackage";

// 引入npm包
import components from "vuecomponet_william_leif";
import 'vuecomponet_william_leif/lib/vuecomponet_william_demo.css'


export default {
  name: 'App',
  components: {
    HelloWorld,
    testPackage:components.testPackage,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

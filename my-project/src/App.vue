<template>
  <div id="app">
    <!-- <div class="jumbotron logo">
       <img src="./assets/logo.png">
    </div> -->
    <!-- <toogle-button/> -->
    <toogle-button :labels="true" color="#82C7EB"/>
    <!-- <label role="radio" >
      <input type="radio" name="radio1" checked />
      <input type="radio" name="radio1"/>
    </label> -->
  </div>
</template>

<script>
import ToogleButton from './components/button'
// import ToggleButton from 'vue-js-toggle-button'

export default {
  name: 'app',
  components: {
    ToogleButton
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

#app .logo{
  text-align: center;
}
</style>

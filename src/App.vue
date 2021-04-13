<!--
 * @Author: your name
 * @Date: 2021-04-12 12:21:38
 * @LastEditTime: 2021-04-13 15:05:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vuecook\src\App.vue
-->
<template>
  <div id="app">
    <h1>{{ message }}</h1>
    <demo></demo>
  </div>
</template>

<script>
import Demo from '@/components/demo'
export default {
  name: 'App',
  components: {
    Demo
  },
  data: function() {
    return {
      message: 'Hello'
    }
  },
  beforeCreate: function() {
    console.log('beforeCreated: ', this.$appName)
  },
  created: function() {
    console.log('originMessage', this.message)
    
    this.$utils.reverseText.call(this, 'message')
    console.log('reversedMessage: ', this.message)
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

<template>
  <div class="app">
    <button v-copy="copyText">复制</button>
    <button v-longpress="press">长按</button>
    <input type="text" v-model="note" v-emoji />
    <!-- 显示 -->
  <button v-permission="'1'">权限按钮1</button>
  <!-- 不显示 -->
  <button v-permission="'10'">权限按钮2</button>
  <div class="water" v-waterMarker="{text:'lzg版权所有',textColor:'rgba(180, 180, 180, 0.4)'}"></div>
  <div class="box" v-draggable></div>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  name: 'App',
  components: {
  },
  setup() {
    const state = reactive({
      copyText: 'a copy directive',
      age: '123',
      note: ''
    });
    /* const longpress = () => {
      alert('长按指令生效')
    } */
    function press(){
      console.log(state.copyText)
    }
    function handleSubmit() {
      console.log(state.age);
    }
    return {
      ...state,
      press,
      handleSubmit
    }
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
.water {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}
.box {
  position: relative;
  width: 100px;
  height: 100px;
  background-color: antiquewhite;
}
</style>

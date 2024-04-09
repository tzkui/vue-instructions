<script setup lang="ts">
import { ref } from "vue";
const dragRef = ref()
const drapOptions = ref({
  x: 200,
  y: 200,
  target: dragRef.value
});
</script>

<template>
  <div class="dialog" v-drag="drapOptions">
    <div class="header" ref="dragRef">弹框标题</div>
    <div class="main">内容</div>
  </div>
</template>

<style scoped>
.dialog {
  width: 300px;
  background-color: blue;
  color: #fff;
}
.header {
  cursor:move;
  height: 80px;
}
.main {
  height: 400px;
}
</style>

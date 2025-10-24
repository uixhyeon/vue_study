<template>
  <div>ss</div>
  <Local_ex01/>
  <br>
<hr><hr>
<div class="container">
  <Review_01/>
  <hr><hr>
  <br>
  <Login/>
</div>
</template>
<script setup>
import Local_ex01 from './components/Local_ex01.vue';
import Login from './components/Login.vue';
import Review_01 from './components/Review_01.vue';


</script>

<style lang="scss" scoped>
.container{
  display: flex;
}
</style>

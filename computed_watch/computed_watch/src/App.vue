
<template>
 <h2> computed 예제</h2>
 <hr>
  <div class="computed_study">
    <Computed_ex/>
    <hr>
    <Computed_ex01/>
  </div>
  <hr>
  <h2>v-model - 양방향 바인딩</h2>
  <V_model/>
  <h2>watch() - 데이터 감시</h2>
  <div class="watch_study">

    <Watch_ex/>
    <Watch_ex01/>
    <Watch_ex02/>
  </div>
</template>
  <script setup>


import Computed_ex from './components/Computed_ex.vue';
import Computed_ex01 from './components/Computed_ex01.vue';
import V_model from './components/V_model.vue';
import Watch_ex from './components/Watch_ex.vue';
import Watch_ex01 from './components/Watch_ex01.vue';
import Watch_ex02 from './components/Watch_ex02.vue';

  </script>

<style scoped>
wrap {
  max-width: 1200px;
  margin: auto;
}
h2 {
  color: #fff;
  background-color: rgb(206, 163, 246);
}
.computed_study ,.watch_study{
  display: flex;
}
.computed_study div ,.watch_study div{
  flex: 1;
}
</style>

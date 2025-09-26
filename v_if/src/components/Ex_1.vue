<template>
<div>
<h2>1. v-if 란</h2>
<!-- 태그에서 if를 바로 잡을 수있다 -->
 <!-- 조건 -->
  <p v-if="islogin">✅로그인 했어요!</p>
  <p v-else>❌아직 로그인 안했어요!</p>
  <!-- 버튼으로 값 변경 -->
   <button @click="islogin = !islogin">로그인 / 로그아웃</button>
</div>
</template>
<script setup>
import {ref} from 'vue'
const islogin = ref(true)

</script>
<style scoped>

</style>

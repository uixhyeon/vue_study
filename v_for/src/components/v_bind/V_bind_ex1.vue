<template>
<div>
    <h2>v-bind 시작</h2>
    <!-- v-바인드란? html의 속성의 변수(데이터)를 연결 해주는 도구다. 묶어준다. : 이 붙으면 연결햇구나 를 알 수 있다-->
    <!-- <img src="" alt=""> -->
    <img :src="img" alt="이미지">    
    <img :src="img1" alt="이미지">    
</div>
</template>
<script setup>
import{ref} from "vue"
// 이미지 주소를 변수에 담아놓고 사용
const img = ref("https://picsum.photos/id/1020/200/150")
const img1 = ref("https://picsum.photos/id/1021/200/150")
</script>
<style scoped></style>
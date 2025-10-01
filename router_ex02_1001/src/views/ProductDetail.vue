<template>
  <div>
    <h1>
      상품상세페이지
    </h1>
    
    <p>상품이름{{ name }}</p>
    <p>상품가격{{ price }}</p>

<button @click="goback"> < 목록으로</button>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
//useRoute() 현재 위치를 확인;현재 헤이지 정보 가져오기
// 지금 페이지의 주소와 정보를 가져옴
const route = useRoute()
//useRouter() 가른 페이지로 이동 시키는 기능을 하는 함수
const router = useRouter()
//url 에서 params 가져오기
const name = ref(route.params.name)
const price = ref(route.params.price)
const goback=()=>{
  router.goback()//바로 전페이지로 이동
}
</script>

<style scoped></style>

<template>
  <div>
    <h2>클릭 이벤트</h2>
    <button @click="sayHello">누르기</button>
    <p>{{ message }}</p>
    <h2>마우스 이벤트</h2>
    <button 
    @mouseover="color = 'lightgreen'"
    @mouseout="color = 'white'"
    :style="{backgroundColor:color}">마우스 올려봐</button>
  <h2>입력이벤트</h2>
  <input type="text" placeholder="이름을 입력하세요" @input="updateName">
  <p>내 이름은 {{ name }}</p>
  <h2>서브밋 폼 이벤트</h2>
  <form @submit.prevent="handleSubmit">
<input type="email" v-model="email" placeholder="이베일 입력">
<button type="submit">제출하기</button>
  </form>
  <p>입력된 이메일: {{ email }}</p>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const message = ref("아직 안눌렀어요~")
const isHello = ref(false) //상태 저장
const sayHello = ()=>{
    // message.value = "버튼 클릭 완"
isHello.value = !isHello.value
message.value = isHello.value ? "버튼 클릭 완" : "아직 안눌렀어요~"
}
// 클릭 이벤트 토글
//컬러를 저장
const color = ref("white")
// 입력이벤트
const name = ref("")
const updateName = (event)=>{
    name.value = event.target.value ///입력한 값 가져오기
}
//폼 이벤트
const email = ref("")
const handleSubmit = ()=>{
    alert(`제출완료! 입력한 이메일: ${email.value}`)
}
</script>
<style scoped>

</style>

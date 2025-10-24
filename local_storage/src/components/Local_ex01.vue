<template>
  <div>
    <!-- localStorage 로컬스토리지 -->
    <div class="box">
      <h2>짐보관 예약</h2>
      <input v-model="name" type="text" placeholder="이름을 입력하세요" /><br />
      <button @click="saveName">💾 저장하기</button>
      <button @click="LoadName">🎈 불러오기</button>
      <button @click="clearName">🧱지우기</button>
      <p>저장된 이름 : {{ savedName }}</p>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";
const name = ref("");
// 저장된 이름 보여주기
const savedName = ref("");
// 저장하기
const saveName = () => {
  localStorage.setItem("customerName", name.value);
//   셋은 키 벨류
  alert("이름이 저장됐어요~");
  savedName.value = name.value; //저장후 화면에 반영
};
// 불러오기
const LoadName = () => {
  const getName = localStorage.getItem("customerName");
//   겟은 키값만    ㄴ이건 지역변수 괄호안에서만 작동
  console.log(getName);
  savedName.value = getName ? getName : "저장된 이름이 없어요."
};
// 지우기
const clearName = ()=>{
localStorage.removeItem("customerName")
saveName.value = ""
alert("저장된 이름이 지워졌어요!")
}
// 페이지 열릴째 자동으로 불러오기
 onMounted(()=>{
// const getName = localStorage.getName("customerName")
// if(getName){
//     saveName.value = getName
// }else{
//     savedName.value = "저장된 이름이 없어요."
// }
LoadName()
 })

</script>

<style scoped></style>

<template>
  <!-- <p>{{ count }}</p> -->
  <p>{{ message }}</p>
  <button @click="changeMessage">글자 바꾸기</button>
  <!-- <button @click="count++">눌러봐+ {{ count }} </button> -->
  <button @click="increase">눌러봐+ {{ count }}</button>

  <button @click="increase1">눌러봐- {{ count1 }}</button>
  <!-- <button @click="count1--">눌러봐- {{ count1 }}</button> -->
  <hr />
  <p>{{ name }}</p>
  <button @click="changeName">이름변경</button>
</template>
<script setup>
import { ref } from "vue";
// ref() - 반응형 변수
// vue가 값을 기억하고, 바뀌면 화면도 자동으로 바뀜
const count = ref(0);
// console.log(count);
const count1 = ref(0);
const message = ref("안녕 반가워 😍");
// 이름변경 할 변수
const name = ref("하경미");
// console.log(count.value);
// 더하기 기능 함수
function increase() {
  count.value++;
}
// 빼기 기능 함수
function increase1() {
  count1.value--;
}
// 글자바꾸기 함수
function changeMessage() {
  // message.value = "만나서 반가워! 😀"
  if (message.value === "안녕 반가워 😍") {
    message.value = "만나서 반가워! 😀";
  } else {
    message.value = "안녕 반가워 😍";
  }
}
// 이름 변경 함수
function changeName() {
  if (name.value === "하경미") {
    name.value = "halgass";
  } else {
    name.value = "하경미";
  }
}
</script>
<style scoped></style>

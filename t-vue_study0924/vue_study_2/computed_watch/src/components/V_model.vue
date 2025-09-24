<template>
  <div>
    <input v-model="message" @input="updateMessage" type="text" placeholder="메시지 입력" />
    <p>입력한 내용 : {{ message }}</p>
    <hr>
    <input v-model="name" @input="updateName" type="text" placeholder="메시지 입력" />
    <p>입력한 내용 : {{ name }}</p>
  </div>
</template>
<script setup>
import { nextTick, ref } from "vue";
const message = ref("");
// 한글 이슈
const updateMessage = (event) => {
  nextTick(() => {
    message.value = event.target.value;
  });
};
const name = ref("");
// 한글 이슈
const updateName = (event) => {
  nextTick(() => {
    name.value = event.target.value;
  });
};
</script>
<style scoped></style>

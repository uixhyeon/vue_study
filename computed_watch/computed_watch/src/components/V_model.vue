<template>
<div>
<input v-model="message" @input="updateMessage" type="text" placeholder="메시지 입력">
<p>입력한 내용 : {{message }}</p>
<input v-model="message2" @input="updateMessage" type="text" placeholder="메시지 입력">
<p>입력한 내용 : {{ message2}}</p>

</div>


</template>
<script setup>
import { nextTick, ref } from 'vue';

const message = ref("")
// 한글입력은 한템포 느림 나중에 해결예정

const message2 = ref("")
//한글 이슈
const updateMessage = (event)=>{
    nextTick(()=>{
message.value = event.target.value

    })
}


</script>
<style scoped></style>
<template>
    <div class="wrap">

        <p>가격:{{ price }}원 </p>
        <p>세금:{{ tax }}원 </p>
        <p>총합: {{ formetNumber(total) }}원</p>
    </div>
    </template>
<script setup>
import {ref , computed } from 'vue';
//computed()-계산된값
//다른데이커에따라 자동으로 값이 바뀌는 계산 전용 변수


const price =ref(1000);
// const tax = computed(()=>{})
const tax = computed(() => {
return price.value*0.1

})
// console.log(tax.value)
const total = computed(() => {
return price.value + tax.value

})
//천단위콤마함수
const formetNumber = (num) => {
    return num.toLocaleString()
}
</script>


<style scoped>

</style>

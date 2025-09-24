<template>
  <div class="wrap">
    <h2>장바구니</h2>
    <p>상품가격 : {{ formetNumber(price)}}원</p>
    <p>할인(20%) : {{formetNumber(discount)}}원</p>
    <p>세금(10%) : {{formetNumber(tax)}}원</p>
    <hr />
    <p><strong>최종결제금액 : {{ formetNumber(total) }}원</strong></p>
  </div>
</template>
<script setup> 
import { computed, ref } from "vue";
//천단위콤마함수
const formetNumber = (num) => {
  return num.toLocaleString();
};
//원래가격
const price = ref(10000);
//할인금액 (20%)
const discount = computed(()=>{
   return price.value * 0.2
})
//세금 (10%)
const tax = computed(()=>{
//    (price.value - 할인금액) * 0.1
return (price.value - discount.value) * 0.1
})
//최종가격
const total = computed(() => {
    return (price.value - discount.value + tax.value)
})
</script>

<style scoped></style>

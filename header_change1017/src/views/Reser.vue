<template>
  <div class="home">
    <h1>🏠 예약페이지</h1>
    <router-link to="/review" class="btn">리뷰 보러가기</router-link>
    <div class="section">
      <ReserForm v-if="step === 'form'" @next="goToPayment" />
      <Payment v-if="step === 'payment'" :reservation="reservation" @next="goToConfirm" />
      <ReserComfirm v-if="step === 'confirm'" :reservation="reservation" @reset="reserReser" />
    </div>
  </div>
</template>
<script setup>
import ReserForm from "@/components/reservation/ReserForm.vue";
import Payment from "@/components/reservation/Payment.vue";
import { ref } from "vue";
import ReserComfirm from "@/components/reservation/ReserComfirm.vue";
const step = ref("form");
const reservation = ref({});
const goToPayment = (data) => {
  console.log(data);
  reservation.value = data;
  step.value = "payment";
};
const goToConfirm = (data) => {
  reservation.value = data;
  step.value = "confirm";
};
// 예약 초기화
const reserReser = () => {
  reservation.value = {};
  step.value = "form";
};
</script>
<style lang="scss" scoped>
.home {
  padding-top: 100px;
  text-align: center;

  .btn {
    display: inline-block;
    margin-top: 20px;
    padding: 10px 20px;
    background: rgb(30, 30, 30);
    color: #fff;
    border-radius: 10px;
    text-decoration: none;
  }
}
</style>

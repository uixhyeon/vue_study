<template>
  <main class="booking">
    <h1>호텔 예약</h1>
    <!-- 날짜 선택 -->
    <div class="form-group">
      <label>
        체크인 날짜:
        <input type="date" v-model="checkIn" />
      </label>
    </div>

    <div class="form-group">
      <label>
        체크아웃 날짜:
        <input type="date" v-model="checkOut" />
      </label>
    </div>
    <!-- 인원 선택 -->
    <div class="form-group">
      <label>
        인원:
        <input type="number" min="1" v-model="people" />
      </label>
    </div>
    <!-- 결과 -->
    <section class="result">
      <h2>예약 확인</h2>
      <ul>
        <li>
          체크인 날짜: <strong>{{ checkIn }}</strong>
        </li>
        <li>
          체크아웃 날짜: <strong>{{ checkOut }}</strong>
        </li>
        <li>
          숙박 일수: <strong>{{ nights }}박</strong>
        </li>
        <li>
          총 인원: <strong>{{ people }}명</strong>
        </li>
        <li class="price">총 금액: <strong>{{totalPrice.toLocaleString}}원</strong></li>
      </ul>
    </section>
  </main>
</template>
<script setup>
import { ref, computed } from "vue";
// 변경 값 :ref
const checkIn = ref("");
const checkOut = ref("");
const people = ref(1);

// 계산된 값 :computed()
// 숙박 일수를 자동으로 계산하는 computed
const nights = computed(() => {
  // 만약 체크인 또는 체크아웃 날짜가 없으면 => 숙박일은 0
  if (!checkIn.value || !checkOut.value) return 0;
  //   사용자가 선택한 체크인 날짜를 Date 객체로 바꿈
  const inDate = new Date(checkIn.value);
  //   사용자가 선택한 체크인 날짜를 Date 객체로 바꿈
  const outDate = new Date(checkOut.value);
  // console.log(`체크인 날짜:${inDate} ,체크아웃 날짜:${outDate} `);
  // 날짜 차이 계산 (밀리초 단위  => 일 단위 변환)
  // (1000 * 60 * 60 * 24) => 밀리초를 하루 단위로 변환
  const diff = (outDate - inDate) / (1000 * 60 * 60 * 24);
  return diff > 0 ? diff : 0;
});
// console.log(nights.value);
// 1박 (하루) 1인당 숙벅요금 (50,000원으로 고정)
const pricePerNight = 50000;
//총 금액을 자동으로 계산하는 컴퓨티드
const totalPrice = computed(()=>{
  return nights.value * pricePerNight 
})
</script>

<style scoped></style>

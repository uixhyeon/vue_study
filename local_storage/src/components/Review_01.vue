<template>
  <div class="box">
    <h2>로컬에 여러개 저장하기</h2>
    <!-- 입력창 -->
    <input v-model="name" placeholder="이름입력" />
    <input v-model="rating" type="number" min="1" max="5" placeholder="별점(1~5)" />
    <textarea v-model="text" placeholder="후기를 입력하세요."></textarea>
    <button @click="saveReview">리뷰 저장하기</button>
    <hr />
    <h3>저장된 리뷰 목록</h3>
    <!-- 저장된 리뷰가 없을때 -->
    <div class="no-review" v-if="message">
      {{ message }}
    </div>
    <!-- 저장된 리뷰가 있을때 -->
    <div v-else class="review" v-for="(review, index) in reviews" :key="index">
      <p>이름:{{ review.name }}</p>
      <p>별점:{{ review.rating }}</p>
      <p>후기:{{ review.text }}</p>
    </div>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";

const name = ref("");
const rating = ref("");
const text = ref("");
const reviews = ref([]);
// 리뷰 여부 문구 변수
const message = ref(" ");
// console.log(reviews.value);
// 페이지가 켜딜때 LocalStorage에서 불러오기
onMounted(() => {
  const saved = localStorage.getItem("reviews");
// 
//   if (saved) {
//     // 문자를 바꿔야함 -그냥 형식임  // 저장은 문자로 가져올때는 배열로
//     reviews.value = JSON.parse(saved); // 문자열 -> 배열로 복원
//   } else {
//     message.value = "아직 저장된 리뷰가 없습니다";
//   }
// 삼항연산자로 한번에~~
reviews.value = saved ? JSON.parse(saved) : []
message.value = saved ? "" : "아직 저장된 리뷰가 없습니다"

});

// 리뷰 저장하기
const saveReview = () => {
  const newReview = {
    name: name.value,
    rating: rating.value,
    text: text.value,
  };
  //   배열에 새 리뷰 추가
  reviews.value.push(newReview);
  // 저장죈 리뷰 리셋
  message.value = "";

  //   console.log(reviews.value);
  // 로컬스토리지에 저장(배열 -> 문자열로 바꾸기)
  localStorage.setItem("reviews", JSON.stringify(reviews.value));
  alert("리뷰가 저장되었어요!");
  // 입력창 비우기
  name.value = "";
  rating.value = "";
  text.value = "";
};
</script>

<style lang="scss" scoped>
.box {
  width: 320px;
  margin: 40px auto;
  padding: 20px;
  background: #eef5ff;
  border-radius: 12px;
}
input,
textarea {
  width: 100%;
  margin-bottom: 8px;
  padding: 6px;
  border-radius: 6px;
  border: 1px solid #ccc;
}
button {
  width: 100%;
  background: #0a66c2;
  color: white;
  border: none;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
}
// 리뷰 css
.review {
  background: white;
  border-radius: 8px;
  padding: 10px;
  margin-top: 10px;
}
</style>

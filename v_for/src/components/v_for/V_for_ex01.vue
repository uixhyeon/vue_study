<template>
  <div>
    <h2>간단한 반복문</h2>
    <ul>
      <!-- v-for ="매개변수 in 배열"  **외우기** -->
      <li v-for="fruit in fruits" :key="index">{{ fruit }}</li>
      <!-- 키를 적거나 아이디로 적어도 좋~~?? -->
    </ul>
    <h2>상품 목록</h2>
    <ul>
        <!-- item 매개변수. 임의로 지정 -->
      <li v-for="(item , index) in products" :key="index">
        <!-- : 는 속성을 단축해서보여줌 -->
        {{ index + 1 }}. {{ item }}
      </li>
    </ul>
<ul >
 
    <li v-for="(item, index) in posts" :key="index">

       {{ index + 1 }}. {{ item }}
    </li>
</ul>
<ul v-for="(item, index) in menus" :key="index">
    <li>

       {{ index + 1 }}. {{ item }}
    </li>
</ul>

<ul>
<li>

</li>

</ul>


  </div>
</template>

<script setup>
import { ref } from "vue";
const fruits = ref(["사과", "바나나", "포도", "딸기"]);
const products = ref(["피자", "햄버거", "콜라"]);

// 글 배열
const posts = ref(["첫 번째 글", "두 번째 글", "세 번째 글"]);

// 메뉴 배열
const menus = ref(["홈", "상품", "문의", "로그인"]); 
</script>
<style scoped></style>

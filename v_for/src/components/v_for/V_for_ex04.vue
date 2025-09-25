<template>
  <div>
    <h2>★반복</h2>
    <span v-for="n in 5" :key="n">★</span>
    <h3>★반쪽 예제</h3>
    <!-- 꽉찬 별 4개 -->
    <span v-for="n in 4" :key="n" class="star full">★</span>
 <!-- 빈별 -->
  <span class="star half">★</span>
 
 </div>
</template>
<script setup></script>

<style scoped>
.star{
font-size: 24px;
color: lightgray

}
.full{
    color: gold;
}

.half{
position: relative;
display: inline-block;
color: lightgray;
}
.half::before{
    content: "★";
    position: absolute;
    left: 0;
    width: 50%; /* 절반만 칠하기*/
overflow: hidden;
    color: gold;
}
</style>

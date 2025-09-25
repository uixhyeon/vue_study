<script setup>
import V_for_ex01 from './V_for_ex01.vue';
import V_for_ex02 from './V_for_ex02.vue';
import V_for_ex03 from './V_for_ex03.vue';
import V_for_ex04 from './V_for_ex04.vue';



</script>

<template>
    <h1>v_for</h1>
<div class="section">
    <!-- 예제1 -->
    <V_for_ex01/>
    <hr>
    <V_for_ex02/>
    <hr>
    <V_for_ex03/>
    <hr>
    <V_for_ex04/>
</div>
</template>

<style scoped>
.section{
    display: flex;

}
.section > div{
    flex: 1;
}
</style>

<template>
    <h1>V-bind</h1>
    <div class="contents">
        <V_bind_ex1/>
        <hr>
        <V_bind_ex2/>
        <hr>
        <V_bind_ex3/>
        <hr>
        <V_bind_ex4/>
    </div>
</template>
<script setup>
import V_bind_ex1 from './v_bind_ex1.vue';
import V_bind_ex2 from './v_bind_ex2.vue';
import V_bind_ex3 from './v_bind_ex3.vue';
import V_bind_ex4 from './v_bind_ex4.vue';

</script>
<style scoped>
.contents{
    display: flex;
}
.contents div{
    flex: 1;
}
</style>
<template>
  <div class="container">
    <Event/>
    <Form/>
  </div>
  </template>
<script setup>
import Event from './components/Event.vue';
import Form from './components/Form.vue';

</script>

<style scoped>
.container{
  display: flex;
}
.container div{
  flex: 1;
}
</style>

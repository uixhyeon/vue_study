<template>
  <div>
    <router-link to="/">기본 지도</router-link> || 
    <router-link to="/marker">여러마커 지도</router-link> || 
    <router-link to="/location">로케이션</router-link>
    <router-view></router-view>
  </div>
</template>
<script setup></script>

<style scoped></style>

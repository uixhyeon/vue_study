<template>
<div>
<h1>배열 조작 예시</h1>
<p>현재 배열: {{items}}</p>
<div class="btn-wrap">
    <button @click="addItem">push()-추가:배열에다가 추가하는 기능</button>
    <button @click="removeLastItem">pop()-마지막 제거</button>
    <button @click="removeFiratItem">shift()-첫번째 제거</button>
    <button @click="removeAndItem">unshift()-첫번째 추가</button>
    <button @click="removeAndaddItem">splice() - 요소변경</button>
    <button @click="sortItems">solt()- 정렬</button>
    <button @click="reverseItems">reverse()-역순 정렬</button>
    <button @click="filterItems">filter()-a 포함된 요소만 필터링</button>
    <button @click="concatItems"> concat()-새로운 배열과 결합</button>
    <button @click="sliceItems">slice() - 인덱스 1~2 요소 추출</button>
</div>
</div>
</template>
<script setup>
import {ref} from "vue";
const items = ref(["Apple", "Banana", "Cherry", "Orange", "Grapes"]);
//push()
const addItem = ()=>{
    items.value.push("Pineapple")
}
//pop()
const removeLastItem = ()=>{
    items.value.pop() // 배열 마지막 제거
}
// shift()
const removeFiratItem = ()=>{
    items.value.shift()
}
// unshift()
const removeAndItem = ()=>{
    items.value.unshift("Mango")
}
//splice
const removeAndaddItem = ()=>{
    items.value.splice(1,1,"Kiwi")
    // items.value.splice(인덱스번호,delete갯수,추가할아이템)
}
//sort()
const sortItems = ()=>{
    items.value.sort()
}
//reverse()
const reverseItems = ()=>{
    items.value.reverse()
}
// filter()-"a"포함된 배열만
const filterItems = ()=>{
// items.value = items.value.filter(콜백함수&매개변수)
items.value = items. value.filter((item)=>{
    // console.log(item)
    // 필터는 계산- 리턴하기
   return item.includes("a")
})
}
// contact()
const concatItems = ()=>{
    items.value = items.value.concat(["Strowberry", "blueberry"]);
}
// slice() - start부터 end 전까지 잘라서 온다/1부터 3 전까지 잘라서 온다
const sliceItems = ()=>{
 items.value = items.value.slice(1,3)
// items.value = items.value.slice(start,end) //잘라낼 범위 시작과 끝 위치
 // items.value =  을앞에 넣어야 할당이되어서 보여짐
}
</script>
<style scoped></style>
import { createRouter, createWebHistory } from "vue-router";
import About from "@/views/About.vue";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Product from "@/views/Product.vue";
import ProductDetail from "@/views/ProductDetail.vue";
import Signup from "@/views/Signup.vue";
//페이지 주소 연결
const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/product", component: Product },
//   이 패스 라우트 기능
  { path: "/products/:name/${price}", component: ProductDetail },
  { path: "/login", component: Login },
  { path: "/signup", component: Signup },
];
const router = createRouter({
  history: createWebHistory(),
  routes, //경로정의
});
export default router;

import { createRouter, createWebHistory } from "vue-router";
import HomeVue from "@/views/Home.vue";
import AboutVue from "@/views/About.vue";
import ProductsVue from "@/views/Products.vue";
import ProductDetailVue from "@/views/ProductDetail.vue";
import LoginVue from "@/views/Login.vue";
import SignupVue from "@/views/Signup.vue";
// 페이지 주소 연결
const routes = [
  { path: "/", component: HomeVue },
  { path: "/about", component: AboutVue },
  { path: "/products", component: ProductsVue },
  { path: "/products/:name/:price", component: ProductDetailVue },
  { path: "/login", component: LoginVue },
  { path: "/signup", component: SignupVue },
];
const router = createRouter({
  history: createWebHistory(),
  routes, //경로 정의
});

export default router;

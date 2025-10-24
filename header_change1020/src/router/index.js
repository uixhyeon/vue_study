import { createRouter, createWebHistory } from "vue-router";
import HomeVue from "@/views/Home.vue";
import ProductDetailVue from "@/views/ProductDetail.vue";
import ReserVue from "@/views/Reser.vue";
import ReviewVue from "@/views/Review.vue";
import NotFoundVue from "@/views/NotFound.vue";
import FQ from "@/views/F&Q.vue";
const routes = [
  { path: "/", component: HomeVue, name: "HomeVue" },
  { path: "/reser", component: ReserVue, name: "ReserVue" },
  { path: "/review", component: ReviewVue, name: "ReviewVue" },
  { path: "/fq", component: FQ, name: "FQ" },
  { path: "/product-detail/:id", component: ProductDetailVue, name: "ProductDetailVue" },
  // 404페이지
  { path: "/:pathMatch(.*)*", component: NotFoundVue, name: "NotFoundVue" },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

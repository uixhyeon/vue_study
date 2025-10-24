import Map_location from "@/views/Map_location.vue";
import Map_marker from "@/views/Map_marker.vue";
import MapViewVue from "@/views/MapView.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: MapViewVue },
  { path: "/marker", component: Map_marker },
  { path: "/location", component: Map_location },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

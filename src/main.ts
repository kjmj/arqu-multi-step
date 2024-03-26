import { createApp } from "vue";
import App from "./App.vue";
import "./assets/index.css";
import { createWebHistory, createRouter } from "vue-router";

const routes = [
  { path: "/arqu-multi-step/:step", name: "app", component: App },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount("#app");

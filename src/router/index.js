import {createRouter, createWebHistory} from "vue-router";
import SigninView from "../views/SigninView.vue";
import HomeView from "../views/HomeView.vue";

const routes = [
  { path: '/signin', component: SigninView },
  { path: '/home', component: HomeView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {

})

export {router}
import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue';
import Heroes from '../views/Heroes.vue';
import HeroDetails from '../views/HeroDetails.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Dashboard
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/heroes',
    name: 'Heroes',
    component: Heroes
  },
  {
    path: '/heroes/:heroId',
    name: "HeroDetails",
    component: HeroDetails
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

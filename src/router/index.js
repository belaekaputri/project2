import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginComponent from "../views/LoginView.vue"
import HomeComponent from "../views/HomeView.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name:'Login', 
    component: LoginComponent
    
},
{
    path: "/login",
    name: "LoginView",
    component: LoginComponent
},
{
    path: "/home",
    name: "HomeView",
    component: HomeComponent
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'home',
    redirect:'/home'
  },
  {
    path:'/home',
    component:()=> import('../views/home/Home.vue')
    
  },
  {
     path:'/detail/:iid',
     component:()=>import('../views/home/Detail.vue')
  },
  {
    path:'/category',
    component:()=> import('../views/category/Category.vue')
    
  },
  {
    path:'/shopcart',
    component:()=> import('../views/shopcart/Shopcart.vue')
    
  },
  {
    path:'/profile',
    component:()=> import('../views/profile/Profile.vue')
    
  },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

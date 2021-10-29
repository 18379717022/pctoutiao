import Vue from 'vue'
import VueRouter from 'vue-router'

//在VueCLI创建的项目中 @ 表示src,它是 src 目录的路径别名,它不受当前文件路径的影响
import Login from '@/views/login'

Vue.use(VueRouter)

const routes = [
  {
    path:'/login',
    name:'login',
    component:Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router

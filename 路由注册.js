import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

let otherRoutes = []
let routs = require.context('./', false, /\.router.js$/)
// router文件夹下的router.js文件结尾的js文件都会被路由配置
routs.keys().map(item=>{
  otherRoutes.push(routs(item).default)
})

const routes = [
  ...otherRoutes,
  {
    path: '/login',
    name: 'Login',
    component: ()=>import('@views/login/index.vue'),
    meta: {
      title: '用户登录'
    }
  },
  {
    path: '/',
    name: 'Index',
    component: () =>
      import('@views/index/Index.vue'),
    meta: {
      title: '会员管理系统'
    }
  },
  {
    path: '/question',
    name: 'Question',
    component: ()=>import('@views/Question.vue'),
    meta: {
      title: '商户帮助'
    }
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  // console.log(to)
  /* 路由发生变化修改页面title */
  if (to.meta && to.meta.title) {
    document.title = to.meta.title
  }

  next()
})

export default router

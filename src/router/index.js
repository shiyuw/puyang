import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: ()=> import('@/components/login/entry'),
    children:[
      {
        path: '/login/register',
        name: 'register',
        component: ()=> import('@/components/login/register')
      },
      {
        path: '/',
        name: 'register',
        component: ()=> import('@/components/login/login')
      },
      {
        path: '/login/resetpass',
        name: 'register',
        component: ()=> import('@/components/login/forgetpass')
      },
      {
        path: '/login/modifypass',
        name: 'register',
        component: ()=> import('@/components/login/modifypass')
      },
      {
        path: '/login/success',
        name: 'registerSuccess',
        component: ()=> import('@/components/login/success')
      },

    ]
  },
  
  
  
  {
    path: '/intro',
    name: 'intro',
    component: ()=> import('@/components/intro/intro')
  },
  {
    path: '/complain/',
    name: 'complain',
    component: ()=> import('@/components/complain/complain'),
    children:[
      {
        path: '/complain/',
        name: 'tocomplain',
        component: ()=> import('@/components/complain/tocomplain'),
      },
      {
        path: '/complain/mycomplains',
        name: 'mycomplains',
        component: ()=> import('@/components/complain/mycomplains.vue'),
      },
    ]
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

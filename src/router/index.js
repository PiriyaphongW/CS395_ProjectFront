import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/FrontAfterLogin/Products.vue'
import FrontendL from "@/layout/Frontend.vue"
import SignUp from "../views/SignUp.vue"
import SignIn from "../views/SignIn.vue"
import FrontendAfterLogin from "../layout/FrontendAfterLogin/FrontendAfterLogin.vue"
import Cart from "../views/FrontAfterLogin/Cart.vue"
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'FrontendL',
    component: FrontendL,
    children:[
      {
        path: "",
        name: "Home",
        component: Home,
      },
      {
        path: "SignUp",
        name: "SignUp",
        component: SignUp,
      },
      {
        path: "SignIn",
        name: "SignIn",
        component: SignIn,
      },

    ]
  },
  {
    path: '/frontend',
    name: 'FrontendAfterLogin',
    component:FrontendAfterLogin,
    children:[
      {
        path: "products",
        name: "Products",
        component: Products,
      },
      {
        path: "cart",
        name: "Cart",
        component: Cart,
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

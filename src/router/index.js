import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Products from '../views/FrontAfterLogin/Products.vue'
import FrontendL from "@/layout/Frontend.vue"
import SignUp from "../views/SignUp.vue"
import SignIn from "../views/SignIn.vue"
import FrontendAfterLogin from "../layout/FrontendAfterLogin/FrontendAfterLogin.vue"
import Cart from "../views/FrontAfterLogin/Cart.vue"
import Footer from "../components/frontend/Footer.vue"
import About from "../views/About.vue"
import Admin from "../views/Admin/admin.vue"
import Backend from "../layout/Backend.vue"
Vue.use(VueRouter)


function authGuard(to, from, next) {
  let authen = false;

  if (localStorage.getItem("user")) {
    authen = true;
  } else {
    authen = false;
  }

  if (authen) {
    next();
  } else {
    next({ name: "Signin" });
  }
}
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
        path: "About",
        name: "About",
        component: About,
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
      {
        path: "Footer",
        name: "Footer",
        component: Footer,
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
    path: '/Backend',
    name: 'Backend',
    component:Backend,
    beforeEnter: authGuard,
    children:[
      {
        path: "Admin",
        name: "Admin",
        component: Admin,
      },
      

    ]
  },




  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'
import nosotros from '../components/nosotros.vue'
import calculadora from '../components/calculadora.vue'




Vue.use(VueRouter)

const routes = [
  {
    path:'/nosotros',
    name:'nosotros',
    component: nosotros
  },
  {
    path:'/calculadora',
    name:'Calculator',
    component: calculadora
  }

]

const router = new VueRouter({
  routes
})

export default router

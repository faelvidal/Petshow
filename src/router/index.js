import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const loadView = (view) => () => import(`@/views/${view}.vue`)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadView('Home')
  },
  {
    path: '/about',
    name: 'About',
    component: loadView('About')
  },
  {
    path: '/animals',
    component: loadView('Animal/Index'),
    children: [
      {
        path: '',
        name: 'AnimalList',
        component: loadView('Animal/List')
      },
      {
        path: 'create',
        name: 'AnimalCreate',
        component: loadView('Animal/Create')
      },
      {
        path: 'edit/:id',
        name: 'AnimalEdit',
        component: loadView('Animal/Edit'),
        props: true
      }
    ]
  },
  {
    path: '/veterinarians',
    component: loadView('Veterinarian/Index'),
    children: [
      {
        path: '',
        name: 'VeterinarianList',
        component: loadView('Veterinarian/List')
      },
      {
        path: 'create',
        name: 'VeterinarianCreate',
        component: loadView('Veterinarian/Create')
      },
      {
        path: 'edit/:id',
        name: 'VeterinarianEdit',
        component: loadView('Veterinarian/Edit'),
        props: true
      }
    ]
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
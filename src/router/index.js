import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import NewEmployee from '../components/NewEmployee.vue'
import ViewEmployee from '../components/ViewEmployee.vue'
import EditEmployee from '../components/EditEmployee.vue'
import Login from '../components/Login.vue'
import Register from '../components/register.vue'
import firebase from 'firebase/app'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        requiresGuest: true,
      }
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
      meta: {
        requiresGuest: true,
      }
    },
    {
      path: '/new',
      name: 'new-employee',
      component: NewEmployee,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/edit/:employee_id',
      name: 'edit-employee',
      component: EditEmployee,
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/:employee_id',
      name: 'view-employee',
      component: ViewEmployee,
      meta: {
        requiresAuth: true,
      }
    },
  ]
})

router.beforeEach((to, from ,next) =>{
  // check for requireAuth guard


  // nav guard

  if(to.matched.some(record => record.meta.requiresAuth)){
    //check if not logged in
    if(!firebase.auth().currentUser){
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }else{
      //proceed to route
      next()
    }
  }else if(to.matched.some(record => record.meta.requiresGuest)){
    //check if not logged in
    if(firebase.auth().currentUser){
      next({
        path: '/',
        query: {
          redirect: to.fullPath
        }
      })
    }else{
      //proceed to route
      next()
    }
  }else {
    //proceed to route
    next()
  }
})

export default router
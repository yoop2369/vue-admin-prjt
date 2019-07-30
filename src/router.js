import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
// import UserList from '@/router/mainLabel.js'
// import UserList from '@/components/mainLabel/UserList'
import About from './views/About.vue'
import Main from './layout/Main.vue';
import UserList from '@/components/mainLabel/UserList.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: Main,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
      component: About,
    },
    // ...UserList
    {
      path: '/userList',
      name: 'userList',
      component: UserList,
      props: true
    },
  ],
});

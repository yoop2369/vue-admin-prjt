import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Main from './layout/Main.vue';
import UserList from '@/components/mainLabel/UserList.vue'
import Post from '@/components/mainLabel/Post.vue'
import DataBinding from '@/components/test/DataBinding.vue'
import UserForm from '@/components/test/UserForm.vue'

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
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    // ...UserList
    {
      path: '/userList',
      name: 'userList',
      component: UserList,
      props: true
    },
    {
      path: '/post',
      name: 'post',
      component: Post
    },
    {
      path: '/dataBinding',
      name: 'binding',
      component: DataBinding
    },
    {
      path: '/userForm',
      name: 'userForm',
      component: UserForm
    }
  ],
});
<template>
  <v-app>
    <!-- 왼쪽 사이드 바 -->
    <left-side-bar :drawer="drawer"/>
    <!-- 상단 toolbar -->
    <header-vue :drawer="drawer" @toggleDrawer="toggleDrawer"/>

    <router-view></router-view>

    <!-- footer -->
    <footer-vue :dialog="dialog" @closeDialog="toggle" />

    <!-- Contact card -->
    <user-form :dialog="dialog" @closeDialog="toggle" />
  </v-app>
</template>

<script>
  
  import LeftSideBar from '@/layout/LeftSideBar.vue';
  import UserForm from '@/components/UserForm.vue';
  import FooterVue from '@/layout/Footer.vue';
  import HeaderVue from '@/layout/Header.vue';

  export default {
    data: () => ({
      drawer: true,
      dialog: false,
      contentId: 'main',
      totalPageCnt: 10,
      visible: 5,
      page: true
    }),
    methods: {
      toggle: function() {
        this.dialog = !this.dialog
      },
      toggleDrawer: function() {
        this.drawer = !this.drawer
      }
    },
    components: {
      LeftSideBar,
      UserForm,
      FooterVue,
      HeaderVue
    }
  }

  
</script>
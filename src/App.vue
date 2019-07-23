<template>
  <v-app>

    <Main/>
    <!-- <ToolBar/>
    <v-content>
      <Home/>
    </v-content> -->
    

  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
// import Home from './components/Home.vue';
// import ToolBar from './components/ToolBar.vue';
import Main from './layout/Main.vue';

export default {
  name: 'App',
  components: {
    // Home,
    // ToolBar,
    Main
  },
  data() {
    return {
      //
    };
  },
};
</script>

<template>
  <v-toolbar
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    color="blue darken-3"
    dark
    app
    fixed
  >
    <!-- title area -->
    <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
      <v-toolbar-side-icon @click.stop="toggleDrawer()"></v-toolbar-side-icon>
      <span class="hidden-sm-and-down">Vuetify Admin</span>
    </v-toolbar-title>

    <!-- search area -->
    <v-text-field
      flat
      solo-inverted
      hide-details
      prepend-inner-icon="search"
      label="Search"
      class="hidden-sm-and-down"
    ></v-text-field>

    <!-- 여백 area -->
    <v-spacer></v-spacer>

    <!-- icon area -->
    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>notifications</v-icon>
    </v-btn>
    <v-btn icon large>
      <v-avatar size="32px" tile>
        <img
          src="https://cdn.vuetifyjs.com/images/logos/logo.svg"
          alt="Vuetify"
        >
      </v-avatar>
    </v-btn>
  </v-toolbar>
</template>

<script>

  export default {
    data: () => ({
    }),
    methods: {
      toggleDrawer () {
        this.$emit('toggleDrawer')
      }
    },
    props: ['drawer']
  }

  
</script>
<template>
  <v-navigation-drawer
    v-model="drawer"
    :clipped="$vuetify.breakpoint.lgAndUp"
    fixed
    app
  >
    <v-list dense>
      <template v-for="item in items">
        <v-layout
          v-if="item.heading"
          :key="item.heading"
          row
          align-center
        >
          <v-flex xs6>
            <v-subheader v-if="item.heading">
              {{ item.heading }}
            </v-subheader>
          </v-flex>
          <v-flex xs6 class="text-xs-center">
            <a href="#!" class="body-2 black--text">EDIT</a>
          </v-flex>
        </v-layout>
        <v-list-group
          v-else-if="item.children"
          :key="item.text"
          v-model="item.model"
          :prepend-icon="item.model ? item.icon : item['icon-alt']"
          append-icon=""
          value="true"
        >
          <template v-slot:activator>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>
                  {{ item.text }}
                </v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </template>
          <v-list-tile
            v-for="(child, i) in item.children"
            :key="i"
            link
          >
            <v-list-tile-action v-if="child.icon">
              <v-icon>{{ child.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-if="child.pageId != null">
                <!-- <button  @click="pageChg(child.pageId)">
                  {{ child.text }}
                </button> -->
                <router-link :to="{name: child.pageId, params: {pages, visibled, totalCnt, gridCnt}}" class="link">
                  {{ child.text }}
                </router-link>
              </v-list-tile-title>
              <v-list-tile-title v-if="child.pageId === undefined">
                {{ child.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
        <v-list-tile v-else :key="item.text">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-if="item.pageId != null">
              <router-link :to="item.pageId" class="link">
                {{ item.text }}
              </router-link>
            </v-list-tile-title>
            <v-list-tile-title v-if="item.pageId === undefined">
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer>

  
</template>

<script>
import sideBarItems from './sideBarItems.js';

export default {  
  data: () => ({
    items: sideBarItems,
    pages: 2,
    visibled: 7,
    totalCnt: 20,
    gridCnt: 6
  }),
  methods: {
    pageChg (id) {
      this.$emit('pageChg', id)
    }
  },
  computed: {
  },
  props: {
    drawer: {
      type: Boolean,
      required: true
    }
  }
}
</script>

<style>
.link:active {
  background-color: aquamarine
}
.link:link .link:visited{
  color: rgb(218, 196, 77)
}
</style>

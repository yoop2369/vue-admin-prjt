<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout justify-center align-center>
        빈 공간
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    data: () => ({
      contentId: 'main',
      totalPageCnt: 10,
      visible: 5
    }),
    methods: {
      pageChg: function(id) {
        if (id) {
          this.contentId = id
        } else {
          this.contentId = 'main'
        }
      }
    },
    components: {
    },
  }

  
</script>

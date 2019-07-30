<template>
  <div>
    <v-btn
      fab
      bottom
      left
      color="pink"
      dark
      fixed
      to="/"
    >
      <v-icon>home</v-icon>
    </v-btn>
    <!-- 하단 FAB(Floating Action Button) 버튼 -->
    <v-btn
      fab
      bottom
      right
      color="pink"
      dark
      fixed
      @click="closeDialog()"
    >
      <v-icon>add</v-icon>
    </v-btn>
  </div>
</template>

<script>
  export default {
    data: () => ({
    }),
    methods: {
      closeDialog () {
       this.$emit('closeDialog')
    }
    },
    components: {
    },
    props: ['dialog']
  }

  
</script>
<template>
  <div class="lds-facebook" v-if="loading">
    <div>
    </div>
    <div>
    </div>
    <div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style scoped>
  .lds-facebook{
    display: inline-block;
    position: absolute;
    width: 64px;
    height: 64px;
    top: 47%
  }
</style>
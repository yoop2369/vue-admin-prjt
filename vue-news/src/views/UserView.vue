<template>
  <user-profile :info="userInfo">
    <div slot="username">{{userInfo.id}}</div>
    <span slot="time">{{'Joined ' + userInfo.created}}, </span>
    <span slot="karma">{{userInfo.karma}}</span>
  </user-profile>
</template>
<script>
import UserProfile from '../components/UserProfile'
export default {
  computed: {
    userInfo() {
      return this.$store.state.user
    }
  },
  components: {
    UserProfile,
  },
  created () {
    const userName = this.$route.params.id
    this.$store.dispatch('FETCH_USERS', userName)
  },
}
</script>
<style scoped>

</style>
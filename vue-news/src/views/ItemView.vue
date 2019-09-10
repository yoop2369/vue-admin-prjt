<template>
  <div>
    <section>
      <!-- 질문 상세 정보 -->
      <user-profile :info="fetchItem">
        <router-link slot="username" :to="`/user/${fetchItem.user}`">{{fetchItem.user}}</router-link>
        <template slot="time">{{'Posted ' + fetchItem.time_ago}}</template>
      </user-profile>
    </section>
    <section>
      <h2>{{ fetchItem.title }}</h2>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <div v-html="fetchItem.content"></div>
    </section>
  </div>
</template>
<script>
import UserProfile from '../components/UserProfile'
import { mapGetters } from 'vuex';
export default {
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters([
      'fetchItem'
    ])
  },
  created () {
    const itemId = this.$route.params.id
    this.$store.dispatch('FETCH_ITEM', itemId)
  },

}
</script>
<style scoped>
  .user-container {
    display: flex;
    align-items: center;
    padding: 0.5rem;
  }
  .fa-user {
    font-size: 2.5rem;
  }
  .user-description {
    padding-left: 8px;
  }
  .time{
    font-size: 0.7rem;
  }
</style>
<template>
  <div>
    <ul class="news-list">
      <template v-if="listItems">
        <li v-for="item in listItems" class="post">
          <!-- 포인트 영역 -->
          <div class="points">
            {{item.points || 0}}
          </div>
          <!-- 기타정보영역 -->
          <div>
            <p class="news-title">
              <template v-if="item.domain">
                <a :href="item.url">
                  {{item.title}}
                </a>
              </template>
              <template v-else>
                <router-link :to="`/item/${item.id}`">{{item.title}}</router-link>
              </template>
            </p>
            <small class="link-text">
              {{item.time_ago}} by 
              <router-link class="link-text" 
                v-if="item.user"
                :to="`/user/${item.user}`">{{item.user}}</router-link>
              <a v-else :href="item.url">{{item.domain}}</a>
            </small>
          </div>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  computed: {
    // ...mapGetters([
    //   'fetchNews',
    //   'fetchAsk',
    //   'fetchJobs'
    // ]),
    listItems() {
      // const name = this.$route.name;   
      // if (name === 'news') {
      //   return this.$store.state.news;
      // } else if (name === 'ask') {
      //   return this.$store.state.ask;
      // } else if (name === 'jobs') {
      //   return this.$store.state.jobs;
      // }
      return this.$store.state.list;
    }
  },
//  created() {
//    const name = this.$route.name;
//    if (name === 'news') {
//      this.$store.dispatch('FETCH_NEWS')
//    } else if (name === 'ask') {
//      this.$store.dispatch('FETCH_ASK')
//    } else if (name === 'jobs') {
//      this.$store.dispatch('FETCH_JOBS')
//    }
//   }
}
</script>

<style scoped>
.news-list {
  margin: 0px;
  padding: 0px;
}
.post{
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;
}
.points{
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42b883;
}
.news-title {
  margin: 0px;
}
.link-text {
  color: #828282;
}
</style>
<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout justify-center align-center>
        <div v-if="hasResult">
          <div v-for="post in posts" v-bind:key="post.id">
            
            <h1>{{post.id}}. {{post.title}}</h1>
            <p>{{post.body}}</p>
          </div>
        </div>
        <button v-else @click="searchTerm">글 불러오기</button>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  name: 'post',
  data: function() {
    return {
      posts: []
    }
  },
  computed: {
    hasResult: function() {
      return this.posts.length > 0
    }
  },
  methods: {
    searchTerm: function() {
      // const baseURI = 'https://jsonplaceholder.typicode.com';
      this.$http.get('https://jsonplaceholder.typicode.com/users')
      .then((result) => {
        this.posts = result.data
      })
    }
  }
}
</script>
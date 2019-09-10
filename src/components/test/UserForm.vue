<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout justify-center align-center>
        <form @submit.prevent="submitForm">
          <div> 
            <label for="username">id: </label>
            <input type="text" id="username" v-model="username">
          </div>
          <div> 
            <label for="password">pwd: </label>
            <input type="password" id="password" v-model="password">
          </div>
          <button type="submit">login</button>
        </form>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data: ()=> ({
    username: '',
    password: ''
  }),
  methods: {
    submitForm: function(event) {
      console.log(this.username, this.password);
      var url = 'https://jsonplaceholder.typicode.com/users'
      var data = {
        username: this.username,
        password: this.password
      }
      this.$http.post(url, data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
    }
  }
}
</script>

<style>

</style>

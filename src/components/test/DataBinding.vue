<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout justify-center align-center>
        <div>
          {{str}}
          <p :id="uuid" :class="name">{{num}}</p>
          <p>{{doubleNum}} </p>
        </div>
        <div v-if="loading">
          Loading...
        </div>
        <div v-else>
          test user has been logged In
        </div>
        <div v-show="loading">
          Loading...
        </div>
        <input type="text" v-model="message">
        <p>message is : {{message}} </p>
      </v-layout>
      <v-layout justify-center>
        <button @click="logText">Click me</button>
        <input type="text" @keyup.enter="logText">
        <button>add</button>
      </v-layout>
      <v-layout justify-center>
        <button @click="addNum">{{num}}increase</button>
      </v-layout>
      <v-layout justify-center>
        <p :class="errorTextColor">Hello</p>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data:() => ({
    str: 'hi',
    num: 10,
    uuid: 'abc1234',
    name: 'text-blue',
    loading: true,
    message: '',
    isError: false
  }),
  watch: {
    num: function() {
      this.logText()
    }
  },
  methods: {
    logText: function() {
      //console.log('clicked');
    },
    addNum: function() {
      this.num = this.num + 1
    }

  },
  computed: {
    doubleNum: function() {
      return this.num * 2
    },
    errorTextColor: function() {
      return this.isError ? 'warning' : null;
    }
  }
}
</script>
<style>
.warning{
  color: red
}
</style>

import Vue from 'vue'
import Vuex from 'vuex'
import mutations from '@/store/mutations'
import actions from '@/store/actions'

Vue.use(Vuex)

// 상태관리도구 
// 관계가 복잡해 질 때 데이터를 사용하기 용이함
export default new Vuex.Store({
  state: {
    user: {},
    item: {},
    list: []
  },
  getters: {
    fetchUser(state) {
      return state.user
    },
    fetchItem(state) {
      return state.item
    }
  },
  mutations,
  actions
})
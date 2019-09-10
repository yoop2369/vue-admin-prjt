import {fetchList, fetchUserInfo, fetchItemInfo, fetchLists} from '@/api/index.js'

export default {
  async FETCH_USERS({commit}, name) {
    const response = await fetchUserInfo(name)
    commit('SET_USERS', response.data)
    return response
  },
  FETCH_ITEM({commit}, id) {
    return fetchItemInfo(id)
      .then(({data}) => {
        commit('SET_ITEM', data)
      })
      .catch(error => console.log(error))
  },
  
  // promise
  // FETCH_LIST({commit}, pageName) {
  //   return fetchLists(pageName)
  //     .then(({data}) => {
  //       commit('SET_LIST', data)
  //     })
  //     .catch(error => console.log(error))
  // },

  // async
  async FETCH_LIST({commit}, pageName) {
    const response = await fetchLists(pageName)
    commit('SET_LIST', response.data)
    return response
  },
}
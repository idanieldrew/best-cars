import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({})
}
const actions = {
  async nuxtServerInit({dispatch}, {req}) {
    if (!req.headers.cookie) {
      console.log(65)
      await dispatch('user/refreshToken')
    }
    console.log(56)
  }
}

export default {
  namespaced: true,
  createStore,
  actions
}

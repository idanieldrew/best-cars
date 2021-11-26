import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({})
}
const actions = {
  async nuxtServerInit({dispatch}) {
    await dispatch('user/refreshToken')
  }
}
export default {
  namespaced: true,
  createStore,
  actions
}

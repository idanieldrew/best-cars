import cookies from 'js-cookie'
const state = () => ({
  user: null
})

const getters = {
  loged: state => !! state.user
}

const mutations = {
  LOGIN(state, userData) {
    state.user = userData
  }
}

const actions = {
  async log({commit},data) {
    let response = await this.$axios.post('/login',data)
    // cookies.set()
    commit('LOGIN', response.data)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

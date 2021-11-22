import cookies from 'js-cookie'

const state = () => ({
  token: null
})

const getters = {
  isAuth: state => !!state.token
}

const mutations = {
  SET_TOKEN(state, token) {
    console.log(token, 7)
    state.token = token
  }
}

const actions = {
  setToken({commit}, {token, expires_in}) {
    console.log(token, 1)
    this.$axios.setToken(token, "Bearer")
    const expiryTime = new Date(new Date().getTime() + expires_in * 1000)
    console.log(expiryTime, 2)
    cookies.set("x-access-token", token, {expires: expiryTime})
    commit("SET_TOKEN", "Bearer" + token)
  },

  async refreshToken({dispatch}) {
    const {token, expires_in} = await this.$axios.post('refresh')
    console.log(token, expires_in, 41412)
    dispatch('setToken', {token, expires_in})
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

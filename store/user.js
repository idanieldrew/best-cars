import Cookie from "js-cookie";

const state = () => ({
  token: null
})

const getters = {
  isAuth: state => !!state.token,
  token: state => state.token
}

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  }
}

const actions = {
  //  set token and set cookie
  setToken({commit}, token, expires_in=1000) {
    const expiryTime = new Date(new Date().getTime() + expires_in * 1000)

    commit("SET_TOKEN", token)
    Cookie.set('token', token, {expires: expiryTime})
  },

  async refreshToken({dispatch}) {
    let res = await this.$axios.post('refresh')

    const token = res.data.token
    const expires_in = res.data.expires_in

    dispatch('setToken', token, expires_in)
  },
}

export default {
  state,
  getters,
  mutations,
  actions
}

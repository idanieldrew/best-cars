import cookies from "js-cookie";

const state = () => ({
  token: null
})

const getters = {
  isAuth: state => !!state.token
}

const mutations = {
  SET_TOKEN(state, token) {
    state.token = token
  }
}

const actions = {
  //  set token and set cookie
  setToken({commit}, token, expires_in) {
    this.$axios.setToken(token, "Bearer")

    const expiryTime = new Date(new Date().getTime() + expires_in * 1000)

    cookies.set("x-access-token", token, {expires: expiryTime})

    commit("SET_TOKEN", +"Barer" + token)
  },

  // refresh token when refresh page
  async refreshToken({dispatch}) {
    let res = await this.$axios.post('refresh')

    const token = res.data.token
    const expires_in = res.data.expires_in

    dispatch('setToken', token, expires_in)
  },

  g({app}){
    console.log(app,5)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

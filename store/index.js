import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({})
}

const cookieFromReq = (request, key) => {
  if (!request.headers.cookie) {
    return;
  }
  const cookie = request.headers.cookie

  if (cookie) {
    return cookie.split(`${key}=`)[1]
  }
}

const actions = {
  nuxtServerInit({commit, dispatch, route}, {req}) {
    const token = cookieFromReq(req, 'token');

    if (!!token) {
      commit('user/SET_TOKEN', token)
    }
  }
}

export default {
  namespaced: true,
  createStore,
  actions
}

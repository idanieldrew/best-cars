export default function ({store, redirect, app}) {
  const token = app.$cook.get('x-access-token')

  if (!token) {
    store.dispatch('user/refreshToken')
      .catch((e) => console.log(787))
  }
  store.commit('user/SET_TOKEN', +"Bearer" + token)
}

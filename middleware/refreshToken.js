export default function ({store, redirect, app}) {
  const token = app.$cook.get('x-access-token')

  if (!token) {
    store.dispatch('user/refreshToken')
      .catch((e) => {
        console.log(784)
        // store.dispatch('logout')
        // redirect('/login')
      })
  }
  store.commit('user/SET_TOKEN', token)
}

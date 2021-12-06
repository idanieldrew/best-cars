export default function ({store, redirect, app,$axios})  {
  const token = store.getters['user/token'];

  if (process.server) {
    if (token) {
      $axios.defaults.headers.common.Authorization = `Bearer ${token}`
    } else {
      delete $axios.defaults.headers.common.Authorization;
    }
  }
}


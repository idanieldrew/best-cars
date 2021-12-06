export default ({$axios, store}) => {
  $axios.setBaseURL('http://localhost:8000/api')

  const token = store.getters['user/token']

  if (token) {
    $axios.setToken(token, "Bearer")
  }

  $axios.onResponseError(error => {
    const {status} = error.response || {};
    if (status === 401 && store.getters['user/isAuth']) {
      console.log("401")
    } else {
      return Promise.reject(error)
    }
  })
}

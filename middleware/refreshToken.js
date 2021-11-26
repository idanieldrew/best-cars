import cookies from "js-cookie";

export default function ({store, redirect}) {
  const token = cookies.get("x-access-token")

  if (!token) {
    store.dispatch('user/refreshToken')
      .catch((e) => console.log(787))
  }
}

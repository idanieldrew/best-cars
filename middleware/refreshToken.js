import cookies from "js-cookie";

export default function ({store, redirect}) {
  const token = cookies.get("x-access-token")

  if (!token) {
    store.dispatch('user/refreshToken')
      .then((r) => console.log(r, 77))
      .catch((e) => console.log(e,78))
  }
}

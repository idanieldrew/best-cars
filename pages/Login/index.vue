<template>
  <div>
    <Login @doLogin="login"/>
  </div>
</template>

<script>
import Login from "../../components/Login/Login";

export default {
  name: "login",
  components: {
    Login
  },
  layout: 'login',

  methods: {
    login(val) {
      this.$axios.post('login', val)
        .then((res) => {
          let token = res.data.token
          let expires_in = res.data.expires_in
          this.$store.dispatch('user/setToken', token, expires_in)
          this.$router.push("/")
        }).catch((e) => console.log(e, 0))
    },
  },
};
</script>

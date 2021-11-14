<template>
  <div>
    <Login @doLogin="login"/>
  </div>
</template>

<script>
import Login from "../../components/Login/Login";
import {mapActions} from "vuex";

export default {
  name: "login",
  components: {
    Login
  },
  layout: 'login',

  methods: {
    login(val) {
      this.log(val)
        .then(alert("ok"),
          this.$router.push("/")
        )
        .catch((e) => console.log(e))
    },

    ...mapActions('user', ['log'])
  },
};
</script>

<template>
  <div>
    <Register @doRegister="register"/>
  </div>
</template>

<script>
import Register from "../../components/Login/Register";

export default {
  name: "registers",
  components: {
    Register
  },
  layout: 'login',

  methods: {
    register(val) {
      this.$axios.post('/register', val)
        .then(this.$router.push('login'))
        .catch((e) => console.log(e, 0))
    }
  }
};
</script>

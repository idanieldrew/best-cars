<template>
  <div>
    <form @submit.prevent="signup">
      <input type="text" placeholder="email" v-model="email" />
      <input type="text" placeholder="password" v-model="password" />
      <button>sing up</button>
    </form>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis officiis unde beatae impedit vel soluta ut consectetur iste reiciendis adipisci velit incidunt non quos nesciunt consequatur debitis, ad nisi harum.
  </div>
</template>

<script>
export default {
  name: "sign-up",
  middleware: "auth",
  layout: 'login',
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods: {
    signup() {
      this.$axios
        .$post("/login", {
          email: this.email,
          password: this.password,
        })
        .then((res) => console.log(res, 1))
        .catch((e) => console.log(e, 0));
    },
  },
};
</script>

<template>
  <div
    class="register border border-black rounded-lg container mx-auto flex justify-center text-center h-auto w-1/5 my-48 flex-col">
    <form @submit.prevent="signIn">
      <div class="mx-auto container my-5">
        <label class="block pl-72 my-2">
          ایمیل
        </label>
        <input class="border border-gray-500 p-3 rounded-md" type="email" placeholder="email@email.com" required
               v-model="form.email"/>
      </div>
      <div class="mx-auto container my-5">
        <label class="block pl-72 my-2">
          رمز
        </label>
        <input class="border border-gray-500 p-3 rounded-md" type="password" placeholder="12345678" required
               v-model="form.password"/>
      </div>
      <div class="my-3">
        <button type="submit"
                class="px-5 py-3 border border-gray-400 bg-green-600 rounded w-1/3 text-black">
           ورود
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      form: {
        email: "",
        password: "",
      }
    };
  },

  methods: {
    signIn() {
      this.$emit('doLogin', this.form)
    },
  }
}

</script>

<style scoped>

</style>

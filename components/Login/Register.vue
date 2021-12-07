<template>
  <div
    class="register border border-black rounded-lg container mx-auto flex justify-center text-center h-auto w-1/5 my-48 flex-col">
    <form @submit.prevent="signUp">
      <div class="mx-auto container my-5">
        <label class="block pl-72 my-2">
          نام
        </label>
        <input class="border border-gray-500 p-3 rounded-md" type="text" placeholder="name" required
               v-model="form.name"/>
      </div>
      <div class="mx-auto container my-5">
        <label class="block pl-72 my-2">
          ایمیل
        </label>
        <input class="border border-gray-500 p-3 rounded-md" type="email" placeholder="email@email.com" required
               v-model="form.email"/>
      </div>
      <div class="mx-auto container my-5">
        <label class="block pl-72 my-2">
          موبایل
        </label>
        <input class="border border-gray-500 p-3 rounded-md" type="number" placeholder="09121234562" required
               v-model="form.phone"/>
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
          ثبت نام
        </button>
      </div>

      <div class="my-5">
        <nuxt-link to="/"
                   class="px-5 py-4 bg-transparent border border-gray-400 hover:bg-blue-400 rounded w-1/3 text-black">
          ثبت نام با
          گوگل
        </nuxt-link>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'register',
  data() {
    return {
      form: {
        name: "",
        phone: "",
        email: "",
        password: "",
      }
    };
  },

  methods: {
    signUp() {
      this.$emit('doRegister', this.form)
    },
  }
}

</script>

<style scoped>

</style>

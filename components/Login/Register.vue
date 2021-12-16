<template>
  <div
    class="register border border-black rounded-lg container mx-auto flex justify-center text-center h-auto w-1/5 my-48 flex-col">
    <form @submit.prevent="signUp">
      <div class="mx-auto container my-5">
        <label class="block pl-72 my-2">
          نام
        </label>
        <validation-provider rules="alpha|required" v-slot="{errors }">
          <input class="border border-gray-500 p-3 rounded-md" type="text" placeholder="name" required
                 v-model="name"/>
          <span class="block text-red-500">
            {{ errors[0] }}
          </span>
        </validation-provider>
      </div>
      <div class="mx-auto container my-5">
        <label class="block pl-72 my-2">
          ایمیل
        </label>
        <validation-provider rules="email|required" v-slot="{errors }">
          <input class="border border-gray-500 p-3 rounded-md" type="email" placeholder="email@email.com" required
                 v-model="email"/>
          <span class="block text-red-500">
            {{ errors[0] }}
          </span>
        </validation-provider>
      </div>
      <div class="mx-auto container my-5">
        <label class="block pl-72 my-2">
          موبایل
        </label>
        <validation-provider rules="numeric|required" v-slot="{errors }">
          <input class="border border-gray-500 p-3 rounded-md" type="number" placeholder="09121234562" required
                 v-model="phone"/>
          <span class="block text-red-500">
            {{ errors[0] }}
          </span>
        </validation-provider>
      </div>
      <div class="mx-auto container my-5">
        <label class="block pl-72 my-2">
          رمز
        </label>
        <validation-provider rules="min:8" v-slot="{errors}">
          <input class="border border-gray-500 p-3 rounded-md" type="password" placeholder="12345678" required
                 v-model="password"/>
          <span class="block text-red-500">
            {{ errors[0] }}
          </span>
        </validation-provider>
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
import {extend, ValidationProvider} from "vee-validate";
import {alpha, email, numeric, required} from "vee-validate/dist/rules";

extend('alpha', {
  ...alpha,
  message: 'مسخره بازی در نیار'
});

extend('numeric', {
  ...numeric,
  message: 'فقط عدد بزار'
});

extend('required', {
  ...required,
  message: 'اجباری'
});

extend('email', {
  ...email,
  message: 'ایمیل درست بزار'
});

extend('min', {
  validate(password, {length}) {
    return password.length >= length
  },
  params: ['length'],
  message: 'بیش تر از 8 تا',
  computesRequired: true
});
export default {
  name: 'register',
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      password: '',
    };
  },

  components: {
    ValidationProvider
  },

  methods: {
    signUp() {
      this.$emit('doRegister', this.name, this.email, this.phone.this.password)
    },
  }
}

</script>

<style scoped>

</style>

<template>
  <div
    class="
      register
      border border-black
      rounded-lg
      container
      mx-auto
      flex
      justify-center
      text-center
      h-auto
      w-1/5
      my-48
      flex-col
    "
  >
    <form @submit.prevent="signIn">
      <div class="mx-auto container my-5">
        <label class="block pl-56 my-2"> ایمیل یا موبایل </label>
        <validation-provider rules="required" v-slot="{errors}">
          <input
            class="border border-gray-500 p-3 rounded-md"
            type="text"
            placeholder="email@email.com"
            required
            v-model="value"
          />
          <span class="block text-red-500">
            {{ errors[0] }}
          </span>
        </validation-provider>

      </div>
      <div class="mx-auto container my-5">
        <label class="block pl-72 my-2"> رمز </label>
        <validation-provider rules="min" v-slot="{errors}">
          <input
            class="border border-gray-500 p-3 rounded-md"
            type="password"
            placeholder="12345678"
            v-model="password"
            required
          />
          <span class="block text-red-500">
            {{ errors[0] }}
          </span>
        </validation-provider>
      </div>
      <div class="my-3">
        <button
          type="submit"
          class="
            px-5
            py-3
            border border-gray-400
            bg-green-600
            rounded
            w-1/3
            text-black
          "
        >
          ورود
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import {extend, ValidationProvider} from 'vee-validate';
import {required} from 'vee-validate/dist/rules'

extend('required', {
  ...required,
  message: 'اجباری'
});

extend('min', {
  validate(password) {
    return password.length >= 8
  },
  message: 'بیش تر از 8 تا'
});

export default {
  name: "login",

  data() {
    return {
      value: '',
      password: '',
    };
  },

  components: {
    ValidationProvider
  },

  methods: {
    signIn() {
      this.$emit("doLogin", this.value, this.password);
    },
  },
};
</script>

<style scoped>
</style>

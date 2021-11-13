<template>
  <div
    class="
      bg-gray-50
      border-2
      w-full
      lg:w-11/12
      h-96
      flex flex-col
      justify-center
      mx-auto
      text-center
      shadow-2xl
      rounded-md
      my-3
    "
  >
    <div>
      <img
        src="@/static/Images/cars.jpg"
        class="rounded-full w-40 h-40 mx-auto mt-8"
      />
    </div>
    <div class="font-extrabold text-sm my-3 pt-14 text-blue-400">
      <nuxt-link :to="'cars/'+slug">
        {{ name }}
      </nuxt-link>
    </div>
    <div class="mt-7">
      <nuxt-link to="/">....</nuxt-link>
      {{ editDetails }}
    </div>
    <div class="like py-5 flex justify-between px-5">
      <div class="font-serif flex mx-3">
        <span> {{ likes }} </span>
        <div>
          <nuxt-link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
              <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/>
              <path
                d="M9 21h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-2c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.58 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2zM9 9l4.34-4.34L12 10h9v2l-3 7H9V9zM1 9h4v12H1z"/>
            </svg>
          </nuxt-link>
        </div>
      </div>
      <!--      <div class="font-serif flex">
              <span> {{ comments }} </span>
              <div>
                <nuxt-link to="/">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                    <path d="M0 0h24v24H0V0z" fill="none"/>
                    <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
                  </svg>
                </nuxt-link>
              </div>
            </div>-->
      <div class="font-serif flex">
        <span class="pl-1"> 123 </span>
        <div>
          <nuxt-link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
              <path d="M0 0h24v24H0V0zm0 0h24v24H0V0z" fill="none"/>
              <path
                d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v2c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm0 12l-4.34 4.34L12 14H3v-2l3-7h9v10zm4-12h4v12h-4z"/>
            </svg>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Car.vue",

  props: {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    details: {
      type: String,
      required: true,
    },
    likes: {
      type: Number,
      required: true,
    },
    /*   comments: {
         type: Number,
         required: true,
       },*/
  },

  computed: {
    editDetails() {
      return this.details.substr(0, 15);
    },
  },
};
</script>

<style scoped>
</style>

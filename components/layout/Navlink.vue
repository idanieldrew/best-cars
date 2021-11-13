<template>
  <nuxt-link
    class="
      lg:px-5 px-3
      py-3 lg:py-2
      font-sans
      text-gray-700
      font-extrabold
      border-transparent border-b-2
      hover:border-red-500
    "
    :to="link"
    >{{ body }}</nuxt-link
  >
</template>

<script>
export default {
  name: "navlink",

  props: {
    link: {
      required: false,
      type: String,
    },
    body: {
      required: true,
      type: String,
    },
  },
};
</script>

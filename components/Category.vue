<template>
    <nuxt-link
      class="
        py-3
        text-gray-700
        hover:text-red-600 hover:underline
        font-thin
        lg:no-underline
        underline
      "
      :to="slug"
    >{{ name }}
    </nuxt-link
    >
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    },
  }
}
</script>

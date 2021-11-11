<template>
  <div>
    {{ name }}
    {{ description }}
  </div>
</template>

<script>
export default {
  name: "Car.vue",

  props: {
    name: {
      required: true,
    },
    description: {
      required: true,
    }
  }
}
</script>

<style scoped>

</style>

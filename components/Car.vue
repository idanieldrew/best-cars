<template>
  <div>
    {{ name }}
    {{ description }}
  </div>
</template>

<script>
export default {
  name: "car",

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

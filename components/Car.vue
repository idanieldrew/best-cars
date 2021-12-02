<template>
  <div class="container w-full grid grid-cols-3">
      <div class="col-span-1">

      </div>
      <div class="col-span-1">
        <p class="text-blue-600 my-5">ماشین / {{ name }}</p>
        <p class="font-bold">{{ details }}</p>
      </div>
      <div>
      </div>
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
    },
    details: {
      required: true,
    }
  }
}
</script>

<style scoped>

</style>

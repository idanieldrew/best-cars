<template>
  <div class="w-full">
    <div class="flex lg:flex-row flex-col w-full">
      <div class="w-1/6 mx-auto text-center">
        <button class="bg-green-400 px-3 py-2 rounded-md">ثبت</button>
      </div>
      <div class="comments w-5/6">
        <textarea
          class="border border-gray-300 rounded-lg container"
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Write"
        ></textarea>
      </div>
    </div>
    <div class="w-full text-center">
      <div class="parent-comments != null" v-for="comment in comments" :key="comment">
        <div class="block w-4/6 mx-auto rounded my-3 text-center bg-gray-200 border-2 border-blue-400">
          {{ comment.body }}
        </div>
        <div class="block w-2/6 mx-auto rounded my-3 text-center bg-gray-200 border-2 border-blue-400"
             v-for="replies in comment.parent" :key="replies.id">
          {{ replies.body }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    comments: {
      required: false
    }
  }
}
</script>

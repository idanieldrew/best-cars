<template>
  <div class="w-full">
    <div class="w-full text-center">
      <div
        class="parent-comments"
      >
        <div
          class="
            block
            px-5
            py-3
            mx-auto
            rounded
            my-3
            text-center
            border-2 border-blue-400
          "
          :class="{'bg-gray-50' : parent,
                      'bg-gray-200' : !parent,
                      'w-4/6' : parent,
                      'w-3/6' : !parent
        }"
        >
          {{ comments }}
        </div>
        <form v-show="reply" @submit.prevent="addReply(id)">
          <div class="flex lg:flex-row flex-col w-full">
            <div class="w-1/6 mx-auto text-center">
              <button type="submit" class="bg-green-400 px-3 py-2 rounded-md">ثبت</button>
            </div>
            <div class="comments w-5/6">
        <textarea
          class="border border-gray-300 rounded-lg container"
          name=""
          id=""
          cols="30"
          rows="5"
          v-model="form.content"
        ></textarea>
            </div>
          </div>
        </form>

        <div class="flex pr-72">
          <div v-show="!this.reply">
            <button @click.prevent="showReply">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"/>
              </svg>
            </button>
          </div>
        </div>
        <div v-for="comments in parent" :key="comments.id" v-if="parent">
          <comments :comments="comments.body" :id="comments.id" :parent="comments.parent">
          </comments>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'comments',
  props: {
    comments: {
      required: false,
      type: String
    },
    id: {
      required: true,
      type: Number
    },
    parent: {
      required: true,
    }
  },

  data() {
    return {
      form: {
        content: '',
        replies: null
      },
      reply: false,
      // parent: true
    }
  },

  methods: {
    addReply(id) {
      this.form.replies = id
      this.$emit("createReplies", this.form)
    },

    showReply() {
      this.reply = !this.reply
    }
  },
};
</script>

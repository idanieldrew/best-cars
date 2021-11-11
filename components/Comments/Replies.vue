<template>
  <div class="w-full">
    <div class="w-full text-center">
      <div
        class="parent-comments"
      >
        <div
          class="
            block
            w-4/6
            px-5
            py-3
            mx-auto
            rounded
            my-3
            text-center
            bg-gray-50
            border-2 border-blue-400
          "
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
          placeholder="Write" v-model="content"
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
        <!--        <div
                  class="
                    block
                    w-2/6
                    mx-auto
                    rounded
                    my-3
                    text-center
                    bg-gray-200
                    border-2 border-blue-400
                  "
                  v-for="replies in comment.parent"
                  :key="replies.id"
                >
                  {{ replies.body }}
                </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
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
      required: false,
    }
  },

  data() {
    return {
      content: '',
      reply: false
    }
  },

  methods: {
    ...mapActions('car', ['fetchCar']),
    addReply(id) {
      this.$axios.post("/cars/" + this.$route.params.slug + "/comment", {
        content: this.content,
        reply: id
      }).then(() => {
        this.successMes()
      }).catch((e) => alert(e))
    },

    successMes() {
      alert("ok")
      window.scrollTo(0, 0)
      this.fetchCar(this.$route.params.slug)
    },
    showReply() {
      this.reply = !this.reply
    }
  },

  /* computed: {
     lenRep() {
       this.comments.forEach((i) => {
         console.log(i.parent.length)
       })
     }
   },*/
};
</script>

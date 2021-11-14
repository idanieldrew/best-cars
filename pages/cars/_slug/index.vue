<template>
  <section>
    <div class="divide-x-0 divide-gray-300 container mx-auto">
      <div class="flex flex-col container mx-auto">
        <img
          class="main-image w-7/12 mx-auto block rounded-lg"
          :src="mainSrc"
          alt=""
        />
        <div
          class="
            flex
            w-1/2
            mx-auto
            flex-row
            justify-items-center justify-center
          "
        >
          <div class="images my-5" v-for="images in allCars.images" :key="images.slug">
            <ul>
              <li>
                <img @click.prevent="changeImg(images.image)"
                     class="other-images w-8/12 mx-auto cursor-pointer rounded-md" :src="images.image"
                     alt=""/>
              </li>
            </ul>

          </div>
        </div>
      </div>
      <div>
        <Car :name="allCars.name" :description="allCars.description"/>
      </div>
    </div>
    <form @submit.prevent="addComment">
      <div class="flex lg:flex-row flex-col w-full">
        <div class="w-1/6 mx-auto text-center">
          <button type="submit" class="bg-green-400 px-3 py-2 rounded-md">ثبت</button>
        </div>
        <div class="comments w-5/6">
        <textarea
          class="border border-gray-300 rounded-lg container" id="" cols="30"
          rows="5"
          v-model="form.content"
        ></textarea>
        </div>
      </div>
    </form>

    <div v-for="comments in allCars.comments" :key="comments.id">
      <Comment @createReplies="addComment" :comments="comments.body" :id="comments.id" :parent="comments.parent"/>
    </div>
  </section>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import Comment from "../../../components/Comments/Comment";
import Car from "../../../components/Car";

export default {
  components: {Comment, Car},
  data() {
    return {
      form: {
        content: '',
      },
      mainSrc: 'https://via.placeholder.com/640x480.png/007788?text=daniel'
    }
  },

  mounted() {
    this.fetchCar(this.$route.params.slug)
  },

  methods: {
    ...mapActions('car', ['fetchCar']),

    // gallery
    changeImg(currentSrc) {
      let otherImg = document.querySelectorAll(".other-images")
      let mainImg = this.mainSrc

      otherImg.forEach((i) => {
        if (i.src === currentSrc) {
          this.mainSrc = i.src
          i.src = mainImg
        } else if (i.src === mainImg) {
          alert(5)
          this.mainSrc = mainImg
        }
      })
    },

    // add comment
    addComment(value) {
      if (value.replies) {
        this.$axios.post("/cars/" + this.$route.params.slug + "/comment", {value})
          .then(() => {
            this.successMes()
          }).catch((e) => alert(e))
          .catch((e) => console.log(e, 0))
      } else {
        this.$axios.post("/cars/" + this.$route.params.slug + "/comment", {
          content: this.form.content
        })
          .then(() => {
            this.successMes()
          }).catch((e) => alert(e))
          .catch((e) => console.log(e, 0))
      }
    },

    successMes() {
      this.fetchCar(this.$route.params.slug)
      this.form.content = ""
    },
  },

  computed: {
    ...mapGetters('car', ['allCars']),
  },
}
</script>

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
        <h1>{{ allCars.name }}</h1>
        <div>
          {{
            allCars.description
          }}
        </div>
      </div>
      <div>
        <Comment :comments="allCars.comments"/>
      </div>
    </div>
  </section>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import Comment from "../../components/Comments/Comment";

export default {
  components: {Comment},
  data() {
    return {
      mainSrc: 'https://via.placeholder.com/640x480.png/007788?text=daniel'
    }
  },

  mounted() {
    this.fetchCar(this.$route.params.slug)
  },

  methods: {
    ...mapActions('car', ['fetchCar']),

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
    }
  },

  computed: {
    ...mapGetters('car', ['allCars']),
  }
}
</script>

<template>
  <div class="landing-page divide-x-0">
    <!-- body section -->
    {{ user }}
    <section class="hero">
     <Hero/>
   </section>
    <div class="my-5 mx-auto lg:text-center text-left lg:px-0 px-5">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid suscipit
      eos vero excepturi asperiores magnam totam ipsam eveniet eius nesciunt
      molestiae amet voluptatem sunt modi ipsum non, possimus rerum ad cum
      delectus fugiat quasi cumque cupiditate? Pariatur dignissimos omnis
      nesciunt molestiae reprehenderit, qui dolorem quis libero earum,
      repellendus saepe perferendis molestias quos vitae aut ut? Cum ducimus
      accusamus repellendus temporibus, recusandae quia nesciunt voluptatem
      laborum, provident, sunt id esse. Unde laudantium necessitatibus rem
      molestias quia earum eaque aperiam veniam dolor! Sapiente repudiandae
      eius, doloremque itaque necessitatibus sunt eum numquam ducimus odio
      consequatur iusto autem facilis voluptates tenetur. Molestias, voluptas
      totam.
    </div>
    <div
      class="
        content
        flex
        lg:flex-row
        flex-col
        w-full
        mx-auto
        my-5
        divide-x divide-x-reverse divide-gray-100
      "
    >
      <div class="categories w-full lg:w-1/6 mt-3">
        <div class="flex flex-col justify-center text-center">
          <h1 class="underline px-2">CATEGORIES</h1>
          <Category v-for="categories in allCategories"
                    :key="categories.slug" :name="categories.name" :slug="categories.slug"/>
        </div>
      </div>
      <div
        class="products w-full lg:w-5/6 lg:grid lg:grid-cols-3 px-3 lg:pr-10"
      >
        <div class="cursor-pointer transform hover:translate-x-2 hover:translate-y-1 duration-1000" v-for="cars in allCars" :key="cars.slug">
          <Car :name="cars.name" :slug="cars.slug" :details="cars.details" :likes="cars.likes"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";
import Hero from "@/components/Hero.vue";
import Category from "@/components/Category.vue";
import Car from "@/components/Cars.vue";

export default {
  name: 'cars',
  components: {
    Hero,
    Category,
    Car,
  },

  async fetch({store}) {
    await store.dispatch('car/fetchCars')
    await store.dispatch('category/fetchCategories')
  },

  computed: {
    ...mapGetters("car", ["allCars"]),
    ...mapGetters('category', ['allCategories'])
  },
};
</script>

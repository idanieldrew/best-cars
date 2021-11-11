<template>
  <div>
    <button
      v-if="show"
      @click="show = false"
      class="inset-0 w-full h-screen fixed"
    ></button>
    <nav id="nav" class="w-full bg-gray-400 px-0 lg:px-6 py-1 lg:py-4">
      <div class="flex lg:flex-row w-full flex-col mx-auto px-3 lg:px-5 py-5">
        <div class="logo lg:flex hidden w-1/6">
          <span class="font-bold text-black">Daniel</span>
          <span class="font-bold text-white">Drew</span>
        </div>
        <button v-show="!isAllow" @click="toggleNav">close</button>
        <div class="items mx-auto w-full lg:w-4/6 flex flex-col lg:flex-row">
          <Item body="خانه" link="home"/>
          <Item body="اطلاعات" link="info"/>
          <Item body="درباره ما" link="about"/>
          <Item body="پروفایل" link="profile"/>
          <div class="dropdowm relative py-2">
            <button @click="toggle">test</button>
            <div
              class="
                divide-y-2 divide-gray-300
                z-50
                rounded-lg
                menu
                absolute
                bg-gray-100
                text-sm
                w-44
                h-auto
                flex flex-col
              "
              :class="{ hidden: !show }"
              `
            >
              <div class="p-4 hover:bg-gray-300">
                <router-link to="/">salam</router-link>
              </div>
              <div class="p-4 hover:bg-gray-300">
                <router-link to="/">salam</router-link>
              </div>
              <div class="p-4 hover:bg-gray-300">
                <router-link to="/">salam</router-link>
              </div>
              <div class="p-4 hover:bg-gray-300">
                <router-link to="/">salam</router-link>
              </div>
              <div class="p-4 hover:bg-gray-300">
                <router-link to="/">salam</router-link>
              </div>
              <div class="p-4 hover:bg-gray-300">
                <router-link to="/">salam</router-link>
              </div>
              <div class="p-4 hover:bg-gray-300">
                <router-link to="/">salam</router-link>
              </div>
            </div>
          </div>
        </div>
        <nuxt-link to="register" class="login w-1/6 text-left pl-5"
          >Login/Register</nuxt-link
        >
      </div>
    </nav>
  </div>
</template>

<script>
import Item from "./Navlink.vue";
import {isVisible} from '@/static/js/navbar.js'

export default {
  name: "navbar",

 mounted() {
  console.log(isVisible)
  },

  components: {
    Item,
  },

  data() {
    return {
      show: false,
    };
  },

  methods: {
    toggle() {
      this.show = !this.show;
    },
  },
};
</script>

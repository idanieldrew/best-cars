<template>
  <nav id="nav" class="w-full bg-transparent px-0 lg:px-6 py-1 lg:py-4 shadow-2xl">
    <div class="lg:flex block items-center justify-between w-full mx-auto px-0 lg:px-5 py-5">
      <div class="flex flex-row w-full lg:w-1/6 lg:px-0 px-2">
        <div class="logo font-bold text-xl flex w-1/2">
          <span class="text-red-500">Drew</span>
          <span class="text-black">Daniel</span>
        </div>
        <div class="hamburger block lg:hidden w-1/2 text-left">
          <button v-show="isVisible" @click="toggle">
            open
          </button>
          <button v-show="!isVisible" @click="toggle">
            close
          </button>
        </div>
      </div>
      <div class="items mx-auto w-full lg:w-4/6 flex lg:block flex-col" :class="{hidden : ! isVisible}">
        <div class="flex lg:flex-row flex-col lg:divide-none divide-y-2 divide-gray-300 lg:my-0 my-3">
          <Item body="خانه" link="/"/>
          <Item body="خانه" link="/"/>
          <Item body="اطلاعات" link="info"/>
          <Item body="اطلاعات" link="info"/>
          <Item body="اطلاعات" link="info"/>
          <Item body="اطلاعات" link="info"/>
          <Item body="درباره ما" link="about"/>
          <Item body="پروفایل" link="profile"/>
        </div>
<!--        <div class="dropdown relative">
          <button @click="toggleMenu">
            اطلاعات
          </button>
          <div v-show="showMenu"
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
                        lg:flex flex-col hidden
                      "
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
          </div>
        </div>-->
      </div>
      <div class="w-1/6 text-left lg:block hidden">
        <nuxt-link to="registers" class="login w-1/6 text-left pl-5"
        >Register
        </nuxt-link
        > /
        <nuxt-link to="login" class="register w-1/6 text-left"
        >Login
        </nuxt-link
        >
        <button
          v-if="showMenu"
          @click="showMenu = false"
          class="inset-0 w-full h-screen fixed"
        ></button>
      </div>
    </div>
    </nav>
</template>

<script>
import Item from "./Navlink.vue";
import {useToggle} from "@/static/js/navbar.js";

export default {
  name: "navbar",

  setup() {
    let {isVisible, toggle} = useToggle();
    return {isVisible, toggle};
  },

  components: {
    Item,
  },

  data() {
    return {
      showMenu: false,
    };
  },

  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
  },
};
</script>

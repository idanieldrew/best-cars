<template>
  <div class="h-full">
    {{ x }}
    <Navbar />
    <nuxt />
    <Footer/>
  </div>
</template>

<script>
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/Footer.vue";
import cookies from "js-cookie";

export default {
  components: {
    Navbar,
    Footer,
  },

  data(){
    return{
      x : cookies.get('x-access-token')
    }
  }
};
</script>

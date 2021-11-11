<template>
  <div class="h-full">
    <Navbar />
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Navbar from "@/components/layout/Navbar.vue";
import Footer from "@/components/layout/Footer.vue";

export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>

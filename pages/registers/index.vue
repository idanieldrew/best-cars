<template>
  <div>
    <Register />
  </div>
</template>

<script>
import Register from "../../components/Login/Register";
export default {
  name: "registers",
  components:{
    Register
  },
  middleware: "auth",
  layout: 'login',
};
</script>

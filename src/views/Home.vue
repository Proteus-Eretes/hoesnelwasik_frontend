<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <FinishTime time=500.15 />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import FinishTime from "@/components/Time/FinishTime.vue";

// export default {
//   name: "home",
//   components: {
//     HelloWorld
//   }
// };

export default {
  name: "home",
  components: {
    FinishTime
  }
};
</script>

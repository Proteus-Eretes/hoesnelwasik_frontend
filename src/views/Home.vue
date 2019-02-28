<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />

  </div>
</template>

<script>
// @ is an alias to /src
import FinishTime from "@/components/Time/FinishTime.vue";

export default {
  name: "home",
  components: {
    FinishTime
  }
};
</script>

<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <team-popup>

    </team-popup>
  </div>
</template>

<script>
// @ is an alias to /src
import FinishTime from "@/components/Time/FinishTime.vue";
import TeamPopup from "../components/Team/TeamPopup";

export default {
  name: "home",
  components: {
    TeamPopup,
    FinishTime
  }
};
</script>

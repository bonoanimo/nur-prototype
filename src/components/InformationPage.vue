<template>
  <main class="hello">
    <InfoBar v-on:select-change="catchSelect" v-on:i-r="buttonClick" />
    <InfoData v-bind:toshow="this.modelToShow" />
  </main>
</template>

<script>
import InfoBar from "./molecules/InfoBar";
import InfoData from "./molecules/InfoData";

export default {
  name: "InformationPage",
  components: { InfoBar, InfoData },
  props: {},
  methods: {
    catchSelect(e) {
      console.log("Change select: ", e.type);
      switch (e.type) {
        case "country":
          this.modelToShow.country = e.value;
          break;
        case "trace":
          this.modelToShow.trace = e.value;
          break;
      }
    },
    buttonClick(e) {
      console.log("click on button: ", e);
      this.modelToShow.type = e;
    },
  },
  data() {
    return {
      modelToShow: {
        type: "INFO",
        trace: null,
        country: null,
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

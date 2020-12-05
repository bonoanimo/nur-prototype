<template>
  <div class="information">
    <InformationPage />
  </div>
</template>

<script>
// @ is an alias to /src
import InformationPage from "@/components/InformationPage.vue";

export default {
  name: "Information",
  components: {
    InformationPage,
  },
};
</script>

<template>
  <div>
    <button @click="addLocation">ADD LOC</button>
    <SingleLocationCardCompact v-for="l in this.Traveller.locations" v-bind:key="l" :location="l"/>
  </div>
</template>

<script>
import Traveller from "@/data/Traveller";
import LocationCard from "@/components/SingleLocationCard";
import MapPos from "@/data/MapPos";
import SingleLocationCardCompact from "@/components/SingleLocationCardCompact";

export default {
  name: "Router",
  components: {SingleLocationCardCompact},
  methods: {
    addLocation() {
      this.Traveller.addLocation('x', 'x', 5, new MapPos(10, 60));
    }
  },
  data() {
    return {
      Traveller
    }
  },
  // created() {
  //   if (!this.$root.traveller) {
  //     this.$root.traveller = Traveller;
  //   }
  // }
}
</script>

<style>

</style>

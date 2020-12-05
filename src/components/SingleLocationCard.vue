<template>
  <div class="location-card">
    <div class="location-card-header">{{ this.location.name }}</div>
    <div class="location-card-desc">{{ this.location.description }}</div>
    <div class="location-card-rating">{{ this.location.rating }}/5</div>
  </div>
</template>

<script>
import TLocation from "@/data/TLocation";
import Traveller from "@/data/Traveller";

function my() {

}

export default {
  name: "LocationCard",
  methods: {},
  props: {
    location: TLocation
  }
}
</script>

<style lang="scss">
.location-card {
  border-radius: 1em;
  background-color: #e9e9e9;
  padding: .5em;
  margin: .5em;
  text-align: left;

  &-header {
    font-size: 1.12em;
    margin-bottom: .4em;
  }

  &-description {

  }

}
</style>

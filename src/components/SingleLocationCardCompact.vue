<template>
  <div class="location-card-compact">
    <div class="row align-items-center">
      <div class="location-card-compact-header col">{{ this.location.name }}</div>
      <div @click="$emit('meno', {akafuka:10})" class="location-card-compact-rating col">{{ this.location.rating }}/5</div>
    </div>
  </div>
</template>

<script>
import TLocation from "@/data/TLocation";
import Traveller from "@/data/Traveller";

function my() {

}

export default {
  name: "LocationCardCompact",
  methods: {

  },
  props: {
    location: TLocation
  }
}
</script>

<style lang="scss">
.location-card-compact {
  border-radius: 1em;
  background-color: #e9e9e9;
  padding: .5em;
  margin: .5em;
  text-align: left;

  &-header {
    font-size: 1.12em;
    margin-bottom: .4em;
  }

  &-rating {
    text-align: right;
  }

}
</style>

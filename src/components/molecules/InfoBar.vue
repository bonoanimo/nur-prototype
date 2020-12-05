<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col>
          <Select
            v-bind:dataForTraceSelect="dataForCountrySelect"
            typeOfSelect="-- Select a Country --"
            v-on:select-change="selectEventContry"
        /></b-col>
        <b-col>
          <b-button-group>
            <b-button variant="info" v-on:click="$emit(`i-r`, `INFO`)"
              >INFO</b-button
            >
            <b-button variant="warning" v-on:click="$emit(`i-r`, `RIZIKA`)"
              >RIZIKA</b-button
            >
          </b-button-group>
        </b-col>
        <b-col
          ><Select
            v-bind:dataForTraceSelect="dataForTraceSelect"
            typeOfSelect="-- Select a trace --"
            v-on:select-change="selectEventTrace"
        /></b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Select from "../atoms/Select";

export default {
  name: "InfoBar",
  components: {
    Select,
  },
  //   ,
  //   props: {
  //     data: JSON
  //   }
  data() {
    return {
      dataForTraceSelect: [
        {
          name: "first trace",
          countries: ["cze", "afg"],
        },
        {
          name: "second trace",
          countries: ["cze"],
        },
      ],
      dataForCountrySelect: [
        {
          name: "Česko",
        },
        {
          name: "Afghánistán",
        },
      ],
    };
  },
  methods: {
    selectEventTrace(e) {
      const todo = { type: "trace", value: e };
      this.$emit(`select-change`, todo);
    },
    selectEventContry(e) {
      const todo = { type: "country", value: e };
      this.$emit(`select-change`, todo);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

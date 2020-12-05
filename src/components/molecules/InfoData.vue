<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col>
        <InfoDataBar
          v-on:chosenCategory="addCategory"
          v-bind:barData="this.barData"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <InfoDataDetail v-bind:detailtoshow="this.detailToShow" />
      </b-col>
    </b-row>

    <!-- <div>{{ toshow }}</div> -->
  </b-container>
</template>

<script>
import InfoDataBar from "./InfoDataBar.vue";
import InfoDataDetail from "./InfoDataDetail";

export default {
  name: "InfoData",
  components: {
    InfoDataBar,
    InfoDataDetail,
  },
  props: ["toshow"],
  data() {
    return {
      detailToShow: {},
      barData: {
        type: "INFO",
        data: ["Obecné informace", "Kultura", "Jídlo", "Historie", "Jazyk"],
      },
      typesOfBar: [
        {
          type: "INFO",
          data: ["Obecné informace", "Kultura", "Jídlo", "Historie", "Jazyk"],
        },
        {
          type: "RIZIKA",
          data: [
            "Nemoci",
            "Očkování",
            "Přírodní vlivy",
            "Války",
            "Politická situace",
          ],
        },
      ],
    };
  },
  methods: {
    addCategory(category) {
      console.log("%c%s", "color: #aa00ff", "neco del8m");
      this.detailToShow = this.toshow;
      // this.detailToShow.category = category;

      this.$set(this.detailToShow, "category", category);
      debugger;
    },
  },
  watch: {
    toshow: {
      handler(newProps, oldProps) {
        this.barData = this.typesOfBar.find((t) => t.type === newProps.type);
      },
      deep: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>

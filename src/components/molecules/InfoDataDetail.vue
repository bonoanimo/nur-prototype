<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col v-if="toShowData !== {}">
          <p v-html="toShowData"></p>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import data from "@/assets/data.json";

export default {
  name: "InfoDataDetail",
  props: ["detailtoshow"],
  components: {},
  // mounted() {
  //   this.getDataForShow();
  // },
  data() {
    return {
      data: data,
      toShowData: null,
    };
  },
  methods: {
    // getDataForShow() {
    //   const data = this.data.countries;
    //   // const type = this.typeOfSelect;
    //   // this.options = options;
    //   // // this.selected = options[0];
    //   // //   this.selected = type;
    //   // return options;
    // },
  },
  watch: {
    detailtoshow: {
      handler(newProps, oldProps) {
        // debugger;
        // category: "Obecné informace"
        // country: "Afghánistán"
        // trace: "second trace"
        // type: "INFO"
        debugger;
        const todoData = this.data.countries.find(
          (country) => country.id === newProps.country
        );
        if (newProps.category === null) {
          this.toShowData = "";
          return;
        }
        if (todoData[newProps.type][newProps.category] === undefined) {
          this.toShowData = "";
          return;
        }

        this.toShowData = todoData[newProps.type][newProps.category].text;
      },
      deep: true,
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
.bv-example-row {
  margin-top: 20px;
}
</style>

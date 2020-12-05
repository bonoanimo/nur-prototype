<template>
  <div>
    <b-nav tabs fill >
      <b-nav-item v-for="item in barData.data" :key="item" @click="clickEvent">{{ item }}</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
export default {
  name: "InfoDataBar",
  components: {},
  props: ["barData"],
  data() {
    return {
      selected: "Nemoci",
    };
  },
  methods: {
    clickEvent(e){
      this.selected = e.target.innerHTML
      this.$emit(`chosenCategory`, this.selected)
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>




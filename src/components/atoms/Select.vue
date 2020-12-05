<template>
  <div>
    <b-form-select
      v-model="selected"
      :options="options"
      @change="$emit(`select-change`, selected)"
    >
      <template #first>
        <b-form-select-option :value="null" disabled>{{
          typeOfSelect
        }}</b-form-select-option>
      </template>
    </b-form-select>
  </div>
</template>

<script>
export default {
  name: "Select",
  props: ["dataForTraceSelect", "typeOfSelect"],
  data() {
    return {
      options: [],
      selected: null,
    };
  },
  mounted() {
    this.getOptions();
  },
  methods: {
    onChange: function (e) {
      this.$emit(e);
    },
    getOptions() {
      const options = this.dataForTraceSelect.map((trace) => trace.name);
      const type = this.typeOfSelect;
      this.options = options;
      // this.selected = options[0];
      //   this.selected = type;
      return options;
    },
  },
};
</script>


<style lang="sass" scoped>
</style>
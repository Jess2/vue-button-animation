<template>
  <div id="app">
    <h1>vue-button-animation</h1>
    <select-basic :options="options" v-model="selectVal" size="20px" width="100px"></select-basic>
    <select-basic :options="options" selected="b" v-model="selectVal2"></select-basic>
    <p>selectVal: {{selectVal}}</p>
    <p>selectVal2: {{selectVal2}}</p>
  </div>
</template>

<script>
import SelectBasic from "@/components/selectBasic";
export default {
  name: 'app',
  components: {SelectBasic},
  data() {
    return {
      selectVal: '',
      selectVal2: '',
      radioVal: '',
      checkboxVal: [],
      options: ['a', 'b', 'c'],
    }
  },
  watch: {
  },
  mounted() {
  },
  methods: {
    onChange(e) {
      console.log(e, e.target.value)
    }
  }
}
</script>

<style lang="scss">
html {
  padding: 50px 100px;
}
</style>

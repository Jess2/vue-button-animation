<template>
  <div id="app">
    <h1>vue-button-animation</h1>
    <button-basic color="file">fff</button-basic>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
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

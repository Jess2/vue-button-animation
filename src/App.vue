<template>
  <div id="app">
    <h1>vue-button-animation</h1>

    <file-basic>Select File</file-basic>
    <file-basic color="orange-border-2">Select File</file-basic>
    <file-basic color="red" size="ss">Select File</file-basic>
    <file-basic color="file" disabled>Select File</file-basic>
    <file-basic color="file" name="file">Select File</file-basic>
    <file-basic color="file" name="file" size="ss" weight="400">Select File</file-basic>
    <file-basic color="file" accept=".jpg, .png" circle="100" @change="onChange">Select File</file-basic>
    <file-basic color="file" accept=".jpg, .png" :loading-dot="true">Select File</file-basic>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      radioVal: '',
      checkboxVal: [],
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

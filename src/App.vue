<template>
  <div id="app">
    <h1>vue-button-animation</h1>

    <button-basic color="file">Select File</button-basic>
    <button-basic color="file" loading-dot>Select File</button-basic>
    <button-basic color="file" disabled>Select File</button-basic>
    <form-basic>Select File</form-basic>
    <form-basic color="orange-border-2">Select File</form-basic>
    <form-basic color="red" size="ss">Select File</form-basic>
    <form-basic color="file" disabled>Select File</form-basic>
    <form-basic color="file" name="file">Select File</form-basic>
    <form-basic color="file" accept=".jpg, .png" circle="100" @change="onChange">Select File</form-basic>
    <form-basic color="file" accept=".jpg, .png" :loading-dot="true">Select File</form-basic>
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

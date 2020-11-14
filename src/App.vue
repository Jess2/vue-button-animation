<template>
  <div id="app">
    <button-basic color="primary">안녕하세요</button-basic>
    <button-basic color="secondary" size="ss">Basic</button-basic>
    <button-basic color="success" size="s">Basic</button-basic>
    <button-basic color="danger" size="m">Basic</button-basic>
    <button-basic color="warning" size="l">Basic</button-basic>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
      }
    }
  }
</script>

<style>
  body {
    padding: 10px;
  }
</style>

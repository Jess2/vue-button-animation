<template>
  <div id="app">
    <h1>vue-button-animation</h1>
    <radio-basic value="1" v-model="radioVal" size="2em">
      Radio1
    </radio-basic>
    <radio-basic value="2" v-model="radioVal" disabled>
      Radio2
    </radio-basic>
    <br>
    <radio-basic value="3" color="yellow" v-model="radioVal">
      Radio3
    </radio-basic>
    <radio-basic value="4" color="blue" v-model="radioVal">
      Radio4
    </radio-basic>
    <radio-basic value="5" color="orange" v-model="radioVal">
      Radio5
    </radio-basic>
    <radio-basic value="6" color="cyan" v-model="radioVal">
      Radio6
    </radio-basic>

    <p>radioVal : {{ radioVal }}</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      radioVal: '',
    }
  },
  watch: {
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style lang="scss">
html {
  font-family: sans-serif;
  padding: 50px 100px;
}
</style>

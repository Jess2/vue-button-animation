<template>
  <div id="app">
    <h1>vue-button-animation</h1>
    <ul>
      <li>

      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        isLoading: false,
      }
    },
    mounted () {
    },
    methods: {
      onClick () {
        this.isLoading = true;
      }
    }
  }
</script>

<style lang="scss">
  html {
    height: 100vh;
    font-family: sans-serif;
    background: #000000;
  }

  #app {
    height: 100%;
    padding: 30px 50px 500px;
    color: white;

    ul {
      margin: 0;
      padding: 0;

      li {
        display: flex;
        padding: 50px 0;
        border-bottom: 1px dashed gray;

        > span {
          display: flex;
          align-items: center;
          width: 150px;
          padding: 10px 0;
          font-weight: bold;
        }

        > div {
          width: calc(100% - 160px);

          button, a {
            margin: 10px;
          }
        }
      }
    }
  }
</style>

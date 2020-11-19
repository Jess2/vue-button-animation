<template>
  <div id="app">
    <h1>vue-button-animation</h1>
    <ul>
      <li>
        <span>Examples</span>
        <div>
          <a-press href="https://google.com" color="secondary" size="s" loadingDot>Button</a-press>
          <a-press href="https://google.com" color="success">Button</a-press>
          <a-press href="https://google.com" color="danger" size="l">Button</a-press>
          <a-press href="https://google.com" color="warning" size="30">Button</a-press>
          <a-press href="https://google.com" color="info" size="30" disabled>Button</a-press>
          <a-press href="https://google.com" color="info" size="30">Button</a-press>
          <a-press href="https://google.com" color="dark">Button</a-press>
          <br>
          <button-press color="blue">Button</button-press>
          <button-press color="green">Button</button-press>
          <button-press color="orange">Button</button-press>
          <button-press color="yellow">Button</button-press>
          <button-press color="red">Button</button-press>
          <button-press color="black">Button</button-press>
          <button-press color="cyan" width="100" height="100">Button</button-press>
          <button-press color="cyan" width="100" height="100" loadingDot>Button</button-press>
          <button-press color="navy" width="10em">Button</button-press>
          <button-press color="lightblue" weight="300" size="2em">This is Button</button-press>
          <button-press color="lightblue" weight="300" size="2em" loadingDot>This is Button</button-press>
        </div>
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
      setTimeout(() => {
        this.isLoading = true;
      }, 3000);
    },
    methods: {
      onClick () {
        alert('onClick');
      }
    }
  }
</script>

<style lang="scss">
  html {
    background: #e8e8e8;
    height: 100vh;
    font-family: sans-serif;
  }

  #app {
    height: 100%;
    padding: 30px 50px 500px;

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

          a, button {
            margin: 10px;
          }
        }
      }
    }
  }
</style>

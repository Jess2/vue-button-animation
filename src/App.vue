<template>
  <div id="app">
    <h1>vue-button-animation</h1>
    <ul>
      <li>
        <span>Basic</span>
        <div>
          <button-basic color="primary">Primary</button-basic>
          <button-basic color="secondary">Secondary</button-basic>
          <button-basic color="success">Success</button-basic>
          <button-basic color="danger">Danger</button-basic>
          <button-basic color="warning">Warning</button-basic>
          <button-basic color="info">Info</button-basic>
          <button-basic color="dark">Dark</button-basic>
          <button-basic color="blue">Blue</button-basic>
          <button-basic color="green">Green</button-basic>
          <button-basic color="orange">Orange</button-basic>
          <button-basic color="yellow">Yellow</button-basic>
          <button-basic color="red">Red</button-basic>
          <button-basic color="white">White</button-basic>
          <button-basic color="black">Black</button-basic>
          <button-basic color="white-blue">White Blue</button-basic>
          <button-basic color="file">File</button-basic>
          <button-basic color="cyan">Cyan</button-basic>
          <button-basic color="navy">Navy</button-basic>
          <button-basic color="lightblue">Lightblue</button-basic>
          <br>
          <button-basic color="white-border-1">White Border 1</button-basic>
          <button-basic color="white-border-blue-1">White Border Blue 1</button-basic>
          <button-basic color="gray-border-1">Gray Border 1</button-basic>
          <button-basic color="blue-border-1">Blue Border 1</button-basic>
          <button-basic color="green-border-1">Green Border 1</button-basic>
          <button-basic color="orange-border-1">Orange Border 1</button-basic>
          <button-basic color="yellow-border-1">Yellow Border 1</button-basic>
        </div>
      </li>
      <li>
        <span>Basic : loadingDot</span>
        <div>
          <button-basic color="primary" loadingDot>Primary</button-basic>
          <button-basic color="secondary" loadingDot>Secondary</button-basic>
          <button-basic color="success" loadingDot>Success</button-basic>
          <button-basic color="danger" loadingDot>Danger</button-basic>
          <button-basic color="warning" loadingDot>Warning</button-basic>
          <button-basic color="info" loadingDot>Info</button-basic>
          <button-basic color="dark" loadingDot>Dark</button-basic>
          <button-basic color="blue" loadingDot>Blue</button-basic>
          <button-basic color="green" loadingDot>Green</button-basic>
          <button-basic color="orange" loadingDot>Orange</button-basic>
          <button-basic color="yellow" loadingDot>Yellow</button-basic>
          <button-basic color="red" loadingDot>Red</button-basic>
          <button-basic color="white" loadingDot>White</button-basic>
          <button-basic color="black" loadingDot>Black</button-basic>
          <button-basic color="white-blue" loadingDot>White Blue</button-basic>
          <button-basic color="file" loadingDot>File</button-basic>
          <button-basic color="cyan" loadingDot>Cyan</button-basic>
          <button-basic color="navy" loadingDot>Navy</button-basic>
          <button-basic color="lightblue" loadingDot>Lightblue</button-basic>
          <br>
          <button-basic color="white-border-1" loadingDot>White Border 1</button-basic>
          <button-basic color="white-border-blue-1" loadingDot>White Border Blue 1</button-basic>
          <button-basic color="gray-border-1" loadingDot>Gray Border 1</button-basic>
          <button-basic color="blue-border-1" loadingDot>Blue Border 1</button-basic>
          <button-basic color="green-border-1" loadingDot>Green Border 1</button-basic>
          <button-basic color="orange-border-1" loadingDot>Orange Border 1</button-basic>
          <button-basic color="yellow-border-1" loadingDot>Yellow Border 1</button-basic>
        </div>
      </li>
      <li>
        <span>Press</span>
        <div>
          <button-press color="primary" weight="bolder">primary</button-press>
          <button-press color="secondary">secondary</button-press>
          <button-press color="success">success</button-press>
          <button-press color="danger">danger</button-press>
          <button-press color="warning">warning</button-press>
          <button-press color="info">info</button-press>
          <button-press color="dark">dark</button-press>
          <button-press color="blue">blue</button-press>
          <button-press color="green">green</button-press>
          <button-press color="orange">orange</button-press>
          <button-press color="yellow">yellow</button-press>
          <button-press color="red">red</button-press>
          <button-press color="white">white</button-press>
          <button-press color="black">black</button-press>
          <button-press color="white-blue">white-blue</button-press>
          <button-press color="file">file</button-press>
          <button-press color="cyan">cyan</button-press>
          <button-press color="navy">navy</button-press>
          <button-press color="lightblue">lightblue</button-press>
        </div>
      </li>
      <li>
        <span>Press : loadingDot</span>
        <div>
          <button-press color="primary" :loadingDot="isLoading" @click="onClick">Click Me!</button-press>
          <button-press color="secondary" loadingDot>secondary</button-press>
          <button-press color="success" loadingDot>success</button-press>
          <button-press color="danger" loadingDot>danger</button-press>
          <button-press color="warning" loadingDot>warning</button-press>
          <button-press color="info" loadingDot>info</button-press>
          <button-press color="dark" loadingDot>dark</button-press>
          <button-press color="blue" loadingDot>blue</button-press>
          <button-press color="green" loadingDot>green</button-press>
          <button-press color="orange" loadingDot>orange</button-press>
          <button-press color="yellow" loadingDot>yellow</button-press>
          <button-press color="red" loadingDot>red</button-press>
          <button-press color="white" loadingDot>white</button-press>
          <button-press color="black" loadingDot>black</button-press>
          <button-press color="white-blue" loadingDot>white-blue</button-press>
          <button-press color="file" loadingDot>file</button-press>
          <button-press color="cyan" loadingDot>cyan</button-press>
          <button-press color="navy" loadingDot>navy</button-press>
          <button-press color="lightblue" loadingDot>lightblue</button-press>
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
      // setTimeout(() => {
      //   this.isLoading = true;
      // }, 3000);
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
    background: #dcdcdc;
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

          button, a {
            margin: 10px;
          }
        }
      }
    }
  }
</style>

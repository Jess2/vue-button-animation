<template>
  <div id="app">
    <h1>vue-button-animation</h1>
    <ul>
      <li>
        <span>Basic</span>
        <div>
          <button-basic size="basic" color="lightsalmon">Button</button-basic>
          <button-basic color="lightgray">Button</button-basic>
          <a-basic color="lightsalmon">Button</a-basic>
          <a-basic color="lightgray">Button</a-basic>
          <button-press color="lightsalmon">Button</button-press>
          <button-press color="lightgray">Button</button-press>
          <a-press color="lightsalmon">Button</a-press>
          <a-press color="lightgray">Button</a-press>
          <button-basic color="lightsalmon" loadingDot>Button</button-basic>
          <button-basic color="lightgray" loadingDot>Button</button-basic>
          <a-basic color="lightsalmon" loadingDot>Button</a-basic>
          <a-basic color="lightgray" loadingDot>Button</a-basic>
          <button-press color="lightsalmon" loadingDot>Button</button-press>
          <button-press color="lightgray" loadingDot>Button</button-press>
          <a-press color="lightsalmon" loadingDot>Button</a-press>
          <a-press color="lightgray" loadingDot>Button</a-press>
          <button-basic color="navy" circle="40" size="16">
            <img src="../src/assets/images/account.png" alt="Icon">
          </button-basic>
          <button-basic color="navy" circle="40" size="16" loadingDot>
            <img src="../src/assets/images/account.png" alt="Icon">
          </button-basic>
          <button-basic color="navy" circle="50" loadingDot>
            <img src="../src/assets/images/account.png" alt="Icon">
          </button-basic>
          <button-basic color="black" circle="50" size="ss">
            <img src="../src/assets/images/account.png" alt="Icon">Test
          </button-basic>
          <button-basic color="black" circle="50">
            <img src="../src/assets/images/account.png" alt="Icon">Test
          </button-basic>
          <button-basic color="black" circle="70">
            <img src="../src/assets/images/account.png" alt="Icon">Test
          </button-basic>
          <br>
          <button-basic circle="10em">PrimaryPrimaryPrimaryPrimaryPrimaryPrimaryPrimaryPrimaryPrimaryPrimaryPrimaryPrimaryPrimaryPrimaryPrimaryPrimaryPrimaryPrimaryPrimaryPrimary</button-basic>
          <button-basic color="secondary" :circle="100" loadingDot>Secondary</button-basic>
          <a-basic color="success" :circle="100" loadingDot>Success</a-basic>
          <button-basic color="danger" :circle="100">Danger</button-basic>
          <button-basic color="warning" :circle="100">Warning</button-basic>
          <button-basic color="info" :circle="100">Info</button-basic>
          <button-basic color="dark" :circle="100">Dark</button-basic>
          <button-basic color="blue" :circle="100">Blue</button-basic>
          <button-basic color="green" :circle="100">Green</button-basic>
          <button-basic color="orange" :circle="100">Orange</button-basic>
          <button-basic color="yellow" :circle="100">Yellow</button-basic>
          <button-basic color="red" :circle="100">Red</button-basic>
          <button-basic color="white" :circle="100">White</button-basic>
          <button-basic color="black" :circle="100">Black</button-basic>
          <button-basic color="white-blue" :circle="100">White Blue</button-basic>
          <button-basic color="file" :circle="100">File</button-basic>
          <button-basic color="cyan" :circle="100">Cyan</button-basic>
          <button-basic color="navy" :circle="100">Navy</button-basic>
          <button-basic color="lightblue" :circle="100">Lightblue</button-basic>
          <button-basic color="white-border-1" :circle="100">White Border 1</button-basic>
          <button-basic color="white-border-blue-1" :circle="100">White Border Blue 1</button-basic>
          <button-basic color="gray-border-1" :circle="100">Gray Border 1</button-basic>
          <button-basic color="blue-border-1" :circle="100">Blue Border 1</button-basic>
          <button-basic color="green-border-1" :circle="100">Green Border 1</button-basic>
          <button-basic color="orange-border-1" :circle="100">Orange Border 1</button-basic>
          <button-basic color="yellow-border-1" :circle="100">Yellow Border 1</button-basic>
          <br>
          <button-basic square="10em">Primary</button-basic>
          <button-basic color="secondary" square="100">Secondary</button-basic>
          <button-basic color="success" :square="100">Success</button-basic>
          <button-basic color="danger" :square="100">Danger</button-basic>
          <button-basic color="warning" :square="100">Warning</button-basic>
          <button-basic color="info" :square="100">Info</button-basic>
          <button-basic color="dark" :square="100">Dark</button-basic>
          <button-basic color="blue" :square="100">Blue</button-basic>
          <button-basic color="green" :square="100">Green</button-basic>
          <button-basic color="orange" :square="100">Orange</button-basic>
          <button-basic color="yellow" :square="100">Yellow</button-basic>
          <button-basic color="red" :square="100">Red</button-basic>
          <button-basic color="white" :square="100">White</button-basic>
          <button-basic color="black" :square="100">Black</button-basic>
          <button-basic color="white-blue" :square="100">White Blue</button-basic>
          <button-basic color="file" :square="100">File</button-basic>
          <button-basic color="cyan" :square="100">Cyan</button-basic>
          <button-basic color="navy" :square="100">Navy</button-basic>
          <button-basic color="lightblue" :square="100">Lightblue</button-basic>
          <button-basic color="white-border-1" :square="100">White Border 1</button-basic>
          <button-basic color="white-border-blue-1" :square="100">White Border Blue 1</button-basic>
          <button-basic color="gray-border-1" :square="100">Gray Border 1</button-basic>
          <button-basic color="blue-border-1" :square="100">Blue Border 1</button-basic>
          <button-basic color="green-border-1" :square="100">Green Border 1</button-basic>
          <a-basic color="orange-border-1" :square="100">Orange Border 1</a-basic>
          <a-basic color="yellow-border-1" :square="100">Yellow Border 1</a-basic>
        </div>
      </li>
      <li>
        <span>Basic : loadingDot</span>
        <div>
          <button-basic color="primary" loadingDot :circle="100">Primary</button-basic>
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
          <a-basic color="yellow-border-1" loadingDot>Yellow Border 1</a-basic>
        </div>
      </li>
      <li>
        <span>Press</span>
        <div>
          <button-press size="basic" color="primary" weight="bolder" :circle="100">primary</button-press>
          <button-press color="secondary" >secondary</button-press>
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
      <li>
        <span>Neon</span>
        <div>
          <button-neon size="basic" square="80">BUTTON</button-neon>
          <button-neon square="80">BUTTON</button-neon>
          <button-neon size="ss" circle="100">BUTTON</button-neon>
          <button-neon size="s" :hueRotate="180">BUTTON</button-neon>
          <button-neon size="s" hueRotate="180">BUTTON</button-neon>
          <button-neon size="s" hueRotate="270">BUTTON</button-neon>
          <button-neon size="m" disabled>BUTTON</button-neon>
          <button-neon size="l" loadingDot>BUTTON</button-neon>
          <button-neon width="80" height="80">B</button-neon>
          <button-neon weight="400">Button</button-neon>
          <br>
          <a-neon size="10">BUTTON</a-neon>
          <a-neon size="ss">BUTTON</a-neon>
          <a-neon size="s" :hueRotate="180">BUTTON</a-neon>
          <a-neon size="s" hueRotate="180">BUTTON</a-neon>
          <a-neon size="s" hueRotate="270">BUTTON</a-neon>
          <a-neon size="m" disabled>BUTTON</a-neon>
          <a-neon size="l" loadingDot>BUTTON</a-neon>
          <a-neon width="80" height="80">B</a-neon>
          <a-neon weight="400">Button</a-neon>
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

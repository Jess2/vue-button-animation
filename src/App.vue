<template>
  <div id="app">
    <h1>vue-button-animation</h1>
    <ul>
      <li>
        <span>button-basic</span>
        <div>
          <button-basic color="primary" size="ss">Primary SS</button-basic>
          <button-basic color="secondary" size="ss">Secondary SS</button-basic>
          <button-basic color="success" size="ss">Success SS</button-basic>
          <button-basic color="danger" size="ss">Danger SS</button-basic>
          <button-basic color="warning" size="s">Warning S</button-basic>
          <button-basic color="info" size="s">Info S</button-basic>
          <button-basic color="light" size="m">Light M</button-basic>
          <button-basic color="link" size="m">Link M</button-basic>
          <button-basic color="dark" size="l">Dark L</button-basic>
          <br>
          <button-basic color="blue">Blue</button-basic>
          <button-basic color="green">Green</button-basic>
          <button-basic color="orange">Orange</button-basic>
          <button-basic color="yellow">Yellow</button-basic>
          <button-basic color="red">Red</button-basic>
          <button-basic color="white">White</button-basic>
          <button-basic color="white-blue">White Blue</button-basic>
          <button-basic color="file">File</button-basic>
          <button-basic color="cyan">Cyan</button-basic>
          <button-basic color="navy">Navy</button-basic>
          <button-basic color="black">Black</button-basic>
          <button-basic color="lightblue">Lightblue</button-basic>
          <br>
          <button-basic color="white-border-1">White Border 1</button-basic>
          <button-basic color="white-border-2">White Border 2</button-basic>
          <button-basic color="white-border-3">White Border 3</button-basic>
          <button-basic color="white-border-4">White Border 4</button-basic>
          <button-basic color="white-border-5">White Border 5</button-basic>
          <br>
          <button-basic color="white-border-blue-1">White Border Blue 1</button-basic>
          <button-basic color="white-border-blue-2">White Border Blue 2</button-basic>
          <button-basic color="white-border-blue-3">White Border Blue 3</button-basic>
          <button-basic color="white-border-blue-4">White Border Blue 4</button-basic>
          <button-basic color="white-border-blue-5">White Border Blue 5</button-basic>
          <br>
          <button-basic color="gray-border-1">Gray Border 1</button-basic>
          <button-basic color="gray-border-2">Gray Border 2</button-basic>
          <button-basic color="gray-border-3">Gray Border 3</button-basic>
          <button-basic color="gray-border-4">Gray Border 4</button-basic>
          <button-basic color="gray-border-5">Gray Border 5</button-basic>
          <br>
          <button-basic color="blue-border-1">Blue Border 1</button-basic>
          <button-basic color="blue-border-2">Blue Border 2</button-basic>
          <button-basic color="blue-border-3">Blue Border 3</button-basic>
          <button-basic color="blue-border-4">Blue Border 4</button-basic>
          <button-basic color="blue-border-5">Blue Border 5</button-basic>
          <br>
          <button-basic color="green-border-1">Green Border 1</button-basic>
          <button-basic color="green-border-2">Green Border 2</button-basic>
          <button-basic color="green-border-3">Green Border 3</button-basic>
          <button-basic color="green-border-4">Green Border 4</button-basic>
          <button-basic color="green-border-5">Green Border 5</button-basic>
          <br>
          <button-basic color="orange-border-1">Orange Border 1</button-basic>
          <button-basic color="orange-border-2">Orange Border 2</button-basic>
          <button-basic color="orange-border-3">Orange Border 3</button-basic>
          <button-basic color="orange-border-4">Orange Border 4</button-basic>
          <button-basic color="orange-border-5">Orange Border 5</button-basic>
          <br>
          <button-basic color="yellow-border-1">Yellow Border 1</button-basic>
          <button-basic color="yellow-border-2">Yellow Border 2</button-basic>
          <button-basic color="yellow-border-3">Yellow Border 3</button-basic>
          <button-basic color="yellow-border-4">Yellow Border 4</button-basic>
          <button-basic color="yellow-border-5">Yellow Border 5</button-basic>
        </div>
      </li>
      <li>
        <span>button-basic (disabled)</span>
        <div>
          <button-basic color="primary" size="ss" disabled="true">Primary SS</button-basic>
          <button-basic color="secondary" size="ss" disabled>Secondary SS</button-basic>
          <button-basic color="success" size="ss" disabled>Success SS</button-basic>
          <button-basic color="danger" size="ss" disabled>Danger SS</button-basic>
          <button-basic color="warning" size="s" disabled>Warning S</button-basic>
          <button-basic color="info" size="s" disabled>Info S</button-basic>
          <button-basic color="light" size="m" disabled>Light M</button-basic>
          <button-basic color="link" size="m" disabled>Link M</button-basic>
          <button-basic color="dark" size="l" disabled>Dark L</button-basic>
          <br>
          <button-basic color="blue" disabled>Blue</button-basic>
          <button-basic color="green" disabled>Green</button-basic>
          <button-basic color="orange" disabled>Orange</button-basic>
          <button-basic color="yellow" disabled>Yellow</button-basic>
          <button-basic color="red" disabled>Red</button-basic>
          <button-basic color="white" disabled>White</button-basic>
          <button-basic color="white-blue" disabled>White Blue</button-basic>
          <button-basic color="file" disabled>File</button-basic>
          <button-basic color="cyan" disabled>Cyan</button-basic>
          <button-basic color="navy" disabled>Navy</button-basic>
          <button-basic color="black" disabled>Black</button-basic>
          <button-basic color="lightblue" disabled>Lightblue</button-basic>
          <br>
          <button-basic color="white-border-1" disabled>White Border 1</button-basic>
          <button-basic color="white-border-2" disabled>White Border 2</button-basic>
          <button-basic color="white-border-3" disabled>White Border 3</button-basic>
          <button-basic color="white-border-4" disabled>White Border 4</button-basic>
          <button-basic color="white-border-5" disabled>White Border 5</button-basic>
          <br>
          <button-basic color="white-border-blue-1" disabled>White Border Blue 1</button-basic>
          <button-basic color="white-border-blue-2" disabled>White Border Blue 2</button-basic>
          <button-basic color="white-border-blue-3" disabled>White Border Blue 3</button-basic>
          <button-basic color="white-border-blue-4" disabled>White Border Blue 4</button-basic>
          <button-basic color="white-border-blue-5" disabled>White Border Blue 5</button-basic>
          <br>
          <button-basic color="gray-border-1" disabled>Gray Border 1</button-basic>
          <button-basic color="gray-border-2" disabled>Gray Border 2</button-basic>
          <button-basic color="gray-border-3" disabled>Gray Border 3</button-basic>
          <button-basic color="gray-border-4" disabled>Gray Border 4</button-basic>
          <button-basic color="gray-border-5" disabled>Gray Border 5</button-basic>
          <br>
          <button-basic color="blue-border-1" disabled>Blue Border 1</button-basic>
          <button-basic color="blue-border-2" disabled>Blue Border 2</button-basic>
          <button-basic color="blue-border-3" disabled>Blue Border 3</button-basic>
          <button-basic color="blue-border-4" disabled>Blue Border 4</button-basic>
          <button-basic color="blue-border-5" disabled>Blue Border 5</button-basic>
          <br>
          <button-basic color="green-border-1" disabled>Green Border 1</button-basic>
          <button-basic color="green-border-2" disabled>Green Border 2</button-basic>
          <button-basic color="green-border-3" disabled>Green Border 3</button-basic>
          <button-basic color="green-border-4" disabled>Green Border 4</button-basic>
          <button-basic color="green-border-5" disabled>Green Border 5</button-basic>
          <br>
          <button-basic color="orange-border-1" disabled>Orange Border 1</button-basic>
          <button-basic color="orange-border-2" disabled>Orange Border 2</button-basic>
          <button-basic color="orange-border-3" disabled>Orange Border 3</button-basic>
          <button-basic color="orange-border-4" disabled>Orange Border 4</button-basic>
          <button-basic color="orange-border-5" disabled>Orange Border 5</button-basic>
          <br>
          <button-basic color="yellow-border-1" disabled>Yellow Border 1</button-basic>
          <button-basic color="yellow-border-2" disabled>Yellow Border 2</button-basic>
          <button-basic color="yellow-border-3" disabled>Yellow Border 3</button-basic>
          <button-basic color="yellow-border-4" disabled>Yellow Border 4</button-basic>
          <button-basic color="yellow-border-5" disabled>Yellow Border 5</button-basic>
        </div>
      </li>
      <li>
        <span>a-basic</span>
        <div>
          <a-basic href="https://google.com" target="_blank" color="primary" size="ss" disabled="false">Primary SS</a-basic>
          <a-basic color="secondary" size="ss" disabled>Secondary SS</a-basic>
          <a-basic color="success" size="ss">Success SS</a-basic>
          <a-basic color="danger" size="ss">Danger SS</a-basic>
          <a-basic color="warning" size="s">Warning S</a-basic>
          <a-basic color="info" size="s">Info S</a-basic>
          <a-basic color="light" size="m">Light M</a-basic>
          <a-basic color="link" size="m">Link M</a-basic>
          <a-basic color="dark" size="l">Dark L</a-basic>
          <br>
          <a-basic href="https://google.com" target="_blank" color="blue">Blue</a-basic>
          <a-basic color="green">Green</a-basic>
          <a-basic color="orange">Orange</a-basic>
          <a-basic color="yellow">Yellow</a-basic>
          <a-basic color="red">Red</a-basic>
          <a-basic color="white">White</a-basic>
          <a-basic color="white-blue">White Blue</a-basic>
          <a-basic color="file">File</a-basic>
          <a-basic color="cyan">Cyan</a-basic>
          <a-basic color="navy">Navy</a-basic>
          <a-basic color="black">Black</a-basic>
          <a-basic color="lightblue">Lightblue</a-basic>
          <br>
          <a-basic color="white-border-1">White Border 1</a-basic>
          <a-basic color="white-border-2">White Border 2</a-basic>
          <a-basic color="white-border-3">White Border 3</a-basic>
          <a-basic color="white-border-4">White Border 4</a-basic>
          <a-basic color="white-border-5">White Border 5</a-basic>
          <br>
          <a-basic color="white-border-blue-1">White Border Blue 1</a-basic>
          <a-basic color="white-border-blue-2">White Border Blue 2</a-basic>
          <a-basic color="white-border-blue-3">White Border Blue 3</a-basic>
          <a-basic color="white-border-blue-4">White Border Blue 4</a-basic>
          <a-basic color="white-border-blue-5">White Border Blue 5</a-basic>
          <br>
          <a-basic color="gray-border-1">Gray Border 1</a-basic>
          <a-basic color="gray-border-2">Gray Border 2</a-basic>
          <a-basic color="gray-border-3">Gray Border 3</a-basic>
          <a-basic color="gray-border-4">Gray Border 4</a-basic>
          <a-basic color="gray-border-5">Gray Border 5</a-basic>
          <br>
          <a-basic color="blue-border-1">Blue Border 1</a-basic>
          <a-basic color="blue-border-2">Blue Border 2</a-basic>
          <a-basic color="blue-border-3">Blue Border 3</a-basic>
          <a-basic color="blue-border-4">Blue Border 4</a-basic>
          <a-basic color="blue-border-5">Blue Border 5</a-basic>
          <br>
          <a-basic color="green-border-1">Green Border 1</a-basic>
          <a-basic color="green-border-2">Green Border 2</a-basic>
          <a-basic color="green-border-3">Green Border 3</a-basic>
          <a-basic color="green-border-4">Green Border 4</a-basic>
          <a-basic color="green-border-5">Green Border 5</a-basic>
          <br>
          <a-basic color="orange-border-1">Orange Border 1</a-basic>
          <a-basic color="orange-border-2">Orange Border 2</a-basic>
          <a-basic color="orange-border-3">Orange Border 3</a-basic>
          <a-basic color="orange-border-4">Orange Border 4</a-basic>
          <a-basic color="orange-border-5">Orange Border 5</a-basic>
          <br>
          <a-basic color="yellow-border-1">Yellow Border 1</a-basic>
          <a-basic color="yellow-border-2">Yellow Border 2</a-basic>
          <a-basic color="yellow-border-3">Yellow Border 3</a-basic>
          <a-basic color="yellow-border-4">Yellow Border 4</a-basic>
          <a-basic color="yellow-border-5">Yellow Border 5</a-basic>
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
      }
    },
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
            margin: 5px;
          }
        }
      }
    }
  }
</style>

<template>
  <div id="app">
    <h1>vue-button-animation</h1>
    <ul>
      <li>
        <span>button-basic</span>
        <div>
          <button-basic color="primary" size="ss">Basic</button-basic>
          <button-basic color="secondary" size="s">Basic</button-basic>
          <button-basic color="success" size="m">Basic</button-basic>
          <button-basic color="danger" size="l">Basic</button-basic>
          <button-basic color="warning" size="l">Basic</button-basic>
          <button-basic color="info" size="l">Basic</button-basic>
          <button-basic color="light" size="l">Basic</button-basic>
          <button-basic color="dark" size="6">Basic</button-basic>
          <button-basic color="link" size="l">Basic</button-basic>
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
    }
  }
</script>

<style scoped lang="scss">
  #app {
    padding: 30px 50px;
    font-family: sans-serif;

    ul {
      margin: 0;
      padding: 0;

      li {
        display: flex;
        padding: 10px 0;

        > span {
          display: flex;
          align-items: center;
          width: 150px;
          padding: 10px 0;
        }

        > div {
          width: calc(100% - 160px);

          button {
            margin: 5px;
          }
        }
      }
    }
  }
</style>

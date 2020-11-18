<template>
  <div id="app">
    <h1>vue-button-animation</h1>
    <ul>
      <li>
        <span>button-basic</span>
        <div>
          <button-basic width="120" height="60" :loadingDot="false" @click="onClick">Login</button-basic>
          <button-basic width="120" height="60" :loadingDot="false" @click="onClick">This is Login Button</button-basic>
          <button-basic width="120" height="60" :loadingDot="true" @click="onClick">Login</button-basic>
          <button-basic width="120" :loadingDot="isLoading" @click="onClick">Login</button-basic>
          <button-basic size="l" :loadingDot="isLoading" @click="onClick">Login</button-basic>
          <button-basic size="s" :loadingDot="isLoading" @click="onClick">Login</button-basic>
          <button-basic size="10" :loadingDot="isLoading" @click="onClick">Login</button-basic>
          <button-basic size="10" loadingDot @click="onClick">Login</button-basic>
        </div>
      </li>
      <li>
        <span>a-basic</span>
        <div>
          <a-basic width="120" height="60" :loadingDot="false" @click="onClick">Login</a-basic>
          <a-basic width="120" height="60" :loadingDot="false" @click="onClick">This is Login Button</a-basic>
          <a-basic width="120" height="60" :loadingDot="true" @click="onClick">This is Login Button</a-basic>
          <a-basic width="120" :loadingDot="isLoading" @click="onClick">Login</a-basic>
          <a-basic size="l" :loadingDot="isLoading" @click="onClick">Login</a-basic>
          <a-basic size="l" width="10" :loadingDot="isLoading" @click="onClick">Login</a-basic>
          <a-basic size="s" :loadingDot="isLoading" @click="onClick">Login</a-basic>
          <a-basic size="10" :loadingDot="isLoading" @click="onClick">Login</a-basic>
          <a-basic size="10" loadingDot @click="onClick">Login</a-basic>
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
            margin: 5px;
          }
        }
      }
    }
  }
</style>

<template>
  <div id="app">
    <h1>vue-button-animation</h1>
    <ul>
      <li>
        <span>button-basic</span>
        <div>
          <button-basic color="primary" size="ss">primary ss</button-basic>
          <button-basic color="secondary" size="s">secondary s</button-basic>
          <button-basic color="success" size="m">success m</button-basic>
          <button-basic color="danger" size="l">danger l</button-basic>
          <button-basic color="warning" size="l">warning</button-basic>
          <button-basic color="info" size="l">info</button-basic>
          <button-basic color="light" size="l">light</button-basic>
          <button-basic color="link" size="l">link</button-basic>
          <button-basic color="dark" size="l">dark</button-basic>
          <br>
          <button-basic color="maxwork" size="ss">MAXWORK maxwork ss</button-basic>
          <button-basic color="maxwork" size="s">maxwork s</button-basic>
          <button-basic color="maxwork" size="s">안녕하세요</button-basic>
          <button-basic color="maxwork">maxwork m</button-basic>
          <button-basic color="remote">remote m</button-basic>
          <button-basic color="white-border-1">취소</button-basic>
          <button-basic color="create" size="basic">로그</button-basic>
          <button-basic color="create" size="basic">로그아웃</button-basic>
          <button-basic color="create" size="basic">로그아웃로그아웃</button-basic>
          <button-basic color="create">Logout</button-basic>
          <button-basic color="admin">admin m</button-basic>
          <button-basic color="remote">remote m</button-basic>
          <button-basic color="white-border-3" size="l">white-border-3</button-basic>
          <button-basic color="file" size="ss" weight="400">탐색 ss</button-basic>
          <button-basic color="file" size="s" weight="400">탐색 s</button-basic>
          <button-basic color="file" weight="400">탐색 m</button-basic>
          <button-basic color="file" size="l" weight="400">탐색 l</button-basic>
          <button-basic color="file" size="12" weight="400">탐색 12</button-basic>
          <button-basic color="maxwork-border-3" size="wide">MAXWORK 상품별 가격 보기</button-basic>
          <button-basic color="lite">Lite</button-basic>
          <button-basic color="maxwork">Pro</button-basic>
          <button-basic color="enterprise">Enterprise</button-basic>
          <button-basic color="white">white</button-basic>
          <button-basic color="white-blue">white</button-basic>
          <button-basic color="white-border-1">white border</button-basic>
          <button-basic color="gray-border-1" :size="56">gray border</button-basic>
          <button-basic color="gray-border-1" size="56">gray border</button-basic>
          <button-basic color="gray-border-1" size="1.5em">gray border</button-basic>
          <button-basic color="white-border-blue-1" width="17rem" height="3.8rem">사용자 가이드 다운로드</button-basic>
        </div>
      </li>
      <li>
        <span>button-basic (disabled)</span>
        <div>
          <button-basic color="primary" size="ss" disabled>primary ss</button-basic>
          <button-basic color="secondary" size="s" disabled>secondary s</button-basic>
          <button-basic color="success" size="m" disabled>success m</button-basic>
          <button-basic color="danger" size="l" disabled>danger l</button-basic>
          <button-basic color="warning" size="l" disabled>warning</button-basic>
          <button-basic color="info" size="l" disabled>info</button-basic>
          <button-basic color="light" size="l" disabled>light</button-basic>
          <button-basic color="link" size="l" disabled>link</button-basic>
          <br>
          <button-basic color="maxwork" disabled>maxwork m</button-basic>
          <button-basic color="remote" disabled>remote m</button-basic>
          <button-basic color="create" disabled>create m</button-basic>
          <button-basic color="admin" disabled>admin m</button-basic>
          <button-basic color="remote" disabled>remote m</button-basic>
          <button-basic color="white-border-1" disabled>white-border m</button-basic>
          <button-basic color="file" size="ss" disabled>file m</button-basic>
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

<style scoped lang="scss">
  #app {
    padding: 30px 50px;
    font-family: sans-serif;
    background: #adadad;

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

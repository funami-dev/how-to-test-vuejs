<template>
  <div id="app">
      <Elements />
  </div>
</template>

<script>
import Elements from './Components';

export default {
  name: 'app',
  components: {
    Elements,
  },
};
</script>

<style lang="scss">
body {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #fff;
  color: #000;
  margin: 0;
  p,
  h6,
  h1,
  h2,
  h3,
  h4 {
    text-align: left;
  }
}
.table {
  display: table;
  width: 100%;
  .row {
    &:nth-child(even) {
      background: #fafafa;
    }
    display: table-row;
    div.item {
      padding: 8px;
      display: table-cell;
      &:nth-child(1) {
        width: 30%;
      }
      &:nth-child(2) {
        width: 70%;
      }
    }
  }
}
</style>

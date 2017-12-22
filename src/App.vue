<template>
  <div id="app">
        <!-- <div class="flex flex-column"> -->
        <div class="table">
          <div class="row">
            <div><h6>Elements</h6></div>
            <div><Elements /></div>
          </div>
          <div class="row">
            <div><h6>Props</h6></div>
            <div><Props :name="'Lebowski'" /></div>
          </div>
          <div class="row">
            <div><h6>Computed</h6></div>
            <div><Computed :count="3" /></div>
          </div>
          <div class="row">
            <div><h6>Computed</h6></div>
            <div><Computed :count="1" /></div>
          </div>
          <div class="row">
            <div><h6>Methods</h6></div>
            <div><Methods :name="'Lebowski'" /></div>
          </div>
          <div class="row">
            <div><h6>AsyncMethods</h6></div>
            <div><AsyncMethods :name="'Lebowski'" /></div>
          </div>
          <!-- <router-view/> -->
    </div>
  </div>
</template>

<script>
import Elements from './components/elements/';
import Props from './components/props/';
import Computed from './components/computed/';
import Methods from './components/methods/';
import AsyncMethods from './components/asyncMethods/';

export default {
  name: 'app',
  components: {
    Elements,
    Props,
    Computed,
    Methods,
    AsyncMethods,
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
    display: table-row;
    div {
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

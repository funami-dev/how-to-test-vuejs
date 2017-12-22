<template>
  <div id="app">
        <!-- <div class="flex flex-column"> -->
        <div class="table">
          <div class="row">
            <div class="item"><h6>Elements</h6></div>
            <div class="item"><Elements /></div>
          </div>
          <div class="row">
            <div class="item"><h6>Props</h6></div>
            <div class="item"><Props :name="'Lebowski'" /></div>
          </div>
          <div class="row">
            <div class="item"><h6>Computed</h6></div>
            <div class="item"><Computed :count="3" /></div>
          </div>
          <div class="row">
            <div class="item"><h6>Computed</h6></div>
            <div class="item"><Computed :count="1" /></div>
          </div>
          <div class="row">
            <div class="item"><h6>Methods</h6></div>
            <div class="item"><Methods :name="'Lebowski'" /></div>
          </div>
          <div class="row">
            <div class="item"><h6>AsyncMethods</h6></div>
            <div class="item"><AsyncMethods :name="'Lebowski'" /></div>
          </div>
          <div class="row">
            <div class="item"><h6>Dynamical generated tests</h6></div>
            <div class="item"><p>Toggle should be true</p><Toggle :dudeName="'Lebowski'" :isDude="true" /></div>
          </div>
          <div class="row">
            <div class="item"><h6>Dynamical generated tests</h6></div>
            <div class="item"><p>Toggle should be false</p><Toggle :dudeName="''" :isDude="true" /></div>
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
import Toggle from './components/toggle/';

export default {
  name: 'app',
  components: {
    Elements,
    Props,
    Computed,
    Methods,
    AsyncMethods,
    Toggle,
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

<template>
  <div id="app">
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-drawer">
      <!-- <div class="mdl-layout__drawer">
        <span class="mdl-layout-title">How to test vueJS</span>
        <nav class="mdl-navigation">
          <router-link to="readme" tag="span">
            <a class="mdl-navigation__link">ReadMe</a>
          </router-link>
          <router-link to="testme" tag="span">
            <a class="mdl-navigation__link">Testme</a>
          </router-link>
        </nav>
      </div> -->
      <main class="mdl-layout__content">
        <div class="page-content">
          <p>Test elements</p>
          <Elements />
          <p>Test props with *** Props :name="'Lebowski'" ***</p>
          <Props :name="'Lebowski'" />
          <p>Test computed</p>
          <Computed :count="3" />
          <Computed :count="1" />
          <Methods :name="'Lebowski'" />
          <AsyncMethods :name="'Lebowski'" />
          <router-view/>
        </div>
      </main>
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

<style>
body {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #fff;
  color: #000;
  margin: 0;
}
</style>

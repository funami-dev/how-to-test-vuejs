# how-to-test-vuejs

> Boilerplate how to test vuejs

## How to test...
* props
* methods
* text content
* is element visible
* is component present
* time to show app (coming...)
* computed (comming...)
* mount (comming...)
* routing (comming...)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

# Testing {{page.title}}

![Alternative text](./runtest.gif "running tests...")

Get the files:


Testing vueJS with mocha, sinon, chai and nightwatch. E2E Test and Unit tests.

```javascript
browsers: ['PhantomJS'],
frameworks: ['mocha', 'sinon', 'chai', 'sinon-chai']
```

## Elements
E2E: Test is an element visible and text contains right

*** ./src/components/elements/index.vue ***
```javascript
<template>
  <div id="testElements">
    <h1>Lets test vueJs</h1>
  </div>
</template>
```

*** ./test/e2e/specs/elements.spec.js ***
```javascript
module.exports = {
  'is headline correct': function test(browser) {
    const devServer = browser.globals.devServerURL;
    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.containsText('h1', 'Lets test vueJs')
      .end();
  },
};
```

## Props
Unit: Test props are pass properly

*** ./src/components/props/props.spec.js ***
```javascript
import Vue from 'vue';
import Props from './index';

const Constructor = Vue.extend(Props);

describe('Test props', () => {
  it('is uniqe, true and called Lebowski', () => {
    const vm = new Constructor({
      propsData: {
        isDude: true,
        count: 1,
        name: 'Lebowski',
      },
    }).$mount();

    expect(vm.$el.querySelector('.isDude')).to.not.equal(null);
    expect(vm.$el.querySelector('h3 span').textContent).to.equal('Lebowski');
    expect(vm.$el.querySelector('h3 em').textContent).to.equal('1');
  });
});
```

*** ./src/components/props/index.vue ***
```javascript
<template>
    <div class="testProps">
        <div v-if="isDude" class="isDude">
            <h3>There are <em>{{count}}</em> Dudes called <span>{{name}}</span></h3>
        </div>
        <div v-else>
            There is no dude
        </div>
    </div>
</template>
<script>
export default {
  name: 'testProps',
  props: {
    count: {
      type: Number,
      default: 1,
    },
    name: {
      type: String,
      default: '?',
    },
    isDude: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
```

## Computed
Unit: Test computed work properly

*** ./src/components/computed/computed.spec.js ***
```javascript
import Vue from 'vue';
import Computed from './index';

const Constructor = Vue.extend(Computed);

describe('The Dude', () => {
  it('is uniqe, true and called Lebowski', () => {
    const vm = new Constructor({
      propsData: {
        isDude: true,
        count: 1,
        name: 'Lebowski',
      },
    }).$mount();

    expect(vm.randomNick).to.include('object');
  });
});
```

*** ./src/components/computed/index.vue ***
```javascript
import Vue from 'vue';
import Computed from './index';

const Constructor = Vue.extend(Computed);

describe('Test computed', () => {
  it('there is just one Dude', () => {
    const vm = new Constructor({
      propsData: {
        isDude: true,
        count: 1,
        name: 'Lebowski',
      },
    }).$mount();

    expect(vm.isJustOneDude).to.equal(true);
  });
  it('there are more than one Dude', () => {
    const vm = new Constructor({
      propsData: {
        isDude: true,
        count: 2,
        name: 'Lebowski',
      },
    }).$mount();

    expect(vm.isJustOneDude).to.equal(false);
  });
  it('there are no negative Dudes', () => {
    const vm = new Constructor({
      propsData: {
        isDude: true,
        count: -1,
        name: 'Lebowski',
      },
    }).$mount();

    expect(vm.isJustOneDude).to.equal(false);
  });
});
```


## Methods
Test synchron methods

*** ./src/components/methods/methods.spec.js ***
```javascript
import Vue from 'vue';
import Methods from './index';

const Constructor = Vue.extend(Methods);

describe('Test methods', () => {
  it('Dude always speaks a quote', () => {
    const vm = new Constructor({
      propsData: {
        isDude: true,
        count: 1,
        name: 'Lebowski',
      },
    }).$mount();

    expect(vm.getRandomQuote).to.not.equal('');
  });
});
```

*** ./src/components/methods/index.vue ***
```javascript
<template>
    <div class="testMethods">
        <div v-if="isDude" class="isDude">
            <button @click="getRandomQuote">Random quote</button>
            <h3><span>{{name}} say:</span></h3>
            <pre v-if="randomQuote">
              {{randomQuote}}
            </pre>
        </div>
        <div v-else>
            There is no dude
        </div>
    </div>
</template>
<script>
export default {
  name: 'testMethods',
  data() {
    return {
      randomQuote: null,
      quotes: [
        'Yeah, well, you know, that’s just, like, your opinion, man.',
        'That rug really tied the room together.',
        "Obviously you're not a golfer.",
        "Nobody calls me Lebowski. You got the wrong guy. I'm the Dude, man.",
        'Who the fuck are the Knutsens?',
        'Mr. Treehorn treats objects like women, man.',
        'Hey, nice marmot!',
        'My only hope is that the big Lebowski kills me before the Germans can cut my dick off.',
      ],
    };
  },
  methods: {
    getRandomQuote() {
      // eslint-disable-next-line
      const randomNumber = (Math.random() * (this.quotes.length - 0) + 0).toFixed(0);
      this.randomQuote = this.quotes[randomNumber];
    },
  },
  props: {
    count: {
      type: Number,
      default: 1,
    },
    name: {
      type: String,
      default: '?',
    },
    isDude: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
```

## Async
```javascript
coming sooner or later...
```

## Router
```javascript
coming sooner or later...
```

## E2E Screenshots
E2E Screenshot
*** ./test/e2e/specs/screenshots.spec.js ***
```javascript
module.exports = {
  'make screenshots': function test(browser) {
    const devServer = browser.globals.devServerURL;
    browser
      .url(devServer)
      .resizeWindow(360, 480)
      .saveScreenshot('./test/e2e/screenshots/mobile_360x480.png')
      .resizeWindow(480, 360)
      .saveScreenshot('./test/e2e/screenshots/mobile_480x360.png')
      .end();
  },
};
```

## E2E Methods

*** ./test/e2e/specs/methods.spec.js ***
```javascript
module.exports = {
  'is async methods correct': function test(browser) {
    const devServer = browser.globals.devServerURL;
    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.containsText('button.getDataFromApi', 'Get async data')
      .click('button.getDataFromApi')
      .waitForElementVisible('pre', 5000)
      .assert.containsText('pre', 'nix gefunden')
      .end();
  },
};
```
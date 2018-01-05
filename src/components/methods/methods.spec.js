import Vue from 'vue';
import Methods from './index';

const Constructor = Vue.extend(Methods);

describe('METHODS', () => {
describe('#getRandomQuote', () => {
  it('is not empty', () => {
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
});

import Vue from 'vue';
import RouteParams from './index';

const Constructor = Vue.extend(RouteParams);

describe('Test route params', () => {
  it('should be Dude', () => {
    const vm = new Constructor().$mount();
    vm.$route = { params: { id: 'Dude' } };

    expect(vm.name).to.equal('Dude');
  });
});

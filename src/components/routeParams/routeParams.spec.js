import Vue from 'vue';
import RouteParams from './index';

describe('PARAMS', () => {
  describe('#nameFromParams', () => {
    it('should be Dude', () => {
      const Constructor = Vue.extend(RouteParams);
      const vm = new Constructor();
      vm.$route = { params: { id: 'Dude' } };
      vm.$mount();
      expect(vm.nameFromParams).to.equal('Dude');
    });
  });
});

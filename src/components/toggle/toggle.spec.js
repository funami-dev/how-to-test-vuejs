import Vue from 'vue';
import Toggle from './index';

const Constructor = Vue.extend(Toggle);

describe('Toggle status', () => {
  const tests = [
    { propsData: { isDude: true, dudeName: 'Lebowski' }, expected: true },
    { propsData: { isDude: false, dudeName: 'Lebowski' }, expected: false },
    { propsData: { isDude: true, dudeName: '' }, expected: false },
    { propsData: { isDude: true, dudeName: null }, expected: false },
    { propsData: { isDude: true, dudeName: [] }, expected: false },
    { propsData: { isDude: true, dudeName: {} }, expected: false },
    { propsData: { isDude: true, dudeName: undefined }, expected: false },
    { propsData: { isDude: true }, expected: false },
  ];

  tests.map((test, i) => {
    it('(' + i + ')should be ' + test.expected, () => {
      const vm = new Constructor({
        propsData: test.propsData,
      }).$mount();

      expect(vm.isCheckedFromProps).to.equal(test.expected);
    });
  });
});

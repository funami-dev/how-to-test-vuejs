import Vue from 'vue';
import Toggle from './index';

const Constructor = Vue.extend(Toggle);

describe('TEST WITH SCENARIOS', () => {
  describe('#isCheckedFromProps', () => {
    const testScenarios = [
      { propsData: { isDude: true, dudeName: 'Lebowski' }, expected: true },
      { propsData: { isDude: false, dudeName: 'Lebowski' }, expected: false },
      { propsData: { isDude: true, dudeName: '' }, expected: false },
      { propsData: { isDude: true, dudeName: null }, expected: false },
      { propsData: { isDude: true, dudeName: [] }, expected: false },
      { propsData: { isDude: true, dudeName: {} }, expected: false },
      { propsData: { isDude: true, dudeName: undefined }, expected: false },
      { propsData: { isDude: true }, expected: false },
    ];

    testScenarios.map((scenario, i) => {
      it('(' + i + ') should be ' + scenario.expected, () => {
        const vm = new Constructor({
          propsData: scenario.propsData,
        }).$mount();

        expect(vm.isCheckedFromProps).to.equal(scenario.expected);
      });
    });
  });
});

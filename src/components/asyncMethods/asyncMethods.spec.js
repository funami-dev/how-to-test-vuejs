import Vue from 'vue';
import AsyncMethods from './index';

const Constructor = Vue.extend(AsyncMethods);

describe('Test async methods', () => {
  it('check getFeedbackData', () => {
    const vm = new Constructor({
      propsData: {
        isDude: true,
        count: 1,
        name: 'Lebowski',
      },
    }).$mount();
    // TODO
    // sinon.stub(vm.methods, 'getFeedbackData').callsFake(() => {
    //   'nix gefunden';
    // });
    expect(vm.$el.querySelector('button').textContent).to.equal('Get async data');
  });
});

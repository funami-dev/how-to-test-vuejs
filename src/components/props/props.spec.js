import Vue from 'vue';
import Props from './index';

const Constructor = Vue.extend(Props);

describe('PROPS', () => {
  it('is uniqe, true and called Lebowski', () => {
    const vm = new Constructor({
      propsData: {
        isDude: true,
        count: 1,
        name: 'Lebowski',
      },
    }).$mount();

    expect(vm.$el.querySelector('.isDude')).to.not.equal(null);
    expect(vm.$el.querySelector('p span').textContent).to.equal('Lebowski');
    expect(vm.$el.querySelector('p em').textContent).to.equal('1');
  });
});

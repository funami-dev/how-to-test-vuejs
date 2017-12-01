// import Vue from 'vue';
// import testDude from './testDude.vue';
// const Constructor = Vue.extend(testDude);

// describe('The Dude', () => {
//     it('chartDataWeek is an object with series', () => {
//         const vm = new Constructor().$mount();

//         Vue.set(vm, 'dudesNick', [
//             'Duuuuude',
//             'Duderino',
//             'Dudness',
//             'Just Dude'
//         ]);

//         // undefined is not a constructor (evaluating 'new Array(8).fill('', 0, 7)')
//         // expect(typeof vm.chartDataWeek).to.equal('object');
//         // expect(vm.chartDataWeek).to.have.property('series');
//         expect(vm.randomNick).to.include('object');
//     });

//     // it('check getFeedbackData', () => {
//     //     sinon.stub(Result.methods, 'getFeedbackData').callsFake(() => 'test');
//     //     const vm = new Constructor().$mount();
//     //     expect(vm.getFeedbackData()).to.equal('test');
//     // });
// });
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

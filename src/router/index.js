import Vue from 'vue';
import Router from 'vue-router';
import Props from '@/components/props/';
import Elements from '@/components/elements/';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  saveScrollPosition: true,
  routes: [
    {
      path: '/Props',
      name: 'Props',
      component: Props,
    },
    {
      path: '/Elements',
      name: 'Elements',
      component: Elements,
      // children: [
      //   {
      //     path: '/testme/:uuid',
      //     name: 'unterseiteTest',
      //     component: unterseiteTest,
      //     meta: {
      //       isYeah: true,
      //     },
      //   },
      // ],
    },
    // {
    //   path: '*',
    //   redirect: '/ReadMe',
    // },
  ],
});

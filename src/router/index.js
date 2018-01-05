import Vue from 'vue';
import Router from 'vue-router';
import RouteParams from '@/components/routeParams';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  saveScrollPosition: true,
  routes: [
    {
      path: '/RouteParams/:id',
      name: 'RouteParams',
      component: RouteParams,
    },
  ],
});

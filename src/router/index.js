import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../views/HomePage';
import Photo from '../views/Photo';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
    {
      path: '/photo/:id',
      name: 'Photo',
      component: Photo,
    },
  ],
});

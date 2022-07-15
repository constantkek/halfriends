import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import EventsView from '../views/EventsView.vue';
import AboutView from '../views/AboutView.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'events',
    component: EventsView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

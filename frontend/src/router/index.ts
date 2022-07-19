import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import EventsListView from '@/views/EventsListView.vue';
import EventView from '@/views/EventView.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'events',
    component: EventsListView,
  },
  {
    path: '/event/:id',
    name: 'event',
    component: EventView,
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

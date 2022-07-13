import { fetchAll } from '@/utils/setup/created';
import Vue from 'vue';
import Vuex from 'vuex';
import { eventStore } from './eventStore';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    eventStore,
  },
});

fetchAll();

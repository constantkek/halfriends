import Vuex from 'vuex';
import Vue from 'vue';

import { RootState } from '@/store/rootState';

Vue.use(Vuex);

export const store = new Vuex.Store<RootState>({
  state: {
    version: '1.0.0',
  } as RootState,
});
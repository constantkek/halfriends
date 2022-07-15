import Vuex from "vuex";
import Vue from "vue";

import { eventStore } from "@/store/eventStore";
import { RootState } from "@/store/rootState";

Vue.use(Vuex);

export const store = new Vuex.Store<RootState>({
  modules: {
    eventStore,
  },
});
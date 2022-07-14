import Vue from 'vue';
import Vuex from 'vuex';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { eventStore, EventStoreAction } from './store/eventStore';

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    eventStore,
  },
});

const fetchAll = async () => {
	await store.dispatch(EventStoreAction.fetch);
};

fetchAll().then(() => {
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount('#app');
});

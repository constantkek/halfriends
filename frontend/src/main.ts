import Vue from 'vue';
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';

import App from '@/App.vue';
import router from '@/router';
import { EventStoreAction } from '@/store/eventStore/actions';
import { store } from '@/store';

Vue.config.productionTip = false;

Vue.use(ElementUI);

const fetchAll = async () => {
	await store.dispatch(`eventStore/${EventStoreAction.fetch}`);
};

fetchAll().then(() => {
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount('#app');
});

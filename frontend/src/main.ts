import Vue from 'vue';
import ElementUI from 'element-ui';

import 'element-ui/lib/theme-chalk/index.css';

import App from '@/App.vue';
import router from '@/router';
import { store } from '@/store';
import { eventStore } from './store/eventStore';

Vue.config.productionTip = false;

Vue.use(ElementUI);

const fetchAll = async () => {
	await eventStore.fetch();
};

fetchAll().then(() => {
  new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount('#app');
});

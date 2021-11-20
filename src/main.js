import {createApp} from 'vue';
import App from './App.vue';
import VCalendar from 'v-calendar';
import Router from './router';
import Vuex from 'vuex';
import {store} from './store/store';

import 'tailwindcss/tailwind.css';
import './assets/css/global.css';
import './assets/css/style.css';

const moduApp = createApp(App);
moduApp.use(VCalendar, {});
moduApp.use(Router);
moduApp.use(Vuex);
moduApp.use(store);
moduApp.mount('#app');

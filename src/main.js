import {createApp} from 'vue';
import App from './App.vue';
import VCalendar from 'v-calendar';
import Router from './router';
import 'tailwindcss/tailwind.css';
import './assets/css/global.css';
import './assets/css/style.css';

const moduApp = createApp(App);
moduApp.use(VCalendar, {});
moduApp.use(Router);
moduApp.mount('#app');

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import LandingPage from './pages/LandingPage.vue';
import BaseButton from './components/UI/BaseButton.vue';

const app = createApp(App);

app.component('landing-page', LandingPage);
app.component('base-button', BaseButton);

app.use(store);
app.use(router);
app.mount('#app');

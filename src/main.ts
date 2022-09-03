import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import LandingPage from './pages/LandingPage.vue';
import BaseButton from './components/UI/BaseButton.vue';
import { FontAwesomeIcon } from './plugins/font-awesome';

const app = createApp(App);

// /* import the fontawesome core */
// import  { library }  from '@fortawesome/fontawesome-svg-core';
// import { library } from '@fortawesome/fontawesome-svg-core';

// /* import font awesome icon component */
// import  { FontAwesomeIcon }  from '@fortawesome/vue-fontawesome';

// /* import specific icons */
// import {  }  from '@fortawesome/free-solid-svg-icons'
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';

// /* add icons to the library */
// library.add(faInstagram);

// app.component('font-awesome-icon', FontAwesomeIcon);
app.component('landing-page', LandingPage);
app.component('base-button', BaseButton);
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(store);
app.use(router);
app.mount('#app');

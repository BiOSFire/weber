import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import MainRightComponent from './components/MainRightComponent.vue';
import MainLeftComponent from './components/MainLeftComponent.vue';
import MainMidComponent from './components/MainMidComponent.vue';

const app = createApp(App);
app.component('main-right-component', MainRightComponent);
app.component('main-left-component', MainLeftComponent);
app.component('main-mid-component', MainMidComponent);

app.use(store).use(router).mount('#app');

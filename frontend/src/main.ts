import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import NavigationComponent from './components/NavigationComponent.vue';
import NavTopComponent from './components/NavTopComponent.vue';
import ObservationPropsComponent from './components/ObservationPropsComponent.vue';

const app = createApp(App);
app.component('navigation-component', NavigationComponent);
app.component('nav-top-component', NavTopComponent);
app.component('observation-props-component', ObservationPropsComponent);

app.use(store).use(router).mount('#app');

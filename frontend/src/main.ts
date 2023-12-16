import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import SearchBarComponent from './common/searchbar/SearchBarComponent.vue';
import RightSidebarComponent from './common/sidebars/RightSidebarComponent.vue';
import LeftSidebarComponent from './common/sidebars/LeftSidebarComponent.vue';
import HeaderComponent from './home/components/HeaderComponent.vue';

const app = createApp(App);

//common
app.component('search-bar-component', SearchBarComponent);

//home
app.component('right-sidebar-component', RightSidebarComponent);
app.component('left-sidebar-component', LeftSidebarComponent);
app.component('header-component', HeaderComponent);

app.use(store).use(router).mount('#app');

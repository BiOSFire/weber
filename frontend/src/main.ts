import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import SearchBarComponent from './common/searchbar/SearchBarComponent.vue';
import RightSidebarComponent from './home/components/RightSidebarComponent.vue';
import LeftSidebarComponent from './home/components/LeftSidebarComponent.vue';
import HeaderComponent from './home/components/HeaderComponent.vue';
import ProfilComponent from './profil/components/ProfilComponent.vue';
import ImageComponent from './profil/components/ImageComponent.vue';

const app = createApp(App);

//common
app.component('search-bar-component', SearchBarComponent);

//home
app.component('right-sidebar-component', RightSidebarComponent);
app.component('left-sidebar-component', LeftSidebarComponent);
app.component('header-component', HeaderComponent);
app.component('profil-component', ProfilComponent);
app.component('image-component', ImageComponent);

app.use(store).use(router).mount('#app');

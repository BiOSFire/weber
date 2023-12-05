import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import NavigationView from './components/NavigationView.vue'

const app = createApp(App)
app.component('navigation-view', NavigationView)

app.use(store).use(router).mount('#app')

import { createApp } from 'vue'
//impored the app file
import App from './App.vue'
//imported the router file
import router from './routers'
//imported the store file
import store from './store.js'
//imported the css file
import './App.css'
import '@fortawesome/fontawesome-free/css/all.css'

createApp(App).use(router).use(store).mount('#app')

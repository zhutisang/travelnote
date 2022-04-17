/* eslint-disable import/no-duplicates */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import http from './utils/http'
import vuetify from './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'
import { loadFonts } from './plugins/webfontloader'

loadFonts()

require('./mock')
const app = createApp(App)
app.provide('$axios', axios)
app.provide('$http', http)
app.use(router)
  .use(store)
  .use(vuetify)
  .mount('#app')

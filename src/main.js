import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import VueMq from 'vue-mq'


createApp(App).mount('#app')
Vue.use(VueMq, {
    breakpoints: {
      sm: 450,
      md: 1250,
      lg: Infinity,
    }
  })
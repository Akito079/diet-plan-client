import './assets/tailwin.css'
import "preline/preline";
import "./axios"
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// prime vue
import PrimeVue from 'primevue/config';
import Lara from '@/presets/lara';
import ToastService from 'primevue/toastservice';

const app = createApp(App)
app.use(PrimeVue,{ 
  unstyled: true,
  pt : Lara
});
app.use(createPinia())
app.use(ToastService);
app.use(router)
app.mount('#app')

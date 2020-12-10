import { createApp } from 'vue';
import App from './App.vue';
import './index.css';

const app = createApp(App);

// globally register base components
import baseBtn from './components/base/_base-btn.vue';
import baseInput from './components/base/_base-input.vue';

app.component('base-btn', baseBtn);
app.component('base-input', baseInput);

app.mount('#app');

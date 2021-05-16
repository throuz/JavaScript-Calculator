import { createApp } from 'vue'
import App from './App.vue'
import { dragscrollNext } from "vue-dragscroll";

createApp(App).directive('dragscroll', dragscrollNext).mount('#app')

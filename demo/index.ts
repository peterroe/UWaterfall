import { createApp } from 'vue'
import UWaterfall from '../src/main'
// import UWaterfall from 'uwaterfall'
// import 'uwaterfall/dist/style.css'
import test from './test.vue'

createApp(test).use(UWaterfall).mount('#app')
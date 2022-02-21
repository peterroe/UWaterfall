import UWaterfall from './UWaterfall.vue'
import { App } from 'app'

function install(app: App) {
  app.component('UWaterfall', UWaterfall)
}

export default install

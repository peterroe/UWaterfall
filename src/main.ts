import UWaterfall from './UWaterfall.vue'
import { App } from 'app'

function install(app: App) {
  app.component('UWaterfall', UWaterfall)
}
export {
  UWaterfall
}
export default install

import _Vue, { PluginObject } from 'vue'
import CutDirective from './cut-directive'

declare global {
  interface Window {
    Vue: _Vue | undefined
  }
}

const install = (Vue: typeof _Vue) => {
  Vue.directive('cut', CutDirective)
}

const VueCut: PluginObject<never> = {
  install
}

if (window.Vue) {
  _Vue.use(VueCut)
}

export default VueCut

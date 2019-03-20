import VuePlyr from './VuePlyr.vue'

VuePlyr.install = (Vue, options = {}) => {
  if (options.plyr) {
    VuePlyr.props.options.default = () => { return { ...options.plyr } }
  }
  if (options.emit) {
    VuePlyr.props.emit.default = () => { return [ ...options.emit ] }
  }
  Vue.component(VuePlyr.name, VuePlyr)
}

// Credit to https://github.com/irazasyed for this auto Vue.use() when
// installing from unpkg or similar.
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VuePlyr)
}

export default VuePlyr

import Vue from 'vue'
import Vuex from 'vuex'
import VuexRailsPlugin from 'vuex-rails-plugin/src/VuexRailsPlugin'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  plugins: [VuexRailsPlugin('posts')]
})
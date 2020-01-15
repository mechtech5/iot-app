import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    devices: []
  },
  mutations: {
    setDevices: (state, payload) => state.devices = payload,
  },
  actions: {
    fetchDevices({commit}) {
      const devices = [
        {
          id: 101,
          name: 'A101',
          rating: 5,
          status: true
        },
        {
          id: 102,
          name: 'A102',
          rating: 2,
          status: true
        },
        {
          id: 103,
          name: 'A103',
          rating: 3,
          status: true
        },
      ];
      
      commit('setDevices', devices);
    }
  },
  modules: {
  }
})

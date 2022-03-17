import Vue from 'vue'
import Vuex from 'vuex'
import { reqToken, reqAllCar, reqEmergency, reqDelCar, reqLastUserHealth, reqGetUser, reqDrivingInformationByDay, reqDrivingInformationByTime } from '@/api'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    cars: [],
    emergencys: [],
    health: [],
    userinfo: {},
    timeHistory: [],
    dayHistory: []
  },
  mutations: {
    ADDToken (state, token) {
      state.token = token
    },
    GETAllCAR (state, obj) {
      state.cars = obj
    },
    GETEMERGENCY (state, obj) {
      state.emergencys = obj
    },
    GETLASTUSERHEALTH (state, obj) {
      state.health = obj
    },
    GETUSER (state, obj) {
      state.userinfo = obj
    },
    GETDRIVINGHISTORYBYDAY (state, obj) {
      obj.forEach(function (item) {
        item.begin = item.begin.replace('T', ' ')
        item.end = item.end.replace('T', ' ')
      })
      state.dayHistory = obj
    },
    GETDRIVINGHISTORYBYTIME (state, obj) {
      obj.forEach(function (item) {
        item.begin = item.begin.replace('T', ' ')
        item.end = item.end.replace('T', ' ')
      })
      state.timeHistory = obj
    }
  },
  actions: {
    async getToken ({ commit }, { username, password }) {
      const result = await reqToken(username, password)
      if (result.status === 200) {
        commit('ADDToken', result.obj)
      }
    },
    async getAllCar ({ commit }) {
      const result = await reqAllCar()
      if (result.status === 200) {
        commit('GETAllCAR', result.obj)
      }
    },
    async getEmergency ({ commit }) {
      const result = await reqEmergency()
      if (result.status === 200) {
        commit('GETEMERGENCY', result.obj)
      }
    },
    async getLastUserHealth ({ commit }) {
      const result = await reqLastUserHealth()
      if (result.status === 200) {
        commit('GETLASTUSERHEALTH', result.obj)
      }
    },
    async GetUser ({ commit }) {
      const result = await reqGetUser()
      if (result.status === 200) {
        commit('GETUSER', result.obj)
      }
    },
    async getDrivingInformationByDay ({ commit }, beginTimeS) {
      const result = await reqDrivingInformationByDay(beginTimeS)
      if (result.status === 200) {
        commit('GETDRIVINGHISTORYBYDAY', result.obj)
      }
    },
    async getDrivingInformationByTime ({ commit }, params) {
      const result = await reqDrivingInformationByTime(params)
      if (result.status === 200) {
        commit('GETDRIVINGHISTORYBYTIME', result.obj)
      }
    },
    async DelCarById ({ commit }, id) {
      const result = await reqDelCar(id)
      if (result.status === 200) {
      }
    }
  },
  modules: {
  },
  getters: {
    bloodOxygen (state) {
      var bloodOxygens = []
      state.health.forEach(function (item) {
        bloodOxygens.push(item.bloodOxygen)
      })
      return bloodOxygens
    },
    temperature (state) {
      var temperatures = []
      state.health.forEach(function (item) {
        temperatures.push(item.temperature)
      })
      return temperatures
    },
    heartbeat (state) {
      var heartbeats = []
      state.health.forEach(function (item) {
        heartbeats.push(item.heartbeat)
      })
      return heartbeats
    }
  }
})

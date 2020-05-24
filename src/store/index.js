import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title:'My custom title',
    links: [
      'https://google.com',
      'https://youtube.com'
    ]
  },
  mutations: {
    ADD_LINK : (state , link) => {
      state.links.push(link)
    },
    REMOVE_LINK:(state , link)=>{
      state.links.splice(link ,1)
    },
    REMOVE_ALL :(state) => {
      state.links = [];
    }
  },
  actions: {
    removeLink : (context , link)=>{
      context.commit('REMOVE_LINK',link)
    },
    removeAll({commit}) {
      return new Promise((resolve , reject) => {
        setTimeout(() => {
          commit('REMOVE_ALL')
          resolve()
        },2000)
      })
    }
  },
  getters:{
    countLinks : (state) => {
      return state.links.length
    }
  },
  modules: {
  }
})

/**
 * Created by liushoubin on 25/6/17.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = new Vuex.Store({
  state:{
    addkey:""
  },
  mutations:{
    addico (state,msg){
      state.addkey = msg
    }
  }
})


export default store

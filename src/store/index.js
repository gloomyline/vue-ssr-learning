/*
* @Author: AlanWang
* @Date:   2017-10-14 14:33:49
* @Last Modified by:   AlanWang
* @Last Modified time: 2017-10-14 14:38:03
*/

import Vue from 'vue'
import Vuex from 'vuex'

vue.use(vuex)

// Assume we have a universal API that returns Promises
// and ignore the implementation details
import { fetchItem } from './api'

export function createStore () {
  return new Vuex.Store({
    state: {
      items: {}
    },
    actions: {
      fetchItem({ commit }, id) {
        // return the Promise via `store.dispatch()` so that we know
        // when the data has been fetched
        return fetchItem(id).then(item => {
          commit('setItem', { id, item })
        })
      }
    },
    mutations: {
      setItem (state, { id, item }) {
        Vue.set(state.items, id, item)
      }
    }
  })
}
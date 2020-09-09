import Vue from 'vue';
import Vuex from 'vuex';

import errors from './_errors.js'
import users from './_users.js'
import loader from './_loader.js'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    errors,
    users,
    loader
  }
});
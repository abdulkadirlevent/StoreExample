import {
  wrappedRequestWithSuccess,
  wrappedRequestWithError
} from "../requests";

const state = {
  usersList: []
};
const getters = {
  usersList: state => state.usersList.length
};
const mutations = {
  usersListSet: (state, list) => (state.usersList = list),
  updateLoader: (state, status) => (state.loading = status)
};
const actions = {
  requestWithSuccess: async ({ commit }) => {
    const data = await wrappedRequestWithSuccess();
    if (data) commit("usersListSet", data);
  },
  requestWithError: async ({ commit }) => {
    const data = await wrappedRequestWithError();
    // won't trigger
    if (data) commit("usersListSet", data);
  },
  clearUsersList: ({ commit }) => {
    commit("usersListSet", []);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};

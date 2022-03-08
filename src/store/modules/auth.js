const auth = {
  namespaced: true,
  state: {
    userContainer: {
      userId: null,
      userPassword: null,
      isLogin: false,
    },
  },
  getters: {
    getUserContainer(state) {
      return state.userContainer;
    },
  },
  mutations: {
    saveUserContainer(state, payload) {
      console.log(payload);
      state.userContainer.userId = payload.userId;
      state.userContainer.userPassword = payload.userPassword;
      state.isLogin = true;
    },
  },
  actions: {},
};

export default auth;

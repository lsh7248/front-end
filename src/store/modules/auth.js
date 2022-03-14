const auth = {
  namespaced: true,
  state: {
    userContainer: {
      userId: null,
      userPassword: null,
      isLogin: false,
    },
    access: "",
    refresh: "",
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
    initializeStore(state) {
      if (localStorage.getItem("access")) {
        state.access = localStorage.getItem("access");
      } else {
        state.access = "";
      }
    },
    setAccess(state, access) {
      state.access = access;
    },
  },
  actions: {},
};

export default auth;

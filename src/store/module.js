export default {
  namespaced: true,
  state: {
    example: true,
  },
  getters: {
    example: (state) => state.example,
  },
  mutations: {
    setexample(state, status) {
      state.example = status;
    },
  },
  actions: {
    example(context, status) {
      context.commit("setExample", status);
    },
  },
};

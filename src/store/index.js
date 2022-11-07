import { createStore } from "vuex";

export default createStore({
  state: {
    list: [], // 任务列表
  },
  getters: {
    getList: (state) => state.list || [],
  },
  mutations: {
    ADD_TODO(state, payload) {
      state.list.push(payload);
    },

    DEL_TODO(state, payload) {
      state.list.splice(payload, 1);
    },

    RESET_TODO(state, payload) {
      state.list = payload || [];
    },
  },
  actions: {},
  modules: {},
});

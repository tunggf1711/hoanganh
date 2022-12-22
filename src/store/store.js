import { createStore } from "vuex";

export const store = createStore({
  state() {
    return {
      popupMode: "",
      popupContent: "",
    };
  },
  mutations: {
    changePopupMode(state, popupMode) {
      state.popupMode = popupMode;
    },
    changePopupContent(state, popupContent) {
      state.popupContent = popupContent;
    },
  },
  actions: {},
});

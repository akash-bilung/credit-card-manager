import { createStore } from "vuex";

import cardsData from "@/data/cards.json";

const cardsModule = {
  namespaced: true,
  state() {
    return {
      cards: [],
      selectedCard: {},
    };
  },
  actions: {
    fetchCards(context) {
      const data = cardsData.data;
      context.dispatch("setCards", data);
    },
    fetchSingleCard(context, slug) {
      const data = cardsData.data.filter((e) => {
        return e.slug === slug;
      });
      context.dispatch("setSingleCard", data[0]);
    },
    setCards(context, payload) {
      context.commit("setCards", payload);
    },
    setSingleCard(context, payload) {
      context.commit("setSingleCard", payload);
    },
  },
  mutations: {
    setCards(state, payload) {
      state.cards = payload;
    },
    setSingleCard(state, payload) {
      state.selectedCard = payload;
    },
  },
  getters: {
    loadedCards(state) {
      return state.cards;
    },
    loadSingleCard(state) {
      return state.selectedCard;
    },
  },
};

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    cards: cardsModule,
  },
});

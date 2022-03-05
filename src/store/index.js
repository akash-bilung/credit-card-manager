import { createStore } from "vuex";

import cardsData from "@/data/cards.json";
import transactionsData from "@/data/transactions.json";

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
const transactionsModule = {
  namespaced: true,
  state() {
    return {
      transactions: [],
      selectedTransaction: {},
    };
  },
  actions: {
    fetchTransactions(context) {
      const data = transactionsData.data;
      context.dispatch("setTransactions", data);
    },
    fetchSingleTransaction(context, slug) {
      const data = transactionsData.data.filter((e) => {
        return e.slug === slug;
      });
      context.dispatch("setSingleTransaction", data[0]);
    },
    setTransactions(context, payload) {
      context.commit("setTransactions", payload);
    },
    setSingleTransaction(context, payload) {
      context.commit("setSingleTransaction", payload);
    },
  },
  mutations: {
    setTransactions(state, payload) {
      state.transactions = payload;
    },
    setSingleTransaction(state, payload) {
      state.selectedTransaction = payload;
    },
  },
  getters: {
    loadedTransactions(state) {
      return state.transactions;
    },
    loadSingleTransaction(state) {
      return state.selectedTransaction;
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
    transactions: transactionsModule,
  },
});

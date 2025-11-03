export default {
  testAuth(state, getters, rootGetters, rootState) {
    console.log(getters);
    console.log(rootGetters);
    console.log(rootState);
    return state.isLoggedIn;
  },
  finalCounter(state) {
    return state.counter * 2;
  },
  normalizeCounter(state, getters) {
    const finalCounter = getters.finalCounter;
    if (finalCounter < 0) {
      return 0;
    } else if (finalCounter > 100) {
      return 100;
    }
    return finalCounter;
  },
};

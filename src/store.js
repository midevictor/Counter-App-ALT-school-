import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0
  },
  // mutuation that used to update the state
  mutations: {
    //incrememnt state
    increment(state) {
      state.count++
    },
    //decrement state
    decrement(state) {
      state.count--
    },
    //reset state
    reset(state) {
      state.count = 0
    },
    //setValue state that set the initial count to value
    setValue(state, value) {
      state.count = value
    }
  }
})
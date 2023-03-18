import { computed } from 'vue'
import { useStore } from 'vuex'

export default function useCounter() {
  const store = useStore()

  const count = computed(() => store.state.count)

  const increment = () => {
    // commit? method call that triggers a mutation in a Vuex store.
    store.commit('increment')
  }

  const decrement = () => {
    store.commit('decrement')
  }

  const reset = () => {
    store.commit('reset')
  }

  const setValue = (value) => {
    store.commit('setValue', value)
  }

  return {
    count,
    increment,
    decrement,
    reset,
    setValue
  }
}
// In Vue.js, useComputed is a composable function provided by the Composition API that allows developers to create computed properties in a component. Computed properties are values that are derived from other data properties in a component, and they are computed dynamically based on the state of the component.
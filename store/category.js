const state = () => ({
  categories: []
})

const getters = {
  allCategories: state => state.categories
}

const mutations = {
  GET_CATEGORIES(state, categories) {
    state.categories = categories
  }
}

const actions = {
  async fetchCategories({commit}) {
    let response = await this.$axios.get('category')
    commit('GET_CATEGORIES', response.data)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

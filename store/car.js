const state = () => ({
  cars: []
})

const getters = {
  allCars: state => state.cars
}

const mutations = {
  GET_CARS(state, cars) {
    state.cars = cars
  }
}

const actions = {
  async fetchCars({commit}) {
    let response = await this.$axios.get('/cars')
    commit('GET_CARS', response.data)
    // console.log(response,45412)
  },

  async fetchCar({commit}, car) {
    let response = await this.$axios.get("cars/" + car)
    commit('GET_CARS', response.data)
    console.log(response, 21)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

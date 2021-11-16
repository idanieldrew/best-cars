const state = () => ({
  cars: []
})

const getters = {
  allCars: state => state.cars,

  car: state => state.cars
}

const mutations = {
  GET_CARS(state, cars) {
    state.cars = cars
  },
  GET_CAR(state, car) {
    state.cars = car
  },
}

const actions = {
  async fetchCars({commit}) {
    let response = await this.$axios.get('/cars')
    commit('GET_CARS', response.data)
  },

  async fetchCar({commit}, car) {
    let response = await this.$axios.get("cars/" + car)
    commit('GET_CAR', response.data)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}

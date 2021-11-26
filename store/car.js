const state = () => ({
  cars: [],
  car: []
})

const getters = {
  allCars: state => state.cars,

  car: state => state.car
}

const mutations = {
  GET_CARS(state, cars) {
    state.cars = cars
  },
  GET_CAR(state, car) {
    state.car = car
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

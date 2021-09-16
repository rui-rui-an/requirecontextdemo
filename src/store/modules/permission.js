const state = {
  permission: '我是vuex中permission模块的permission',
  routes: [],
  addRoutes: []
}

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes
  }
}

const actions = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

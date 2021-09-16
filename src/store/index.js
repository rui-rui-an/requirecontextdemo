import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

// https://webpack.js.org/guides/dependency-management/#requirecontext
const modulesFiles = require.context('./modules', true, /\.js$/)

// you do not need `import app from './modules/app'`
// it will auto require all vuex module from modules file
console.log(modulesFiles.keys())
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
  // console.log(modules)
  // console.log(modulePath)
  // set './app.js' => 'app'
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  // 拿到导入的模块
  const value = modulesFiles(modulePath)
  // console.log(value)
  modules[moduleName] = value.default
  // console.log(modules)
  return modules
}, {})
console.log(modules)
const store = new Vuex.Store({
  modules,
  getters
})

export default store

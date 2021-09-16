import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 1.第一种，直接在main.js里面写
// const requireComponent = require.context(
//   // 其组件目录的相对路径
//   './components',
//   // 是否查询其子目录
//   false,
//   // 匹配基础组件文件名的正则表达式
//   /\.vue$/
// )
// // 定义一个字符串转大写的方法
// function upperFirst (str) {
//   const newStr = str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase()
//   return newStr
// }
// console.log(requireComponent.keys())
// requireComponent.keys().forEach(fileName => {
//   // 获取组件配置，其实就是获取你导入进来的每个组件,但是要用require.context返回的函数来执行，参数就是keys()数组中的每一项
//   const componentConfig = requireComponent(fileName)
//   console.log(componentConfig)
//   // fileName的名字就是./A.vue 或者 ./B.vue ./B.vue ./ddddd.vue
//   // 写一个正则去匹配 .vue 或者 ./
//   // 然后就剩下一个文件名A，B B ddddd ,再字符串转大写，就可以注册大写字母开头的组件了。
//   const reg = /(\.\/)|\.vue/g
//   // 最终得到组件首字母大写的名字
//   const componentName = upperFirst(fileName.replace(reg, ''))
//   // 全局注册组件
//   Vue.component(
//     componentName,
//     // 如果这个组件选项是通过 `export default` 导出的，
//     // 那么就会优先使用 `.default`，
//     // 否则回退到使用模块的根。
//     componentConfig.default || componentConfig
//   )
// })

// 2.将注册文件写到全局组件里的registerComponents.js中，使用Vue.use来注册
import registerComponents from './components/registerComponents.js'
Vue.use(registerComponents)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

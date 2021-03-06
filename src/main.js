import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import './element-variables.scss'
import VueLazyload from 'vue-lazyload'//懒加载
Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: '/static/image/loader/orange.progress-bar-stripe-loader.svg',
  error:'/static/image/loader/orange.square-circle-preloader.svg',
  attempt: 1
})

//弹窗
import VueSwal from 'vue-swal'
import '@/style/index.scss' // global css
// animate动画库
import 'animate.css'

import App from './App'
import router from './router'
import store from './store'

// 国际化
import i18n from './lang'
// 全局权限检查
import './permission'
// 全局图标
import './icons'
// 全局Ua
import './icons/ua'
// 全局 Mock 接口
import './mock'
import moment from 'moment' //导入文件

// import inportJs from './common/importJs'
Vue.prototype.$moment = moment //赋值使用
Vue.use(VueSwal)

Vue.use(ElementUI, {
  size: 'medium',
  i18n: (key, value) => i18n.t(key, value)
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: (h) => h(App)
})

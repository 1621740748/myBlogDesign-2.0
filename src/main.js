import Vue from 'vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import './element-variables.scss'

//弹窗
import VueSwal from 'vue-swal'
import '@/style/index.scss' // global css
// animate动画库
import 'animate.css'

import App from './App'
import router from './router'
import store from './store'

// 自定义的全局组件
import Notification from '@/components/notification'
// 国际化
import i18n from './lang'
// 全局权限检查
import './permission'
// 全局图标
import './icons'
// 全局 Mock 接口
//import './mock'
import moment from 'moment' //导入文件
//loadsh
// import _ from 'lodash'
// Vue.prototype._ = _

Vue.prototype.$moment = moment //赋值使用
Vue.use(VueSwal)

Vue.use(ElementUI, {
  size: 'medium',
  i18n: (key, value) => i18n.t(key, value)
})
Vue.use(Notification)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  render: h => h(App)
})

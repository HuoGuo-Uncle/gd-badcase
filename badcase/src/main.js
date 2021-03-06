// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import qs from 'qs'
//import echarts from 'echarts'

//import axios from 'axios'
// Vue.prototype.$http = axios
//Vue.prototype.$echarts = echarts
Vue.prototype.$qs = qs
import MyHttpSever from '@/plugins/http.js'
import moment from 'moment'

import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/reset.css'
// import '@/styles/index.scss'
import router from './router'

// 使用vue插件
Vue.use(ElementUI);
 Vue.use(MyHttpSever);



Vue.config.productionTip = false

// 全局过滤器-处理日期
Vue.filter('fmtdate',(v)=>{
  return moment(v).format('YYYY-MM-DD')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

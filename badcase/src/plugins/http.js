// 插件模块
import axios from'axios'

const MyHttpSever = {}
MyHttpSever.install = (Vue)=> {
    
   axios.defaults.baseURL='https://www.liulongbin.top:8888/api/private/v1/'
    // 添加实例方法
    Vue.prototype.$http = axios
    axios.interceptors.request.use(config => {
      // NProgress.start()
      // console.log(config)
      // 为请求头对象，添加token验证的Authorization字段
      config.headers.Authorization = window.sessionStorage.getItem('token')
      // 在最后必须 return config
      return config
    })
   
  }

  export default MyHttpSever
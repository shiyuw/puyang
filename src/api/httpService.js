import axios from 'axios'
import Vue from 'vue'
import qs from 'qs'

//创建vue实例，以便访问vue原型的方法
const vue = new Vue()

// 创建Axios实例对象，配置请求前缀，请求超时时间以及不需要带跨域凭证
const Axios = axios.create({
//    baseURL:  process.env.NODE_ENV !== 'development' ? path.API_URL : '',
   withCredentials: true
  //baseURL: path.API_URL
})
Axios.defaults.timeout = 1000*60*10;           //超时时间

// 请求拦截
Axios.interceptors.request.use(config => {
    if (config.data && config.data.ContentType) {
    //   delete config.data.ContentType
      config.data = qs.stringify(config.data);
      config.headers = Object.assign(config.headers, { 'Content-Type': 'application/json; charset=UTF-8'})
      // config.headers = Object.assign(config.headers, { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'})
    }
    return config
  }, error => {
    return Promise.reject(error)                  
  })
  
  // 相应拦截，可以在错误响应中做操作，response包含错误信息
  Axios.interceptors.response.use(resopne => {
    return resopne 
  }, error => {
    const { response } = error
    return Promise.reject(error)
  })

  // post请求
export const postHttp = (url, data) => {
    return new Promise((resolve, reject) => {
      // data = qs.stringify(data)
      Axios.post(url,data).then(res => {
        resolve(res.data)
        // if (res.data.code !== 200) vue.$message('获取数据失败，请刷新')
        // else resolve(res.data.output)
      }).catch(error => {
        reject(error)
        // vue.$message('获取数据失败，请刷新')
      })
    })
  }

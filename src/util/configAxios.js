import QS from 'qs'
import axios from 'axios'
let BASE_API = process.env.BASE_SERVER + '/api'
let config = {
  method: 'get',
  baseURL: BASE_API,
  transformRequest: [function (data, header) {
    return QS.stringify(data)
  }],
  transformResponse: [function (data) {
    return data
  }],
  headers: { 'X-Requested-With': 'XMLHttpRequest' },
  paramsSerializer: function (params) {
    return QS.stringify(params, { 'arrayFormat': 'brackets' })
  },
  timeout: 1000,
  withCredentials: false,
  responseType: 'json',
  responseEncodeing: 'utf-8',
  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',
  onUploadProgress: function (progressEvent) {

  },
  onDownloadProgress: function (progressEvent) {

  },
  maxContentLength: 2000,
  validateStatus: function (status) {
    return status >= 200 && status <= 300
  },
  maxRedirects: 5,
  socketPath: null
    // proxy: {
    //     host: '127.0.0.1',
    //     port: 9000,
    //     auth: {
    //     username: 'mikeymike',
    //         password: 'rapunz3l'
    //     }
    // },
}

const axiosInstance = axios.create(config)
// 响应前拦截
axiosInstance.interceptors.request.use(function (config) {
  config.url = BASE_API + config.url
  return config
}, function (error) {
  console.log('接口请求错误')
  return Promise.reject(error)
})
// 响应后拦截
axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  console.log('接口响应异常')
  return Promise.reject(error)
})

export default axiosInstance

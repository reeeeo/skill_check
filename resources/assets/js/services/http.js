import axios from 'axios'

export default {
  request(method, url, data, success = null, error = null) {
    axios.request({
      url,
      data,
      method: method
    }).then(success).catch(error)
  },
  get(url, success = null, error = null) {
    return this.request('get', url, {}, success, error)
  },
  post(url, data, success = null, error = null) {
    return this.request('post', url, data, success, error)
  },
  put(url, data, success = null, error = null) {
    return this.request('put', url, data, success, error)
  },
  delete(url, success = null, error = null) {
    return this.request('delete', url, {}, success, error)
  },
  init() {
    axios.defaults.baseURL = '/api/v1'
    axios.interceptors.request.use(config => {
      config.headers['X-CSRF-TOKEN']     = window.Laravel.csrfToken
      config.headers['X-Requested-With'] = 'XMLHttpRequest'
      config.headers['Authorization']    = `Bearer ${localStorage.getItem('jwt-token')}`
      return config
    })
    axios.interceptors.response.use(response => {
      const token = response.headers['Authorization'] || response.data['token']
      if (token) {
        localStorage.setItem('jwt-token', token)
      }
      return response
    }, error => {
      console.log(error)
      return Promise.reject(error)
    })
  }
}

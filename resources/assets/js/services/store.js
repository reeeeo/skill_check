import http from './http'

export default {
  state: {
    user: {},
    authenticated: false
  },
  login(user, successCb = null, errorCb = null) {
    http.post('login', user, res => {
      this.state.user = res.data.user
      this.state.authenticated = true
      successCb()
    }, error => {
      errorCb()
    })
  },
  signUp(user, successCb = null, errorCb = null) {
    http.post('signUp', user, res => {
      this.state.user = res.data.user
      this.state.authenticated = true
      successCb()
    }, error => {
      errorCb()
    });
  },
  // XXX:
  // コールバックのデフォルト値をnullにするとエラーがでる
  checkAuth(successCb = function (){}) {
    http.get('users', res => {
      const user = res.data.user
      if (user) {
        this.state.user = res.data.user
        this.state.authenticated = true
      } else {
        this.state.user = res.data.user
        this.state.authenticated = false
      }
      successCb();
    });
  },
  logout(successCb, errorCb = null) {
    http.get('logout', res => {
      localStorage.removeItem('jwt-token')
      this.state.user = null
      this.state.authenticated = false
      successCb()
    }, errorCb)
  },
  init() {
    this.checkAuth()
  }
}

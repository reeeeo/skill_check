<template>
  <div>

    <b-form @submit="login" class="col-6 mx-auto my-5 p-4 border rounded bg-whitesmoke">
      <b-form-group label="E-mail" label-for="login__emailForm">
        <b-form-input id="login__emailForm" type="email" v-model="loginForm.email" required placeholder="Enter your E-mail address"></b-form-input>
      </b-form-group>
      <b-form-group label="Password" label-for="login__passwordForm">
        <b-form-input id="login__passwordForm" type="password" v-model="loginForm.password" required placeholder="Enter your Password"></b-form-input>
      </b-form-group>
      <b-btn type="submit" variant="primary">ログイン</b-btn>
    </b-form>

    <hr class="hr-dashed">

    <b-form @submit="signUp" class="col-6 mx-auto my-5 p-4 border rounded bg-whitesmoke">
      <p class="my-1">登録はこちらから</p>
      <b-form-group label="Name" label-for="signUp__nameForm">
        <b-form-input id="signUp__nameForm" type="text" v-model="signUpForm.name" required placeholder="Enter you name"></b-form-input>
      </b-form-group>
      <b-form-group label="E-mail" label-for="signUp__emailForm">
        <b-form-input id="signUp__emailForm" type="email" v-model="signUpForm.email" required placeholder="Enter your E-mail address"></b-form-input>
      </b-form-group>
      <b-form-group label="Password" label-for="signUp__passwordForm">
        <b-form-input id="signUp__passwordForm" type="password" v-model="signUpForm.passwprd" required placeholder="Enter your Password"></b-form-input>
      </b-form-group>
      <b-btn type="submit" variant="outline-primary">新規登録</b-btn>
    </b-form>

  </div>
</template>
<script>
  import store from '../services/store'
  export default {
    created: function() {
      store.checkAuth(this.goNextPage)
    },
    data() {
      return {
        state: store.state,
        loginForm: {
          email: '',
          password: ''
        },
        signUpForm: {
          name: '',
          email: '',
          password: ''
        }
      }
    },
    methods: {
      login(e) {
        e.preventDefault()
        const user = {
          'email': this.loginForm.email,
          'password': this.loginForm.password
        }
        store.login(user, res => {
          store.checkAuth(this.goNextPage)
        }, error => {
          alert('Login Error')
        })
      },
      signUp(e) {
        e.preventDefault()
        const user = {
          'name': this.signUpForm.name,
          'email': this.signUpForm.email,
          'password': this.signUpForm.passwprd
        }
        store.signUp(user, res => {
          store.checkAuth(this.goNextPage)
        }, error => {
          alert('Sign Up Error')
        })
      },
      // XXX:
      // この処理はどこかに一括で管理したい
      goNextPage() {
        if (this.state.authenticated) {
          if (this.state.user.is_admin) {
            this.$router.push('/management')
          } else {
            this.$router.push('/top')
          }
        }
      }
    }
  }
</script>

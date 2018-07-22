<template>
  <div>
    <b-navbar toggleable="md" type="light" variant="light">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand to="/top">NexSeed</b-navbar-brand>
      <b-collapse v-if="state.authenticated && state.user.is_admin" is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item to="/management">全体数値</b-nav-item>
          <b-nav-item to="/user_management">ユーザー</b-nav-item>
          <b-nav-item to="/post_management">投稿</b-nav-item>
          <b-nav-item to="/like_management">いいね</b-nav-item>
          <b-nav-item to="/comment_management">コメント</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
      <b-navbar-nav v-if="state.authenticated" class="ml-auto">
        <b-nav-form>
          <b-btn size="sm" class="my-2 my-sm-0" type="submit" v-on:click="logout">ログアウト</b-btn>
        </b-nav-form>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>
<script>
  import store from '../services/store'
  export default {
    data() {
      return {
        state: store.state
      }
    },
    methods: {
      logout(e) {
        e.preventDefault()
        store.logout(res => {
          this.$router.push('/')
        })
      }
    }
  }
</script>

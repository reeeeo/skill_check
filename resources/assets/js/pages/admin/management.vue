<template>
  <div>
    <b-list-group class="col-8 mx-auto my-2">
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        ユーザー数
        <b-badge variant="primary" pill>{{ users.length }}</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        投稿数
        <b-badge variant="primary" pill>{{ posts.length }}</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        いいね数
        <b-badge variant="primary" pill>{{ likes.length }}</b-badge>
      </b-list-group-item>
      <b-list-group-item class="d-flex justify-content-between align-items-center">
        コメント数
        <b-badge variant="primary" pill>{{ comments.length }}</b-badge>
      </b-list-group-item>
    </b-list-group>
  </div>
</template>
<script>
  import store from '../../services/store'
  import http from '../../services/http'
  export default {
    created: function() {
      this.goNextPage()
      this.fetchUsers()
      this.fetchPosts()
      this.fetchLikes()
      this.fetchComments()
    },
    data() {
      return {
        state: store.state,
        users: [],
        posts: [],
        likes: [],
        comments: []
      }
    },
    methods: {
      fetchUsers() {
        http.get('fetch_users', res => {
          this.users  = res.data.users
        })
      },
      fetchPosts() {
        http.get('fetch_posts', res => {
          this.posts  = res.data.posts
        })
      },
      fetchLikes() {
        http.get('fetch_likes', res => {
          this.likes = res.data.likes
        })
      },
      fetchComments() {
        http.get('fetch_comments', res => {
          this.comments = res.data.comments
        })
      },
      goNextPage() {
        if (this.state.authenticated) {
          if (!this.state.user.is_admin) {
            this.$router.push('/top')
          }
        } else {
          this.$router.push('/')
        }
      }
    }
  }
</script>

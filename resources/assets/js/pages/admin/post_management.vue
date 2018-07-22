<template>
  <div>
    <b-table striped hover :items="posts" :fields="fields" class="mx-auto my-2" caption-top>
      <template slot="table-caption">
        Posts
      </template>
      <template slot="userName" slot-scope="data">
        {{ data.item.user.name }}
      </template>
      <template slot="actions" slot-scope="data">
        <b-btn size='sm' variant="danger" @click.stop="deletePost(data.item.id)">削除</b-btn>
      </template>
    </b-table>
  </div>
</template>
<script>
  import store from '../../services/store'
  import http from '../../services/http'
  export default {
    created: function() {
      this.goNextPage()
      this.fetchPosts()
    },
    data() {
      return {
        state: store.state,
        fields: {
          id: {
            label: 'ID',
            sortable: true
          },
          content: {
            label: '内容'
          },
          userName: {
            label: '投稿者',
            sortable: true
          },
          actions: {
            label: '操作'
          }
        },
        posts: []
      }
    },
    methods: {
      fetchPosts() {
        http.get('fetch_posts', res => {
          this.posts  = res.data.posts
        })
      },
      deletePost(postId) {
        http.delete('posts/' + postId, res => {
          this.fetchPosts()
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

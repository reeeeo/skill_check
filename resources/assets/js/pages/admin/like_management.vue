<template>
  <div>
    <b-table striped hover :items="likes" :fields="fields" class="mx-auto my-2" caption-top>
      <template slot="table-caption">
        Likes
      </template>
      <template slot="actions" slot-scope="data">
        <b-btn size='sm' variant="danger" @click.stop="deleteLike(data.item.id)">削除</b-btn>
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
      this.fetchLikes()
    },
    data() {
      return {
        state: store.state,
        fields: {
          id: {
            label: 'ID',
            sortable: true
          },
          post_id: {
            label: 'いいねされた記事',
            sortable: true
          },
          user_id: {
            label: 'いいねした人',
            sortable: true
          },
          actions: {
            label: '操作'
          }
        },
        likes: []
      }
    },
    methods: {
      fetchLikes() {
        http.get('fetch_likes', res => {
          this.likes = res.data.likes
        })
      },
      deleteLike(likeId) {
        http.delete('likes/' + likeId, res => {
          this.fetchLikes()
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

<template>
  <div>
    <b-table striped hover :items="comments" :fields="fields" class="mx-auto my-2" caption-top>
      <template slot="table-caption">
        Comments
      </template>
      <template slot="actions" slot-scope="data">
        <b-btn size='sm' variant="danger" @click.stop="deleteComment(data.item.id)">削除</b-btn>
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
      this.fetchComments()
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
            label: 'コメント先の記事',
            sortable: true
          },
          content: {
            label: '内容'
          },
          user_id: {
            label: '投稿者',
            sortable: true
          },
          created_at: {
            label: '投稿日',
            sortable: true
          },
          actions: {
            label: '操作'
          }
        },
        comments: []
      }
    },
    methods: {
      fetchComments() {
        http.get('fetch_comments', res => {
          this.comments = res.data.comments
        })
      },
      deleteComment(commentId) {
        http.delete('comments/' + commentId, res => {
          this.fetchComments()
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

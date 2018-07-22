<template>
  <div>
    <b-table striped hover :items="users" :fields="fields" class="mx-auto my-2" caption-top>
      <template slot="table-caption">
        Users
      </template>
      <template slot="actions" slot-scope="data">
        <b-btn v-if="data.item.id != state.user.id" size='sm' variant="danger" @click.stop="deleteUser(data.item.id)">削除</b-btn>
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
      this.fetchUsers()
    },
    data() {
      return {
        state: store.state,
        fields: {
          name: {
            label: '名前',
            sortable: true
          },
          email: {
            label: 'メールアドレス',
            sortable: true
          },
          is_admin: {
            label: '権限',
            sortable: true
          },
          created_at: {
            lable: '登録日',
            sortable: true
          },
          actions: {
            label: '操作'
          }
        },
        users: []
      }
    },
    methods: {
      fetchUsers() {
        http.get('fetch_users', res => {
          this.users  = res.data.users
        })
      },
      deleteUser(userId) {
        http.delete('users/' + userId, res => {
          this.fetchUsers()
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

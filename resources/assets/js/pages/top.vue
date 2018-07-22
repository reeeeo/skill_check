<template>
  <div>
    <b-form @submit="addPost" class="col-8 mx-auto my-3 bg-whitesmoke">
      <b-form-textarea id="textarea1" v-model="postForm.content" placeholder="What are you doing now?" :rows="3" :max-rows="6">
      </b-form-textarea>
      <div class="text-right my-2">
        <b-btn type="submit" variant="outline-primary">投稿</b-btn>
      </div>
    </b-form>

    <hr class="hr-dashed col-8 mx-auto">

    <div v-for="(post,index) in posts" :key="post.id">
        <b-card  class="col-8 mx-auto my-2 p-2 border text-left">
          <h4>{{ post.user.name }}</h4>
          <h6>{{ post.created_at }}</h6>
          <p class="card-text my-1">
            {{ post.content }}
          </p>

          <b-badge pill variant="primary">{{ post.likes.length }}</b-badge>
          <b-btn v-if="post.likes.map(function(el, idx, ary) { return el.user_id; }).indexOf(state.user.id) < 0" v-on:click="like(post.id, $event)" size="sm" type="submit" variant="primary">いいね!</b-btn>
          <b-btn v-if="post.likes.map(function(el, idx, ary) { return el.user_id; }).indexOf(state.user.id) >= 0" v-on:click="unlike(post.id, $event)" size="sm" type="submit" variant="outline-primary">いいね!</b-btn>

          <b-form @submit="addComment(post.id, $event)" class="my-2">
            <b-form-input v-bind:id="'comment_form__' + post.id" type="text" placeholder="add comment..."></b-form-input>
          </b-form>
          <b-list-group flush style="font-size: 0.8em;">
            <b-list-group-item v-for="(comment,index) in post.comments" :key="comment.id">{{ comment.content }}</b-list-group-item>
          </b-list-group>

        </b-card>
    </div>
  </div>
</template>
<script>
  import store from '../services/store'
  import http from '../services/http'
  export default {
    created: function() {
      this.goNextPage()
      this.fetchPosts()
    },
    data() {
      return {
        state: store.state,
        postForm: {
          content: ''
        },
        posts: []
      }
    },
    methods: {
      fetchPosts() {
        http.get('posts', res => {
          this.posts  = res.data.posts
        })
      },
      addPost(e) {
        e.preventDefault()
        const post = {
          'content': this.postForm.content
        }
        http.post('posts', post, res => {
          this.postForm.content = ''
          this.fetchPosts()
        })
      },
      addComment(postId, e) {
        e.preventDefault()
        // XXX:
        // 代替の方法が思い付かないので素のJavaScriptで対応。
        // v-modelを利用すると他のコメントフォームにまで影響してしまう。
        // v-bindは表示のみの単方向なので違う。
        const targetElm = 'comment_form__' + postId
        const comment = {
          'post_id': postId,
          'content': document.getElementById(targetElm).value
        }
        http.post('comments', comment, res => {
          this.fetchPosts()
          document.getElementById(targetElm).value = ''
        })
      },
      like(postId, e) {
        const like = {
          'post_id': postId
        }
        http.post('like', like, res => {
          this.fetchPosts()
        })
      },
      unlike(postId, e) {
        const unlike = {
          'post_id': postId
        }
        http.post('unlike', unlike, res => {
          this.fetchPosts()
        })
      },
      goNextPage() {
        if (!this.state.authenticated) {
          this.$router.push('/')
        }
      }
    }
  }
</script>

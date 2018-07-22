import index  from '../pages/index'
import top from '../pages/top'
import management from '../pages/admin/management'
import user_management from '../pages/admin/user_management'
import post_management from '../pages/admin/post_management'
import like_management from '../pages/admin/like_management'
import comment_management from '../pages/admin/comment_management'

export default [
  {path: '/',                   component: index},
  {path: '/top',                component: top},
  {path: '/management',         component: management},
  {path: '/user_management',    component: user_management},
  {path: '/post_management',    component: post_management},
  {path: '/like_management',    component: like_management},
  {path: '/comment_management', component: comment_management}
]

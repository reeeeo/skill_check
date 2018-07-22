# スキルチェック

## バージョン情報

  ```
  $ php -v
  PHP 7.2.1 (cli) (built: Jan  5 2018 17:34:14) ( NTS )
  Copyright (c) 1997-2017 The PHP Group
  Zend Engine v3.2.0, Copyright (c) 1998-2017 Zend Technologies
  ```

  ```
  $ php artisan --version
  Laravel Framework 5.6.28
  ```

  ```
  $ mysql --version
  mysql  Ver 14.14 Distrib 5.7.21, for osx10.13 (x86_64) using  EditLine wrapper
  ```

  ```
  "vue": "^2.5.7",
  ```

## 環境構築手順

1. Gitクローン
  ```
  git clone https://github.com/reeeeo/skill_check.git
  ```

1. ENVファイルの編集
  ```
  cp .env.sample .env
  ```
    生成された`.env`を自身の環境に合わせて修正

  ```
  vim .env
  ```

1. Composerインストール
  ```
  composer install
  ```

1. アプリケーションキーの発行
  ```
  php artisan key:generate
  ```

1. JWTAuth用キーの発行
  ```
  php artisan jwt:secret
  ```

1. DBを作成

  `.env`で設定したDB名と同じ名前のDBを作成
  ```
  /Applications/XAMPP/xamppfiles/bin/mysql -u{user_name} -p{password}
  ```

  ```
  CREATE DATABASE {任意のDB名}
  ```

1. マイグレーションの実行
  ```
  php artisan migrate:fresh
  ```

1. localhostにアクセス

    ログイン画面が表示されれば完了

1. 管理者の登録

    通常のユーザー登録を行なった後にDBから手動で`is_admin`を`1`に変更する  
    (パスワードをハッシュ化しているため直入力を避けています)

## プロジェクト構成
（**編集部分のみ抜粋**）
```
skill_check
|
+-- app
|   |
|   +-- Http
|   |   +-- Controllers
|   |   |   +-- CommentController.php
|   |   |   +-- Controller.php
|   |   |   +-- LikeController.php
|   |   |   +-- PostController.php
|   |   |   \-- UserController.php
|   |   \-- Kernel.php
|   |
|   \-- Models
|       +-- Comment.php
|       +-- Like.php
|       +-- Post.php
|       \-- User.php
|
+-- config
|   \-- app.php
|
+-- database
|   \-- migrations
|       +-- 2000_01_01_000000_create_comments_table.php
|       +-- 2000_01_01_000000_create_likes_table.php
|       +-- 2000_01_01_000000_create_posts_table.php
|       +-- 2000_01_01_000000_create_users_table.php
|       \-- 9999_12_31_235959_alter_tables.php
|
+-- docs
|   +-- 作業メモ
|   |   +-- 作業手順1-環境編.md
|   |   +-- 作業手順2-API編.md
|   |   +-- 作業手順3-一般画面編.md
|   |   +-- 作業手順4-管理画面編.md
|   |   +-- 作業手順5-仕上げ編.md
|   |   \-- 作業手順6-提出編.md
|   \-- er.puml
|
+-- public
|   \-- css
|       +-- layouts.css
|       \-- styles.css
|
+-- resources
|   +-- assets
|   |   \-- js
|   |       +-- components
|   |       |   \-- navbar.vue
|   |       +-- pages
|   |       |   +-- admin
|   |       |   |   +-- comment_management.vue
|   |       |   |   +-- like_management.vue
|   |       |   |   +-- management.vue
|   |       |   |   +-- post_management.vue
|   |       |   |   \-- user_management.vue
|   |       |   +-- index.vue
|   |       |   \-- top.vue
|   |       +-- services
|   |       |   +-- http.js
|   |       |   +-- router.js
|   |       |   +-- routes.js
|   |       |   \-- store.js
|   |       +-- app.js
|   |       +-- app.vue
|   |       \-- bootstrap.js
|   \-- views
|       \-- app.blade.php
|
+-- routes
|   +-- api.php
|   \-- web.php
|
+-- .env
+-- .env.example
+-- .gitignore
+-- composer.json
+-- package.json
\-- readme.md

```

## その他
<details>
<summary>開く</summary>
<div>
<h2>主に参考にした情報</h2>
<ul>
  <li><a href="https://laravel.com/docs/5.6/readme">Laravel</a></li>
  <li><a href="https://jp.vuejs.org/index.html">Vue.js</a></li>
  <li><a href="https://bootstrap-vue.js.org/docs/">bootstrap-vue</a></li>
  <li><a href="https://qiita.com/haxpig">自身のQiita</a></li>
</ul>
<h3>備考</h3>
<p>
  アプリケーション作成にあたって行った流れをdocs/作業メモ配下に残してあります。  
  何かの参考になれば。
</p>
<ul>
  <li><a href="https://github.com/reeeeo/skill_check/tree/master/docs/%E4%BD%9C%E6%A5%AD%E3%83%A1%E3%83%A2/作業手順1-環境編.md">環境構築編</a></li>
  <li><a href="https://github.com/reeeeo/skill_check/tree/master/docs/%E4%BD%9C%E6%A5%AD%E3%83%A1%E3%83%A2/作業手順2-API編.md">API編</a></li>
  <li><a href="https://github.com/reeeeo/skill_check/tree/master/docs/%E4%BD%9C%E6%A5%AD%E3%83%A1%E3%83%A2/作業手順3-一般画面編.md">一般画面編</a></li>
  <li><a href="https://github.com/reeeeo/skill_check/tree/master/docs/%E4%BD%9C%E6%A5%AD%E3%83%A1%E3%83%A2/作業手順4-管理画面編.md">管理画面編</a></li>
  <li><a href="https://github.com/reeeeo/skill_check/tree/master/docs/%E4%BD%9C%E6%A5%AD%E3%83%A1%E3%83%A2/作業手順5-仕上げ編.md">仕上げ編</a></li>
  <li><a href="https://github.com/reeeeo/skill_check/tree/master/docs/%E4%BD%9C%E6%A5%AD%E3%83%A1%E3%83%A2/作業手順6-提出編.md">提出編</a></li>
</div>
</details>

# スキルチェック

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
  アプリケーション作成にあたって行った流れを`docs/作業メモ`配下に残してあります。  
  何かの参考になれば。
</p>
<ul>
  <li><a href="作業手順1-環境編.md">環境構築編</a></li>
  <li><a href="作業手順2-API編.md">API編</a></li>
  <li><a href="作業手順3-一般画面編.md">一般画面編</a></li>
  <li><a href="作業手順4-管理画面編.md">管理画面編</a></li>
  <li><a href="作業手順5-仕上げ編.md">仕上げ編</a></li>
  <li><a href="作業手順6-提出編.md">提出編</a></li>
</div>
</details>

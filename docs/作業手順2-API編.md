# スキルチェック

## 作業手順 - API編
1. 各APIコントローラを作成
1. CRUD処理の作成
1. JWTAuthのインストール

---
## 各APIコントローラを作成

```
php artisan make:controller UserController --api
php artisan make:controller PostController --api
php artisan make:controller CommentController --api
```

---
## 基本CRUD処理の作成

  - 全件検索
  - 主キー検索
  - 登録
  - 更新
  - 削除

---

## その他の処理作成

  - ログイン及びログアウト
  - 管理者用API

など。

---

## JWTAuthのインストール

認証状態をAPIサーバ上で管理する。
[https://github.com/tymondesigns/jwt-auth](https://github.com/tymondesigns/jwt-auth)

### composerで導入

`composer require tymon/jwt-auth 1.0.0-rc2`

### 設定ファイルの編集

`config/app.php`を編集

providersに
`Tymon\JWTAuth\Providers\JWTAuthServiceProvider::class,`

aliasesに
`'JWTAuth' => Tymon\JWTAuth\Facades\JWTAuth::class,`
`'JWTFactory' => Tymon\JWTAuth\Facades\JWTFactory::class,`

を追記。

### パブリッシング

`php artisan vendor:publish --provider="Tymon\JWTAuth\Providers\JWTAuthServiceProvider"`

### 秘密鍵生成

`php artisan jwt:secret`

### Kernel.php

```
'jwt.auth' => \Tymon\JWTAuth\Middleware\GetUserFromToken::class,
'jwt.refresh' => \Tymon\JWTAuth\Middleware\RefreshToken::class,
```

---

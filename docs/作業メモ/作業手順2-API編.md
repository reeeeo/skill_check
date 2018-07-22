# スキルチェック

## 作業手順 - API編
1. モデルの編集
1. 各APIコントローラを作成
1. CRUD処理の作成
1. JWTAuthのインストール

---
## モデルの編集

### 論理削除の対応

```
use SoftDeletes;
protected $dates = ['deleted_at'];
```

各モデルに追記。

### リレーションの対応

```
belongsTo
belongsToMany
hasOne
hasMany
```

必要に応じて付与。

### カスケードの対応

```
protected static function boot() {
  parent::boot();
  static::deleting(function($親) {
    foreach ($親->子どもたち()->get() as $子ども) {
      $子ども->delete();
    }
  });
}
```

論理削除を伝播させるために追記。

---
## 各APIコントローラを作成

```
php artisan make:controller UserController --api
php artisan make:controller PostController --api
php artisan make:controller CommentController --api
php artisan make:controller LikeController --api
```

---
## 基本CRUD処理の実装

  - index:全件検索
  - show:主キー検索
  - store:登録
  - update:更新
  - destroy:削除

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

aliasesに

```
'JWTAuth' => Tymon\JWTAuth\Facades\JWTAuth::class,
'JWTFactory' => Tymon\JWTAuth\Facades\JWTFactory::class,
```

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

を追記。

---

[一般画面編](./作業手順3-一般画面編.md)へ

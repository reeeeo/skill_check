<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCommentsTable extends Migration {

  public function up() {
    Schema::create('comments', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table->text('content');
      $table->unsignedBigInteger('user_id');
      $table->unsignedBigInteger('post_id');
      $table->timestamps();
      $table->softDeletes();
    });
  }

  public function down() {
    Schema::dropIfExists('comments');
  }

}

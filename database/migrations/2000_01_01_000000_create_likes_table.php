<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLikesTable extends Migration {

  public function up() {
    Schema::create('likes', function (Blueprint $table) {
      $table->bigIncrements('id');
      $table->unsignedBigInteger('user_id');
      $table->unsignedBigInteger('post_id');
      $table->timestamps();
      $table->softDeletes();
    });
  }

  public function down() {
    Schema::dropIfExists('likes');
  }

}

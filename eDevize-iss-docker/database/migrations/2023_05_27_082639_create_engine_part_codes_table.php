<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('engine_part_codes', function (Blueprint $table) {
            $table->id();
            $table->foreignId('engine_id')->constrained('engines')->cascadeOnDelete();
            $table->foreignId('part_code_id')->constrained('part_codes')->cascadeOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('engine_part_codes');
    }
};

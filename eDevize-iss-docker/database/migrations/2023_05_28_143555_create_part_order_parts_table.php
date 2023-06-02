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
        Schema::create('part_order_parts', function (Blueprint $table) {
            $table->id();
            $table->foreignId('part_order_id')->constrained('part_orders');
            $table->foreignId('part_id')->constrained('parts');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('part_order_parts');
    }
};

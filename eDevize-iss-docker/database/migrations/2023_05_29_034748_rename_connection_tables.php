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
        Schema::rename('car_model_part_codes', 'car_model_part_code');
        Schema::rename('engine_part_codes', 'engine_part_code');
        Schema::rename('part_order_parts', 'part_order_part');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};

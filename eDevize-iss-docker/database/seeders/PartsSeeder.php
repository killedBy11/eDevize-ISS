<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class PartsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [];

        $categories[] = (\App\Models\PartCategory::create([
            'name' => 'Filters',
        ]));

        $categories[] = \App\Models\PartCategory::create([
            'name' => 'Brakes',
        ]);

        $categories[] = \App\Models\PartCategory::create([
            'name' => 'Suspension',
        ]);

        $categories[] = \App\Models\PartCategory::create([
            'name' => 'Engine',
        ]);

        $categories[] = \App\Models\PartCategory::create([
            'name' => 'Electrical',
        ]);

        $categories[] = \App\Models\PartCategory::create([
            'name' => 'Body',
        ]);

        $categories[] = \App\Models\PartCategory::create([
            'name' => 'Interior',
        ]);

        $categories[] = \App\Models\PartCategory::create([
            'name' => 'Exterior',
        ]);

        $categories[] = \App\Models\PartCategory::create([
            'name' => 'Wheels',
        ]);

        $categories[] = \App\Models\PartCategory::create([
            'name' => 'Tyres',
        ]);

        $categories[] = \App\Models\PartCategory::create([
            'name' => 'Miscellaneous',
        ]);

        foreach ($categories as $category) {
            \App\Models\PartCode::create([
                'part_code' => (string) rand(1000000, 9999999),
                'part_category_id' => $category->id,
            ]);
        }

        $car_models = \App\Models\CarModel::all();
        $engines  = \App\Models\Engine::all();

        foreach ($categories as $category) {
            $part_codes = \App\Models\PartCode::where('part_category_id', $category->id)->get();

            foreach ($part_codes as $part_code) {
                $part_code->carModels()->attach($car_models->random(rand(1, 5))->pluck('id')->toArray());
                $part_code->engines()->attach($engines->random(rand(1, 5))->pluck('id')->toArray());
            }
        }
    }
}

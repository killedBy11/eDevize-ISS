<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CarModelsAndEnginesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $audi = \App\Models\Brand::where('name', 'Audi')->first();
        $volkswagen = \App\Models\Brand::where('name', 'Volkswagen')->first();
        $skoda = \App\Models\Brand::where('name', 'Skoda')->first();
        $seat = \App\Models\Brand::where('name', 'Seat')->first();

        $audi->carModels()->create([
            'name' => 'A1 8X',
            'start_year' => 2010,
            'end_year' => 2018,
        ]);

        $audi->carModels()->create([
            'name' => 'A2',
            'start_year' => 1999,
            'end_year' => 2005,
        ]);

        $audi->carModels()->create([
            'name' => 'A3 8L',
            'start_year' => 1996,
            'end_year' => 2003,
        ]);

        $audi->carModels()->create([
            'name' => 'A4 B5',
            'start_year' => 1994,
            'end_year' => 2001,
        ]);

        $audi->carModels()->create([
            'name' => 'A4 B6',
            'start_year' => 2000,
            'end_year' => 2004,
        ]);

        $audi->carModels()->create([
            'name' => 'A4 B7',
            'start_year' => 2004,
            'end_year' => 2008,
        ]);

        $audi->carModels()->create([
            'name' => 'A4 B8',
            'start_year' => 2007,
            'end_year' => 2015,
        ]);

        $audi->carModels()->create([
            'name' => 'A4 B9',
            'start_year' => 2015,
            'end_year' => 2020,
        ]);

        $audi->carModels()->create([
            'name' => 'A5 B8',
            'start_year' => 2007,
            'end_year' => 2016,
        ]);

        $audi->carModels()->create([
            'name' => 'A5 B9',
            'start_year' => 2016,
            'end_year' => 2020,
        ]);

        $volkswagen->carModels()->create([
            'name' => 'Golf 1',
            'start_year' => 1974,
            'end_year' => 1983,
        ]);

        $volkswagen->carModels()->create([
            'name' => 'Golf 2',
            'start_year' => 1983,
            'end_year' => 1992,
        ]);

        $volkswagen->carModels()->create([
            'name' => 'Golf 3',
            'start_year' => 1991,
            'end_year' => 1997,
        ]);

        $volkswagen->carModels()->create([
            'name' => 'Golf 4',
            'start_year' => 1997,
            'end_year' => 2003,
        ]);

        $volkswagen->carModels()->create([
            'name' => 'Golf 5',
            'start_year' => 2003,
            'end_year' => 2008,
        ]);

        $volkswagen->carModels()->create([
            'name' => 'Golf 6',
            'start_year' => 2008,
            'end_year' => 2012,
        ]);

        $volkswagen->carModels()->create([
            'name' => 'Golf 7',
            'start_year' => 2012,
            'end_year' => 2020,
        ]);

        $volkswagen->carModels()->create([
            'name' => 'Passat B3',
            'start_year' => 1988,
            'end_year' => 1993,
        ]);

        $volkswagen->carModels()->create([
            'name' => 'Passat B4',
            'start_year' => 1993,
            'end_year' => 1997,
        ]);

        $volkswagen->carModels()->create([
            'name' => 'Passat B5',
            'start_year' => 1996,
            'end_year' => 2005,
        ]);

        $volkswagen->carModels()->create([
            'name' => 'Passat B6',
            'start_year' => 2005,
            'end_year' => 2010,
        ]);

        $volkswagen->carModels()->create([
            'name' => 'Passat B7',
            'start_year' => 2010,
            'end_year' => 2015,
        ]);

        $volkswagen->carModels()->create([
            'name' => 'Passat B8',
            'start_year' => 2014,
            'end_year' => 2020,
        ]);

        $skoda->carModels()->create([
            'name' => 'Octavia 1',
            'start_year' => 1996,
            'end_year' => 2010,
        ]);

        $skoda->carModels()->create([
            'name' => 'Octavia 2',
            'start_year' => 2004,
            'end_year' => 2013,
        ]);

        $skoda->carModels()->create([
            'name' => 'Octavia 3',
            'start_year' => 2012,
            'end_year' => 2020,
        ]);

        $skoda->carModels()->create([
            'name' => 'Fabia 1',
            'start_year' => 1999,
            'end_year' => 2007,
        ]);

        $skoda->carModels()->create([
            'name' => 'Fabia 2',
            'start_year' => 2007,
            'end_year' => 2014,
        ]);

        $skoda->carModels()->create([
            'name' => 'Fabia 3',
            'start_year' => 2014,
            'end_year' => 2020,
        ]);

        $skoda->carModels()->create([
            'name' => 'Superb 1',
            'start_year' => 2001,
            'end_year' => 2008,
        ]);

        $skoda->carModels()->create([
            'name' => 'Superb 2',
            'start_year' => 2008,
            'end_year' => 2015,
        ]);

        $skoda->carModels()->create([
            'name' => 'Superb 3',
            'start_year' => 2015,
            'end_year' => 2020,
        ]);

        $skoda->carModels()->create([
            'name' => 'Rapid 1',
            'start_year' => 2011,
            'end_year' => 2019,
        ]);

        $skoda->carModels()->create([
            'name' => 'Rapid 2',
            'start_year' => 2019,
            'end_year' => 2020,
        ]);

        $seat->carModels()->create([
            'name' => 'Leon 1',
            'start_year' => 1999,
            'end_year' => 2005,
        ]);

        $seat->carModels()->create([
            'name' => 'Leon 2',
            'start_year' => 2005,
            'end_year' => 2012,
        ]);

        $seat->carModels()->create([
            'name' => 'Leon 3',
            'start_year' => 2012,
            'end_year' => 2020,
        ]);

        $seat->carModels()->create([
            'name' => 'Ibiza 3',
            'start_year' => 2002,
            'end_year' => 2008,
        ]);

        $seat->carModels()->create([
            'name' => 'Ibiza 4',
            'start_year' => 2008,
            'end_year' => 2017,
        ]);

        $seat->carModels()->create([
            'name' => 'Ibiza 5',
            'start_year' => 2017,
            'end_year' => 2020,
        ]);

        $seat->carModels()->create([
            'name' => 'Alhambra 1',
            'start_year' => 1996,
            'end_year' => 2010,
        ]);

        $seat->carModels()->create([
            'name' => 'Alhambra 2',
            'start_year' => 2010,
            'end_year' => 2020,
        ]);

        $seat->carModels()->create([
            'name' => 'Toledo 2',
            'start_year' => 1998,
            'end_year' => 2004,
        ]);

        $seat->carModels()->create([
            'name' => 'Toledo 3',
            'start_year' => 2004,
            'end_year' => 2009,
        ]);

        $seat->carModels()->create([
            'name' => 'Toledo 4',
            'start_year' => 2012,
            'end_year' => 2020,
        ]);

        $seat->carModels()->create([
            'name' => 'Arosa',
            'start_year' => 1997,
            'end_year' => 2004,
        ]);

        $seat->carModels()->create([
            'name' => 'Altea',
            'start_year' => 2004,
            'end_year' => 2015,
        ]);

        \App\Models\Engine::create([
            'engine_code' => '1.6 MPI BSE',
            'fuel' => 'petrol',
            'power' => 102,
            'displacement' => 1600,
            'brand_id' => $volkswagen->id,
        ]);

        \App\Models\Engine::create([
            'engine_code' => '1.8T AWT',
            'fuel' => 'petrol',
            'power' => 150,
            'displacement' => 1800,
            'brand_id' => $audi->id,
        ]);

        \App\Models\Engine::create([
            'engine_code' => '1.9 TDI ATD',
            'fuel' => 'diesel',
            'power' => 101,
            'displacement' => 1900,
            'brand_id' => $volkswagen->id,
        ]);

        \App\Models\Engine::create([
            'engine_code' => '1.9 TDI BXE',
            'fuel' => 'diesel',
            'power' => 105,
            'displacement' => 1900,
            'brand_id' => $volkswagen->id,
        ]);

        \App\Models\Engine::create([
            'engine_code' => '1.9 TDI BKC',
            'fuel' => 'diesel',
            'power' => 105,
            'displacement' => 1900,
            'brand_id' => $volkswagen->id,
        ]);

        \App\Models\Engine::create([
            'engine_code' => '1.9 TDI BLS',
            'fuel' => 'diesel',
            'power' => 105,
            'displacement' => 1900,
            'brand_id' => $volkswagen->id,
        ]);

        \App\Models\Engine::create([
            'engine_code' => '1.9 TDI BXF',
            'fuel' => 'diesel',
            'power' => 105,
            'displacement' => 1900,
            'brand_id' => $volkswagen->id,
        ]);

        \App\Models\Engine::create([
            'engine_code' => '1.9 TDI BLS',
            'fuel' => 'diesel',
            'power' => 105,
            'displacement' => 1900,
            'brand_id' => $volkswagen->id,
        ]);

        \App\Models\Engine::create([
            'engine_code' => '2.0 TDI BKD',
            'fuel' => 'diesel',
            'power' => 140,
            'displacement' => 2000,
            'brand_id' => $volkswagen->id,
        ]);

        \App\Models\Engine::create([
            'engine_code' => '2.0 TDI BMM',
            'fuel' => 'diesel',
            'power' => 140,
            'displacement' => 2000,
            'brand_id' => $volkswagen->id,
        ]);

        \App\Models\Engine::create([
            'engine_code' => '2.0 TDI BMN',
            'fuel' => 'diesel',
            'power' => 170,
            'displacement' => 2000,
            'brand_id' => $volkswagen->id,
        ]);

        \App\Models\Engine::create([
            'engine_code' => '2.0 TDI BMR',
            'fuel' => 'diesel',
            'power' => 170,
            'displacement' => 2000,
            'brand_id' => $volkswagen->id,
        ]);

        \App\Models\Engine::create([
            'engine_code' => '2.0 TDI BVD',
            'fuel' => 'diesel',
            'power' => 170,
            'displacement' => 2000,
            'brand_id' => $volkswagen->id,
        ]);

        \App\Models\Engine::create([
            'engine_code' => '2.0 TDI BVE',
            'fuel' => 'diesel',
            'power' => 170,
            'displacement' => 2000,
            'brand_id' => $volkswagen->id,
        ]);

        \App\Models\Engine::create([
            'engine_code' => '2.0 TDI BKP',
            'fuel' => 'diesel',
            'power' => 170,
            'displacement' => 2000,
            'brand_id' => $volkswagen->id,
        ]);

        \App\Models\Engine::create([
            'engine_code' => '2.0 TDI BMA',
            'fuel' => 'diesel',
            'power' => 170,
            'displacement' => 2000,
            'brand_id' => $audi->id,
        ]);

        \App\Models\Engine::create([
            'engine_code' => '2.0 TDI BMR',
            'fuel' => 'diesel',
            'power' => 170,
            'displacement' => 2000,
            'brand_id' => $audi->id,
        ]);

        \App\Models\Engine::create([
            'engine_code' => '2.0 TDI BVE',
            'fuel' => 'diesel',
            'power' => 170,
            'displacement' => 2000,
            'brand_id' => $audi->id,
        ]);

        \App\Models\Engine::create([
            'engine_code' => '2.0 TDI BKP',
            'fuel' => 'diesel',
            'power' => 170,
            'displacement' => 2000,
            'brand_id' => $audi->id,
        ]);

        \App\Models\Engine::create([
            'engine_code' => '2.0 TDI BMA',
            'fuel' => 'diesel',
            'power' => 170,
            'displacement' => 2000,
            'brand_id' => $audi->id,
        ]);

        \App\Models\Engine::create([
            'engine_code' => '2.0 TDI BMR',
            'fuel' => 'diesel',
            'power' => 170,
            'displacement' => 2000,
            'brand_id' => $audi->id,
        ]);

        \App\Models\Engine::create([
            'engine_code' => '2.0 TDI BVE',
            'fuel' => 'diesel',
            'power' => 170,
            'displacement' => 2000,
            'brand_id' => $audi->id,
        ]);

        \App\Models\Engine::create([
            'engine_code' => '2.0 TDI BKP',
            'fuel' => 'diesel',
            'power' => 170,
            'displacement' => 2000,
            'brand_id' => $audi->id,
        ]);


        \App\Models\Engine::create([
            'engine_code' => '2.7 TDI BPP',
            'fuel' => 'diesel',
            'power' => 180,
            'displacement' => 2700,
            'brand_id' => $audi->id,
        ]);

        \App\Models\Engine::create([
            'engine_code' => '3.0 TDI ASB',
            'fuel' => 'diesel',
            'power' => 204,
            'displacement' => 3000,
            'brand_id' => $audi->id,
        ]);

        \App\Models\Engine::create([
            'engine_code' => '3.0 TDI BMK',
            'fuel' => 'diesel',
            'power' => 204,
            'displacement' => 3000,
            'brand_id' => $audi->id,
        ]);

        \App\Models\Engine::create([
            'engine_code' => '1.9 TDI ALH',
            'fuel' => 'diesel',
            'power' => 90,
            'displacement' => 1900,
            'brand_id' => $skoda->id,
        ]);

        \App\Models\Engine::create([
            'engine_code' => '1.9 TDI ATD',
            'fuel' => 'diesel',
            'power' => 100,
            'displacement' => 1900,
            'brand_id' => $skoda->id,
        ]);

        \App\Models\Engine::create([
            'engine_code' => '1.9 TDI AXR',
            'fuel' => 'diesel',
            'power' => 105,
            'displacement' => 1900,
            'brand_id' => $skoda->id,
        ]);

        \App\Models\Engine::create([
            'engine_code' => '1.9 TDI BJB',
            'fuel' => 'diesel',
            'power' => 105,
            'displacement' => 1900,
            'brand_id' => $skoda->id,
        ]);

        \App\Models\Engine::create([
            'engine_code' => '1.9 TDI BKC',
            'fuel' => 'diesel',
            'power' => 105,
            'displacement' => 1900,
            'brand_id' => $skoda->id,
        ]);

        \App\Models\Engine::create([
            'engine_code' => '1.9 TDI ALH',
            'fuel' => 'diesel',
            'power' => 90,
            'displacement' => 1900,
            'brand_id' => $seat->id,
        ]);

        \App\Models\Engine::create([
            'engine_code' => '1.9 TDI ATD',
            'fuel' => 'diesel',
            'power' => 100,
            'displacement' => 1900,
            'brand_id' => $seat->id,
        ]);

        \App\Models\Engine::create([
            'engine_code' => '1.9 TDI AXR',
            'fuel' => 'diesel',
            'power' => 105,
            'displacement' => 1900,
            'brand_id' => $seat->id,
        ]);

        \App\Models\Engine::create([
            'engine_code' => '1.9 TDI BJB',
            'fuel' => 'diesel',
            'power' => 105,
            'displacement' => 1900,
            'brand_id' => $seat->id,
        ]);

        \App\Models\Engine::create([
            'engine_code' => '1.9 TDI BKC',
            'fuel' => 'diesel',
            'power' => 105,
            'displacement' => 1900,
            'brand_id' => $seat->id,
        ]);
    }
}

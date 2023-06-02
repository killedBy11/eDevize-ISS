<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\Models\CarModel;
use App\Models\Customer;
use App\Models\Engine;
use App\Models\Vehicle;
use Illuminate\Http\Request;
use Inertia\Inertia;

class VehicleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $vehicles = Vehicle::paginate(25);
        $engines = $vehicles->pluck('Engine')->unique();
        $models = $vehicles->pluck('CarModel')->unique();
        $makes = $models->pluck('Brand')->unique();
        return Inertia::render('Vehicles/VehicleList', [
            'vehicles' => $vehicles,
            'engines' => $engines->values(),
            'models' => $models->values(),
            'makes' => $makes->values(),
        ]);
    }

    public function getOfCustomer(Request $request)
    {
        $customer = Customer::find($request['customer_id']);
        $vehicles = Vehicle::where('customer_id', $customer ? $customer->id : null)
                ->paginate(25);

        $engines = $vehicles->pluck('Engine')->unique();
        $models = $vehicles->pluck('CarModel')->unique();
        $makes = $models->pluck('Brand')->unique();
        return Inertia::render('Vehicles/VehicleList', [
            'vehicles' => $vehicles,
            'engines' => $engines->values(),
            'models' => $models->values(),
            'makes' => $makes->values(),
        ]);
    }

    public function getFiltered(Request $request)
    {
        $brand = Brand::where('name', 'like', '%' . $request['make'] . '%')->first();
        $model = null;
        if ($brand) {
            $model = $brand->carModels()->where('name', 'like', '%' . $request['model'] . '%')->first();
        }

        $vehicles = null;
        if ($model != null) {
            $vehicles = Vehicle::where('registration_plate', 'like', '%' . $request['registration_plate'] . '%')
                ->where('vin', 'like', '%' . $request['vin'] . '%')
                ->where('car_model_id', $model ? $model->id : null)
                ->paginate(25);
        } else if ($brand != null) {
            $vehicles = $brand->carModels()->vehicles()->where('registration_plate', 'like', '%' . $request['registration_plate'] . '%')
                ->where('vin', 'like', '%' . $request['vin'] . '%')
                ->paginate(25);
        } else {
            $vehicles = Vehicle::where('registration_plate', 'like', '%' . $request['registration_plate'] . '%')
                ->where('vin', 'like', '%' . $request['vin'] . '%')
                ->paginate(25);
        }

        $engines = $vehicles->pluck('Engine')->unique();
        $models = $vehicles->pluck('CarModel')->unique();
        $makes = $models->pluck('Brand')->unique();
        return Inertia::render('Vehicles/VehicleList', [
            'vehicles' => $vehicles,
            'engines' => $engines->values(),
            'models' => $models->values(),
            'makes' => $makes->values(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(Request $request)
    {
        $customer = Customer::find($request->id);
        $makes = Brand::all();
        $models = CarModel::all();
        $engines = Engine::all();
        return Inertia::render('Vehicles/VehicleEdit', [
            'customer' => $customer,
            'makes' => $makes,
            'models' => $models,
            'engines' => $engines,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'registration_plate' => 'required|string|max:255|unique:vehicles',
            'vin' => 'required|string|max:20',
            'model_year' => 'required|integer|min:1900|max:2021',
        ]);
        $brand = Brand::find($request->make);
        $model = CarModel::find($request->model);
        $engine = Engine::find($request->engine);
        $customer = Customer::find($request->customer);

        if ($brand == null || $model == null || $engine == null || $customer == null) {
            return redirect()->back()->with('error', 'Something went wrong!');
        }

        $vehicle = Vehicle::make([
            'registration_plate' => $request->registration_plate,
            'vin' => $request->vin,
            'model_year' => $request->model_year,
        ]);
        $vehicle->carModel()->associate($model);
        $vehicle->engine()->associate($engine);
        $vehicle->customer()->associate($customer);
        $vehicle->save();
    }

    /**
     * Display the specified resource.
     */
    public function show(Vehicle $vehicle)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, Vehicle $vehicle)
    {
        $vehicle = Vehicle::find($request->id);
        $customer = $vehicle->customer;
        $makes = Brand::all();
        $models = CarModel::all();
        $engines = Engine::all();
        return Inertia::render('Vehicles/VehicleEdit', [
            'customer' => $customer,
            'makes' => $makes,
            'models' => $models,
            'engines' => $engines,
            'vehicle' => $vehicle,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Vehicle $vehicle)
    {
        $request->validate([
            'registration_plate' => 'required|string|max:255',
            'vin' => 'required|string|max:20',
            'model_year' => 'required|integer|min:1900|max:2021',
        ]);

        $other = Vehicle::where('registration_plate', $request->registration_plate)
            ->where('id', '!=', $request->id)
            ->first();

        if ($other) {
            return redirect()->back()->with('error', 'Registration plate already exists!');
        }

        $brand = Brand::find($request->make);
        $model = CarModel::find($request->model);
        $engine = Engine::find($request->engine);
        $customer = Customer::find($request->customer);

        if ($brand == null || $model == null || $engine == null || $customer == null) {
            return redirect()->back()->with('error', 'Something went wrong!');
        }


        $vehicle = Vehicle::find($request->id);
        $vehicle->carModel()->associate($model);
        $vehicle->engine()->associate($engine);
        $vehicle->customer()->associate($customer);
        $vehicle->update([
            'registration_plate' => $request->registration_plate,
            'vin' => $request->vin,
            'model_year' => $request->model_year,
        ]);

        return redirect()->back()->with('success', 'Vehicle updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Vehicle $vehicle)
    {
        //
    }
}

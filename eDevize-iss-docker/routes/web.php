<?php

use App\Http\Controllers\AppointmentController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\VehicleController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
//        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', 'customers-permissions'])->group(function () {
    Route::get('/customers', [CustomerController::class, 'index'])->name('customers');
    Route::post('/customers', [CustomerController::class, 'getFiltered'])->name('customers.filtered');
    Route::get('/add-customer', [CustomerController::class, 'create'])->name('customers.create');
    Route::post('/add-customer', [CustomerController::class, 'store'])->name('customers.create');
    Route::get('/customers/{id}', [CustomerController::class, 'edit'])->name('customers.update');
    Route::put('/customers/{id}', [CustomerController::class, 'update'])->name('customers.update');

    Route::get('/vehicles', [VehicleController::class, 'index'])->name('vehicles');
    Route::get('/customers/{customer_id}/vehicles/', [VehicleController::class, 'getOfCustomer'])->name('customers.vehicles');
    Route::post('/vehicles/', [VehicleController::class, 'getFiltered'])->name('vehicles.filtered');
    Route::get('/add-vehicle', [VehicleController::class, 'create'])->name('vehicles.create');
    Route::post('/add-vehicle', [VehicleController::class, 'store'])->name('vehicles.create');
    Route::get('/vehicles/{id}', [VehicleController::class, 'edit'])->name('vehicles.update');
    Route::put('/vehicles/{id}', [VehicleController::class, 'update'])->name('vehicles.update');

    Route::get('/appointments', [AppointmentController::class, 'index'])->name('appointments');
    Route::post('/appointments', [AppointmentController::class, 'getFiltered'])->name('appointments.filtered');
    Route::get('/add-appointment', [AppointmentController::class, 'create'])->name('appointments.create');
    Route::post('/add-appointment', [AppointmentController::class, 'store'])->name('appointments.create');
});


require __DIR__ . '/auth.php';

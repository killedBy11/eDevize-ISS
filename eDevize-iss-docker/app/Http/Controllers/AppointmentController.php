<?php

namespace App\Http\Controllers;

use App\Models\Appointment;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AppointmentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $appointments = Appointment::paginate(25);
        $vehicles = $appointments->pluck('Vehicle')->unique();
        return Inertia::render('Appointments/AppointmentsList', [
            'appointments' => $appointments,
            'vehicles' => $vehicles->values(),
        ]);
    }

    public function getFiltered(Request $request)
    {
        $when = $request['date_time'];
        $appointments = Appointment::where('when', 'like', '%' . $when . '%')
            ->paginate(25);
        $vehicles = $appointments->pluck('Vehicle')->unique();

        return Inertia::render('Appointments/AppointmentsList', [
            'appointments' => $appointments,
            'vehicles' => $vehicles->values(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Appointments/AppointmentsCreate');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Appointment $appointment)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Appointment $appointment)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Appointment $appointment)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Appointment $appointment)
    {
        //
    }
}

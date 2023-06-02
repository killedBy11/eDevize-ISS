<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CustomerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $customers = Customer::paginate(25);

        return Inertia::render('Customers/CustomerList', [
            'customers' => $customers,
        ]);
    }

    public function getFiltered(Request $request)
    {
        $customers = Customer::where('name', 'like', '%' . $request['name'] . '%')
            ->where('email', 'like', '%' . $request['email'] . '%')
            ->where('phone', 'like', '%' . $request['phone'] . '%')
            ->where('address', 'like', '%' . $request['address'] . '%')
            ->paginate(25);

        return Inertia::render('Customers/CustomerList', [
            'customers' => $customers,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Customers/CustomerEdit');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'surname' => 'required|string|max:255',
            'personal_id' => 'required|digits:13|unique:' . Customer::class,
            'phone' => 'required|digits:10',
            'address' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:' . Customer::class,
        ]);

        Customer::create([
            'name' => $request->name,
            'surname' => $request->surname,
            'personal_id' => $request->personal_id,
            'phone' => $request->phone,
            'address' => $request->address,
            'email' => $request->email,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $customer = Customer::find($id);
        return Inertia::render('Customers/CustomerEdit', [
            'customer' => $customer,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Customer $customer)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'surname' => 'required|string|max:255',
            'personal_id' => 'required|digits:13',
            'phone' => 'required|digits:10',
            'address' => 'required|string|max:255',
            'email' => 'required|string|email|max:255',
        ]);

        $inUse = Customer::where('email', $request->email)->where('id', '!=', $request->id)->first();
        if ($inUse) {
            return back()->withErrors([
                'email' => 'Email is already in use.',
            ]);
        }

        Customer::find($request->id)->update([
            'name' => $request->name,
            'surname' => $request->surname,
            'personal_id' => $request->personal_id,
            'phone' => $request->phone,
            'address' => $request->address,
            'email' => $request->email,
        ]);

        return Inertia::render('Customers/CustomerEdit', [
            'customer' => $customer,
        ]);
    }
}

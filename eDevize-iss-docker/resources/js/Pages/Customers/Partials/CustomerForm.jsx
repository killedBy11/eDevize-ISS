import {Head, usePage, Link, useForm} from '@inertiajs/react';
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";

export default function FilterCustomersForm({className, customer}) {
    const {data, setData, post, processing, errors, reset, put, get} = useForm({
        email: customer === undefined ? '' : customer.email,
        name: customer === undefined ? '' : customer.name,
        surname: customer === undefined ? '' : customer.surname,
        phone: customer === undefined ? '' : customer.phone,
        personal_id: customer === undefined ? '' : customer.personal_id,
        address: customer === undefined ? '' : customer.address,
    });
    const submit = (e) => {
        e.preventDefault();

        if (customer !== undefined) {
            put(route('customers.update', customer));
        } else {
            post(route('customers.create'));
        }
    }

    const viewVehicles = (e) => {
        e.preventDefault();

        get(route('customers.vehicles', customer.id));
    }

    const addVehicle = (e) => {
        e.preventDefault();

        get(route('vehicles.create', customer));
    }

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Filter Information</h2>
            </header>
            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="name" value="Name"/>

                    <TextInput
                        id="name"
                        type="text"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                    />

                    <InputError message={errors.name} className="mt-2"/>
                </div>

                <div>
                    <InputLabel htmlFor="surname" value="Surname"/>

                    <TextInput
                        id="surname"
                        type="text"
                        name="surname"
                        value={data.surname}
                        className="mt-1 block w-full"
                        autoComplete="surname"
                        isFocused={true}
                        onChange={(e) => setData('surname', e.target.value)}
                    />

                    <InputError message={errors.surname} className="mt-2"/>
                </div>

                <div>
                    <InputLabel htmlFor="email" value="Email"/>

                    <TextInput
                        id="email"
                        type="text"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="email"
                        isFocused={true}
                        onChange={(e) => setData('email', e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2"/>
                </div>

                <div>
                    <InputLabel htmlFor="phone" value="Phone"/>

                    <TextInput
                        id="phone"
                        type="text"
                        name="phone"
                        value={data.phone}
                        className="mt-1 block w-full"
                        autoComplete="phone"
                        isFocused={true}
                        onChange={(e) => setData('phone', e.target.value)}
                    />

                    <InputError message={errors.phone} className="mt-2"/>
                </div>

                <div>
                    <InputLabel htmlFor="personal_id" value="Personal ID"/>

                    <TextInput
                        id="personal_id"
                        type="text"
                        name="personal_id"
                        value={data.personal_id}
                        className="mt-1 block w-full"
                        autoComplete="personal_id"
                        isFocused={true}
                        onChange={(e) => setData('personal_id', e.target.value)}
                    />

                    <InputError message={errors.personal_id} className="mt-2"/>
                </div>

                <div>
                    <InputLabel htmlFor="address" value="Address"/>

                    <TextInput
                        id="address"
                        type="text"
                        name="address"
                        value={data.address}
                        className="mt-1 block w-full"
                        autoComplete="address"
                        isFocused={true}
                        onChange={(e) => setData('address', e.target.value)}
                    />

                    <InputError message={errors.address} className="mt-2"/>
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>
                    {customer !== undefined ?
                        <PrimaryButton onClick={viewVehicles}>View vehicles</PrimaryButton> : null}
                    {customer !== undefined ?
                        <PrimaryButton onClick={addVehicle}>Add vehicle</PrimaryButton> : null}
                </div>
            </form>
        </section>
    );
}

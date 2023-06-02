import {Head, usePage, Link, useForm} from '@inertiajs/react';
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";

export default function FilterVehiclesForm({className}) {
    const {data, setData, post, processing, errors, reset} = useForm({
        registration_plate: '', vin: '', make: '', model: '',
    });
    const search = (e) => {
        e.preventDefault();

        post(route('vehicles.filtered', data));
    }

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Filter Information</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Fill in fields to search for vehicles.
                </p>
            </header>
            <form onSubmit={search} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="registration_plate" value="Registration plate"/>

                    <TextInput
                        id="registration_plate"
                        type="text"
                        name="registration_plate"
                        value={data.registration_plate}
                        className="mt-1 block w-full"
                        autoComplete="registration_plate"
                        isFocused={true}
                        onChange={(e) => setData('registration_plate', e.target.value)}
                    />

                    <InputError message={errors.registration_plate} className="mt-2"/>
                </div>

                <div>
                    <InputLabel htmlFor="vin" value="VIN"/>

                    <TextInput
                        id="vin"
                        type="text"
                        name="vin"
                        value={data.vin}
                        className="mt-1 block w-full"
                        autoComplete="vin"
                        isFocused={true}
                        onChange={(e) => setData('vin', e.target.value)}
                    />

                    <InputError message={errors.vin} className="mt-2"/>
                </div>

                <div>
                    <InputLabel htmlFor="make" value="Make"/>

                    <TextInput
                        id="make"
                        type="text"
                        name="make"
                        value={data.make}
                        className="mt-1 block w-full"
                        autoComplete="make"
                        isFocused={true}
                        onChange={(e) => setData('make', e.target.value)}
                    />

                    <InputError message={errors.make} className="mt-2"/>
                </div>

                <div>
                    <InputLabel htmlFor="model" value="Model"/>

                    <TextInput
                        id="model"
                        type="text"
                        name="model"
                        value={data.model}
                        className="mt-1 block w-full"
                        autoComplete="model"
                        isFocused={true}
                        onChange={(e) => setData('model', e.target.value)}
                    />

                    <InputError message={errors.model} className="mt-2"/>
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Filter</PrimaryButton>
                </div>
            </form>
        </section>
    );
}

import {Head, usePage, Link, useForm} from '@inertiajs/react';
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";

export default function AppointmentForm({className, customer}) {
    const {data, setData, post, processing, errors, reset, put, get} = useForm({
        date: '',
        time: '',
    });
    const submit = (e) => {
        e.preventDefault();

        post(route('appointments.create'));
    }

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Add appointment</h2>
            </header>
            <form onSubmit={submit} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="date" value="Date and time"/>

                    <TextInput
                        id="date"
                        type="date"
                        name="date"
                        value={data.date_time}
                        className="mt-1 block w-full"
                        autoComplete="date"
                        isFocused={true}
                        onChange={(e) => setData('date', e.target.value)}
                    />

                    <TextInput
                        id="time"
                        type="time"
                        name="time"
                        value={data.date_time}
                        className="mt-1 block w-full"
                        autoComplete="time"
                        isFocused={true}
                        onChange={(e) => setData('time', e.target.value)}
                    />

                    <InputError message={errors.time} className="mt-2"/>
                    <InputError message={errors.date} className="mt-2"/>
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

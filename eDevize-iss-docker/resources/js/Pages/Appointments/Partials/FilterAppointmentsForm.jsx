import {Head, usePage, Link, useForm} from '@inertiajs/react';
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";

export default function FilterAppointmentsForm({className}) {
    const {data, setData, post, processing, errors, reset} = useForm({
        date_time: '',
    });
    const search = (e) => {
        e.preventDefault();

        post(route('appointments.filtered', data));
    }

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Filter Appintments</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Fill in fields to search for appointments.
                </p>
            </header>
            <form onSubmit={search} className="mt-6 space-y-6">
                <div>
                    <InputLabel htmlFor="date_time" value="Name"/>

                    <TextInput
                        id="date_time"
                        type="date"
                        name="date_time"
                        value={data.date_time}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('date_time', e.target.value)}
                    />

                    <InputError message={errors.date_time} className="mt-2"/>
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Filter</PrimaryButton>
                </div>
            </form>
        </section>
    );
}

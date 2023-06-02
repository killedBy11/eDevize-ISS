import {Head, usePage, Link, useForm} from '@inertiajs/react';
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";

export default function FilterCustomersForm({className}) {
    const {data, setData, post, processing, errors, reset} = useForm({
        email: '', name: '', surname: '', phone: '',
    });
    const search = (e) => {
        e.preventDefault();

        post(route('customers.filtered', data));
    }

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Filter Information</h2>

                <p className="mt-1 text-sm text-gray-600">
                    Fill in fields to search for customers.
                </p>
            </header>
            <form onSubmit={search} className="mt-6 space-y-6">
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

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Filter</PrimaryButton>
                </div>
            </form>
        </section>
    );
}

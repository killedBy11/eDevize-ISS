import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        surname: '',
        personal_id: '',
        permissions: '',
        work_type: '',
        phone: '',
        home_address: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="name" value="Name" />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="surname" value="Surname" />

                    <TextInput
                        id="surname"
                        name="surname"
                        value={data.surname}
                        className="mt-1 block w-full"
                        autoComplete="surname"
                        isFocused={true}
                        onChange={(e) => setData('surname', e.target.value)}
                        required
                    />

                    <InputError message={errors.surname} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="personal_id" value="Personal Identification" />

                    <TextInput
                        id="personal_id"
                        name="personal_id"
                        value={data.personal_id}
                        className="mt-1 block w-full"
                        autoComplete="personal_id"
                        isFocused={true}
                        onChange={(e) => setData('personal_id', e.target.value)}
                        required
                    />

                    <InputError message={errors.personal_id} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="permissions" value="Permissions" />

                    <TextInput
                        id="permissions"
                        name="permissions"
                        value={data.permissions}
                        className="mt-1 block w-full"
                        autoComplete="permissions"
                        isFocused={true}
                        onChange={(e) => setData('permissions', parseInt(e.target.value))}
                        required
                    />

                    <InputError message={errors.permissions} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="home_address" value="Home address" />

                    <TextInput
                        id="home_address"
                        name="home_address"
                        value={data.home_address}
                        className="mt-1 block w-full"
                        autoComplete="home_address"
                        isFocused={true}
                        onChange={(e) => setData('home_address', e.target.value)}
                        required
                    />

                    <InputError message={errors.home_address} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="work_type" value="Work type" />

                    <TextInput
                        id="work_type"
                        name="work_type"
                        value={data.work_type}
                        className="mt-1 block w-full"
                        autoComplete="work_type"
                        isFocused={true}
                        onChange={(e) => setData('work_type', e.target.value)}
                        required
                    />

                    <InputError message={errors.work_type} className="mt-2" />
                </div>

                <div>
                    <InputLabel htmlFor="phone" value="Phone number" />

                    <TextInput
                        id="phone"
                        name="phone"
                        value={data.phone}
                        className="mt-1 block w-full"
                        autoComplete="phone"
                        isFocused={true}
                        onChange={(e) => setData('phone', e.target.value)}
                        required
                    />

                    <InputError message={errors.phone} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Password" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation" value="Confirm Password" />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="flex items-center justify-end mt-4">
                    <Link
                        href={route('login')}
                        className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Already registered?
                    </Link>

                    <PrimaryButton className="ml-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}

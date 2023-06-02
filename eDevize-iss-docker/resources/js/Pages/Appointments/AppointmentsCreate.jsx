import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Head, usePage, Link, useForm} from '@inertiajs/react';
import Pagination from '@/Components/Pagination.jsx';
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import Checkbox from "@/Components/Checkbox.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import FilterCustomersForm from "@/Pages/Customers/Partials/FilterCustomersForm.jsx";
import UpdateProfileInformationForm from "@/Pages/Profile/Partials/UpdateProfileInformationForm.jsx";
import FilterAppointmentsForm from "@/Pages/Appointments/Partials/FilterAppointmentsForm.jsx";
import AppointmentForm from "@/Pages/Appointments/Partials/AppointmentForm.jsx";

export default function AppointmentsCreate({auth}) {
    const {get} = useForm({});

    return (<AuthenticatedLayout
        user={auth.user}
        header={
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">Appointments</h2>
        }>
        <Head title="Appointments"/>

        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <AppointmentForm
                        className="max-w-xl"
                    />
                </div>
            </div>
        </div>
    </AuthenticatedLayout>);
}

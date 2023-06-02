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

export default function AppointmentsList({auth}) {
    const {appointments, vehicles} = usePage().props;
    const {get} = useForm({});

    const search = (e) => {
        e.preventDefault();

        get(route('appointments.filtered'));
    }

    const viewAppointment = (id) => {
        get(route('appointments.view', id));
    }

    return (<AuthenticatedLayout
        user={auth.user}
        header={
            <h2 className="font-semibold text-xl text-gray-800 leading-tight">Appointments</h2>
        }>
        <Head title="Appointments"/>

        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <FilterAppointmentsForm
                        className="max-w-xl"
                    />
                </div>


                <div className="p-6 bg-white border-b border-gray-200">
                    <header>
                        <h2 className="text-lg font-medium text-gray-900">Appointments Information</h2>
                        <p></p>
                    </header>
                    <table className="table-fixed w-full">
                        <thead>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-2 w-20">No.</th>
                            <th className="px-4 py-2">Date and time</th>
                            <th className="px-4 py-2" width={300}>Description</th>
                            <th className="px-4 py-2">Duration</th>
                            <th className="px-4 py-2">Vehicle registration plate</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {appointments.data.map(({id, when, description, hours_allocated, vehicle_id}) => (<tr>
                            <td className="border px-4 py-2">{id}</td>
                            <td className="border px-4 py-2">{when}</td>
                            <td className="border px-4 py-2">{description}</td>
                            <td className="border px-4 py-2">{hours_allocated}</td>
                            <td className="border px-4 py-2">{vehicles.find((vehicle) => vehicle.id === vehicle_id).registration_plate}</td>
                            <td className="border px-4 py-2"><PrimaryButton onClick={() => {viewAppointment(id)}}>View</PrimaryButton></td>
                        </tr>))}
                        </tbody>
                    </table>
                    <Pagination class="mt-6" links={appointments.links}/>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>);
}

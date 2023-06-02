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

export default function CustomerList({auth}) {
    const {customers} = usePage().props;
    const {get} = useForm({});

    const search = (e) => {
        e.preventDefault();

        get(route('customers.filtered'));
    }

    const manageCustomer = (id) => {
        get(route('customers.update', id));
    }

    return (<AuthenticatedLayout
            user={auth.user}
            header={
                <h2 className="font-semibold text-xl text-gray-800 leading-tight">Customers</h2>
            }>
            <Head title="Customers"/>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <FilterCustomersForm
                            className="max-w-xl"
                        />
                    </div>


                    <div className="p-6 bg-white border-b border-gray-200">
                        <header>
                            <h2 className="text-lg font-medium text-gray-900">Customer Information</h2>
                            <p></p>
                        </header>
                        <table className="table-fixed w-full">
                            <thead>
                            <tr className="bg-gray-100">
                                <th className="px-4 py-2 w-20">No.</th>
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Surname</th>
                                <th className="px-4 py-2">Email</th>
                                <th className="px-4 py-2">Phone</th>
                                <th className="px-4 py-2">Address</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            {customers.data.map(({id, name, surname, email, phone, address}) => (<tr>
                                <td className="border px-4 py-2">{id}</td>
                                <td className="border px-4 py-2">{name}</td>
                                <td className="border px-4 py-2">{surname}</td>
                                <td className="border px-4 py-2">{email}</td>
                                <td className="border px-4 py-2">{phone}</td>
                                <td className="border px-4 py-2">{address}</td>
                                <td className="border px-4 py-2"><PrimaryButton onClick={() => {manageCustomer(id)}}>Manage</PrimaryButton></td>
                            </tr>))}
                            </tbody>
                        </table>
                        <Pagination class="mt-6" links={customers.links}/>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>);
}

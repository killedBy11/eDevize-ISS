import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.jsx';
import {Head, usePage, Link, useForm} from '@inertiajs/react';
import Pagination from '@/Components/Pagination.jsx';
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import Checkbox from "@/Components/Checkbox.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import UpdateProfileInformationForm from "@/Pages/Profile/Partials/UpdateProfileInformationForm.jsx";
import CustomerForm from "@/Pages/Customers/Partials/CustomerForm.jsx";
import VehicleForm from "@/Pages/Vehicles/Partials/VehicleForm.jsx";

export default function VehicleEdit({auth}) {
    const {vehicle, customer, makes, models, engines} = usePage().props;

    return (<AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Vehicles</h2>}>
        <Head title="Vehicles"/>

        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <VehicleForm
                        className="max-w-xl"
                        vehicle={vehicle}
                        customer={customer}
                        makes={makes}
                        models={models}
                        engines={engines}
                    />
                </div>
            </div>
        </div>
    </AuthenticatedLayout>);
}

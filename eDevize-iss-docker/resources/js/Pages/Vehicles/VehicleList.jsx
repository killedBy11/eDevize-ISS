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
import FilterVehiclesForm from "@/Pages/Vehicles/Partials/FilterVehiclesForm.jsx";

export default function VehicleList({auth}) {
    const {vehicles, engines, models, makes} = usePage().props;
    const {get} = useForm({});

    const search = (e) => {
        e.preventDefault();

        get(route('vehicles.filtered'));
    }

    const manageVehicle = (id) => {
        get(route('vehicles.update', id));
    }

    return (<AuthenticatedLayout
        user={auth.user}
        header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Vehicles</h2>}>
        <Head title="Vehicles"/>

        <div className="py-12">
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                    <FilterVehiclesForm
                        className="max-w-xl"
                    />
                </div>


                <div className="p-6 bg-white border-b border-gray-200">
                    <header>
                        <h2 className="text-lg font-medium text-gray-900">Vehicle Information</h2>
                        <p></p>
                    </header>
                    <table className="table-fixed w-full">
                        <thead>
                        <tr className="bg-gray-100">
                            <th className="px-4 py-2 w-20">No.</th>
                            <th className="px-4 py-2">Registration</th>
                            <th className="px-4 py-2" width={200}>VIN</th>
                            <th className="px-4 py-2">Model year</th>
                            <th className="px-4 py-2">Make</th>
                            <th className="px-4 py-2">Model</th>
                            <th className="px-4 py-2">Engine</th>
                            <th className="px-4 py-2">Displacement</th>
                            <th className="px-4 py-2">Fuel</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {vehicles.data.map(({id, registration_plate, vin, model_year, car_model_id, engine_id}) => {
                            const model = models.filter((model) => model.id === car_model_id)[0];
                            const make = makes.filter((make) => make.id === model.brand_id)[0];
                            const engine = engines.filter((engine) => engine.id === engine_id)[0];

                            return (<tr>
                                <td className="border px-4 py-2">{id}</td>
                                <td className="border px-4 py-2">{registration_plate}</td>
                                <td className="border px-4 py-2">{vin}</td>
                                <td className="border px-4 py-2">{model_year}</td>
                                <td className="border px-4 py-2">{make.name}</td>
                                <td className="border px-4 py-2">{model.name}</td>
                                <td className="border px-4 py-2">{engine.engine_code}</td>
                                <td className="border px-4 py-2">{engine.displacement}</td>
                                <td className="border px-4 py-2">{engine.fuel}</td>
                                <td className="border px-4 py-2"><PrimaryButton onClick={() => {
                                    manageVehicle(id)
                                }}>Manage</PrimaryButton></td>
                            </tr>);
                        })}
                        </tbody>
                    </table>
                    <Pagination class="mt-6" links={vehicles.links}/>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>);
}

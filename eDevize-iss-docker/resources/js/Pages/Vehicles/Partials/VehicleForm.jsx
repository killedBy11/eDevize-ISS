import {Head, usePage, Link, useForm} from '@inertiajs/react';
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import SelectInput, {Option} from "@/Components/SelectInput.jsx";

export default function VehicleForm({className, vehicle, customer, makes, models, engines}) {
    const {data, setData, post, processing, errors, reset, put} = useForm({
        registration_plate: vehicle === undefined ? '' : vehicle.registration_plate,
        vin: vehicle === undefined ? '' : vehicle.vin,
        make: vehicle === undefined ? makes[0].id : models.find((model) => model.id === vehicle.car_model_id).brand_id,
        model: vehicle === undefined ? '' : vehicle.car_model_id,
        engine: vehicle === undefined ? '' : vehicle.engine_id,
        model_year: vehicle === undefined ? '' : vehicle.model_year,
        customer: customer.id,
    });



    const submit = (e) => {
        e.preventDefault();

        if (vehicle !== undefined) {
            put(route('vehicles.update', vehicle.id, data));
        } else {
            post(route('vehicles.create', data));
        }
    }

    return (
        <section className={className}>
            <header>
                <h2 className="text-lg font-medium text-gray-900">Filter Information</h2>
            </header>
            <form onSubmit={submit} className="mt-6 space-y-6">
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
                    <InputLabel htmlFor="model_year" value="Model year"/>

                    <TextInput
                        id="model_year"
                        type="text"
                        name="model_year"
                        value={data.model_year}
                        className="mt-1 block w-full"
                        autoComplete="model_year"
                        isFocused={true}
                        onChange={(e) => setData('model_year', e.target.value)}
                    />

                    <InputError message={errors.model_year} className="mt-2"/>
                </div>

                <div>
                    <InputLabel htmlFor="make" value="Make"/>

                    <SelectInput
                        id="make"
                        type="make"
                        name="make"
                        value={data.make}
                        className="mt-1 block w-full"
                        autoComplete="make"
                        isFocused={true}
                        onChange={(e) => setData('make', e.target.value)}
                    >
                        {
                            makes.map((make) => {
                                return <Option value={make.id}>{make.name}</Option>;
                            })
                        }
                    </SelectInput>

                    <InputError message={errors.make} className="mt-2"/>
                </div>

                <div>
                    <InputLabel htmlFor="model" value="Model"/>

                    <SelectInput
                        id="model"
                        type="model"
                        name="model"
                        value={data.model}
                        className="mt-1 block w-full"
                        autoComplete="model"
                        isFocused={true}
                        onChange={(e) => setData('model', e.target.value)}
                    >
                        {
                            models.map((model) => {
                                if (model.brand_id === parseInt(data.make)) {
                                    return <Option value={model.id}>{model.name}</Option>;
                                }
                            })
                        }
                    </SelectInput>

                    <InputError message={errors.model} className="mt-2"/>
                </div>

                <div>
                    <InputLabel htmlFor="engine" value="Engine"/>

                    <SelectInput
                        id="engine"
                        type="engine"
                        name="engine"
                        value={data.engine}
                        className="mt-1 block w-full"
                        autoComplete="engine"
                        isFocused={true}
                        onChange={(e) => setData('engine', e.target.value)}
                    >
                        {
                            engines.map((engine) => {
                                if (engine.brand_id === parseInt(data.make)) {
                                    return <Option value={engine.id}>{engine.engine_code}</Option>;
                                }
                            })
                        }
                    </SelectInput>

                    <InputError message={errors.engine} className="mt-2"/>
                </div>

                <div className="flex items-center gap-4">
                    <PrimaryButton disabled={processing}>Save</PrimaryButton>
                </div>
            </form>
        </section>
    );
}

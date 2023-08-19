import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import {PageProps} from "@/types";
import {Head, useForm} from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import SecondaryButton from "@/Components/SecondaryButton";
import {FormEventHandler, useEffect, useState} from "react";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";



export default function Create({auth}: PageProps<{ mustVerifyEmail: boolean, status?: string}>) {
    const {data, setData, post, processing, errors, reset} = useForm({
        name: '',
        description: '',
        type: '',
    });

    useEffect(() => {
        return () => {
            reset('name', 'description', 'type');
        };
    }, []);

    const submit: FormEventHandler = (e) => {
        e.preventDefault();

        post(route('food.store'));
    }
    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="w-full mx-auto sm:max-w-lg mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">

                <Head title="create"/>
                <form onSubmit={submit}>
                    <div>
                        <InputLabel htmlFor="name" value="Name"/>
                        <TextInput
                            id="name"
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
                        <InputLabel htmlFor="description" value="Description"/>
                        <TextInput
                            id="description"
                            name="description"
                            value={data.description}
                            className="mt-1 block w-full"
                            autoComplete="description"
                            isFocused={true}
                            onChange={(e) => setData('description', e.target.value)}
                            required
                        />
                        <InputError message={errors.description} className="mt-2"/>
                    </div>

                    <div>
                        <InputLabel htmlFor="type" value="Type"/>
                        <select
                            id={data.type}
                            name={data.type}
                            value={data.type}
                            required={true}
                            className="border-teal-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 focus:border-teal-500 dark:focus:border-indigo-600 focus:ring-teal-500 dark:focus:ring-indigo-600 rounded-md shadow-sm "
                            onChange={(e) => setData('type', e.target.value)}
                        >
                            <option value="default">Select a type</option>
                            <option value="food">Food</option>
                            <option value="dessert">Dessert</option>
                            <option value="snack">Snack</option>
                            <option value="drink">Drink</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <SecondaryButton className="ml-4" disabled={processing} onClick={() => reset()}>
                            Reset
                        </SecondaryButton>
                        <PrimaryButton className="ml-4" disabled={processing}>
                            Create
                        </PrimaryButton>
                    </div>

                </form>
            </div>
        </AuthenticatedLayout>
    )
}

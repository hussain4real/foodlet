import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import {Food, PageProps} from '@/types';
import FoodCard from '@/Components/FoodCard';
import Authenticated from "@/Layouts/AuthenticatedLayout";
export default function Index({ auth,foods }: PageProps) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="FoodCard" />
            <div className="flex flex-wrap">
                {foods.map((food: Food) => (
                    <FoodCard key={food.id} food={food}  />
                ))}
            </div>

        </AuthenticatedLayout>
    )
}

import {Food, } from '@/types';
import { PropsWithChildren} from "react";
export default function FoodCard({ food } : PropsWithChildren<{food:Food}>) {
    return(
    //     card using tailwind css

            <div className="w-full md:w-1/2 lg:w-1/3 p-3">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
                    <div className="p-3">
                        <h2 className="text-gray-800 dark:text-white text-xl font-semibold">{food.name}</h2>
                        <p className="mt-1 text-gray-600 dark:text-gray-400">{food.description}</p>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-gray-200 dark:bg-gray-700">
                        <h4 className="text-gray-800 dark:text-gray-200">Card Footer</h4>
                        <a href="#" className="px-3 py-1 bg-gray-800 text-sm text-gray-100 font-semibold rounded hover:bg-gray-700">Action</a>
                    </div>
                </div>
            </div>
    );
}

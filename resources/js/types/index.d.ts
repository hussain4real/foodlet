export interface User {
    id: number;
    first_name: string;
    last_name: string;
    mobile_number: string;
    building_number: string;
    street: string;
    zone: string;
    city: string;
    email: string;
    email_verified_at: string;
}

// interface for food
export interface Food {
    id: number;
    name: string;
    description: string;
    type:
        [
            'food',
            'drink',
            'dessert',
            'snack',
            'other'
        ];
    status: string;
}

export type PageProps<T extends Record<string, unknown> = Record<string, unknown>> = T & {
    auth: {
        user: User;
        isLoggedIn: boolean;
    };
    foods:[Food];


};

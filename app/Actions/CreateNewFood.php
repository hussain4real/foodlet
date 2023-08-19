<?php

namespace App\Actions;

use App\Models\Food;
use Illuminate\Support\Facades\Validator;

class CreateNewFood
{
    public function __invoke(array $data): Food
    {
        // Validate the request...
        $data = Validator::validate($data, [
            'name' => ['required', 'string', 'max:255'],
            'description' => ['string', 'max:255'],
            'type' => ['nullable', 'string', 'max:255'],
        ]);

        return Food::create([
            'name' => $data['name'],
            'description' => $data['description'],
            'type' => $data['type'],
            'user_id' => auth()->id(),
        ]);
    }
}

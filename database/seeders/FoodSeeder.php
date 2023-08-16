<?php

namespace Database\Seeders;

use App\Models\Food;
use App\Models\User;
use Database\Factories\UserFactory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FoodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $food = Food::factory()
            ->count(1)
            ->forUser()
            ->create();
    }
}

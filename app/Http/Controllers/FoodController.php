<?php

namespace App\Http\Controllers;

use App\Actions\CreateNewFood;
use App\Http\Resources\FoodResource;
use App\Models\Food;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FoodController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): \Inertia\Response
    {
        $foods = Food::all();

        $foods = FoodResource::collection($foods->load('user'));

        return Inertia::render('Food/Index', [
            'foods' => $foods,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Food/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(CreateNewFood $createNewFood, Request $request)
    {
        $food = $createNewFood($request->all());

        return redirect()->route('food.index');
    }

    /**
     * Display the specified resource.
     */
    public function show(Food $food)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Food $food)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Food $food)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Food $food)
    {
        //
    }
}

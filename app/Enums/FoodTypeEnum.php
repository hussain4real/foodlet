<?php

namespace App\Enums;

enum FoodTypeEnum: string
{
    case FOOD = 'food';
    case DRINK = 'drink';
    case SNACK = 'snack';
    case DESSERT = 'dessert';
    case OTHER = 'other';

}

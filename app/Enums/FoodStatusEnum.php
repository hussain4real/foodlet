<?php

namespace App\Enums;

enum FoodStatusEnum: string
{
    case AVAILABLE = 'available';
    case UNAVAILABLE = 'unavailable';
    case COLLECTED = 'collected';
    case IN_PROGRESS = 'in_progress';
}

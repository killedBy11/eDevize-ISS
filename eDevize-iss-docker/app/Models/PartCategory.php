<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class PartCategory extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];

    public function partCodes(): HasMany
    {
        return $this->hasMany(PartCode::class);
    }
}

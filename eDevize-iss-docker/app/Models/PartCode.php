<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class PartCode extends Model
{
    use HasFactory;

    protected $fillable = [
        'part_code',
    ];

    public function partCategory(): BelongsTo
    {
        return $this->belongsTo(PartCategory::class);
    }

    public function parts(): HasMany
    {
        return $this->hasMany(Part::class);
    }

    public function carModels(): BelongsToMany
    {
        return $this->belongsToMany(CarModel::class);
    }

    public function engines(): BelongsToMany
    {
        return $this->belongsToMany(Engine::class);
    }
}

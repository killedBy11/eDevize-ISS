<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Part extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'price',
        'manufacturer',
        'description',
        'stock',
    ];

    public function partCode(): BelongsTo
    {
        return $this->belongsTo(PartCode::class);
    }

    public function partOrders(): BelongsToMany
    {
        return $this->belongsToMany(PartOrder::class);
    }

    public function billedItems(): HasMany
    {
        return $this->hasMany(BilledItem::class);
    }
}

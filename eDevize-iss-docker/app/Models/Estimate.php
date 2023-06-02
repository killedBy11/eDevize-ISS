<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class Estimate extends Model
{
    use HasFactory;

    protected $fillable = [
        'when',
        'odometer_reading'
    ];

    public function appointment(): BelongsTo
    {
        return $this->belongsTo(Appointment::class);
    }

    public function billedItems(): HasMany
    {
        return $this->hasMany(BilledItem::class);
    }

    public function bill(): HasOne
    {
        return $this->hasOne(Bill::class);
    }
}

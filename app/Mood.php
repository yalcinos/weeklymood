<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mood extends Model
{
    protected $table='mood';
    public $timestamps=false;

    public function  moods()
    {
        return $this->hasOne('App\MoodContent','id','mood_id');
    }
}

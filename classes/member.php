<?php

class Member
{
    public $first_name;
    public $last_name;
    public $instruments;
    public $imgURL;



    public function __construct($first_name, $last_name, $instruments, $imgURL)
    {
        $this->first_name = $first_name;
        $this->last_name = $last_name;
        $this->imgURL = $imgURL;
        $this->instruments = $instruments;
    }

    public function __toString()
    {
        return '<div class="card col-12 col-sm-6 col-md-4" style="width: 18rem;">
        <img class="card-img-top" src="'. $this->imgURL .'" alt="Card image cap">
        <div class="card-body">
        <h3 class="card-text font-weight-bold">'. $this->first_name .' '. $this->last_name . '</h3>
        <p class="font-weight-bold">Instruments: </p>
        <p>'. $this->instruments .'</p>
        </div>
        </div>';

    }
}

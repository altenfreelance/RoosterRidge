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
        return '<div class="card col-6 col-sm-4 col-md-3" style="width: 18rem;">
        <img class="card-img-top" src="/images/'. $this->imgURL .'" alt="Card image cap">
        <div class="card-body">
        <h3 class="card-text font-weight-bold">'. $this->first_name .' '. $this->last_name . '</h3>
        <p>'. $this->instruments .'</p>
        </div>
        </div>';

    }
}

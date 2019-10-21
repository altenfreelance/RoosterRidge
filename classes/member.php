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
        return '<h2>'. $this->first_name .' '. $this->last_name . '</h2>
        <img class="card-img-top" alt="' . $this->first_name. '" src="images/'. $this->imgURL .'">
        <p>'. $this->instruments .'</p>';

    }
}

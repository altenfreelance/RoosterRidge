<?php

class Event
{

    public $locationName;
    public $locationAddress;
    public $date;
    public $timeFrame;
    public $description;
    public $images;

    private $months = ["Jan", "Feb","Mar","Apr","May","Jun","July","Aug","Sept","Oct","Nov", "Dev" ];

    private function print_pretty_Date(){
        $dateParts = explode("/",$this->date);
        $month = intval($dateParts[0]) - 1;
        $month = $this->months[$month];

        $day = $dateParts[1];
        $year =$dateParts[2];

        return $month . " " . $day . ", " . $year;
        
    }

    public function __construct($locationName, $locationAddress, $date, $timeFrame, $description, $images)
    {
        $this->locationName = $locationName;
        $this->locationAddress = $locationAddress;
        $this->date = $date;
        $this->timeFrame = $timeFrame;
        $this->description = $description;
        $this->images = $images;
    }

    public function __toString()
    {
        $html .= '<h2>'.$this->locationName.'</h2>';
        $html .= '<p>'. $this->print_pretty_Date() .' from '. $this->timeFrame.'</p>';
        $html .= '<a href="https://maps.google.com/?q='.$this->locationAddress.'">'. $this->locationAddress . '</a>';

        $html .= '<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">';

        for ($i = 0; $i < count($this->images); $i++) {
            
            if ($i == 0) $active = " active";
            else $active="";

            $html .= '<div class="carousel-item' . $active .'">';


            $html .= '<img class="d-block w-100" src="images/' . $this->images[$i] . '">
            </div>';
        }

        $html .= ' <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div></div>';

        return $html;
    }
}

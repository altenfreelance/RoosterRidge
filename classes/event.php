<?php

class Event
{

    public $locationName;
    public $locationAddress;
    public $date;
    public $timeFrame;
    public $description;
    public $images;

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
        $html .= '<p><strong>When?</strong> - '. $this->date .' from '. $this->timeFrame.'</hp>';
        $html .= '<p><strong>Where?</strong> - '. $this->locationAddress . '</p>';

        $html .= '<div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
        <div class="carousel-inner">';

        for ($i = 0; $i < count($this->images); $i++) {
            if ($i == 0) {
                $html .= '<div class="carousel-item active">';
            } else {
                $html .= '<div class="carousel-item">';
            }

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

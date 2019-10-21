<?php

class Carousel
{

    public $images;

    public function __construct($images)
    {
        $this->images = $images;
    }

    public function __toString()
    {

        $html .= '<div id="carouselControls_Jumbo" class="carousel slide" style="width:100%" data-ride="carousel"><div class="carousel-inner">';
        for ($i = 0; $i < count($this->images); $i++) {

            if ($i == 0) {
                $active = " active";
            } else {
                $active = "";
            }

            $html .= '<div class="carousel-item' . $active . '">';

            $html .= '<img class="d-block w-100" alt="carousel_' . $i . '" src="images/' . $this->images[$i] . '">
            </div>';
        }

        $html .= ' <a class="carousel-control-prev" href="#carouselControls_Jumbo" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselControls_Jumbo" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div></div>';

        return $html;
    }
}

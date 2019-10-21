<?php

class Nav
{

    public function __toString()
    {
        return '<nav class="navbar bottom">
                  <div class="container">
                    <div class="row w-100">
                      <div class="col-12 col-md-3 nav-button">          
                        <a href="#aboutTheBand">About the Band</a>
                      </div>
                      <div class="col-12 col-md-3 nav-button">          
                        <a href="#members">Members</a>
                      </div>
                      <div class="col-12 col-md-3 nav-button">                                                                
                        <a href="#events">Events</a>
                      </div>
                      <div class="col-12 col-md-3 nav-button">          
                        <a href="#contact">Social/Contact</a>
                      </div>
                    </div>
                  </div>
                </nav>';
    }
}

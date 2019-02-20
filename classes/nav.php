<?php

class Nav
{

    public function __toString()
    {
        return '<nav class="navbar navbar-expand-md navbar-dark">
            <a class="navbar-brand" href="#">Rooster Ridge</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarsExample04">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="#aboutTheBand">About the Band</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#members">Members</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#events">Events</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact">Contact</a>
              </li>
            </ul>
            </div>
          </nav>';
    }
}

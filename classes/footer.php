<?php

class Footer {

    public function __toString(){

        return '<section class="footer">
                    <div class="container">
                        <div col="col-12 col-md-4 col-lg-3">
                            <p><strong>Phone: </strong>513-833-3889</p>
                            <p><strong>Email: </strong>altenfreelance@gmail.com</p>
                        </div>

                        <div col="col-12 col-md-4 col-lg-3">
                            <ul>
                                <li><a href="#">About</a></li>
                                <li><a href="#">Events</a></li>
                                <li><a href="#">Members</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>

                        <div col="col-12 col-md-4 col-lg-3">
                        </div>
                    </div>
                </section>';
    }
}
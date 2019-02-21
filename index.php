<!DOCTYPE html>
<?php
include "classes/nav.php";
include "classes/member.php";
include "classes/event.php";
include "classes/footer.php";

?>
<html>
    <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Rooster Ridge</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" media="screen" href="style.css">

    <!-- <script src="main.js"></script> -->
    </head>
    <body>
        <div class="container-fluid" >

            <div class="parallax text-center">
                <h1 class="roosterridge" style="padding-top:100px; margin-bottom:0px;" >Rooster Ridge</h1>
                <?php
                $nav = new Nav();
                echo $nav;
                ?>
            </div>
            
        
            <div class="container" >
                <div class="row">
                    <div id="aboutTheBand" class="jumbotron">
                        <h2>About the Band</h1>
                        <p> is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                    </div>
                </div>


                <div class="row pop">
                    <?php
                    $cappys_images = ["Cappys.jpg"];
                    $cappys = new Event("Cappys Wine and Spirits", "309 W. Loveland Ave, Loveland, OH 45140", "04/26/2019", "7:00PM to 11:00PM", "We would love to see you at this event!", $cappys_images);
                    
                    $LCK_images = ["LCK_1.jpg" ,"LCK_2.jpg"];
                    $LCK = new Event("Loveland Canoe and Kayak", "174 Karl Brown Way, Loveland, OH 45140", "04/27/2019","1:00PM to 3:00PM", "Come down to Loveland Canoe and Kayak for some great music and fun!", $LCK_images);
                    

                    $events = [$cappys, $LCK];
                    
                    echo '<h1 id="events" class="heading col-12">Events</h2>';
                    echo '<div class="col-12">';
                    foreach ($events as $event){
                        echo '<div class="jumbotron">';
                        echo $event;
                        echo '</div>';
                    }
                    echo '</div>';
                    ?>
                </div>



                <div class="row pop">
                    <h1 id="members" class="col-12 heading">Band Members</h2>
                    <?php
                    $members = [
                        new Member("Andrew", "Alten", "Mandolin, banjo, vocals and guitar", "andrew.jpg"),
                        new Member("Jacob", "Alten", "Guitar, vocals and percussion", "placeholder.png"),
                        new Member("Dave", "Blumberg", "Bass, vocals and guitar", "placeholder.png"),
                        new Member("Greg", "Stevens", "Banjo, guitar and fiddle", "placeholder.png"),
                        new Member("Bryce", "Clawson", "Vocals, harp, and fiddle", "placeholder.png"),
                        new Member("Vince", "Stevens", "Dobro and guitar", "placeholder.png"),
                        new Member("Joey", "Oberholzer", "Vocals and percussion", "placeholder.png"),
                    ];

                    foreach ($members as $member) {
                        echo $member;
                    }
                    ?>
                </div>



                <div class="row pop">
                    <h1 id="contact" class="heading col-12">Contact</h3>
                </div>



            <!-- end container -->
            </div>
            <?php
            $footer = new Footer();
            echo $footer;
            ?>
        <!-- end container-fluid -->
        </div>

        
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        <script src="index.js" ></script>
    </body>
</html>
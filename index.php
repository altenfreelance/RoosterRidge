<!-- RoosterRidge -->
<!DOCTYPE html>
<?php
include "classes/nav.php";
include "classes/carousel.php";
include "classes/member.php";
include "classes/event.php";
include "classes/footer.php";

?>
<html>
    <head>
        <!-- Google Tag Manager -->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-T75TCMN');</script>
        <!-- End Google Tag Manager -->

        <meta name="description" content="Loveland's favorite americana folk band. You can catch Rooster Ridge playing throughout Loveland and Ohio."/>

        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>Rooster Ridge</title>
        <meta name="google-site-verification" content="wKdDGGYKSdv9cSOiwgoL96W7cEEZZdabYk0bm4Bb_Dk" />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" media="screen" href="style.css">
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon"/>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-144835700-1"></script>
        <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-144835700-1');
        </script>
        

    </head>
    <body>
        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T75TCMN"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->

        <div class="parallax text-center">
            <h1 class="roosterridge" style="margin-bottom:0px;" ><img class="rounded-circle" alt="roosterridge" src="images/RR.jpg" style="opacity: 0.75;   width:40%; height: 40%"></h1>

            <div class="container-fluid" >

                <div class="container" >
                    <div class="row py-4">
                    <!-- Youtube Container -->
                    <div id="container"
                        style="padding-bottom:56.25%; position:relative; display:block; width: 100%">
                        <iframe id="youtube_video"
                        width="100%" height="100%"
                        src="https://publish.viostream.com/player/iframe/s0m3m3d14?playerKey=s0m3p14y3r"
                        frameborder="0" allowfullscreen=""
                        style="position:absolute; top:0; left: 0"></iframe>
                    </div>
                    <!-- php
                    $jumboCarousel = new Carousel(["cappys_4_26_19-1.jpg", "Cappys_Us.jpg"]);
                    echo $jumboCarousel;
                    ?> -->
                    </div>
                    <div class="row">
                        <div id="aboutTheBand" class="jumbotron black-transparent">
                            <?php
$nav = new Nav();
echo $nav;
?>
                            <h2>About the Band</h1>
                            <p>
                            Blending cutting-edge bluegrass and folk with the dulcet tones of traditional Americana, Rooster Ridge is an ascendant voice in the Ohio 
                            music scene.  Reminiscent of classic groups like The Band, The Stanley Brothers, Nitty Gritty Dirt Band, and more recently Old Crow 
                            Medicine Show, Rooster Ridge brings together superior instrumentation, contagious melodies, harmonies as smooth as Kentucky bourbon,
                            and lyrics as frank and honest as the countryside to offer a distinctive new sound that still holds firm to its roots.
                            </p>

 
                            <p>Rooster Ridge was founded in Loveland, Ohio by the Alten Brothers, Jake and Andrew, and the father-son team of Greg and Vince Stevens.
                            Rounding out the group are close friends and lead vocalists Joey Oberholzer and Bryce Clawson, all anchored by Dave Blumberg’s 
                            foundational bass lines.
                            </p>
 
                            <p>Starting out quite literally as a late-night, back-porch jam session, Rooster Ridge has begun to catch fire, drawing ever larger
                            crowds and an exploding local fan base as they play a growing universe of venues.  Rooster Ridge thanks all of their supporters 
                            for an exceptional start to what many listeners believe will be a promising and prolific future.  Rooster Ridge invites you to sit
                            back, relax, and become part of their distinctly American musical journey.
                            </p>
                            <!-- <p>Rooster Ridge is an American folk and bluegrass band from Loveland, Ohio. The band was established
                            in 2018 and is made up of members Andrew Alten, Jacob Alten, Vince Stevens, Joey Oberholzer, Bryce
                             Clawson, Greg Stevens, and Dave Blumberg. Catch Rooster Ridge playing shows in the greater Cincinnati area.
                             Please visit the event section or our Facebook page to stay up to date with future events!
                             </p> -->
                        </div>
                    </div>


                    <div class="row pop black-transparent jumbotron">
                        <h1 id="events" class="heading col-12">Events</h2>
                        <?php
// $cappys_images_06_22_19 = ["cappys_cover_06_22_19.jpg", "Cappys.jpg"];
// $cappys = ["Cappys.jpg", "cappys_cover_07_04_19.jpg"];
// $cappys = new Event("Cappys Wine and Spirits", "309 W. Loveland Ave, Loveland, OH 45140", "06/22/2019", "8:00PM to 11:00PM", /*"description",*/ $cappys_images_06_22_19, [["https://lovelandcappys.com/", "lovelandcappys.com"]]);
// $cappys = new Event("4th of July with Cappys Wine and Spirits", "309 W. Loveland Ave, Loveland, OH 45140", "07/04/2019", "7:00PM to 10:00PM", /*"description",*/ $cappys_images_07_04_19, [["https://lovelandcappys.com/", "lovelandcappys.com"]]);

// $LCK_images = ["LCK_1.jpg", "LCK_2.jpg"];
// $LCK = new Event("Loveland Canoe and Kayak", "174 Karl Brown Way, Loveland, OH 45140", "04/27/2019", "1:00PM to 3:00PM", /*"description",*/ $LCK_images);

// $_1 = new Event("Cappys Wine and Spirits", "309 W. Loveland Ave, Loveland, OH 45140", "09/06/2019", "8:00PM to 10:30PM", /*"description",*/ ["Cappys_Us.jpg", "Cappys.jpg"], [["https://lovelandcappys.com/", "lovelandcappys.com"]]);
// $_2 = new Event("Downtown Loveland", "126 W Loveland Ave, Loveland, OH 45140", "09/08/2019", "1:00PM to 4:00PM", ["Loveland.jpg"], [[]], "Join us in downtown Loveland for open container between Ramsey's and Paxton's!");
// $_5 = new Event("Cappys Wine and Spirits", "309 W. Loveland Ave, Loveland, OH 45140", "09/06/2019", "8:00PM to 10:30PM", /*"description",*/ ["Cappys_Us.jpg", "Cappys.jpg"], [["https://lovelandcappys.com/", "lovelandcappys.com"]]);
// $_1 = new Event("Boos and Brews with Cappys Wine and Spirits", "309 W. Loveland Ave, Loveland, OH 45140", "10/26/2019", "8:00PM to 10:30PM", /*"description",*/ ["Cappys_Us.jpg", "Cappys.jpg"], [["https://lovelandcappys.com/", "lovelandcappys.com"]]);
// $_2 = new Event("Cappys Wine and Spirits", "309 W. Loveland Ave, Loveland, OH 45140", "11/22/2019", "8:00PM to 10:30PM", /*"description",*/ ["Cappys_Us.jpg", "Cappys.jpg"], [["https://lovelandcappys.com/", "lovelandcappys.com"]]);
// $_3 = new Event("Thanksgiving Eve with Bishop's Quarter", "212 W Loveland Ave, Loveland, OH 45140", "11/27/2019", "8:00PM to 11:00PM", /*"description",*/ ["Bishops.jpg"], [["https://bishopsquarterbar.com", "bishopsquarterbar.com"]]);
$_3 = new Event("Holidays with Cappys Wine and Spirits", "309 W. Loveland Ave, Loveland, OH 45140", "12/20/2019", "9:00PM to 11:00PM", /*"description",*/ ["Cappys_Us.jpg", "Cappys.jpg"], [["https://lovelandcappys.com/", "lovelandcappys.com"]]);
$_4 = new Event("New Years Eve with Cappys Wine and Spirits", "309 W. Loveland Ave, Loveland, OH 45140", "12/31/2019", "9:00PM to 12:00PM", /*"description",*/ ["cappys_12_31.jpg"], [["https://lovelandcappys.com/", "lovelandcappys.com"]]);
$_5 = new Event("Arnolds Bar and Grill", "210 E 8th St, Cincinnati, OH 45202", "01/11/2019", "8:00PM to 11:30PM", /*"description",*/ ["arnolds.jpg"], [["http://www.arnoldsbarandgrill.com/", "arnoldsbarandgrill.com"]]);

$events = [$_3, $_4, $_5];
// , $LCK];

foreach ($events as $event) {
    echo '<div class="col-12 col-md-6">';
    echo $event;
    echo '</div>';
}
?>
                    </div>
                    <div class="row pop jumbotron black-transparent">
                        <h1 id="members" class="heading col-12">Band Members</h2>
                        <?php
$members = [
    new Member("Bryce", "Clawson", "Vocals and harmonica", "Bryce.jpg"),
    new Member("Greg", "Stevens", "Banjo, guitar and fiddle", "Greg.jpg"),
    new Member("Dave", "Blumberg", "Bass, vocals and guitar", "Dave.jpg"),
    new Member("Joey", "Oberholzer", "Vocals and percussion", "Joey.jpg"),
    new Member("Vince", "Stevens", "Dobro and guitar", "Vince.jpg"),
    new Member("Andrew", "Alten", "Mandolin, banjo, and guitar", "Andrew.jpg"),
    new Member("Jacob", "Alten", "Guitar, vocals and percussion", "Jacob.jpg"),
    new Member("Dave", "Bauer", "Sound and tech", "OLAS.jpg"),
];

foreach ($members as $member) {
    echo '<div class="col-6 col-md-3">';
    echo $member;
    echo '</div>';
}
?>
                    </div>
                <!-- end container -->
                </div>
                <div class="row pop jumbotron black-transparent" style="margin-bottom:0px">

                    <h1 id="contact" class="heading col-12">Social</h3>
                    <div class="col-12">
                        <span class="fa fa-youtube-play"></span>
                        <a href="https://www.youtube.com/channel/UCE0jXwLwL7T6zIoQCnHVUzw">YouTube</a>
                    </div>
                    <div class="col-12">
                        <span class="fa fa-facebook"></span>
                        <a href="https://www.facebook.com/RoosterRidgeOfficial/">Facebook</a>
                    </div>

                    <div class="col-12">
                        <span class="fab fa-instagram"></span>
                        <a href="https://www.instagram.com/roosterridgeofficial/">Instagram</a>
                    </div>
                    <div class="col-12">
                        <span class="fa fa-phone"></span>
                        <a href="tel:15133005815">513-300-5815</a>
                    </div>

                    <div class="col-12">
                        <span class="fas fa-envelope"></span>
                        <a href="mailto:RoosterRidgeOfficial@gmail.com">RoosterRidgeOfficial @gmail.com</a>
                    </div>
                </div>

            <!-- end container-fluid -->
            </div>
        </div>
        <!-- end parralax -->
        <script src="https://code.jquery.com/jquery-3.1.1.min.js"> 
        <script type="text/javascript">jQuery.noConflict()</script>
        <script>
            var channelID = "UCE0jXwLwL7T6zIoQCnHVUzw";
            var reqURL = "https://www.youtube.com/feeds/videos.xml?channel_id=";
            jQuery.getJSON("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(reqURL)+channelID, function(data) {
            var link = data.items[0].link;
            var id = link.substr(link.indexOf("=")+1);
            jQuery("#youtube_video").attr("src","https://youtube.com/embed/"+id + "?controls=0&showinfo=0&rel=0");
            });
        </script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    </body>
</html>
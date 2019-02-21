function checkVisible( elm, evalType ) {
  evalType = evalType || "visible";

  var vpH = $(window).height(), // Viewport Height
      st = $(window).scrollTop(), // Scroll Top
      y = $(elm).offset().top,
      elementHeight = $(elm).height();

  if (evalType === "visible") return ((y < (vpH + st)) && (y > (st - elementHeight)));
  if (evalType === "above") return ((y < (vpH + st)));
}

function expandCollapse(){
  $("#expandCollapseBtn").siblings().toggleClass("d-none");

}
   
   $(window).scroll(function(e){ 
       
       if (checkVisible($(".navbar"))){
         console.log("yes")
         if($("#zap").length){
          $("#zap").remove();
         }
       }
       else {
         console.log("no");
         if($("#zap").length == 0){
          $('body').append(`<nav id="zap" class="navbar" >
          <div class="container">
            <div class="row w-100">
              <div id="expandCollapseBtn" onClick=expandCollapse() class="col-12 nav-button">≡
              </div>
              <hr/>
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
                <a href="#contact">Contact</a>
              </div>
            </div>
          </div>
        </nav>`);
         }
       }
   
   
     });
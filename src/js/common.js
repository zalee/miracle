

  //  shop-nav-transform 

$(document).ready(function() {
	
    $(".home-hover")
    .hover( 
        function(){
			$("#nav-home").addClass('active')
        },
        function(){
			$("#nav-home").removeClass('active')
        }
    );

    $(".shop-hover")
    .hover( 
        function(){
            // $("#nav-shop").animate( {marginTop:'25px', marginLeft:'-5px', rotate:'10deg'}, 250 )
            $("#nav-shop").addClass('active-even')
        },
        function(){
            // $("#nav-shop").animate( {marginTop:'0px', marginLeft:'0px', rotate:'0deg'}, 200 )
             $("#nav-shop").removeClass('active-even')
        }
    );

    $(".info-hover")
    .hover( 
        function(){
             $("#nav-info").addClass('active-even')
        },
        function(){
             $("#nav-info").removeClass('active-even')
        }
    );

    $(".blog-hover")
    .hover( 
        function(){
            // $("#nav-blog").animate( {marginTop:'10px', marginLeft:'5px', rotate:'-5deg'}, 250 )
            $("#nav-blog").addClass('active')
        },
        function(){
            // $("#nav-blog").animate( {marginTop:'0px', marginLeft:'0px', rotate:'0deg'}, 200 )
            $("#nav-blog").removeClass('active')
        }
    );

    //  *******************************   scroll Event  **
    $(document).scroll(function() {
        var sHeight = $(document).scrollTop();
        if(sHeight > 20 ){
            $(".header").addClass("is-min");
        }else{
            $(".header").removeClass("is-min");
        }
    })

    
    //  translate 
    // var pieceWidth = $('.block-split-image').width(),
    //     fullWidth = -pieceWidth * 3;

    // $(".slide-next").on('click', function(n,c) {
       
    //     $(".col-full").offset(function(n,c){
    //         newPos = new Object();
    //         newPos.left = c.left > fullWidth ? c.left - pieceWidth : c.left;
    //         return newPos;
    //     });
    // })
    // $(".slide-prev").on('click', function(n,c) {
    //     $(".col-full").offset(function(n,c){
    //         newPos = new Object();
    //         newPos.left = c.left < 0 ? c.left + pieceWidth : c.left;
    //         return newPos;
    //     });
    // })
    var m = 0,
        per = -100,
        sum = "";
    $(".slide-next").on('click', function(n,c) { 
        if(m<3){
            m = m + 1;   
        }else{
            m = 3;
        }   
        sum = m * per;
       $(".col-full").css({transform:"translate("+sum+"vw, -50%)"});
       $(".col-full").css({transition:"transform 400ms ease-in-out"});
    })
    $(".slide-prev").on('click', function(n,c) {
        if(m>0){
            m = m - 1;   
        }else{
            m = 0;
        }   
        sum = m * per;
       $(".col-full").css({transform:"translate("+sum+"vw, -50%)"});
       $(".col-full").css({transition:"transform 400ms ease-in-out"});
    })

});



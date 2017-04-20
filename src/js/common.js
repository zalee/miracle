

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
});

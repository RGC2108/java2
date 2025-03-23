
	$(document).ready(function(){

		$(".more-info").click(function(){
			$(this).parents(".photo-area").animate({ 
					width: "500px",
					height: "470px",
			        borderWidth: "10px"
			      }, 600 );
			
			$(this).fadeOut();
			
			$("#photo").animate({ 
		        width: "500px",
				height: "375px"
			      }, 600 );
			$(".info-area").animate({ 
		        opacity: 1.0,
			      }, 600 );
			});
		
		$(".photo-area .close").click(function(){
			$(this).parents(".photo-area-1").animate({ 
					width: "100px",
					height: "130px",
			        borderWidth: "1px"
			      }, 600 );
			
			$(".more-info").fadeIn();
			
			$("#photo").animate({ 
		        width: "100px",
				height: "100px"
			      }, 600 );
			$(".info-area").animate({ 
		        opacity: 0.0,
			      }, 600 );
			});

		});

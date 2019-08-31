$(document).ready(function(){
	
	 $(".toggle_menu").click(function(){
   	$(".sidebar_menu").addClass("hide_menu");
   	$(".toggle_menu").addClass("opacity_one");

   });
	$('.fa-times-circle').click(function(){
          $(".sidebar_menu").removeClass("hide_menu");
          $(".toggle_menu").removeClass("opacity_one");

	});
    $(window).scroll(function(){
    	let scroll_top=$(window).scrollTop();
       if(scroll_top>=450)
       {
         $('#hidebf').fadeOut(900);  
       	
       	$('.hidaf').fadeIn(900);
       

       }
       else 
       {
       	$('#hidebf').fadeIn(900);  
       		$('.hidaf').fadeOut(900);



       }
    });
    $('.s1').mouseover(function(){
    	$('.tb1').addClass('tb1s');

    });
    $('.s1').mouseout(function(){
         $('.tb1').removeClass('tb1s');
    });
    $('.s2').mouseover(function(){
    	$('.tb2').addClass('tb2s');

    });
    $('.s2').mouseout(function(){
         $('.tb2').removeClass('tb2s');
    });

  $('.btn5,.circle').click(function(){
  	$('html, body').animate({scrollTop: 1000}, 800);
  	$('.rt').fadeIn(1200);

  });
  $('.s2').click(function(){
window.open("Tic Tac Toe.html","_self");

  });



});

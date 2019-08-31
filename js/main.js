

var idstore=new Array();
 
var idstore2=new Array();
var present;
var gone;
let idfetch=document.querySelectorAll("td div");
    	  for(i=0;i<6;i++)
  {
  	idstore[i]=idfetch[i].getAttribute("Id");
  }
 
  
  $(document).ready(function(){
  
   $('#projectb').click(function(){
   	idstore2=[];
   
    $("#firstpage").fadeOut(900);
    $('.showcaseprojects').fadeOut(900);
   
     setTimeout(function(){
 $(".loading").addClass("loading1");
},1000);
     setTimeout(function(){
     $(".loading").fadeIn(900);
     },1000);
    	
setTimeout(function()
{
$(".loading").fadeOut(900);
},2000);

   
 setTimeout(function(){


    	

	$(".projectsbefore").addClass("projectsafter");
window.dispatchEvent(new Event('resize'));

	
},2900);




});

 
   
   $("#home").click(function(){
 
   	idstore2=[];
   	
   
   $(".showcaseprojects").fadeOut(900);
   	$('.projectsbefore').removeClass("projectsafter");
    setTimeout(function(){
       $(".loading1").fadeIn(900);               
    },1000);
    setTimeout(function(){
       $(".loading1").fadeOut(900);
    },2000);
   
   	setTimeout(function(){

        
    	$("#firstpage").fadeIn(900);

   	window.dispatchEvent(new Event('resize'));
   	
	
	
},2900);

   
   	

   });

   $("#scp").click(function(){


   	setTimeout(function(){
 $(".loading").addClass("loading1");
},1000);
     setTimeout(function(){
     $(".loading").fadeIn(900);
     },1000);
    	
setTimeout(function()
{
$(".loading").fadeOut(900);
},1200);

  setTimeout(function(){
  	$('#firstpage').fadeOut(900);
    $(".projectsbefore").removeClass("projectsafter");
  });
   	setTimeout(function(){
     $(".showcaseprojects").addClass("showcasefinal");
   	},2500);
   	setTimeout(function(){
   		$(".showcaseprojects").fadeIn(900);

   },2500);
   	
   		$("td").hover(function(){


    	
        present=$(this).children('div').attr('id');
        gone=$(this).children('div').attr('id');

  
       for(i=0;i<6;i++)
       {
       	if(present==idstore[i])
       	{    
       		$("#"+present).attr("id",'allone');
       	}

       }
       for(i=0;i<6;i++)
    	{
    		idstore2[i]=idfetch[i].getAttribute("Id");
    	}
      

     
    },function(){

    	
    	
    	 for(i=0;i<6;i++)
       {
       	if(idstore2[i]=='allone')
       	{
       		idstore2[i]=gone;
       		$("#allone").attr("id",gone);
             

       	}

       }



    }
    );

  

    

    	


  
});


 

});
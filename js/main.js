$(document).ready(function(){

    $(".shd").hover(function(event){
       $(".shd").animate({
        left:"0px"
       },500);
       $("ul").css("display","block");                   
    },
    function(){
        $(".shd").animate({'left':'-20%'} ,500);

    }); 

   $("p").click(function(){
    $("li").slideUp(700);
    $(this).siblings().slideDown(700);
    // $(this).siblings(".sec li").toggle();
    });



    // $("#drop2").click(function(){
    //     $("ul:first li").remove();
    //     $("ul:nth-child(2) li").css("display","block");
    //  });


}); 

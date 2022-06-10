$(document).ready(function(){
    $('.menu-toggler').on('click',function(){
        if(this.scrollY > 500){
            $('.up').addClass('show');
        }
        else{
            $('.up').removeClass('show');
        }
        
          $(this).toggleClass('open');
          $('.top-nav').toggleClass('open');
       
         
    });
   


    $('.up').click(function(){
        $('html').animate({scrollTop: 0});
    });




    $('.top-nav .nav-link').on('click',function(){
        
        $('.menu-toggler').removeClass('open');
        $('.top-nav').removeClass('open');
    
     
  });
  

  
  AOS.init({
      eassing:'ease',
      duration:1800
  });
  
});


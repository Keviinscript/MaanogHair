 let topPromotionBar = $('#toppromotion');
 let visit = $('.visit')
 let novisit =$('.novisit')


 $(window).on("scroll", function () {
    if ($(this).scrollTop() > 350) {
        topPromotionBar.addClass('fixed')
    }
    else{
        topPromotionBar.removeClass('fixed')
    }
   
 })
 


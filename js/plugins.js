$(document).ready(function(){
    $(".head h1, .head p,.head button").fadeIn(1000);
});


$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 10){
            $("#topBtn").fadeIn()
        }
        else{
            $("#topBtn").fadeOut()
        }
    })



    $("#topBtn").click(function(){
        $("html , body").animate({scrollTop :0},800)
    })


})


//index2
/*$(document).ready(function(){
    $("header,.about").fadeIn(1000);
})*/

/*$('.skill-per').each(function(){
    var $this = $(this);
    var per = $this.attr('per');
    $this.css("width",per + '%');
});*/
$('.skill-per').each(function(){
    $(this).animate({
        width: $(this).attr('per') + '%'
    },4000)
    
});









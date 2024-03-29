$(function(){

    $('.personal').css('height', $('.personal').innerWidth() + 'px');
    $(window).on('resize', () => {
        $('.personal').css('height', $('.personal').innerWidth() + 'px');
    })
    $('.nav-item').on('click', function(){
        // console.log($(this).attr("data-value")).offset().top);
        $("html,body").animate({scrollTop: $($(this).attr("data-value")).offset().top - 80 },1000)
    })
    new TypeIt('#typewriter', {
        speed: 40,
        startDelay: 400
      })
      .type(`
        I'm a full stack developer so I can 
        design websites using HTML5, CSS3, ES6, Bootstrap, JQuery, REACT.JS and ANGULAR 
        and can build a back-end apis using spring framework technologies with JPA and docker. 
        also can create, manipulate and manage databases
        like mysql, mongodb, postgresql
        `)
      .go();
    $(window).on('scroll', function(){
        $(this).scrollTop() >= 79? $('nav').css({
            background: 'black'
        }):$('nav').css({
            background: 'transparent'
        })
        $(this).scrollTop() > 1160 ? animateProgress() :
        null
    })

    const animateProgress = () => {
        $(".skills .container span").each(function(index){
            const width = $(this).text();
            $(this).parent().next().children().eq(0).animate({
                width
            }, {
                duration: 1000,
                specialEasing: {
                  width: "linear"
                }})
        });
    }
})
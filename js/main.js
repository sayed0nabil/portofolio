$(function(){

    $('.personal').css('height', $('.personal').innerWidth() + 'px');
    $(window).on('resize', () => {
        $('.personal').css('height', $('.personal').innerWidth() + 'px');
    })
    $('.nav-item').on('click', function(){
        $("html,body").animate({scrollTop: $($(this).attr("data-value")).offset().top - 80 },1000)
    })
    new TypeIt('#typewriter', {
        speed: 40,
        startDelay: 400
      })
      .type(`
        Technical Lead with 6+ years building high-performance distributed systems.
        Architecting scalable Microservices on AWS across Medical AI and Telecom sectors.
        Leading cross-functional engineering teams from solution design to production.
        Passionate about code quality, mentorship, and developer growth.
        `)
      .go();
    $(window).on('scroll', function(){
        $(this).scrollTop() >= 79? $('nav').css({
            background: 'black'
        }):$('nav').css({
            background: 'transparent'
        })
    })
})

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
        I'm a mern stack developer so I can 
        design websites using HTML5, CSS3, ES6, Bootstrap, JQuery and REACT.JS
        also can build a rest api with node.js
        that connected and interact with react.js
        also can create, manipulate and manage databases
        like mysql, mongodb, postgresql and firebase
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
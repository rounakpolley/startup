$(document).ready(function()
{   
    var scroll_start = 0;               //starting point of scroll
    var startchange = $('#explore');    //id of 'target element' from where nav style changes
    var offset = startchange.offset();  //offset coordinates for 'target element', relative to the document
    $('.navbar-inverse').css('background-color', 'rgba(0,0,0,0)');
    
    $('.navbar-toggle').click(function()
    {  
        $('.navbar-collapse').toggleClass('nav-mobile-slide');
        $('.navbar-collapse.navbar-right.nav-mobile-slide.collapse.in').css('margin-top', '-53px');
    });
    
    $(document).scroll(function() // navbar style not changing.
    { 
            scroll_start = $(this).scrollTop(); //current vertical position of the scroll bar

            if(scroll_start < 53)
            {   $('.navbar-collapse.navbar-right.nav-mobile-slide.collapse.in').css('margin-top', -scroll_start); }
            else
            {   $('.navbar-collapse.navbar-right.nav-mobile-slide.collapse.in').css('margin-top', '0px'); }
            if(scroll_start > offset.top)
            {   
                $('.navbar-inverse').css('background-color', 'rgba(0,0,0,0)');
            } 
            else 
            {   
                $('.navbar-inverse').css('background-color', '#222222');
            }
     });
    $('.navbar-brand').click(function(evt)
    {   evt.preventDefault();   $('html, body').animate({ scrollTop: $('#banner-area').offset().top }, 1000); });
    $('#nav-about').click(function(evt)
    {   evt.preventDefault();   $('html, body').animate({ scrollTop: $('#startup_about').offset().top }, 1000);    });
    $('#nav-projects-0').click(function(evt)
    {   evt.preventDefault();   $('html, body').animate({ scrollTop: $('#startup_projects_0').offset().top}, 1000); });
    $('#nav-projects-1').click(function(evt)
    {   evt.preventDefault();   $('html, body').animate({ scrollTop: $('#startup_projects_1').offset().top}, 1000); });
    $('#nav-team').click(function(evt)
    {   evt.preventDefault();   $('html, body').animate({ scrollTop: $('#startup_team').offset().top }, 1000); });
    $('#nav-blog').click(function(evt)
    {   evt.preventDefault();   $('html, body').animate({ scrollTop: $('#startup_blogs').offset().top }, 1000);    });
    $('#explore').click(function(evt)
    {
        evt.preventDefault();
        $('html, body').animate({ scrollTop: $('#startup_about').offset().top }, 1000);
    });
});
$(document).ready(function()
{        
    // change the target or explore position
    var scroll_start = 0;               //starting point of scroll
    var startchange = $('#explore');    //id of 'target element' from where nav style changes
    var offset = startchange.offset();  //offset coordinates for 'target element', relative to the document
    $('nav').removeClass('nav-gradient');
    $('nav').addClass('nav-transparent');
    
    $(document).scroll(function() 
    { 
            scroll_start = $(this).scrollTop(); //current vertical position of the scroll bar 
            if(scroll_start > offset.top)
            {   
                $('nav').removeClass('nav-transparent');
                $('nav').addClass('nav-gradient');
            } 
            else 
            {   
                $('nav').removeClass('nav-gradient');
                $('nav').addClass('nav-transparent');
            }
     });
    $('#nav-about').click(function(evt)
    {
        evt.preventDefault();
        $('html, body').animate({ scrollTop: $('#startup_about').offset().top - 53 }, 1000);
    });
    $('#nav-projects-0').click(function(evt)
    {
        evt.preventDefault();
        $('html, body').animate({ scrollTop: $('#startup_projects_0').offset().top - 53 }, 1000);
    });
    $('#nav-projects-1').click(function(evt)
    {
        evt.preventDefault();
        $('html, body').animate({ scrollTop: $('#startup_projects_1').offset().top - 53 }, 1000);
    });
    $('#nav-team').click(function(evt)
    {
        evt.preventDefault();
        $('html, body').animate({ scrollTop: $('#startup_team').offset().top - 53 }, 1000);
    });
    $('#nav-blog').click(function(evt)
    {
        evt.preventDefault();
        $('html, body').animate({ scrollTop: $('#startup_blogs').offset().top - 53 }, 1000);
    });
    $('#explore').click(function(evt)
    {
        evt.preventDefault();
        $('html, body').animate({ scrollTop: $('#startup_about').offset().top - 53 }, 1000);
    });
    
    $('#contact-modal').click(function(){   $('#contact-section').addClass('visible');  });
    $(window).click(function(evt)
    {
        if(evt.target == document.querySelector('#contact-section'))   $('#contact-section').removeClass('visible');   
    });   
});
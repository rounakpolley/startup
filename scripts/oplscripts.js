$(document).ready(function()
{     
    var scroll_start = 0;               //starting point of scroll
    var startchange = $('#explore');    //id of 'target element' from where nav style changes
    var offset = startchange.offset();  //offset coordinates for 'target element', relative to the document
    $('.navbar-inverse').css('background-color', 'rgba(0,0,0,0)');
  
    $(document).scroll(function() 
    { 
            scroll_start = $(this).scrollTop(); //current vertical position of the scroll bar 
            if(scroll_start > offset.top)
            {   
                $('.navbar-inverse').css('background-color', 'rgba(0,0,0,0)');
            } 
            else 
            {   
                $('.navbar-inverse').css('background-color', '#222222');
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
});
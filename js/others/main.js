$(document).ready(function()
{

    // -------Nav Slide Toggle------
    $('i.icon').click(function()
    {
        $('.nav-list').slideToggle()
    });

    // ---------Sticky Nav bar---------
    $(window).scroll(function()
    {
        var sc= $(this).scrollTop();
        if(sc > 100)
        {
            $('header').addClass('sticky');
        }
        else
        {
            $('header').removeClass('sticky');
        }
    })
})

// $(document).ready(function()
// {
//     $('i.icon').click(function()
//     {
//         $('.nav-list').slideToggle()
//     });
// })
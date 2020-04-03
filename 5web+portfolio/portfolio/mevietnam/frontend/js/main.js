$(function() {
    var menu = $("#menu");
    var c = $('#container-menu')
    d = $('#container-menu').offset().top;
    $('#côngTac').click(function() {
        if (menu.hasClass('dn-lg')) {
            menu.removeClass('dn-lg')
        } else {
            menu.addClass('dn-lg')
        }
    })
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= d) {
            c.addClass('pf');

        } else {
            c.removeClass('pf');
        }

    });

});
jQuery(document).ready(function($) {
    $('.ontop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');

    })

});
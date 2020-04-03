$(function() {
    var menu = $("#menu");
    $('#côngTac').click(function() {
        if (menu.hasClass('dn-lg')) {
            menu.removeClass('dn-lg')
        } else {
            menu.addClass('dn-lg')
        }
    })
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 2) {
            menu.removeClass('anbg');
        } else {
            menu.addClass('anbg');
        }

    });

});
jQuery(document).ready(function($) {
    $('.ontop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');

    })

});
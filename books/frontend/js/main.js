$(function() {
    $(".sw-menu").click(function() {
        if ($('.menu').hasClass('dn-lg')) {
            $('.menu').removeClass("dn-lg");
        } else {
            $('.menu').addClass("dn-lg");
        }
    });
});
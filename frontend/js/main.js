$(function() {
    var top1 = $('.kq1').offset().top - 100
    var top2 = $('.kq2').offset().top - 100
    var top3 = $('.kq3').offset().top - 100
    var top4 = $('.kq4').offset().top - 100
    var top5 = $('.kq5').offset().top - 100
    var mn1 = $('.mn1')
    var mn2 = $('.mn2')
    var mn3 = $('.mn3')
    var mn4 = $('.mn4')
    var mn5 = $('.mn5')
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
    $('.ontop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    })
    mn1.click(function() {
        $('html, body').animate({ scrollTop: top1 }, 'slow');
    })
    mn2.click(function() {
        $('html, body').animate({ scrollTop: top2 }, 'slow');
    })
    mn3.click(function() {
        $('html, body').animate({ scrollTop: top3 }, 'slow');
    })
    mn4.click(function() {
        $('html, body').animate({ scrollTop: top4 }, 'slow');
    })
    mn5.click(function() {
        $('html, body').animate({ scrollTop: top5 }, 'slow');
    })
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= d) {
            c.addClass('pf');

        } else {
            c.removeClass('pf');
        }
        if (scroll < top2 - 5) {
            mn1.addClass('active').siblings().removeClass('active')
        } else if (scroll >= top2 - 5 && scroll < top3 - 5) {
            mn2.addClass('active').siblings().removeClass('active')
        } else if (scroll >= top3 - 5 && scroll < top4 - 5) {
            mn3.addClass('active').siblings().removeClass('active')
        } else if (scroll >= top4 - 5 && scroll < top5 - 5) {
            mn4.addClass('active').siblings().removeClass('active')
        } else if (scroll >= top5 - 5) {
            mn5.addClass('active').siblings().removeClass('active')
        }
    });
    $('.imgzoom').click(function() {
        var image = $(this).html()
        $('#popup').empty()
        $('#popup').append(image)
        $('.div-popup').css('display', 'block')
    })


    $('#vt').click(function() {
        // if ($('#result-vt').hasClass('dn')) {
        //     $('#result-vt').removeClass('dn');
        // } else {
        //     $('#result-vt').addClass('dn');
        // }
        if ($("#vt").hasClass('active1')) {
            $("#vt").removeClass('active1')
        } else {
            $("#vt").addClass('active1').siblings().removeClass('active1');
        }

    })
    $('#ve').click(function() {
        // if ($('#result-ve').hasClass('dn')) {
        //     $('#result-ve').removeClass('dn');
        // } else {
        //     $('#result-ve').addClass('dn');
        // }
        if ($("#ve").hasClass('active1')) {
            $("#ve").removeClass('active1')
        } else {
            $("#ve").addClass('active1').siblings().removeClass('active1');
        }
    })
    $('#ps').click(function() {
        // if ($('#result-ps').hasClass('dn')) {
        //     $('#result-ps').removeClass('dn');
        // } else {
        //     $('#result-ps').addClass('dn');
        // }
        if ($("#ps").hasClass('active1')) {
            $("#ps").removeClass('active1')
        } else {
            $("#ps").addClass('active1').siblings().removeClass('active1');
        }
    })
    $('#wd').click(function() {

        if ($("#wd").hasClass('active1')) {
            $("#wd").removeClass('active1')
        } else {
            $("#wd").addClass('active1').siblings().removeClass('active1');
        }
    })
    $('#skill').click(function() {
            if ($("#vt").hasClass('active1')) {
                $("#result-vt").removeClass('dn')
            } else {
                $("#result-vt").addClass('dn')
            }
            if ($("#ve").hasClass('active1')) {
                $("#result-ve").removeClass('dn')
            } else {
                $("#result-ve").addClass('dn')
            }
            if ($("#ps").hasClass('active1')) {
                $("#result-ps").removeClass('dn')
            } else {
                $("#result-ps").addClass('dn')
            }
            if ($("#wd").hasClass('active1')) {
                $("#result-wd").removeClass('dn')
            } else {
                $("#result-wd").addClass('dn')
            }
        })
        // test
    $(document).mouseup(function(e) {
        var container = $("#popup");
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $('.div-popup').hide();
        }
    });
});
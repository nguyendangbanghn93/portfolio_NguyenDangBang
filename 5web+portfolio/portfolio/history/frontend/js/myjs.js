jQuery(document).ready(function($) {
    // ontop
    $('.ontop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    })

    // slide dong thời gian
    $('.slider-for').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        infinite: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        responsive: [{
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // slide anh hùng dân tộc
    $('.autoplay').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    });

});

$(function() {
    var header = $("#menu");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 1) {
            header.removeClass('bg-opactive').addClass("bg-c4");
        } else {
            header.removeClass("bg-c4").addClass('bg-opactive');
        }
    });
});


var x = document.getElementById("myDIV");
$('#côngTac').click(function() {
    console.log(1)
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
})
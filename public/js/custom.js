//number count
$('.counter-count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 5000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
//animation
$(document).ready(function() {

    var arrAnimationIn = ['fadeInLeft',"slideInLeft"];

    $(window).scroll(function() {
        $('.animated').each( function(i){

            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();

            if( bottom_of_window > bottom_of_object ) {
                if ($(this)[0].classList.value.indexOf('fadeIn') < 0) {
                    var item = arrAnimationIn[Math.floor(Math.random()*arrAnimationIn.length)];
                    $(this).addClass(item);
                }
            }

        });
    })
});
//click tab change color
$('.fix-li1').click(function () {
    $('.fix-li1,.fix-li').css(
        {"background-color":"#FFC401",
            "color":"white",
        }
    );
    $('.fix-li2,.fix-li3,.fix-li4').css(
        {"background-color":"#F7F7F7",
            "color":"black",
        }
    );
});
$('.fix-li2').click(function () {
    $('.fix-li2').css(
        {"background-color":"#FFC401",
            "color":"white",
        }
    );
    $('.fix-li1,.fix-li3,.fix-li4').css(
        {"background-color":"#F7F7F7",
            "color":"black",
        }
    );
});
$('.fix-li3').click(function () {
    $('.fix-li3',).css(
        {"background-color":"#FFC401",
            "color":"white",
        }
    );
    $('.fix-li1,.fix-li2,.fix-li4').css(
        {"background-color":"#F7F7F7",
            "color":"black",
        }
    );
});
$('.fix-li4').click(function () {
    $('.fix-li4').css(
        {"background-color":"#FFC401",
            "color":"white",
        }
    );
    $('.fix-li1,.fix-li2,.fix-li3').css(
        {"background-color":"#F7F7F7",
            "color":"black",
        }
    );
});
// scroll menu
window.onscroll = function() {
    var currentScrollPos = window.scrollY;
    var header2 = $(".header2");
    if (currentScrollPos < 1) {
        header2.css(
            {
                "position":"static",
                "opacity" : "1",
                "transition" : "300ms all"
            }
        )
    }
    if (currentScrollPos > 1) {
        header2.css(
            {
                "position" : "fixed",
                "opacity" : "0.9",
                "transition" : "300ms all"
            }
        )
    }
};
$(".back-to-top").bind("click",function() {
    $("html").animate({
        scrollTop: 0
    },1000)

});
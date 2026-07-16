$(function() {
    // $('input, textarea').placeholder()
    phMenu()
})


// 手机导航下拉
function phMenu() {
    // ph导航
    $(".mc_ph_menu").click(function() {
        $(this).find(".point").toggleClass("active");
        $(".xialaph").slideToggle();
        $(".phonemeng").toggleClass('active');
        $("body,html").animate({
            scrollTop: 0
        }, 500);
    });
    // ph导航二级
    $(".xialaph  h4").click(function() {
        $(this).siblings(".ul2").slideToggle();
        $(this).parent().parent().siblings().find(".ul2").slideUp();
        $(this).toggleClass("active");
        $(this).parent().parent().siblings().find("h4,h5").removeClass('active');
    });
    /*ph导航三级*/
    $(".xialaph h5").click(function() {
        $(this).siblings(".ul3").slideToggle();
        $(this).parent().siblings().find(".ul3").slideUp();
        $(this).toggleClass("active");
        $(this).parent().siblings().find("h4,h5").removeClass('active');
    });
}

$(document).ready(function () {
    $('#nav li').hover(function () {
        $('ul', this).slideDown(200)
        $(this).children('a:first').addClass("hov")
    }, function () {
        $('ul', this).slideUp(100)
        $(this).children('a:first').removeClass("hov");
    })
})

$(document).ready(function () {
    let navOffset = 300
    $(window).scroll(function () {
        let scrollPos = $(window).scrollTop()
        if (scrollPos > navOffset) {
            $("#cd_float").addClass("on11")
        } else {
            $("#cd_float").removeClass("on11")
        }
    })
})

// 友情链接
$(function () {
    let scrollInertiaNum;
    if (/firefox/.test(navigator.userAgent.toLowerCase())) {
        scrollInertiaNum = 200;
    } else {
        scrollInertiaNum = 200;
    }
    $(".g_ftfriend_bot ul").mCustomScrollbar({
        theme: 'dark',
        scrollInertia: scrollInertiaNum,
        horizontalScroll: false,
        axis: "y",
    });
});
$('.g_ftfriend_top').click(function(e){
    e.stopPropagation();
    $(this).parent().find('.g_ftfriend_bot').stop().slideToggle();
    $(this).stop().toggleClass('on');
})
$('body').click(function (e) {
    e.stopPropagation();
    $('.g_ftfriend_bot').stop().slideUp();
    $('.g_ftfriend_top').stop().removeClass('on');
});
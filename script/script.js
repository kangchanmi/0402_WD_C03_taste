$(function () {
    /* ////////////////////////////// GNB /////////////////////////////// */
    $("ul#mainMenu>li").mouseover(function () {
        $(this).children("ul").stop().fadeIn(400);
    });
    $("ul#mainMenu>li").mouseout(function () {
        $(this).children("ul").stop().fadeOut(400);
    });

    /* ////////////////////////////// 슬라이드 쇼 /////////////////////////////// */
    setInterval (fnSlide, 3000);

    function fnSlide() {
       $("#shuttleFrame").animate({
           "margin-left":"-780px"
       },
        1000,
        "swing",
        function() {
           $("#shuttleFrame a:first-child").insertAfter("#shuttleFrame a:last-child")
           $("#shuttleFrame").css({
               "margin-left":"0"
           });
       });

    };

    /* ////////////////////////////// 레이어 팝업 /////////////////////////////// */

    /*팝업 띄우기*/
    $(".noticeTxt").click(function() {
        $("#layerBG").css({
            "display":"block"
        });
    });

    /*닫기 버튼*/
    $("#popupBtn").click(function() {
        $("#layerBG").css({
            "display":"none"
        });
    });

});

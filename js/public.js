$(document).ready(function(e) {
    //遮罩
    document.onreadystatechange = function () {
        if (document.readyState==="complete"){
            $(".loading").fadeOut();
        }
    };
    //input bug
    if(/Android [4-6]/.test(navigator.appVersion)) {
        window.addEventListener("resize", function() {
            if(document.activeElement.tagName=="INPUT" || document.activeElement.tagName=="TEXTAREA") {
                window.setTimeout(function() {
                    document.activeElement.scrollIntoViewIfNeeded();
                },0);
            }
        })
    }
    //动画
    $(function(){
        setTimeout(function(){
            $('.icon-leopard-warp').addClass('animated bounceInLeft');
            $('.icon-leopard-warp').css("opacity","1")
        }, 0);
    });

    function phoneType() {
        var u = navigator.userAgent;
        if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {//安卓手机
//                alert("安卓手机");
            window.location.href = "http://zhushou.360.cn/detail/index/soft_id/3867306?recrefer=SE_D_%E6%83%A0%E8%BD%A6%E8%81%94%E5%8A%A8";
        } else if (u.indexOf('iPhone') > -1) {//苹果手机
            window.location.href = "https://itunes.apple.com/cn/app/%E6%83%A0%E8%BD%A6%E8%81%94%E5%8A%A8/id1255058049?mt=8";
//                alert("苹果手机");
        } else if (u.indexOf('Windows Phone') > -1) {//winphone手机
//                alert("winphone手机");
            window.location.href = "http://zhushou.360.cn/detail/index/soft_id/3867306?recrefer=SE_D_%E6%83%A0%E8%BD%A6%E8%81%94%E5%8A%A8";
        }
    }
    $("#red_btn_load").on("click",function () {
        phoneType()
    });
    $("#btn-down").on("click",function () {
        phoneType()
    });
    $("#btn-down-2").on("click",function () {
        phoneType()
    });
    function popAlert() {
        $(".pop").css("display","block");
        $(".pop").on("click",".pop-btn-close",function () {
            $(".pop").css("display","none")
        });
        $(".shade").on("click",function () {
            $(".pop").css("display","none")
        });
    }
    $("#btn-receive").on("click",function () {
        popAlert()
    });
    $("#btn-receive-2").on("click",function () {
        popAlert()
    });
    $("#red-packet-rule").on("click",function () {
//        var pageTop = $(document).scrollTop();
//        pageTop = 617;
        $("html,body").animate({scrollTop:$("#red_btn_load").offset().top},500);
    })

});

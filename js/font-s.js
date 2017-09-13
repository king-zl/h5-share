/*!
 */
/*2017.8.9 zl*/
window.onload = function (){
    var desW=750,winW=document.documentElement.clientWidth,winH=document.documentElement.clientHeight,radio=winW/desW;
    var oMain = document.getElementById("main");
    // oMain.style.height= winH + "px";
    if (winW > desW){
        oMain.style.width= desW + "px";
        oMain.style.margin = "0 auto";
        // document.documentElement.style.fontSize=100+'px';
        return;
    }
    oMain.style.minWidth=320+"px";
    document.documentElement.style.fontSize=radio*100+'px';
};

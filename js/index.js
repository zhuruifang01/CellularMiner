$(function(){
//=============时间日期：========================
    function currentTime(){
        var d=new Date(),str='';
        str+=d.getFullYear()+'.';
        str+=d.getMonth() + 1+'.';
        str+=d.getDate()+' / ';
        str+=d.getHours()+':';
        str+=d.getMinutes()+':';
        str+= d.getSeconds()+'';
        return str;
    }
    function calculTime(hourlen){
        var nowDate = new Date();
        var yeDate = new Date(nowDate.getTime()-hourlen*60*60*1000);
        return yeDate.getHours();
    }
    setInterval(function(){
        // 时钟
        $('#show').html(currentTime);
    },1000);
//==============数据======================
    $(".menuTwo_shuju .add input").change(function(){
        var val = $(this).val();
        $(".menuTwo_shuju ul").last().after("<ul class='filess'><li>" +val+ "</li></ul>");
    });
    $(".menuTwo_shuju .delete").click(function(){
        $(".menuTwo_shuju .filess").last().remove();
    });
//==============参数=======================
    //点击表：
    $(".menuTwo_canshu .yiji").click(function(){
        var index=$(this).index(".menuTwo_canshu .yiji");
        $(".menuTwo_canshu .erji").eq(index).slideToggle();
        // var yijiLength=$(".menuTwo_canshu .yijiActive").length;
        // if(yijiLength<4){
        $(".menuTwo_canshu .yiji").eq(index).addClass("yijiActive");
        $(".mianTable").eq(index).show(500);
        // }else{
        //     alert("温馨提示:建议主窗口最多展示四个模块，如需另选，可关闭其余展示模块！");
        // }
    });
    //点击字段:
    $(".menuTwo_canshu .erji li").click(function(){
        var index1=$(this).index(".menuTwo_canshu .erji");
        var index2=$(".menuTwo_canshu .erji").
        alert(index);
        $(".menuTwo_canshu .erji li").eq(index).addClass("erjiActive");
    });
    //关闭表 按钮:
    $(".mianTable .title .right .false").click(function(){
        var index=$(this).index(".mianTable .title .right .false");
        $(".mianTable").eq(index).hide(500);
        $(".menuTwo_canshu .yiji").eq(index).removeClass("yijiActive");
        $(".menuTwo_canshu .erji").eq(index).hide(500);
    });
    //放大表 按钮:
    $(".mianTable .title .right .big").click(function(){
        var index=$(this).index(".mianTable .title .right .big");
        $(".contain .main .zhezhaoTable").eq(index).slideDown(500);
    });
    //缩小表 按钮：
    $(".zhezhaoTable .title .right .false").click(function(){
        var index=$(this).index(".zhezhaoTable .title .right .false");
        $(".contain .main .zhezhaoTable").eq(index).slideUp(500);
    });
});
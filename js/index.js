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
        var arr=val.split('\\');
        var my=arr[arr.length-1];
        $(".menuTwo_shuju ul").last().after("<ul class='filess files0'><li>"+my+"<span>上传中...</span></li></ul>");
    });
    $(".menuTwo_shuju .delete").click(function(){
        $(".menuTwo_shuju .filess").last().remove();
    });

    $(".menuTwo_shuju .filess").on("click",function(){
        var index=$(this).index(".menuTwo_shuju .filess");
        $(".menuTwo .filess").removeClass("active");
        $(".menuTwo .filess").eq(index).addClass("active");
        var xuanzhong=$(".menuTwo .active").text();
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
    // 初始化 显示的字段:
    $(".conTable1 .table thead tr th").eq(0).css("displsy","none");

    //点击表1 的字段:
    $(".menuTwo_canshu .erji1 .cli").on('click',function(){
        var index = $(this).index(".menuTwo_canshu .erji1 .cli");
        var cliBorderW = $(".menuTwo_canshu .erji1 .cli").eq(index).css("border-right-width");
        var trIndex = index+3;
        if(cliBorderW=="3px"){
            $(".menuTwo_canshu .erji1 .cli").eq(index).removeClass("erjiActive");

            $(".conTable1 .table thead tr th:nth-child("+trIndex+")").addClass("hid");
            $(".conTable1 .table tbody tr td:nth-child("+trIndex+")").addClass("hid");
        }else{
            $(".menuTwo_canshu .erji1 .cli").eq(index).addClass("erjiActive");

            $(".conTable1 .table thead tr th:nth-child("+trIndex+")").removeClass("hid");
            $(".conTable1 .table tbody tr td:nth-child("+trIndex+")").removeClass("hid");
        }
    });
    //点击表2 的字段:
    $(".menuTwo_canshu .erji2 .cli").on('click',function(){
        var index = $(this).index(".menuTwo_canshu .erji2 .cli");
        var cliBorderW = $(".menuTwo_canshu .erji2 .cli").eq(index).css("border-right-width");
        var trIndex = index+3;
        if(cliBorderW=="3px"){
            $(".menuTwo_canshu .erji2 .cli").eq(index).removeClass("erjiActive");

            $(".conTable2 .table thead tr th:nth-child("+trIndex+")").addClass("hid");
            $(".conTable2 .table tbody tr td:nth-child("+trIndex+")").addClass("hid");
        }else{
            $(".menuTwo_canshu .erji2 .cli").eq(index).addClass("erjiActive");

            $(".conTable2 .table thead tr th:nth-child("+trIndex+")").removeClass("hid");
            $(".conTable2 .table tbody tr td:nth-child("+trIndex+")").removeClass("hid");
        }
    });
    //点击表3 的字段:
    $(".menuTwo_canshu .erji3 .cli").click(function(){
        var index = $(this).index(".menuTwo_canshu .erji3 .cli");
        var cliBorderW = $(".menuTwo_canshu .erji3 .cli").eq(index).css("border-right-width");
        var trIndex = index+3;
        if(cliBorderW=="3px"){
            $(".menuTwo_canshu .erji3 .cli").eq(index).removeClass("erjiActive");

            $(".conTable3 .table thead tr th:nth-child("+trIndex+")").addClass("hid");
            $(".conTable3 .table tbody tr td:nth-child("+trIndex+")").addClass("hid");
        }else{
            $(".menuTwo_canshu .erji2 .cli").eq(index).addClass("erjiActive");

            $(".conTable3 .table thead tr th:nth-child("+trIndex+")").removeClass("hid");
            $(".conTable3 .table tbody tr td:nth-child("+trIndex+")").removeClass("hid");
        }
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
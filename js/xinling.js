$(function(){
    //时间日期：
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
    //点击表：
    $(".menuTwo_canshu .yiji").click(function(){
        var index=$(this).index(".menuTwo_canshu .yiji");
        $(".menuTwo_canshu .erji").eq(index).slideToggle();
        var yijiLength=$(".menuTwo_canshu .yijiActive").length;
        if(yijiLength<4){
            $(".menuTwo_canshu .yiji").eq(index).addClass("yijiActive");
            $(".mianTable").eq(index).show(500);
        }else{
            alert("温馨提示:建议主窗口最多展示四个模块，如需另选，可关闭其余展示模块！");
        }
    });
    // 初始化 显示的字段:
    $(".conTable1 .table thead tr th").eq(0).css("displsy","block");
    //点击表1 所包含的字段:
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
    //关闭表 按钮:
    $(".mianTable .title .right .false").click(function(){
        var index=$(this).index(".mianTable .title .right .false");
        $(".mianTable").eq(index).hide(500);
        $(".menuTwo_canshu .yiji").eq(index).removeClass("yijiActive");
        $(".menuTwo_canshu .erji").eq(index).hide(500);
    });
//加载数据：
    var data;
    $.ajax({
        type: "GET",
        //url: "../getData/"+cookies[cookies.length-1],   //动态数据接口的地址
        url:"xinling.json",
        async:false,
        success: function(result) {
            var start = new Date().getTime();
            data = result;
        }
    });
    $(".menuTwo_canshu .yiji").click(function() {
            var showORhide = $(".conTable1 .table tbody").css("height");
            if (showORhide == '0px') {
                for (var i = 0; i < data.rrc.length; i++) {
                    $(".conTable1 .table tbody").append("<tr>" +
                        "<td>" + data.rrc[i].code + "</td>" +
                        "<td>" + data.rrc[i].timestamp + "</td>" +
                        "<td class='hid'>" + data.rrc[i].version + "</td>" +
                        "<td class='hid'>" + data.rrc[i].rrc_rel + "</td>" +
                        "<td class='hid'>" + data.rrc[i].rrc_ver_major + "</td>" +
                        "<td class='hid'>" + data.rrc[i].rrc_ver_minor + "</td>" +
                        "<td class='hid'>" + data.rrc[i].upOrDown + "</td>" +
                        "<td class='hid'>" + data.rrc[i].messageType + "</td>" +
                        "</tr>"
                    );
                }
            }
    });
    //显示具体详情：
    $(".conTable .table tbody").on("click",'tr',function(){
        var index = $(this).index();
        $(".mianTable .conTable .table tbody tr").removeClass("active0").eq(index).addClass("active0");
        $(".mianTable .xianqing").text(data.rrc[index].data);
    });

});
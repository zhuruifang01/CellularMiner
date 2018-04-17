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
    $(".menuTwo_canshu .erji3 .cli").on('click',function(){
        var index = $(this).index(".menuTwo_canshu .erji3 .cli");
        var cliBorderW = $(".menuTwo_canshu .erji3 .cli").eq(index).css("border-right-width");
        var trIndex = index+3;
        if(cliBorderW=="3px"){
            $(".menuTwo_canshu .erji3 .cli").eq(index).removeClass("erjiActive");
            $(".conTable3 .table thead tr th:nth-child("+trIndex+")").addClass("hid");
            $(".conTable3 .table tbody tr td:nth-child("+trIndex+")").addClass("hid");
        }else{
            $(".menuTwo_canshu .erji3 .cli").eq(index).addClass("erjiActive");

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
//===========【参数 动态加载数据】================================================
    var fileid = document.cookie;
    var cookies = fileid.split("=");
    var data;
     // $.ajax({
     //     type: "GET",
     //     url: "../getData/"+cookies[cookies.length-1],
     //     async:false,
     //     success: function(result) {
     //         var start = new Date().getTime();
     //         data = JSON.parse(result);
     //     }
     // });
    // console.log(data);
    $(".menuTwo_canshu .yiji").click(function(){
        var index=$(this).index(".menuTwo_canshu .yiji");
        var yijiText=$(".menuTwo_canshu .yiji li .text").eq(index).text();
        if(yijiText=='r_rf'){
            for(var i=0;i<data.rfs.length;i++){
                $(".conTable1 .table tbody").append("<tr>" +
                    "<td>" +data.rfs[i].id+ "</td>" +
                    "<td>" +data.rfs[i].time+ "</td>" +
                    "<td class='hid'>" +data.rfs[i].op_mode+ "</td>" +
                    "<td class='hid'>" +data.rfs[i].meas_bw+ "</td>" +
                    "<td class='hid'>" +data.rfs[i].cell_id+ "</td>" +
                    "<td class='hid'>" +data.rfs[i].frequency+ "</td>" +
                    "<td class='hid'>" +data.rfs[i].inst_meas_rsrp+ "</td>" +
                    "<td class='hid'>" +data.rfs[i].srxlev+ "</td>" +
                    "<td class='hid'>" +data.rfs[i].test_id+ "</td>" +
                    "</tr>"
                );
            }
        }else if(yijiText=="t_servicepattern"){
            for(var i=0;i<data.servicePatterns.length;i++){
                $(".conTable2 .table tbody").append("<tr>" +
                    "<td>" +data.servicePatterns[i].id+ "</td>" +
                    "<td>" +data.servicePatterns[i].time+ "</td>" +
                    "<td class='hid'>" +data.servicePatterns[i].message+ "</td>" +
                    "<td class='hid'>" +data.servicePatterns[i].length+ "</td>" +
                    "<td class='hid'>" +data.servicePatterns[i].test_id+ "</td>" +
                    "<td class='hid'>" +data.servicePatterns[i].timediffms+ "</td>" +
                    "</tr>"
                );
            }
        }else if(yijiText=="t_txreport"){
            for(var i=0;i<data.txReports.length;i++){
                $(".conTable3 .table tbody").append("<tr>" +
                    "<td>" +data.txReports[i].id+ "</td>" +
                    "<td>" +data.txReports[i].time+ "</td>" +
                    "<td class='hid'>" +data.txReports[i].npusch_timing_sfn+ "</td>" +
                    "<td class='hid'>" +data.txReports[i].npusch_timing_sub_fn+ "</td>" +
                    "<td class='hid'>" +data.txReports[i].supersubfn+ "</td>" +
                    "<td class='hid'>" +data.txReports[i].npusch_format+ "</td>" +
                    "<td class='hid'>" +data.txReports[i].is_msg3+ "</td>" +
                    "<td class='hid'>" +data.txReports[i].itbs+ "</td>" +
                    "<td class='hid'>" +data.txReports[i].repetition_number+ "</td>" +
                    "<td class='hid'>" +data.txReports[i].num_ru+ "</td>" +
                    "<td class='hid'>" +data.txReports[i].rv_index+ "</td>" +
                    "<td class='hid'>" +data.txReports[i].num_tone+ "</td>" +
                    "<td class='hid'>" +data.txReports[i].tx_power+ "</td>" +
                    "<td class='hid'>" +data.txReports[i].ack_nack+ "</td>" +
                    "<td class='hid'>" +data.txReports[i].npusch_format_1_tx_type+ "</td>" +
                    "<td class='hid'>" +data.txReports[i].rflm+ "</td>" +
                    "<td class='hid'>" +data.txReports[i].prach_collision_valid+ "</td>" +
                    "<td class='hid'>" +data.txReports[i].test_id+ "</td>" +
                    "</tr>"
                );
            }
        }
    });
});
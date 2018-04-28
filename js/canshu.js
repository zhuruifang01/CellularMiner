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
    //点击表2 所包含的字段:
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
    //点击表3 所包含的字段:
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
//===========【参数 动态加载表格数据】================================================
    var fileid = document.cookie;
    var cookies = fileid.split("=");
    var data;
     $.ajax({
         type: "GET",
         //url: "../getData/"+cookies[cookies.length-1],   //动态数据接口的地址
         url:"canshu.json",
         async:false,
         success: function(result) {
             var start = new Date().getTime();
             data = result;
         }
     });
    //console.log(data);
    $(".menuTwo_canshu .yiji").click(function(){
        var index=$(this).index(".menuTwo_canshu .yiji");
        var yijiText=$(".menuTwo_canshu .yiji li .text").eq(index).text();
        if(yijiText=='r_rf'){
            var showORhide = $(".conTable1 .table tbody").css("height");
            if(showORhide == '0px'){
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
            }
        }else if(yijiText=="t_servicepattern"){
            var showORhide = $(".conTable2 .table tbody").css("height");
            if(showORhide == '0px'){
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
            }
        }else if(yijiText=="t_txreport"){
            var showORhide = $(".conTable3 .table tbody").css("height");
            if(showORhide == '0px'){
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

        }
    });
//=======多表联动： 按照时间戳来==================================
    function show(){
        var mydate = new Date();
        var str = "" + mydate.getFullYear() + "-";
        str += (mydate.getMonth()+1) + "-";
        str += mydate.getDate()+" ";
        return str;
    }
    //获取所点击的主表：
    $(".conTable .table tbody").on('click','tr',function(){
        //确定选中的表的某一行：
            var index = $(this).index();
        //确定选中的表：
            var index0;
            var tableTitle = $(this).parent().parent().parent().parent().children(".title").children(".left").text();
            if(tableTitle == "r_rf"){
                index0=0;
            }else if(tableTitle == "t_servicepattern"){
                index0=1;
            }else if(tableTitle == "t_txreport"){
                index0=2;
            }
        //获取点中表的某行的对应时间：
            $(".conTable .table tbody tr:nth-child(odd)").css("background",'#F1F5FF');
            $(".conTable .table tbody tr:nth-child(even)").css("background",'#fff');
            $(".conTable .table tbody").eq(index0).children("tr").eq(index).css("background","#8ABDED");
            $(".conTable .table tbody").eq(index0).children("tr").eq(index).addClass("gaoliang");
            var Time = $(".conTable .table tbody").eq(index0).children("tr").eq(index).children("td:nth-child(2)").html(); //获取点中的时间
            var Time0 = show()+Time;
            var getTime = new Date(Time0).getTime(); //点中的时间转化为时间戳
            liandong(getTime); //调用联动函数
    });
    //联动的函数：
    function liandong(getTime){
        //联动表1：
        for(var i=0;i<data.rfs.length;i++){
                var table1Time = data.rfs[i].time;
                var table1Time0 = show()+table1Time;
                var table1getTime = new Date(table1Time0).getTime();
                if(table1getTime >= getTime){ //规则：获取表中小于点击的主表时间戳离得最近的一行数据
                    if(i>=1){
                        $(".conTable1 .table tbody tr:nth-child(odd)").css("background",'#F1F5FF');
                        $(".conTable1 .table tbody tr:nth-child(even)").css("background",'#fff');
                        if(table1getTime > getTime){
                            $(".conTable1 .table tbody tr").eq(i-1).css("background","#8ABDED");
                            var juli = 34*(i-2);
                            $(".conTable1").scrollTop(juli);
                        }else{
                            $(".conTable1 .table tbody tr").eq(i).css("background","#8ABDED");

                        }

                    }
                    break;
                }
        }
        //联动表2：
        for(var i=0;i<data.servicePatterns.length;i++){
            var table2Time = data.servicePatterns[i].time;
            var table2Time0 = show()+table2Time;
            var table2getTime = new Date(table2Time0).getTime();
            if(table2getTime >= getTime){
                if(i>=1){
                    $(".conTable2 .table tbody tr:nth-child(odd)").css("background",'#F1F5FF');
                    $(".conTable2 .table tbody tr:nth-child(even)").css("background",'#fff');
                    if(table2getTime > getTime){
                        $(".conTable2 .table tbody tr").eq(i-1).css("background","#8ABDED");
                        var juli = 34*(i-2);
                        $(".conTable2").scrollTop(juli);
                    }else{
                        $(".conTable2 .table tbody tr").eq(i).css("background","#8ABDED");
                    }

                }
                break;
            }
        }
        //联动表3：
        for(var i=0;i<data.txReports.length;i++){
            var table3Time = data.txReports[i].time;
            var table3Time0 = show()+table3Time;
            var table3getTime = new Date(table3Time0).getTime();
            if(table3getTime >= getTime){
                if(i>=1){
                    $(".conTable3 .table tbody tr:nth-child(odd)").css("background",'#F1F5FF');
                    $(".conTable3 .table tbody tr:nth-child(even)").css("background",'#fff');
                    if(table3getTime > getTime){
                        $(".conTable3 .table tbody tr").eq(i-1).css("background","#8ABDED");
                        var juli = 34*(i-2);
                        $(".conTable3").scrollTop(juli);
                    }else{
                        $(".conTable3 .table tbody tr").eq(i).css("background","#8ABDED");
                    }
                }
                break;
            }
        }
    }
//=======回放：===============================================
    var jishiqi;
    $(".huifang").click(function(){
        huifang(); //调用huifang()函数
    });
    $(".huifangClose").click(function(){
        clearInterval(jishiqi);
    });
    function huifang(aa){
        //获取到表一高亮的当前位置 ：
            for(var i=0;i<data.rfs.length;i++){
                var gl = $(".conTable1 .table tbody tr").eq(i).attr("class");
                if(gl == "gaoliang"){
                    //找到高亮的时间
                    var glT = $(".conTable1 .table tbody tr").eq(i).children("td:nth-child(2)").html();
                    //找到高亮的时间 所对应的时间list:
                    var glTimeindex;
                    for(var j=0;j<data.timeList.length;j++){
                        if(glT == data.timeList[j]){
                            glTimeindex=j;
                            break;
                        }
                    }
                    function timeList1(){
                        glTimeindex=glTimeindex+1;
                        var Time00 = show()+data.timeList[glTimeindex];
                        var getTime00 = new Date(Time00).getTime();
                        liandong(getTime00); //调用联动函数
                    }
                    // 打开计时器
                    jishiqi = setInterval(function(){
                        timeList1();
                    },500);

                    break;
                }else{
                    //若无选中的高亮状态，则从表一的第一条开始回放：
                    var glT = $(".conTable1 .table tbody tr").eq(0).children("td:nth-child(2)").html();
                    //找到高亮的时间 所对应的时间list:
                    var glTimeindex;
                    for(var j=0;j<data.timeList.length;j++){
                        if(glT == data.timeList[j]){
                            glTimeindex=j;
                            break;
                        }
                    }
                    function timeList1(){
                        glTimeindex=glTimeindex+1;
                        var Time00 = show()+data.timeList[glTimeindex];
                        var getTime00 = new Date(Time00).getTime();
                        liandong(getTime00); //调用联动函数
                    }
                    // 打开计时器
                    jishiqi = setInterval(function(){
                        timeList1();
                    },500);

                    break;
                }
            }
    }
});
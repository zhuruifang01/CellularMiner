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
            alert("温馨提示:建议主窗口最多展示四个模块！");
        }
    });
    // 初始化 显示的字段:
    $(".conTable1 .table thead tr th").eq(0).css("displsy","none");
    //信令表 所包含的字段:
    $(".menuTwo_canshu .erji0 .cli").on('click',function(){
        var index = $(this).index(".menuTwo_canshu .erji0 .cli");
        var cliBorderW = $(".menuTwo_canshu .erji0 .cli").eq(index).css("border-right-width");
        var trIndex = index+3;
        if(cliBorderW=="3px"){
            $(".menuTwo_canshu .erji0 .cli").eq(index).removeClass("erjiActive");
            $(".conTable0 .table thead tr th:nth-child("+trIndex+")").addClass("hid");
            $(".conTable0 .table tbody tr td:nth-child("+trIndex+")").addClass("hid");
        }else{
            $(".menuTwo_canshu .erji0 .cli").eq(index).addClass("erjiActive");
            $(".conTable0 .table thead tr th:nth-child("+trIndex+")").removeClass("hid");
            $(".conTable0 .table tbody tr td:nth-child("+trIndex+")").removeClass("hid");
        }
    });
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
    var data2=[]; //全局记录map高亮点的经纬度
    $(".mianTable .title .right .big").click(function(){
        var index=$(this).index(".mianTable .title .right .big");
        $(".contain .main .zhezhaoTable").eq(index).slideDown(500);
        if(index==0){
            mapName("map2");
            mapFun(data2,mapData[0].longitude,mapData[0].latitude,121.51500967192734,31.300297669737418);
        }
    });
    //缩小表 按钮：
    $(".zhezhaoTable .title .right .false").click(function(){
        var index=$(this).index(".zhezhaoTable .title .right .false");
        $(".contain .main .zhezhaoTable").eq(index).slideUp(500);
    });
    //自定义rsrp:
    $(".erji00 #rsrpChange").click(function(){
        $(".rsrpZiDingYiBox").css("display","block");
    });
    $(".rsrpZiDingYiBox .button span").click(function(){
        $(".rsrpZiDingYiBox").css("display","none");
    });

//===========【动态加载数据】================================================
//表格／信令：
    var tableData;
    $.ajax({
         type: "GET",
         url:"canshu.json",
         async:false,
         success: function(result) {
             tableData = result;
         }
    });
    var xinlingData;
    $.ajax({
        type: "GET",
        url:"xinling.json",
        async:false,
        success: function(result) {
            var start = new Date().getTime();
            xinlingData = result;
        }
    });
    $(".menuTwo_canshu .yiji").click(function(){
        var index=$(this).index(".menuTwo_canshu .yiji");
        var yijiText=$(".menuTwo_canshu .yiji li .text").eq(index).text();
        if(yijiText=='信令'){
            var showORhide = $(".conTable0 .table tbody").css("height");
            if(showORhide == '0px'){
                for (var i = 0; i < xinlingData.rrc.length; i++) {
                    $(".conTable0 .table tbody").append("<tr>" +
                        "<td>" + xinlingData.rrc[i].code + "</td>" +
                        "<td>" + xinlingData.rrc[i].time + "</td>" +
                        "<td class='hid'>" + xinlingData.rrc[i].version + "</td>" +
                        "<td class='hid'>" + xinlingData.rrc[i].rrc_rel + "</td>" +
                        "<td class='hid'>" + xinlingData.rrc[i].rrc_ver_major + "</td>" +
                        "<td class='hid'>" + xinlingData.rrc[i].rrc_ver_minor + "</td>" +
                        "<td class='hid'>" + xinlingData.rrc[i].upOrDown + "</td>" +
                        "<td class='hid'>" + xinlingData.rrc[i].messageType + "</td>" +
                        "</tr>"
                    );
                }
            }
            //点击信令:
            $(".conTable0 .table tbody tr").on('click',function(){
                $(".zhezhaoXinling").css("display","block");
                var index2=$(this).index();
                $(".zhezhaoXinling .conTable ul").empty();
                for(var i=0;i<xinlingData.rrc[index2].data.length;i++){
                    $(".zhezhaoXinling .conTable ul").append("<li>"+xinlingData.rrc[index2].data[i]+"</li>");
                }

            })
        }else if(yijiText=='lte_nb_msg1'){
            var showORhide = $(".conTable1 .table tbody").css("height");
            if(showORhide == '0px'){
                    for(var i=0;i<tableData.lt1.length;i++){
                        $(".conTable1 .table tbody").append("<tr>" +
                            "<td>" +tableData.lt1[i].id+ "</td>" +
                            "<td>" +tableData.lt1[i].timestamp+ "</td>" +
                            "<td class='hid'>" +tableData.lt1[i].code+ "</td>" +
                            "<td class='hid'>" +tableData.lt1[i].scheduled_sfn+ "</td>" +
                            "<td class='hid'>" +tableData.lt1[i].scheduled_sub_fn+ "</td>" +
                            "<td class='hid'>" +tableData.lt1[i].ul_earfcn+ "</td>" +
                            "<td class='hid'>" +tableData.lt1[i].ul_frequence_offset+ "</td>" +
                            "<td class='hid'>" +tableData.lt1[i].cp_length+ "</td>" +
                            "<td class='hid'>" +tableData.lt1[i].coverage_level+ "</td>" +
                            "<td class='hid'>" +tableData.lt1[i].subcarrier_index+ "</td>" +
                            "<td class='hid'>" +tableData.lt1[i].subcarrier_offset+ "</td>" +
                            "<td class='hid'>" +tableData.lt1[i].prach_tx_power+ "</td>" +
                            "<td class='hid'>" +tableData.lt1[i].num_rep_data+ "</td>" +
                            "<td class='hid'>" +tableData.lt1[i].ra_rnti+ "</td>" +
                            "<td class='hid'>" +tableData.lt1[i].prachtx_sfn+ "</td>" +
                            "<td class='hid'>" +tableData.lt1[i].prachtx_sub_fn+ "</td>" +
                            "<td class='hid'>" +tableData.lt1[i].prach_win_s_sfn+ "</td>" +
                            "<td class='hid'>" +tableData.lt1[i].prach_win_s_sub_fn+ "</td>" +
                            "<td class='hid'>" +tableData.lt1[i].prach_win_e_sfn+ "</td>" +
                            "<td class='hid'>" +tableData.lt1[i].prach_win_e_sub_fn+ "</td>" +
                            "<td class='hid'>" +tableData.lt1[i].act_prach_tx_power+ "</td>" +
                            "<td class='hid'>" +tableData.lt1[i].ho_offset+ "</td>"+
                            "</tr>"
                        );
                    }
            }
        }else if(yijiText=="lte_nb_msg2"){
            var showORhide = $(".conTable2 .table tbody").css("height");
            if(showORhide == '0px'){
                    for(var i=0;i<tableData.lt2.length;i++){
                        $(".conTable2 .table tbody").append("<tr>" +
                            "<td>" +tableData.lt2[i].id+ "</td>" +
                            "<td>" +tableData.lt2[i].timestamp+ "</td>" +
                            "<td class='hid'>" +tableData.lt2[i].code+ "</td>" +
                            "<td class='hid'>" +tableData.lt2[i].rach_procedure_mode+ "</td>" +
                            "<td class='hid'>" +tableData.lt2[i].rnti_type+ "</td>" +
                            "<td class='hid'>" +tableData.lt2[i].rnti_val+ "</td>" +
                            "<td class='hid'>" +tableData.lt2[i].ta_include+ "</td>" +
                            "<td class='hid'>" +tableData.lt2[i].timing_advance+ "</td>" +
                            "<td class='hid'>" +tableData.lt2[i].sfn+ "</td>" +
                            "<td class='hid'>" +tableData.lt2[i].sub_fn+ "</td>" +
                            "</tr>"
                        );
                    }
            }
        }else if(yijiText=="lte_nb_sys_info"){
            var showORhide = $(".conTable3 .table tbody").css("height");
            if(showORhide == '0px'){
                for(var i=0;i<tableData.lnsj.length;i++){
                    $(".conTable3 .table tbody").append("<tr>" +
                        "<td>" +tableData.lnsj[i].id+ "</td>" +
                        "<td>" +tableData.lnsj[i].timestamp+ "</td>" +
                        "<td class='hid'>" +tableData.lnsj[i].code+ "</td>" +
                        "<td class='hid'>" +tableData.lnsj[i].op_mode+ "</td>" +
                        "<td class='hid'>" +tableData.lnsj[i].meas_bw+ "</td>" +
                        "<td class='hid'>" +tableData.lnsj[i].cell_id+ "</td>" +
                        "<td class='hid'>" +tableData.lnsj[i].frequency+ "</td>" +
                        "<td class='hid'>" +tableData.lnsj[i].inst_meas_rsrp+ "</td>" +
                        "<td class='hid'>" +tableData.lnsj[i].srxlev+ "</td>" +
                        "</tr>"
                    );
                }
            }
        }
    });
//map:
    var mapData;
    $.ajax({
        type: "GET",
        url:"map.json",
        async:false,
        success: function(result) {
            mapData = result.map;
        }
    });
    var lat1, lng1, lat2, lng2;  //记录测距数据

// 创建地图实例
    function mapName(mm) {
        map = new BMap.Map(mm);
        var zhongxin=Math.floor(mapData.length/2);
        var point = new BMap.Point(mapData[zhongxin].longitude,mapData[zhongxin].latitude);  // 创建点坐标
        map.centerAndZoom(point,21);
    }
    mapName("map1");
//覆盖物函数：【参数依次为(高亮经纬度，连线起始经纬度，结束经纬度)】
    function mapFun(data2,startlng,startlat,endlng,endlat){
        //初始：
        map.clearOverlays();  //清除所有覆盖物
        function aa() {
            //海量点 全部显示：
            function dadian(color,rsrp,time) {
                var points = [];  // 添加海量点数据
                points.push(new BMap.Point(mapData[i].longitude, mapData[i].latitude));
                var options = {
                    size: BMAP_POINT_SIZE_SMALL,
                    shape:3,
                    color:color
                }
                var pointCollection = new BMap.PointCollection(points, options);  // 初始化PointCollection
                pointCollection.addEventListener('click', function (e) {
                    alert('经纬度:（' + e.point.lng + ',' + e.point.lat+'）\n'+'rsrp：'+rsrp);  // 监听点击事件
                    var Time0 = show()+time;
                    var getTime = new Date(Time0).getTime(); //点中的时间转化为时间戳
                    clearInterval(jishiqi);
                    liandong(getTime); //调用联动函数

                    //测距经纬度赋值:
                    lat1=e.point.lat;lng1=e.point.lng;
                });
                map.addOverlay(pointCollection);  // 添加Overlay
            }
            for (var i = 0; i < mapData.length; i++) {
                if (document.createElement('canvas').getContext) {  // 判断当前浏览器是否支持绘制海量点
                    if(mapData[i].rsrp <= -110){
                        dadian('#ff0000',mapData[i].rsrp,mapData[i].time);
                    }else if(-110<mapData[i].rsrp && mapData[i].rsrp<= -105){
                        dadian('#ff00ff',mapData[i].rsrp,mapData[i].time);
                    }else if(-105<mapData[i].rsrp && mapData[i].rsrp<= -100){
                        dadian('#ffff00',mapData[i].rsrp,mapData[i].time);
                    }else if(-100<mapData[i].rsrp && mapData[i].rsrp<= -95){
                        dadian('#00ffff',mapData[i].rsrp,mapData[i].time);
                    }else if(-95<mapData[i].rsrp && mapData[i].rsrp<= -85){
                        dadian('#0101fe',mapData[i].rsrp,mapData[i].time);
                    }else if(-85<mapData[i].rsrp && mapData[i].rsrp<= -70){
                        dadian('#30fe30',mapData[i].rsrp,mapData[i].time);
                    }else if(-70<mapData[i].rsrp && mapData[i].rsrp<= -50){
                        dadian('#009600',mapData[i].rsrp,mapData[i].time);
                    }else if(-50<mapData[i].rsrp && mapData[i].rsrp<= -50){
                        dadian('#BCF2BC',mapData[i].rsrp,mapData[i].time);
                    }
                }else {
                    alert('请在chrome、safari、IE8+以上浏览器查看本示例');
                }
            }
            //覆盖物：【扇形】
            var pciDate={
                "pci":[
                    {"longitude": 121.51495503041305,"latitude": 31.300697969797418,"data":[{'pci':30,'j1':240,'color':"red"}, {'pci':40,'j1':0,'color':"green"},{'pci':50,'j1':120,'color':"yellow"}]},
                    {"longitude": 121.51500967192734,"latitude": 31.300297669737418,"data":[{'pci':10,'j1':240,'color':"red"},{'pci':20,'j1':0,'color':"green"},{'pci':25,'j1':120,'color':"yellow"},{'pci':50,'j1':60,'color':"blue"}]}
                ]
            };

            function mapMarker(lng,lat,pci,rotate,icon,datalist){
                var point = new BMap.Point(lng,lat);
                if(icon == "red"){
                    var myIcon = new BMap.Icon("img/red.png",new BMap.Size(12,30),{}); //size大小是icon图标大小，否则会位置偏移
                }else if(icon == "yellow"){
                    var myIcon = new BMap.Icon("img/yellow.png",new BMap.Size(12,30),{});
                }else if(icon == "green"){
                    var myIcon = new BMap.Icon("img/green.png",new BMap.Size(12,30),{});
                }else if(icon == "blue"){
                    var myIcon = new BMap.Icon("img/blue.png",new BMap.Size(12,30),{});
                }
                var marker = new BMap.Marker(point,{icon:myIcon});  // 创建标注
                map.addOverlay(marker);              // 将标注添加到地图中
                marker.setRotation(rotate);  //设置标注旋转角度
                marker.addEventListener("click",getAttr);  //添加点击事件
                function getAttr(){
                    var p = marker.getPosition();  //获取marker的位置
                    if(datalist.length==3){
                        alert('经纬度('+ p.lng + ',' + p.lat+')\n'+'小区1(红)：pci值是'+datalist[0].pci+'\n小区2(绿)：pci值是'+datalist[1].pci+'\n小区3(黄)：pci值是:'+datalist[2].pci);  // 监听点击事件
                    }else if(datalist.length==4){
                        alert('经纬度('+ p.lng + ',' + p.lat+')\n'+'小区1(红)：pci值是'+datalist[0].pci+'\n小区2(绿)：pci值是'+datalist[1].pci+'\n小区3(黄)：pci值是:'+datalist[2].pci+'\n小区4(蓝)：pci值是'+datalist[3].pci);  // 监听点击事件
                    }
                    //测距经纬度赋值:
                    lat2=p.lat;lng2=p.lng;
                }
            }
            for(var i=0;i<pciDate.pci.length;i++){
                for(j=0;j<pciDate.pci[i].data.length;j++){
                    mapMarker(pciDate.pci[i].longitude,pciDate.pci[i].latitude,pciDate.pci[i].data[j].pci,pciDate.pci[i].data[j].j1,pciDate.pci[i].data[j].color,pciDate.pci[i].data);
                }
            }

            //覆盖物：【画线函数】
            function line(startlng,startlat,endlng,endlat){
                var polyline = new BMap.Polyline([
                    new BMap.Point(startlng,startlat),
                    new BMap.Point(endlng,endlat)
                ], {strokeColor:"red", strokeWeight:2, strokeOpacity:1});
                map.addOverlay(polyline);
            }
            line(startlng,startlat,endlng,endlat);//小区连线
        }
        aa(); //rsrp打点
        bb(); //高亮打点
        function bb(){
            //var data2=[121.51495503041305,31.300397669737418];
            if (document.createElement('canvas').getContext) {  // 判断当前浏览器是否支持绘制海量点
                var points = [];
                points.push(new BMap.Point(data2[0], data2[1]));
                var options = {
                    size: BMAP_POINT_SIZE_BIG,
                    shape:1,
                    color: 'red'
                }
                var pointCollection = new BMap.PointCollection(points, options);  // 初始化PointCollection
                map.addOverlay(pointCollection);  // 添加Overlay
            } else {
                alert('请在chrome、safari、IE8+以上浏览器查看本示例');
            }
        }
    }

    var startlng; var startlat;
    mapFun(data2,mapData[0].longitude,mapData[0].latitude,121.51500967192734,31.300297669737418);
//=======多表联动： 按照时间戳来======================================================
    function show(){
        var mydate = new Date();
        var str = "" + mydate.getFullYear() + "-";
        str += (mydate.getMonth()+1) + "-";
        str += mydate.getDate()+" ";
        return str;
    }
    //获取所点击的主表：
    $(".conTableT .table tbody").on('click','tr',function(){
        $(".huifangButton li").removeClass("active").eq(1).addClass("active");
        clearInterval(jishiqi);
        //确定选中的表的某一行：
            var index = $(this).index();
        //确定选中的表：
            var index0;
            var tableTitle = $(this).parent().parent().parent().parent().children(".title").children(".left").text();
            if(tableTitle == "信令"){
                index0=0;
            }else if(tableTitle == "lte_nb_msg1"){
                index0=1;
            }else if(tableTitle == "lte_nb_msg2"){
                index0=2;
            }else if(tableTitle == "lte_nb_sys_info"){
                index0=3;
            }
        //获取点中表的某行的对应时间：
            var Time = $(".conTableT .table tbody").eq(index0).children("tr").eq(index).children("td:nth-child(2)").html(); //获取点中的时间
            var Time0 = show()+Time;
            var getTime = new Date(Time0).getTime(); //点中的时间转化为时间戳
            liandong(getTime); //调用联动函数
    });
    //联动的函数：
    function liandong(getTime){
        //联动地图:
        // data2=[121.51495503041305,31.300397669737418];
        // mapFun(data2,121.51495503041305,31.30039766973741);
        for(var i=0;i<mapData.length;i++){
            var mapTime = mapData[i].time;
            var mapTime0 = show()+mapTime;
            var mapTime0getTime = new Date(mapTime0).getTime();
            if(mapTime0getTime >= getTime){ //规则：获取表中小于点击的主表时间戳离得最近的一行数据
                if(i>=1){
                    if(mapTime0getTime > getTime){
                        data2= [];
                        data2.push(mapData[i-1].longitude);
                        data2.push(mapData[i-1].latitude);
                        startlng=mapData[i-1].longitude;
                        startlat=mapData[i-1].latitude;
                        mapFun(data2,startlng,startlat,121.51500967192734,31.300297669737418);
                    }else{
                        data2= [];
                        data2.push(mapData[i].longitude);
                        data2.push(mapData[i].latitude);
                        startlng=mapData[i].longitude;
                        startlat=mapData[i].latitude;
                        mapFun(data2,startlng,startlat,121.51500967192734,31.300297669737418);
                    }
                }else{
                    data2= [];
                    data2.push(mapData[i].longitude);
                    data2.push(mapData[i].latitude);
                    startlng=mapData[i].longitude;
                    startlat=mapData[i].latitude;
                    mapFun(data2,startlng,startlat,121.51500967192734,31.300297669737418);
                }
                break;
            }
        }
        //联动表1：
        for(var i=0;i<tableData.lt1.length;i++){
                if(i==tableData.lt1.length-1){
                    $(".conTable1 .table tbody tr").eq(i).css("background","#8ABDED");
                    $(".conTable1 .table tbody tr").eq(i).addClass("gaoliang");
                }
                var table1Time = tableData.lt1[i].timestamp;
                var table1Time0 = show()+table1Time;
                var table1getTime = new Date(table1Time0).getTime();
                if(table1getTime >= getTime){ //规则：获取表中小于点击的主表时间戳离得最近的一行数据
                    if(i>=1){
                        $(".conTable1 .table tbody tr:nth-child(odd)").css("background",'#F1F5FF');
                        $(".conTable1 .table tbody tr:nth-child(even)").css("background",'#fff');
                        $(".conTable .table tbody tr").removeClass("gaoliang");

                        if(table1getTime > getTime){
                            $(".conTable1 .table tbody tr").eq(i-1).css("background","#8ABDED");
                            $(".conTable1 .table tbody tr").eq(i-1).addClass("gaoliang");
                            $(".zhezhaoTable .conTable1 .table tbody tr").eq(i-1).css("background","#8ABDED");
                            $(".zhezhaoTable .conTable1 .table tbody tr").eq(i-1).addClass("gaoliang");
                            var juli = 20*(i-2);
                            $(".conTable1").animate({scrollTop:juli},300);
                        }else{
                            $(".conTable1 .table tbody tr").eq(i).css("background","#8ABDED");
                            $(".conTable1 .table tbody tr").eq(i).addClass("gaoliang");
                            $(".zhezhaoTable .conTable1 .table tbody tr").eq(i).css("background","#8ABDED");
                            $(".zhezhaoTable .conTable1 .table tbody tr").eq(i).addClass("gaoliang");
                        }
                    }else{
                        $(".conTable1 .table tbody tr").eq(i).css("background","#8ABDED");
                        $(".conTable1 .table tbody tr").eq(i).addClass("gaoliang");
                        $(".zhezhaoTable .conTable1 .table tbody tr").eq(i).css("background","#8ABDED");
                        $(".zhezhaoTable .conTable1 .table tbody tr").eq(i).addClass("gaoliang");
                    }
                    break;
                }
        }
        //联动表2：
        for(var i=0;i<tableData.lt2.length;i++){
            if(i==tableData.lt2.length-1){
                $(".conTable2 .table tbody tr").eq(i).css("background","#8ABDED");
                $(".conTable2 .table tbody tr").eq(i).addClass("gaoliang");
            }
            var table2Time = tableData.lt2[i].timestamp;
            var table2Time0 = show()+table2Time;
            var table2getTime = new Date(table2Time0).getTime();
            if(table2getTime >= getTime){
                if(i>=1){
                    $(".conTable2 .table tbody tr:nth-child(odd)").css("background",'#F1F5FF');
                    $(".conTable2 .table tbody tr:nth-child(even)").css("background",'#fff');
                    $(".conTable2 .table tbody tr").removeClass("gaoliang");
                    if(table2getTime > getTime){
                        $(".conTable2 .table tbody tr").eq(i-1).css("background","#8ABDED");
                        $(".conTable2 .table tbody tr").eq(i-1).addClass("gaoliang");
                        $(".zhezhaoTable .conTable2 .table tbody tr").eq(i-1).css("background","#8ABDED");
                        $(".zhezhaoTable .conTable2 .table tbody tr").eq(i-1).addClass("gaoliang");
                        var juli = 20*(i-2);
                        $(".conTable2").animate({scrollTop:juli},300);
                    }else{
                        $(".conTable2 .table tbody tr").eq(i).css("background","#8ABDED");
                        $(".conTable2 .table tbody tr").eq(i).addClass("gaoliang");
                        $(".zhezhaoTable .conTable2 .table tbody tr").eq(i).css("background","#8ABDED");
                        $(".zhezhaoTable .conTable2 .table tbody tr").eq(i).addClass("gaoliang");
                    }
                }else{
                    $(".conTable2 .table tbody tr").eq(i).css("background","#8ABDED");
                    $(".conTable2 .table tbody tr").eq(i).addClass("gaoliang");
                    $(".zhezhaoTable .conTable2 .table tbody tr").eq(i).css("background","#8ABDED");
                    $(".zhezhaoTable .conTable2 .table tbody tr").eq(i).addClass("gaoliang");
                }
                break;
            }
        }
        //联动表3：
        for(var i=0;i<tableData.lnsj.length;i++){
            if(i==tableData.lnsj.length-1){
                $(".conTable3 .table tbody tr").eq(i).css("background","#8ABDED");
                $(".conTable3 .table tbody tr").eq(i).addClass("gaoliang");
            }
            var table3Time = tableData.lnsj[i].timestamp;
            var table3Time0 = show()+table3Time;
            var table3getTime = new Date(table3Time0).getTime();
            if(table3getTime >= getTime){
                if(i>=1){
                    $(".conTable3 .table tbody tr:nth-child(odd)").css("background",'#F1F5FF');
                    $(".conTable3 .table tbody tr:nth-child(even)").css("background",'#fff');
                    $(".conTable .table tbody tr").removeClass("gaoliang");
                    if(table3getTime > getTime){
                        $(".conTable3 .table tbody tr").eq(i-1).css("background","#8ABDED");
                        $(".conTable3 .table tbody tr").eq(i-1).addClass("gaoliang");
                        $(".zhezhaoTable .conTable3 .table tbody tr").eq(i-1).css("background","#8ABDED");
                        $(".zhezhaoTable .conTable3 .table tbody tr").eq(i-1).addClass("gaoliang");
                        var juli = 20*(i-2);
                        $(".conTable3").animate({scrollTop:juli},300);
                    }else{
                        $(".conTable3 .table tbody tr").eq(i).css("background","#8ABDED");
                        $(".conTable3 .table tbody tr").eq(i).addClass("gaoliang");
                        $(".zhezhaoTable .conTable3 .table tbody tr").eq(i).css("background","#8ABDED");
                        $(".zhezhaoTable .conTable3 .table tbody tr").eq(i).addClass("gaoliang");
                    }
                }else{
                    $(".conTable3 .table tbody tr").eq(i).css("background","#8ABDED");
                    $(".conTable3 .table tbody tr").eq(i).addClass("gaoliang");
                    $(".zhezhaoTable .conTable3 .table tbody tr").eq(i).css("background","#8ABDED");
                    $(".zhezhaoTable .conTable3 .table tbody tr").eq(i).addClass("gaoliang");
                }
                break;
            }
        }
        //联动信令表：
        for(var i=0;i<xinlingData.rrc.length;i++){
            var table0Time = xinlingData.rrc[i].time;
            var table0Time0 = show()+table0Time;
            var table0getTime = new Date(table0Time0).getTime();
            if(table0getTime >= getTime){ //规则：获取表中小于点击的主表时间戳离得最近的一行数
                if(i>=1){
                    $(".conTable0 .table tbody tr:nth-child(odd)").css("background",'#F1F5FF');
                    $(".conTable0 .table tbody tr:nth-child(even)").css("background",'#fff');
                    $(".conTable .table tbody tr").removeClass("gaoliang");
                    if(table0getTime > getTime){
                        $(".conTable0 .table tbody tr").eq(i-1).css("background","#8ABDED");
                        $(".conTable0 .table tbody tr").eq(i-1).addClass("gaoliang");
                        $(".zhezhaoTable .conTable0 .table tbody tr").eq(i-1).css("background","#8ABDED");
                        $(".zhezhaoTable .conTable0 .table tbody tr").eq(i-1).addClass("gaoliang");
                        var juli = 20*(i-2);
                        $(".conTable0").animate({scrollTop:juli},300);
                    }else{
                        $(".conTable0 .table tbody tr").eq(i).css("background","#8ABDED");
                        $(".conTable0 .table tbody tr").eq(i).addClass("gaoliang");
                        $(".zhezhaoTable .conTable0 .table tbody tr").eq(i).css("background","#8ABDED");
                        $(".zhezhaoTable .conTable0 .table tbody tr").eq(i).addClass("gaoliang");

                    }
                }else{
                    $(".conTable0 .table tbody tr").eq(i).css("background","#8ABDED");
                    $(".conTable0 .table tbody tr").eq(i).addClass("gaoliang");
                    $(".zhezhaoTable .conTable0 .table tbody tr").eq(i).css("background","#8ABDED");
                    $(".zhezhaoTable .conTable0 .table tbody tr").eq(i).addClass("gaoliang");

                }
                break;
            }
        }
    }
//=======回放：===============================================
    var jishiqi; //全局定义 计时器
    $(".huifangButton li").click(function(){
        var index = $(this).index();
        $(".huifangButton li").removeClass("active").eq(index).addClass("active");
        if(index == 0){ //回放
            $(".menuTwo_canshu .speed li").css("background","oldlace").eq(1).css("background","orange");
            clearInterval(jishiqi); //关闭计时器
            huifang(1000); //调用huifang()函数 正常speed
        }else{ //暂停
            $(".speed li").removeClass("active");
            clearInterval(jishiqi); //关闭计时器
        }
    });
    //速度控制：
    $(".menuTwo_canshu .speed li").click(function(){
        var index=$(this).index();
        $(".menuTwo_canshu .speed li").css("background","oldlace").eq(index).css("background","orange");
        if(index==0){
            clearInterval(jishiqi); //关闭计时器
            huifang(2000);
        }else if(index==1){
            clearInterval(jishiqi); //关闭计时器
            huifang(1000);
        }else{
            clearInterval(jishiqi); //关闭计时器
            huifang(500);
        }
    });
    //huifang()函数 封装
    var timeData;
    $.ajax({
        type: "GET",
        url:"map.json",
        async:false,
        success: function(result) {
            timeData = result.timelist;
        }
    });
    function huifang(speed){
        clearInterval(jishiqi);
        var glTimeindex=0;
        var glTime=timeData[glTimeindex];
        var Time0 = show()+glTime;
        var getTime = new Date(Time0).getTime(); //点中的时间转化为时间戳
        liandong(getTime); //调用联动函数
        function timeList1(){
                    if(glTimeindex<timeData.length){
                        glTimeindex=glTimeindex+1;
                    }else{
                        glTimeindex=0;
                    }
                    var glTime=timeData[glTimeindex];
                    var Time0 = show()+glTime;
                    var getTime = new Date(Time0).getTime(); //点中的时间转化为时间戳
                    liandong(getTime); //调用联动函数
        }
        // 打开计时器
        jishiqi = setInterval(function(){
             timeList1();
        },speed);
    }
//========测量距离=================
    $("#ceju").click(function(){
        caculateLL(lat1, lng1, lat2, lng2);
    });
    function caculateLL(lat1, lng1, lat2, lng2) {
        var radLat1 = lat1 * Math.PI / 180.0;
        var radLat2 = lat2 * Math.PI / 180.0;
        var a = radLat1 - radLat2;

        var b = lng1 * Math.PI / 180.0 - lng2 * Math.PI / 180.0;
        var s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)));
        s = s * 6378.137;
        s = Math.round(s * 10000) / 10000;
        alert(
            "打点:("+(lat1, lng1)+")\n"
            +"基站:("+(lat1, lng1)+")\n"
            +"距离:"+s+'km'
        );

    };

});
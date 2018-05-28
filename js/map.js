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
        $('#show').html(currentTime);
    },1000);
//============上传文件==========：
    $(".menuTwo_shuju .add input").change(function(){
        var val = $(this).val();
        var arr=val.split('\\');
        var my=arr[arr.length-1];
        $(".menuTwo_shuju ul").last().after("<ul class='filess files0'><li>"+my+"<span>上传中...</span></li></ul>");

        var files = $('#file')[0].files[0];
        var formFile = new FormData();
        formFile.append("files", files);
        var data1 = formFile;
        // $.ajax({
        //     url:"/upload",
        //     type:"post",
        //     data:data1,
        //     processData:false,
        //     contentType:false,
        //     success:function(data){
        //    	 window.location.href="../map";
        //     }
        // });
    });
//===========左侧菜单========:
    $(".menuTwo .tableMenu").click(function(){
            $(".menuTwo .tableMenu").css({"background":"orangered","color":"#fff"});
            $(".mianTable").show(200);
    });
    // 关闭表格：
    $(".mianTable .false").click(function(){
        $(".mianTable").hide(200);
        $(".menuTwo .tableMenu").css({"background":"orange","color":"#000"});
    });
//========动态加载数据=================:
    var mapData;
    $.ajax({
        type: "GET",
        url:"map.json",
        async:false,
        success: function(result) {
            mapData = result;
        }
    });
//表格：
    for(var i=0;i<mapData.map.length;i++){
        $(".table1 tbody").append("<tr>" +
            "<td>"+(i+1)+"</td>" +
            "<td>"+mapData.map[i].longitude+"</td>" +
            "<td>"+mapData.map[i].latitude+"</td>" +
            "</tr>"
        );
    }
//map:
    var map = new BMap.Map("map1");          // 创建地图实例
    var point = new BMap.Point(mapData.map[1].longitude,mapData.map[1].latitude);  // 创建点坐标
    map.centerAndZoom(point,21);                 // 初始化地图，设置中心点坐标和地图级别
    //初始：
    function aa() {
        //海量点 全部显示：：
        if (document.createElement('canvas').getContext) {  // 判断当前浏览器是否支持绘制海量点
            var points = [];  // 添加海量点数据
            for (var i = 0; i < mapData.map.length; i++) {
                points.push(new BMap.Point(mapData.map[i].longitude, mapData.map[i].latitude));
                if(mapData.map[i].RSRP <= -110){
                    var options = {
                        size: BMAP_POINT_SIZE_SMALL,
                        shape:3,
                        color: '#ff0000'
                    }
                }else if(mapData.map[i].RSRP <= -105 && mapData.map[i].RSRP > -110){
                    var options = {
                        size: BMAP_POINT_SIZE_SMALL,
                        shape:3,
                        color: '#ff00ff'
                    }
                }else if(mapData.map[i].RSRP <= -100 && mapData.map[i].RSRP > -105){
                    var options = {
                        size: BMAP_POINT_SIZE_SMALL,
                        shape:3,
                        color: '#ffff00'
                    }
                }else if(mapData.map[i].RSRP <= -95 && mapData.map[i].RSRP > -100){
                    var options = {
                        size: BMAP_POINT_SIZE_SMALL,
                        shape:3,
                        color: '#00ffff'
                    }
                }else if(mapData.map[i].RSRP <= -85 && mapData.map[i].RSRP > -95){
                    var options = {
                        size: BMAP_POINT_SIZE_SMALL,
                        shape:3,
                        color: '#0101fe'
                    }
                }else if(mapData.map[i].RSRP <= -70 && mapData.map[i].RSRP > -85){
                    var options = {
                        size: BMAP_POINT_SIZE_SMALL,
                        shape:3,
                        color: '#30fe30'
                    }
                }else if(mapData.map[i].RSRP <= -50 && mapData.map[i].RSRP > -70){
                    var options = {
                        size: BMAP_POINT_SIZE_SMALL,
                        shape:3,
                        color: '#009600'
                    }
                }else if(mapData.map[i].RSRP > -50){
                    var options = {
                        size: BMAP_POINT_SIZE_SMALL,
                        shape:3,
                        color: '#009600'
                    }
                }
            }
            var pointCollection = new BMap.PointCollection(points, options);  // 初始化PointCollection
            pointCollection.addEventListener('click', function (e) {
                alert('单击点的坐标为：' + e.point.lng + ',' + e.point.lat);  // 监听点击事件
                $(".right .bottom").scrollTop(30);

            });
            map.addOverlay(pointCollection);  // 添加Overlay
        } else {
            alert('请在chrome、safari、IE8+以上浏览器查看本示例');
        }

        //覆盖物：【扇形】
        function mapMarker(lng,lat,name,rotate,icon){
            var point = new BMap.Point(lng,lat);
            if(icon == "red"){
                var myIcon = new BMap.Icon("img/red.png",new BMap.Size(12,30),{}); //size大小是icon图标大小，否则会位置偏移
            }else if(icon == "yellow"){
                var myIcon = new BMap.Icon("img/yellow.png",new BMap.Size(12,30),{});
            }else if(icon == "green"){
                var myIcon = new BMap.Icon("img/green.png",new BMap.Size(12,30),{});
            }
            var marker = new BMap.Marker(point,{icon:myIcon});  // 创建标注
            map.addOverlay(marker);              // 将标注添加到地图中
            marker.setRotation(rotate);  //设置标注旋转30度
            marker.addEventListener("click",getAttr);  //添加点击事件
            function getAttr(){
                var p = marker.getPosition();  //获取marker的位置
                alert('基站('+ p.lng + ',' + p.lat+')\n'+'小区1:\n'+'小区2:\n'+'小区3:');  // 监听点击事件
            }
        }
        mapMarker(121.223504,31.264521,"小区1",0,"red");//可 循环调用来 打点
        mapMarker(121.223504,31.264521,"小区2",240,'green');
        mapMarker(121.223504,31.264521,"小区3",120,'yellow');
    }
    aa();
    //鼠标点击表格 增加海量点（高亮）：
    var data2=[];
    $(".table1 tbody tr").on("click",function(){
        clearInterval(jishiqiMap); //关闭计时器
        $(".huifangButton li").css("background","oldlace").eq(1).css("background","orange");

        var index=$(this).index(".table1 tbody tr");
        $(".table1 tbody tr").css("background","#fff").eq(index).css("background",'cornflowerblue');
        $(".table1 tbody tr").removeClass("glMap").eq(index).addClass("glMap");
        var jin=$(".table1 tbody tr").eq(index).children("td:nth-child(2)").text();
        var wei=$(".table1 tbody tr").eq(index).children("td:nth-child(3)").text();
        data2= [];
        data2.push(jin);
        data2.push(wei);
        bb();

        line(jin, wei); //调用画线
    });
    //高亮 打点函数：
    function bb() {
        map.clearOverlays();
        aa();
        if (document.createElement('canvas').getContext) {  // 判断当前浏览器是否支持绘制海量点
            var points = [];
            points.push(new BMap.Point(data2[0], data2[1]));
            var options = {
                size: BMAP_POINT_SIZE_BIG,
                shape:3,
                color: 'red'
            }
            var pointCollection = new BMap.PointCollection(points, options);  // 初始化PointCollection
            map.addOverlay(pointCollection);  // 添加Overlay
        } else {
            alert('请在chrome、safari、IE8+以上浏览器查看本示例');
        }
    }

//覆盖物：【画线函数】
    function line(startlng,startlat){
        var polyline = new BMap.Polyline([
            new BMap.Point(startlng,startlat),
            new BMap.Point(121.223504, 31.264521)
        ], {strokeColor:"red", strokeWeight:4, strokeOpacity:1});
        map.addOverlay(polyline);
    }
//map回放：
    var jishiqiMap; //全局定义 计时器
    $(".huifangButton li").click(function(){
        var index = $(this).index();
        $(".huifangButton li").css("background","oldlace").eq(index).css("background","orange");
        if(index == 0){ //调用回放 huifangMap()
            jishiqiMap = setInterval(function(){
                huifangMap()
            },600);
        }else{ //暂停
            clearInterval(jishiqiMap); //关闭计时器
        }
    });
//回放函数：
    function huifangMap(){
        for(var i=0;i<mapData.map.length;i++){
            var gl = $(".table1 tbody tr").eq(i).attr("class");
            var j;
            if(gl == "glMap"){
                j = i;
                mapList();
                break;
            }else if( i==mapData.map.length-1 ){
                j = 0;
                mapList()
            }
        //让高亮位置 下移一行 的函数：
            function mapList(){
                j = j+1;
                $(".table1 tbody tr").css("background","#fff").eq(j).css("background",'cornflowerblue');
                $(".table1 tbody tr").removeClass("glMap").eq(j).addClass("glMap");
                var jin=$(".table1 tbody tr").eq(j).children("td:nth-child(2)").text();
                var wei=$(".table1 tbody tr").eq(j).children("td:nth-child(3)").text();
                data2= [];
                data2.push(jin);
                data2.push(wei);
                bb();
                line(jin, wei); //调用画线

                var scrollI =(j/5).toFixed(0);console.log(scrollI);
                if(j>=mapData.map.length){
                    $(".conTable").animate({scrollTop:0},300)
                }else{
                    $(".conTable").animate({scrollTop:160*scrollI},500);
                }
            }

        }
    }
});
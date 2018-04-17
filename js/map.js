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
            var index=$(this).index(".menuTwo .tableMenu");
            $(".menuTwo .tableMenu").eq(index).css("background","#fff");
            $(".tableBox").eq(index).css("display","block");
    });
    // 关闭表格：
    $(".tableBox .closeA").click(function(){
        var index=$(this).index(".tableBox .closeA");
        $(".tableBox").eq(index).css("display","none");
        $(".menuTwo .tableMenu").eq(index).css("background","none");
    });
//===========map===========:
    var map = new BMap.Map("map1");          // 创建地图实例
    var point = new BMap.Point(74.438,39.006);  // 创建点坐标
    map.centerAndZoom(point,5);                 // 初始化地图，设置中心点坐标和地图级别
    //海量点 全部显示：
    function aa() {
        if (document.createElement('canvas').getContext) {  // 判断当前浏览器是否支持绘制海量点
            var points = [];  // 添加海量点数据
            for (var i = 0; i < data.data.length; i++) {
                points.push(new BMap.Point(data.data[i][0], data.data[i][1]));
            }
            var options = {
                size: BMAP_POINT_SIZE_SMALL,
                shape:3,
                color: '#d340c3'
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
    }
    aa();
    //鼠标指向表格 增加海量点（高亮）：
    var data2=[];
    $(".table1 tbody tr").mouseover(function(){
        var index=$(this).index(".table1 tbody tr");
        $(".table1 tbody tr").css("background","#fff").eq(index).css("background",'red');
        $(".table2 tbody tr").css("background","#fff").eq(index).css("background",'red');
        var jin=$(".table1 tbody tr").eq(index).children("td:first-child").text();
        var wei=$(".table1 tbody tr").eq(index).children("td:last-child").text();
        data2= [];
        data2.push(jin);
        data2.push(wei);
        bb();
    });
    $(".table1 tbody tr").mouseout(function(){
        data2= [];
        bb();
    });


    $(".table2 tbody tr").mouseover(function(){
        var index=$(this).index(".table2 tbody tr");
        $(".table1 tbody tr").css("background","#fff").eq(index).css("background",'red');
        $(".table2 tbody tr").css("background","#fff").eq(index).css("background",'red');
        var jin=$(".table1 tbody tr").eq(index).children("td:first-child").text();
        var wei=$(".table1 tbody tr").eq(index).children("td:last-child").text();
        data2= [];
        data2.push(jin);
        data2.push(wei);
        bb();
    });
    $(".table1 tbody tr").mouseout(function(){
        data2= [];
        bb();
    });
    //高亮 打点：
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
    //滚轮联动：
        $(".tableBox1").scroll(function(){
            var juli1=$(".tableBox1").scrollTop();
            $(".tableBox2").scrollTop(juli1);
        });
        $(".tableBox2").scroll(function(){
            var juli1=$(".tableBox2").scrollTop();
            $(".tableBox1").scrollTop(juli1);
        });
});
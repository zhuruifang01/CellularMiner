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

//校验结果:
    $(".jyJieGuo").click(function(){
        $(".zhezhaoTable1").show(500);
    });
    $(".zhezhaoTable .false").click(function(){
        $(".zhezhaoTable").hide();
    });
//修改表格:
    $(".table tbody .edit").click(function(){
        $(".zhezhaoTable2").show(500);
    });
    $(".caozuo li:first-child").click(function(){
        $(".zhezhaoTable2").hide();
        window.location.href("../shuju.html");
    });
    $(".caozuo li:last-child").click(function(){
        $(".zhezhaoTable2").hide();
    });
//==============数据======================
    //获取文件表：
    var data=[{"id":"20180326155208147566","name":"nbiot.txt"},{"id":"20180326155314139893","name":"nbiot.txt"}]
    for(var i=0;i<data.length;i++){
        $(".menuTwo_shuju").append("<ul class='filess'>" +
            "<li>"+data[i].name+"<span></span></li>" +
            "<div class='id'>"+data[i].id+"</div>" +
            "</ul>"
        );
    }
    $(".menuTwo_shuju .filess:last-child").addClass("active");
    //      $.ajax({
    //          url:"/getFiles",
    //          type:"GET",
    //          async:false,
    //          success:function(data){
    //              data = JSON.parse(data);
    //              for(var i=0;i<data.length;i++){
    //                  $(".menuTwo_shuju").append("<ul class='filess'>" +
    //                      "<li>"+data[i].name+"<span></span></li>" +
    //                      "<div class='id'>"+data[i].id+"</div>" +
    //                      "</ul>"
    //                  );
    //              }
    //              var fileid = document.cookie;
    //              if(fileid =='' || fileid == null){
    //             	 $(".menuTwo_shuju .filess:last-child").addClass("active");
    //              }else{
    //             	 var cookies = fileid.split("=");
    //             	 var cookieValue = cookies[cookies.length-1];
    //             	 if(cookieValue == '' || cookieValue == null){
    //             		 $(".menuTwo_shuju .filess:last-child").addClass("active");
    //             	 }else{
    //             		 for(var i=0;i<data.length;i++){
    //             			 if(data[i].id == cookieValue){
    //             				 $(".menuTwo_shuju .filess").eq(i).addClass("active");
    //             			 }
    //             		 }
    //             	 }
    //              }
    //          }
    //      });
    //上传文件：
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
        //    	 window.location.href="../index";
        //     }
        // });
    });
    //删除文件：
    $(".menuTwo_shuju .delete").click(function(){
        var id = $(".menuTwo_shuju ul:last-child .id").text();
        // $.ajax({
        //     url:"/deleteFile/"+id,
        //     type: "GET",
        //     dataType: "json",
        //     async:false,
        //     success: function(data) {}
        // });
        $(".menuTwo_shuju ul:last-child").remove();
    });
    //选中的文件：
    $(".menuTwo_shuju .filess").on("click",function(){
        var index=$(this).index(".menuTwo_shuju .filess");
        $(".menuTwo .filess").removeClass("active");
        $(".menuTwo .filess").eq(index).addClass("active");
    });
    $("#canshu").click(function(){
        var xuanzhongId=$(".menuTwo .active .id").text();
        document.cookie=xuanzhongId;
        // alert(document.cookie);
        window.location.href="canShu.html";
    });

});
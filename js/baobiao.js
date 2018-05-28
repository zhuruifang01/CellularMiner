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
});
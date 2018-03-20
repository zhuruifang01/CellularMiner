$(function(){
    var map = new BMap.Map("container");          // 创建地图实例
    var point = new BMap.Point(121.4921, 30.83355);  // 创建点坐标
    map.centerAndZoom(point,15);                 // 初始化地图，设置中心点坐标和地图级别
});
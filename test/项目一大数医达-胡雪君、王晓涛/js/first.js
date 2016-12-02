// JavaScript Document
;(function (win,doc){
	function change(){
		doc.documentElement.style.fontSize=50*doc.documentElement.clientWidth/320+'px';
	}
	change();
	win.addEventListener('resize',change,false);
})(window,document);

;(function(){
	$(function(){
		$('section.zhegai span').on('tap',function(){
			$('section.zhegai').css('display','none');
		});
		$('header .title div').on('tap',function(){
			$('section.zhegai').css('display','block');
		});
		$('section.zhegai div a').on('tap',function(){
			$('section.zhegai').css('display','none');
		});
		
		var swiper = new Swiper('.swiper-container', {
            spaceBetween: 0,
            slidesPerView: 3,
            centeredSlides: true,
            slideToClickedSlide: true,
            grabCursor: true,
            scrollbar: '.swiper-scrollbar',
            history: 'slide',
        });
		
		
		navigator.geolocation.watchPosition(function (ev){
			var longitude=ev.coords.longitude;
			var latitude=ev.coords.latitude;
			//创建地图
			var map=new BMap.Map('box');
			//位置 	缩放
			point=new BMap.Point(longitude, latitude)
			map.centerAndZoom(point, 15);
			//添加标注点
			var marker=new BMap.Marker(point);
			map.addOverlay(marker);
			
			var local = new BMap.LocalSearch(map, {
			  renderOptions:{map: map, autoViewport:true}
			});
			oBtn.onclick=function (){
				local.searchNearby('北京市海淀区东北旺西路8号中关村软件园一期3号楼3B区1206室','中国');
			};
		},function (){
			return '获取失败';
		});
	});
})();
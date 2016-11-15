var left = 0;
function move(obj,target){
	var iSpeed = 0;
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		iSpeed+=(target-obj.offsetLeft)/5;
		iSpeed*=0.7;
		left += iSpeed;
		obj.style.left = Math.round(left) +'px';
		if(Math.round(left)==target&&Math.round(iSpeed)==0){
			clearInterval(obj.timer);
		}
	},16);	
}
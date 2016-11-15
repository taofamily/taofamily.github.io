window.onload=function(){
			var oUl=document.getElementById('ul1');
			var N=11;
			for(var i=0;i<N;i++){
				var oLi=document.createElement('li');
				oLi.style.backgroundImage='url("img2/'+(i+1)+'.jpg")';
				oUl.appendChild(oLi);
				(function(oLi,i){
					setTimeout(function(){
						oLi.style.transition='1s all linear '+(200*(N-i))+'ms'
						oLi.style.transform='rotateY('+360/N*i+'deg) translateZ(300px)';
					},0);
				})(oLi,i);
			}
			var aLi=oUl.children;
			var y=0;
			var x=-10;
			aLi[0].addEventListener('transitionend',function(){
				change(y,x);
				document.onmousedown=function(ev){
					var disX=ev.clientX-y;
					var disY=ev.clientY+x;
					document.onmousemove=function(ev){
						y=ev.clientX-disX;
						x=disY-ev.clientY;
						change(y/3,x/3);
					};
					document.onmouseup=function(){
						document.onmousemove=null;
						document.onmouseup=null;
					};
					return false;
				};
			},false);
			function change(y,x){
				for(var i=0;i<aLi.length;i++){
					aLi[i].style.transition = '0s all ease';
					aLi[i].style.transform='rotateY('+(360/N*i+y)+'deg) translateZ(300px)';
					oUl.style.transform='perspective(800px) rotateX('+x+'deg)';
					var scale=Math.abs(Math.abs((360/N*i+y)%360)-180)/180;
					scale<0.3&&(scale=0.3);
					aLi[i].style.opacity=scale;
				}
			}
		};
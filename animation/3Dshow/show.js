window.onload=function(){
			var oBtn1=document.getElementById('btn1');
			var oBtn2=document.getElementById('btn2');
			var oUl=document.getElementById('ul2');
			var aLi=oUl.children;
			var arr=[];
			for(var i=0;i<aLi.length;i++){
				arr.push(aLi[i].className);
			}
			var bFlag=true;
			oBtn1.onclick=function(){
				if(!bFlag){
					return;
				}

				arr.push(arr.shift());
				
				for(var i=0;i<aLi.length;i++){
					aLi[i].className=arr[i];
					console.log(aLi[i].style.background);
					if(aLi[i].style.transform=='perspective(800px) translateX(0px) rotateY(0deg)'){
						bFlag=true;
					}
				}
			};
			oBtn2.onclick=function(){
				arr.unshift(arr.pop());

				for(var i=0;i<aLi.length;i++){
					aLi[i].className=arr[i];
				}
			};
		};
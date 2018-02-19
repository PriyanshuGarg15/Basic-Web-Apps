var x = document.querySelector("button");
var isCol=false;
	x.addEventListener("click",function()
	// document.body.style.background="purple";
	 {
		if(!isCol){
			document.body.style.background="purple";
		}
		else{
			document.body.style.background="white";
		}
		isCol=!isCol;
	});
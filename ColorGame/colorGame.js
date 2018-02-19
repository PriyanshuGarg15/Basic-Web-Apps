numS=6;
var colors=generateColors(numS);

var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var colorDisplay=document.querySelector("#colorDisplay");
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numS=3;
	colors=generateColors(numS);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for (var i=0;i<squares.length;i++){
		if (colors[i]){squares[i].style.background=colors[i];}
		else{
			squares[i].style.display="none";
		}
	}
	
	
	
})

hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numS=6;
	colors=generateColors(numS);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for (var i=0;i<squares.length;i++){
	squares[i].style.background=colors[i];
	squares[i].style.display="block";
	}
	
})
reset.addEventListener("click",function(){
	colors=generateColors(numS);
	pickedColor=pickColor();
	for (var i=0;i<squares.length;i++){
	squares[i].style.background=colors[i];}
	colorDisplay.textContent=pickedColor;
	h1.style.background="steelblue";
	message.textContent="";
	reset.textContent="new Colors";


})
colorDisplay.textContent=pickedColor;
for (var i=0;i<squares.length;i++){
	squares[i].style.background=colors[i];
	squares[i].addEventListener("click",function(){
		var clickedColor=this.style.background;
		if(clickedColor === pickedColor){
			message.textContent="Correct!";
			colorChanger(clickedColor);
			h1.style.background=clickedColor;
			reset.textContent="Play Again?" 		
		}
		else{
			message.textContent="Try Again!";
			this.style.background="#232323";
		}
	})
}

function colorChanger(color){
	for (var i=0;i<squares.length;i++){
	squares[i].style.background=color;	
}
}
function pickColor(){
	var random= Math.floor(Math.random()*colors.length);
	return colors[random];
}
function generateColors(num){
	var arr=[];
	for (var i = 0; i <num; i++) {
		arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);
	return "rgb("+ r +", "+ g +", "+ b +")";

}
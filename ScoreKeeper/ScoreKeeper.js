var p1= document.querySelector("#P1");
var p2= document.querySelector("#P2");
var r= document.querySelector("#R");
var p1s=document.querySelector("#P1s");
var p2s=document.querySelector("#P2s");
var numInput=document.querySelector("input");
var numDisp=document.querySelector("#WinS");

var p1Score=0;
var p2Score=0;
var WinningScore=5;
var gameOver=false;

p1.addEventListener("click",function(){
	if(!gameOver){
		p1Score++;
		p1s.textContent=p1Score;
		if (p1Score >= WinningScore){
			gameOver= true;
			p1s.classList.add("col");
		}}})

p2.addEventListener("click",function(){
	if(!gameOver){
		p2Score++;
		p2s.textContent=p2Score;
		if (p2Score >= WinningScore){
			gameOver= true;
			p2s.classList.add("col");
		}}})

r.addEventListener("click",function(){
	resetit();
})

function resetit(){
	p1Score=0;
	p1s.textContent=0;
	p2s.textContent=0;
	p2Score=0;
	gameOver=false;
	p1s.classList.remove("col");
	p2s.classList.remove("col");
}
numInput.addEventListener("change",function(){
	resetit();
	numDisp.textContent=this.value;
	WinningScore=Number(this.value);
})
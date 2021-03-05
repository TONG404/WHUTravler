"use strict";

//
// Display a Mandelbrot set
//

var divCanvas;
var gl;
var n =512;
var m =512;
var realX = 1100;
var realY = 2780;
var currentX=n/2-realX;
var currentY=n/2-realY;
var scaleK=1.0;
var PuzzleForm,PuzzlePages;

function init() {
    divCanvas = document.getElementById( "canvas" );
	PuzzlePages = document.getElementById("getPuzzlePages");
	PuzzleForm = document.getElementById("PuzzleForm");
	//Adjusting Size
	initPlayer();
	changeSize();
    render();
}

function initPlayer(){
	
}

function changeSize(){
	var newX = divCanvas.scrollWidth;
	var newY = divCanvas.scrollHeight;
	var k=1.0*newX/n;
	n*=k;m*=k;
	realX*=k;realY*=k;
	currentX*=k;currentY*=k;
	step*=k
	divCanvas.style.backgroundSize=k*800+"% "+k*800+"%";
	for(var i=0;i<LocList.length;i++){
		LocList[i].X*=k;
		LocList[i].Y*=k;
		LocList[i].R*=k;
	}
	scaleK=k;
}


function render() {
	//重置X，currentY
	divCanvas.setAttribute("style", "background-position: "+currentX+"px "+currentY+"px");
	realX=-currentX+n/2;
	realY=-currentY+n/2;
}

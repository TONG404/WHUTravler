
var DELAYED_TIME=1;
var step=5;
function dealKey(key){
	//document.getElementById("keyId").innerText = key;
	switch(key){
		case "w":
			if(currentX>-step)break;
			dealMove(0,-1);
			render();
			break;
		case "s":
			if(currentX<-5496+step)break;
			dealMove(0,1);
			render();
			break;
		case "d":
			if(currentY<-6688+step)break;
			dealMove(1,0);
			render();
			break;
		case "a":
			if(currentY>-step)break;
			dealMove(-1,0);
			render();
			break;
	}
}

function dealKB(e){
	var key = e.key;
	var curTime = new Date().getTime();
	if(curTime-lastHit<DELAYED_TIME){
		return;
	}
	
	lastHit=curTime;
	dealKey(key);
}

var lastHit,Paused=0;
var lastX=0,lastY=0;

function touchStart(e){
	lastX=e.changedTouches[0].clientX;
	lastY=e.changedTouches[0].clientY;
	console.log(lastX,lastY);
}

var RADIUS=18.0;

function judgeDir(x,y){
	if(x*x+y*y<=RADIUS*RADIUS)return 0;
	console.log(x*x+y*y);
	var cos = x/Math.sqrt(x*x+y*y);
	if(cos>Math.sqrt(2)/2 || cos< -Math.sqrt(2)/2){
		if(cos>0)return 3;
		else return 2;
	}
	var sin = y/Math.sqrt(x*x+y*y);
	if(sin<0)return 4;
	else return 5;
}

var msg=["e","","a","d","p","s",""];

function touchEnd(e){
	var newX = e.changedTouches[0].clientX;
	var newY = e.changedTouches[0].clientY;
	//console.log(newX,newY);
	var dir=judgeDir(newX-lastX,newY-lastY);
	if(Paused==1&&dir!=4)return;
	//console.log(msg[dir]);
	dealKey(msg[dir]);
}

//识别移动端
function isMobile(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        return true;
    }
    return false;
}


var mobileHint="<span id=\"hintWord\">操作指南：</span><br><span id=\"hintWord\">左右滑动</span><br><span id=\"hintWord\">单击旋转</span><br><span id=\"hintWord\">上滑暂停</span><br><span id=\"hintWord\">下滑加速</span><br>";

window.onload = function(){
	document.getElementById("LoadingHint").style.visibility="hidden";
	event.preventDefault();
	//if(!!self.touch) self.slider.addEventListener('touchmove',self.events,false); 
	
	document.onkeypress=dealKB;
	lastHit =new Date().getTime();
	init();
}

var MouseX,MouseY;

function SetXY(){
	MouseX=event.layerX;
	MouseY=event.layerY;
	//console.log(MouseX,MouseY);
}

function MoveWhenDown(){
	var dx=MouseX-(n/2);
	var dy=MouseY-(n/2);
	var dz=Math.sqrt(dx*dx+dy*dy);
	dealMove(dx/dz,dy/dz);
	render();
}
var moveInterval;
function MoveByClick(){
	if(moveInterval!=null){
		clearInterval(moveInterval);
		moveInterval=null;
	}
	moveInterval = setInterval(MoveWhenDown,50);
}

function MouseUp(){
	clearInterval(moveInterval);
}


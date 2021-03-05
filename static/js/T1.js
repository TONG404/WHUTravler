var flag=0;
var position = [{
		name: "凌波门",
		type: "0",
        x: 770,
        y: 0
      }, {
		name: "休息点",
		type: "0",
        x: 880,
        y: 50
      }, {
		name: "工学部主教",
		type: "2",
        x: 985,
        y: 105
      }, {
		name: "工图",
		type: "2",
        x: 1075,
        y: 160
      },
      {
		name: "工学部五教",
		type: "2",
        x: 980,
        y: 215
      }, {
		name: "医学部白宫",
		type: "4",
        x: 1080,
        y: 260
      }, {
		name: "休息点",
		type: "0",
        x: 1180,
        y: 310
      }, {
		name: "医学部图书馆",
		type: "4",
        x: 1270,
        y: 360
      },
      {
		name: "休息点",
		type: "0",
        x: 1185,
        y: 405
      }, {
		name: "枫教",
		type: "3",
        x: 1085,
        y: 450
      }, {
		name: "教一",
		type: "2",
        x: 990,
        y: 505
      }, {
		name: "教二",
		type: "3",
        x: 1090,
        y: 560
      },
      {
		name: "休息点",
		type: "0",
        x: 1200,
        y: 610
      }, {
		name: "珞珈山",
		type: "5",
        x: 1290,
        y: 660
      }, {
		name: "休息点",
		type: "0",
        x: 1205,
        y: 710
      }, {
		name: "老图书馆",
		type: "5",
        x: 1105,
        y: 760
      },
      {
		name: "理学楼",
		type: "2",
        x: 1005,
        y: 805
      }, {
		name: "行政楼",
		type: "5",
        x: 900,
        y: 850
      }, {
		name: "教三",
		type: "2",
        x: 795,
        y: 805
      }, {
		name: "休息点",
		type: "0",
        x: 680,
        y: 750
      },
      {
		name: "武大牌坊",
		type: "5",
        x: 565,
        y: 700
      }, {
		name: "休息点",
		type: "0",
        x: 465,
        y: 645
      }, {
		name: "信息学部图书馆",
		type: "1",
        x: 370,
        y: 590
      }, {
		name: "信息学部青楼",
		type: "1",
        x: 460,
        y: 540
      },
      {
		name: "休息点",
		type: "0",
        x: 560,
        y: 485
      }, {
		name: "计算机学院",
		type: "1",
        x: 660,
        y: 435
      }, {
		name: "教六",
		type: "4",
        x: 755,
        y: 380
      }, {
		name: "休息点",
		type: "0",
        x: 670,
        y: 340
      },
      {
		name: "教四",
		type: "5",
        x: 580,
        y: 295
      }, {
		name: "教五",
		type: "2",
        x: 475,
        y: 240
      }, {
		name: "总图",
		type: "4",
        x: 375,
        y: 190
      }, {
		name: "休息点",
		type: "0",
        x: 470,
        y: 130
      },
      {
		name: "万林艺术博物馆",
		type: "5",
        x: 570,
        y: 75
      }, {
		name: "休息点",
		type: "0",
        x: 665,
        y: 30
      }];
var nowX = 770;
var nowY = 0;

function sleep(n) {
	var start = new Date().getTime();
	while (true) {
		if (new Date().getTime() - start > n) {
			break;
		}
	}
}
var num,Place,nowIdx,score;
var ProblemList1;

var AnswerSheet,getPuzzlePages;

function StartRound(){
	Place = position[flag];
	console.log(Place);
	if(Place.type=="0"){
		alert("你来到了休息点，学习之余，好好休息一下吧~");
		document.getElementById("go").src="/static/img/go.png";
		lock=false;
		return;
	}
	alert("你来到了"+Place.name+"，挑战知识问答，获得碎片奖励！");
	var datapk={
		type:Place.type,
		num:1,
	}
	$.ajax({
		type: "GET",//方法类型
		dataType: "json",
		url: "/getKnowledge" ,
		async : true,
		data: datapk,
		success: function (result) {
			ProblemList1=result.data;
			console.log(result);
			setTimeout(startTest(),0);
		}
	});
}

function renderAnswerPage(){
	var curProblem = ProblemList1[nowIdx];
	document.getElementById("ProblemTitleBox").innerText=curProblem.problem;
	document.getElementById("selA").innerText=curProblem.selA;
	document.getElementById("selB").innerText=curProblem.selB;
	document.getElementById("selC").innerText=curProblem.selC;
	document.getElementById("selD").innerText=curProblem.selD;
	document.getElementById("id").value=curProblem.id;
}

function startTest(){
	AnswerSheet.style.visibility="visible";
	score=0;
	nowIdx=0;
	renderAnswerPage();
}
function Move(){
	flag = flag + 1;
	flag%=33;
	nowX = position[flag].x;
	nowY = position[flag].y;
	document.getElementById('player').style.left = nowX+"px";
	document.getElementById('player').style.top = nowY+"px";
	//console.log(flag);
	//console.log(nowX);
	//console.log(nowY);
	num--;
	if(num>0){
		setTimeout(Move,500);
	}else{
		setTimeout(StartRound,50);
	}
}

var lock=false;

function SetDice(){
	document.getElementById("go").src="/static/img/dice/"+num+".png";
	setTimeout(Move,500);
}

function RollingDice(){
	document.getElementById("go").src="/static/img/dice_Moving.gif";
	var i = 0;
	num = Math.random();
	num = num * 6 + 1;
	num = Math.floor(num);
	isBegin=true;
	setTimeout(SetDice,1500);
}

function go() {
	if(lock)return;
	lock=true;
	setTimeout(RollingDice,0);

	//console.log(num);
	//num=6;
	
}

function Finalize(){
	
	if(score==0){
		alert("回答错误！\n下次再接再厉哦！");
		document.getElementById("go").src="/static/img/go.png";
		AnswerSheet.style.visibility="hidden";
		lock=false;
		return;
	}
	alert("回答正确！恭喜你获得了一块碎片！");
	AnswerSheet.style.visibility="hidden";
	renderPuzzlePage();
	getPuzzlePages.style.visibility="visible";
}

function setAnswer(x){
	document.getElementById("answer").value=x;
	
	$.ajax({
		type: "POST",//方法类型
		dataType: "json",
		url: "/getKnwoledgeAnswer" ,
		async : false,
		data: $('#AnswerForm').serialize(),
		success: function (result) {
			if(result.status=="OK"){
				score+=1;
			}
			nowIdx+=1;
			if(nowIdx==ProblemList1.length){
				Finalize();
			}else{
				renderAnswerPage();
			}
		},
		error : function(xhr, textStatus, errorThrown){
			alert("请求失败"); 
		}
	});
	console.log(score);
}

var ZhNum=["零","一","两","三","四","五","六","七","八","九","十",]
var pieceList;
var height=1080,width=1920,scaleK;
function renderPuzzlePage(){

	
	document.getElementById("LocationTitle").innerText=Place.name;
	document.getElementById("LocationDescription").innerText="你获得了"+ZhNum[score]+"块碎片！\n（重复的碎片将不会重复获得~）";
	//获取拼图碎片
	pieceList=[];
	$.ajax({
		type: "GET",//方法类型
		dataType: "json",
		url: "/getPuzzlePieces" ,
		async : false,
		data: {"score":score},
		success: function (result) {
			pieceList=result.data;
		},
		error : function(xhr, textStatus, errorThrown){
			alert("请求失败"); 
		}
	});
	
	for(var i=0;i<pieceList.length;i++){
		var pictureId = Math.floor(pieceList[i]/100);
		var pieceId=pieceList[i]%100;
		var Piece = new Puzzle(pictureId,pieceId);
		Piece.Show();
	}
	
}

window.onload=function(){
	AnswerSheet=document.getElementById("AnswerSheet");
	getPuzzlePages=document.getElementById("getPuzzlePages");
	changeSize();
}
function SubmitForms(){
	lock=false;
	document.getElementById("go").src="/static/img/go.png";
	getPuzzlePages.style.visibility="hidden";
	for(var i=0;i<pieceList.length;i++){
		document.getElementById("pid").value=pieceList[i];
		UpdatePuzzle(true,$('#PuzzleForm').serialize());
	}
	var tmp=document.getElementById("PuzzlePieces").childNodes;
	while(tmp.length!=0){
		document.getElementById("PuzzlePieces").removeChild(tmp[0]);
	}
}

function changeSize(){
	var Map = document.getElementById("Map")
	var newX = Map.width;
	var k=1.0*newX/width;
	width*=k;height*=k;
	
	for(var i=0;i<position.length;i++){
		position[i].x*=k;
		position[i].y*=k;
	}
	scaleK=k;
}

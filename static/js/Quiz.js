'use strict';

var questionList,AnswerSheet;
var score=0,nowIdx=0;
var Place,QuizLock=false;
function setAnswer(x){
	document.getElementById("answer").value=x;
	
	$.ajax({
		type: "POST",//方法类型
		dataType: "json",
		url: "/getAnswer" ,
		async : true,
		data: $('#AnswerForm').serialize(),
		success: function (result) {
			if(result.status=="OK"){
				score+=1;
			}
			nowIdx+=1;
			if(nowIdx==4){
				Finalize();
			}else{
				renderAnswerPage();
			}
		},
		error : function(xhr, textStatus, errorThrown){
			/*
			alert("进入error---");
			alert("状态码："+xhr.status);
			alert("状态:"+xhr.readyState);
			alert("错误信息:"+xhr.statusText );
			alert("返回响应信息："+xhr.responseText );
			alert("请求状态："+textStatus);
			alert(errorThrown);
			*/
			alert("请求失败"); 
		}
	});
	console.log(score)
}

function renderAnswerPage(){
	var curProblem = questionList[nowIdx];
	document.getElementById("ProblemTitleBox").innerText=curProblem.problem;
	document.getElementById("selA").innerText=curProblem.selA;
	document.getElementById("selB").innerText=curProblem.selB;
	document.getElementById("selC").innerText=curProblem.selC;
	document.getElementById("selD").innerText=curProblem.selD;
	document.getElementById("problemid").value=curProblem.id;
}


function startQuiz(){
	QuizLock=true;
	AnswerSheet.style.visibility="visible";
	score=0;
	nowIdx=0;
	renderAnswerPage();
}

function Finalize(){
	alert("答题结束！得分："+score);
	AnswerSheet.style.visibility="hidden";
	renderPuzzlePage();
	PuzzlePages.style.visibility="visible";
	Place.等级=score;
	Place.图形.attr({fill : ColorList[score]});
	document.getElementById('等级').textContent = calc();
}

var ZhNum=["零","一","两","三","四","五","六","七","八","九","十",]
var pieceList;
function renderPuzzlePage(){

	
	document.getElementById("LocationTitle").innerText=Place.Name.zh;
	document.getElementById("LocationDescription").innerText="你获得了"+ZhNum[score+1]+"块碎片！\n（重复的碎片将不会重复获得~）";
	//获取拼图碎片
	pieceList=[];
	$.ajax({
		type: "GET",//方法类型
		dataType: "json",
		url: "/getPuzzlePieces" ,
		async : false,
		data: {"score":score+1},
		success: function (result) {
			pieceList=result.data;
		},
		error : function(xhr, textStatus, errorThrown){
			/*
			alert("进入error---");
			alert("状态码："+xhr.status);
			alert("状态:"+xhr.readyState);
			alert("错误信息:"+xhr.statusText );
			alert("返回响应信息："+xhr.responseText );
			alert("请求状态："+textStatus);
			alert(errorThrown);
			*/
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


function SubmitForms(){
	QuizLock=false;
	PuzzlePages.style.visibility="hidden";
	for(var i=0;i<pieceList.length;i++){
		document.getElementById("pid").value=pieceList[i];
		UpdatePuzzle(true,$('#PuzzleForm').serialize());
	}
	var tmp=document.getElementById("PuzzlePieces").childNodes;
	while(tmp.length!=0){
		document.getElementById("PuzzlePieces").removeChild(tmp[0]);
	}
}

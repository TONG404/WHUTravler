
var PicNameList=["Spring","Summer","Autumn","Winter"];
var newImg;
function Puzzle(pictureId, pieceId){
	this.PictureId=pictureId;
	this.PieceId=pieceId;
	this.pid=pictureId*100+pieceId;
	this.url="/static/img/puzzle/"+pictureId+"/"+PicNameList[pictureId]+"_"+pieceId+".jpg";
	this.Show=function(){
		newImg = new Image();
		newImg.src=this.url;
		newImg.className="PuzzlePiece";
		document.getElementById("PuzzlePieces").appendChild(newImg);
	}
}

var PuzzleList2;
var ZhNum=["零","一","两","三","四","五","六","七","八","九","十",]
function ShowPuzzlePages(loc){
	PuzzleList2 = loc.pidList;
	allowMove=false;
	console.log(loc);
	document.getElementById("LocationTitle").innerText=loc.Name;
	document.getElementById("LocationDescription").innerText=loc.description+"\n\n你获得了"+ZhNum[PuzzleList2.length]+"块新碎片！\n重复获得的碎片不会再更新哦~";
	PuzzlePages.style.visibility="visible";
	console.log(PuzzleList2);
	for(var i=0;i<PuzzleList2.length;i++){
		var newP = new Puzzle(Math.floor(PuzzleList2[i]/100),PuzzleList2[i]%100);
		newP.Show();
	}

	
}

function UpdatePuzzle(allowExist,datapk){
	$.ajax({
		type: "POST",//方法类型
		dataType: "json",
		url: "/updatePuzzle" ,
		data: datapk,
		async : false,
		success: function (result) {
			var existed = result.exist;
			if(allowExist)return;
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
}

function SubmitForm(){
	allowMove=true;
	PuzzlePages.style.visibility="hidden";
	
	for(var i=0;i<PuzzleList2.length;i++){
		document.getElementById("pid").value=PuzzleList2[i];
		UpdatePuzzle(false,$('#PuzzleForm').serialize());
	}
	
	var tmp=document.getElementById("PuzzlePieces").childNodes;
	while(tmp.length!=0){
		document.getElementById("PuzzlePieces").removeChild(tmp[0]);
	}
	
}

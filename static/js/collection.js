
function Select(id){
	renderPuzzle(id);
}

function MoveOver(flag,id){
	if(flag){
		document.getElementById(id).className="BtnImg_Selected";
	}else{
		document.getElementById(id).className="BtnImg";
	}
}
var NameToNum={
	"Spring":0,
	"Summer":1,
	"Autumn":2,
	"Winter":3,
}
function renderPuzzle(id){
	for(var i=0;i<16;i++){
		document.getElementById("pic"+(i+1)).src="/static/img/puzzle/000.jpg";
	}
	var tmp={'imgId':id};
	puzList=[];
	$.ajax({
		type: "GET",//方法类型
		dataType: "json",
		url: "/GetPuzzles" ,
		async : false,
		data: tmp,
		success: function (result) {
			puzList=result.data;
		}
	});
	console.log(puzList);
	var idx = NameToNum[id];
	for(var i=0;i<puzList.length;i++){
		var tmp = "pic"+puzList[i];
		document.getElementById(tmp).src="/static/img/puzzle/"+idx+"/"+id+"_"+puzList[i]+".jpg";
	}
}

window.onload=function(){
	Select("Spring");
}


function Location(x,y,rx,ry,shape,name,pidList,description){
	//地址对象
	this.X=x;
	this.Y=y;
	this.Rx=rx;
	this.Ry=ry;
	this.Name=name;
	this.Shape=shape;
	this.pidList=pidList;
	this.description=description;
	this.InLocation = function(x1,y1){
		if(this.Shape=="Square"){
			return x1<=this.X+this.Rx&&x1>=this.X-this.Rx&&y1<=this.Y+this.Ry&&y1>=this.Y-this.Ry;
		}else if(this.Shape=="Circle"){
			return (this.X-x1)*(this.X-x1)+(this.Y-y1)*(this.Y-y1)<=this.Rx*this.Rx;
		}
		
	}
	
	this.Welcome = function(){
		alert("找到了一个打卡点！\n您来到了："+this.Name+"!!!");
		ShowPuzzlePages(this);
	}
}


var LocList = [
new Location(1023,2518,77,17,"Square","武大西门外",[1,2],"西门旁边的饺子店非常可，还有汤师傅东北菜",),
new Location(1062,2130,89,65,"Square","计算机学院",[3,4],"计算机学院，一个让人秃头的的地方……"),
new Location(957,2835,89,89,"Square","武大正门",[5,6],"正门外有经典开封菜，麻辣香锅，哈尔滨饺子馆都很不错哦！"),
new Location(1758,2487.5,37,56.5,"Square","梅园CBD",[7,8],"周麻婆、氧气层、KFC、呷哺呷哺、排档江湖等等都很不错",),
new Location(2095.5,2450,53.5,20,"Square","珞珈山庄",[101,102],"自助餐不错，学生凭校园卡可打折",),
new Location(2464.5,2313.5,49.5,44.5,"Square","枫园食堂",[103,104],"有可以任选的食堂，还有风味食堂有部队火锅，楼下的CBD还有炒酸奶！",),
new Location(2268.5,1814,33.5,22,"Square","湖滨食堂",[105,106],"一楼二楼不一样的菜品，都很可",),
new Location(1238,3305,35,28,"Square","信息学部一食堂",[107,108],"有珞珈面馆，提供夜宵，夜宵可",),
new Location(1155,3434.5,46,49.5,"Square","信息学部二食堂",[201,202],"一楼有各种菜品，还有清真食堂的大盘鸡；二楼三食堂什么都有，麻辣香锅石锅饭",),
new Location(1365,3060.5,30,21.5,"Square","星湖园餐厅",[203,204],"卖面食等等的窗口多一些，还可，渔粉针不辍",),
new Location(967,3532,95,50,"Square","信息学部四食堂",[205,206],"银泰 绿茶 海底捞 来菜 九楼西餐厅  乐天一楼玖段和二楼烤肉 都不戳  么肆烤肉好吃",),
new Location(1086,3347.5,15,32.5,"Square","国软CBD",[207,208],"很多夜宵，美食小站、炒饭、手抓饼都是很棒的哦",),
new Location(1092.5,421,29.5,25,"Square","杏园食堂",[301,302],"一楼选菜，二楼拌饭火锅火腿炒饭，三楼大盘鸡，还有咖啡馆，周麻婆",),
new Location(1876,1636,30,30,"Square","工学部一食堂",[303,304],"三楼民族食堂大盘鸡和各种干锅，二楼四食堂有大盘鸡有香锅，一楼就是正常的饭饭菜菜",),
new Location(1866.5,1572,35.5,29,"Square","工学部二食堂",[305,306],"种类超级丰富，麻辣香锅永远滴神，平价火锅也是宝藏，还有麻辣烫晚上还有烧烤",),
new Location(1032.5,1962.5,16.5,28.5,"Square","工学部菜市场",[307,308],"小吃街很棒，炒酸奶烤肉拌饭都很好",),
new Location(1222.5,2195.5,30.5,39.5,"Square","桂园食堂",[1,2],"三楼的鱼粉不错，一楼也还可",),
]

var inLoc=false;
var allowMove=true;
function dealMove(dx,dy){
	if(allowMove==false)return;
	currentX-=dx*step;
	currentY-=dy*step;
	realX+=dx*step;
	realY+=dy*step;
	var flag=false;
	for(var i=0;i<LocList.length;i++){
		var loc1 = LocList[i];
		
		if(loc1.InLocation(realX,realY)){
			flag=true;
			if(inLoc==false){
				inLoc=true;
				loc1.Welcome();
				clearInterval(moveInterval);
				return;
			}
			
		}
		
	}
	
	if(inLoc==true && flag == false){
		inLoc=false;
	}
}

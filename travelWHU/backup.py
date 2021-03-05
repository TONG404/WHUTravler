from django.shortcuts import render
import random
import json
import time
from django.http import HttpResponse

PuzzleList=[
1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,
101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,
201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,
301,302,303,304,305,306,307,308,309,310,311,312,313,314,315,316,
]

def createSession(session):
	tmp=""
	for i in range(32):
		tmp+=random.choice('abcdefghijklmnopqrstuvwxyz')
	session['sessionId']=tmp
	session['loginTime']=time.time();
	session['picList']=[[],[],[],[]];

def getPuzzlePieces(request):
	num = int(request.GET['score'])
	numList = random.sample(PuzzleList,num)
	data={"data":numList}
	return HttpResponse(json.dumps(data))

def updatePuzzle(request):
	if(request.method=="GET"):
		return HttpResponse('{"resultCode": "200 OK"}')
	
	try:
		pid=int(request.POST['pid'])
		#request.session[]
	except:
		pass
	
	pictureId=pid//100;
	pieceId=pid%100;
	#open("./tmp.txt","a+",encoding='utf8').write(request.session['sessionId']+" "+str(request.session['picList'])+"\n" )
	if(pieceId in request.session['picList'][pictureId]):
		status="True"
	else:
		request.session['picList'][pictureId].append(pieceId)
		status="False"
	#open("./tmp.txt","a+",encoding='utf8').write(request.session['sessionId']+" "+str(request.session['picList'])+"\n" )
	request.session.save()
	return HttpResponse('{"resultCode": "200 OK","exist":"%s","picList":"%s"}'%(status,str(request.session['picList'])))
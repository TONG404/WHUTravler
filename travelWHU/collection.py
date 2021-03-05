from django.shortcuts import render
import random
import json
from django.http import HttpResponse
from . import backup
PuzzleList=[
1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,
]


picName=["Spring","Summer","Autumn","Winter"]

def GetPuzzles(request):
	puzList = request.session['picList']
	data={}
	for i in range(4):
		if(request.GET['imgId']==picName[i]):
			data['data']=puzList[i]
	return HttpResponse(json.dumps(data))

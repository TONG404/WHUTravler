from django.shortcuts import render
from django.http import HttpResponse

import random
import json
from KnowledgeProblem.models import Knowledge
from . import backup

appId = "33FEC6B99B5AE0D7"

def ecd(src):
	m1 = hashlib.md5()
	m1.update(src.encode('utf-8'))
	pd = m1.hexdigest()
	return pd

def checkEcd(appId,questionList,code):
	return ecd(appId+str(questionList))==code

def ImportKnowledge(request):
	try:
		questionList = json.loads(request.GET['data'])
		ecd = request.GET['ecd']
	except:
		return HttpResponse("500 Internal Server Error")
	
	if(ecd!=appId):
		return HttpResponse("403 Wrong ECD")
	for question in questionList:
		que = Knowledge(
		selA=question['selA'],
		selB=question['selB'],
		selC=question['selC'],
		selD=question['selD'],
		id=question['id'],
		answer=int(question['answer']),
		problem=question['problem'],
		type=question['type'],
		)
		que.save()
	return HttpResponse("200 OK")

def getKnowledgeAnswer(request):
	if(request.method=="GET"):
		return HttpResponse("200 OK")
	question = Knowledge.objects.get(id=request.POST['id'])
	answer = int(request.POST["answer"])
	if(question.answer==answer):
		return HttpResponse('{"status":"OK"}')
	else:
		return HttpResponse('{"status":"FAIL"}')

def getKnowledge(request):
	num= request.GET['num']
	Gtype= request.GET['type']
	qList = Knowledge.objects.filter(type=Gtype)
	questionList=[]
	for item in qList:
		tmp={
		"id":item.id,
		"problem":item.problem,
		"type":item.type,
		"selA":item.selA,
		"selB":item.selB,
		"selC":item.selC,
		"selD":item.selD,
		}
		questionList.append(tmp)
	datapk={
	"data":random.sample(questionList,int(num))
	}
	return HttpResponse(json.dumps(datapk))
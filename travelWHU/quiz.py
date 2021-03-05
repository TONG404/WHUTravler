from django.shortcuts import render
from django.http import HttpResponse
import hashlib
import random
import json
from Question.models import Question
from . import backup

appId = "33FEC6B99B5AE0D7"

def ecd(src):
	m1 = hashlib.md5()
	m1.update(src.encode('utf-8'))
	pd = m1.hexdigest()
	return pd



def ImportQuestion(request):
	try:
		questionList = json.loads(request.GET['data'])
		ecd = request.GET['ecd']
	except:
		return HttpResponse("500 Internal Server Error")
	
	if(ecd!=appId):
		return HttpResponse("403 Wrong ECD")
	
	for question in questionList:
		que = Question(
		depA=question['depA']=="1",
		depB=question['depB']=="1",
		depC=question['depC']=="1",
		depD=question['depD']=="1",
		selA=question['selA'],
		selB=question['selB'],
		selC=question['selC'],
		selD=question['selD'],
		id=question['id'],
		answer=int(question['answer']),
		problem=question['problem'],
		)
		que.save()
	return HttpResponse("200 OK")

def getAnswer(request):
	if(request.method=="GET"):
		return HttpResponse("200 OK")
	question = Question.objects.get(id=request.POST['problemid'])
	answer = int(request.POST["answer"])
	if(question.answer==answer):
		return HttpResponse('{"status":"OK"}')
	else:
		return HttpResponse('{"status":"FAIL"}')

def getQuestion(request):
	questionList=[]
	depId = request.GET['depId']
	data=[]
	special=[]
	data=Question.objects.filter(depA=True,depB=True,depC=True,depD=True)
	if(depId=="depA"):
		special=Question.objects.filter(depA=True,depB=False,depC=False,depD=False)
	elif(depId=="depB"):
		special=Question.objects.filter(depB=True,depA=False,depC=False,depD=False)
	elif(depId=="depC"):
		special=Question.objects.filter(depC=True,depB=False,depA=False,depD=False)
	else:
		special=Question.objects.filter(depD=True,depB=False,depC=False,depA=False)
	
	for question in data:
		que={
		"id":question.id,
		"problem":question.problem,
		#"answer":question.answer,
		"selA":question.selA,
		"selB":question.selB,
		"selC":question.selC,
		"selD":question.selD,
		}
		questionList.append(que)
	specionquestionList=[]
	for question in special:
		que={
		"id":question.id,
		"problem":question.problem,
		#"answer":question.answer,
		"selA":question.selA,
		"selB":question.selB,
		"selC":question.selC,
		"selD":question.selD,
		}
		specionquestionList.append(que)
	
	rtnList = random.sample(questionList,2)+random.sample(specionquestionList,2)
	random.shuffle(rtnList)
	return HttpResponse(json.dumps(rtnList))
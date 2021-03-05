from django.shortcuts import render
import random
import time
from . import backup

def checkSession(request):
	try:
		session_key = request.session['sessionId']
		if(time.time()-request.session['loginTime']>86400):
			backup.createSession(request.session)
	except:
		backup.createSession(request.session)

def EatInWHU(request):
	context          = {}
	checkSession(request)
	return render(request, 'EatInWHU.html', context)


def PlayInWHU(request):
	context          = {}
	checkSession(request)
	return render(request, 'PlayInWHU.html', context)

def Collection(request):
	context          = {}
	checkSession(request)
	return render(request, 'Collection.html', context)

def LearnInWHU(request):
	context          = {}
	checkSession(request)
	return render(request, 'LearnInWHU.html', context)

def HomePage(request):
	context          = {}
	checkSession(request)
	return render(request, 'Index.html', context)

def WHUPass(request):
	context          = {}
	checkSession(request)
	return render(request, 'WHUPass.html', context)
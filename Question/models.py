from django.db import models

# Create your models here.
class Question(models.Model):
	id = models.IntegerField(primary_key=True)
	problem = models.CharField(max_length=320)
	selA = models.CharField(max_length=40)
	selB = models.CharField(max_length=40)
	selC = models.CharField(max_length=40)
	selD = models.CharField(max_length=40)
	depA = models.BooleanField()
	depB = models.BooleanField()
	depC = models.BooleanField()
	depD = models.BooleanField()
	answer = models.IntegerField()
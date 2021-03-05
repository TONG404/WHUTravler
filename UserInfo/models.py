from django.db import models

# Create your models here.
class UserInfo(models.Model):
	uid = models.CharField(max_length=32)
	pic1 = models.CharField(max_length=40)
	pic2 = models.CharField(max_length=40)
	pic3 = models.CharField(max_length=40)
	pic4 = models.CharField(max_length=40)
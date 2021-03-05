"""travelWHU URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from . import view,backup,quiz,collection,knowledge

urlpatterns = [
    path('admin/', admin.site.urls),
    path('LearnInWHU/', view.LearnInWHU),
    path('EatInWHU/', view.EatInWHU),
    path('PlayInWHU/', view.PlayInWHU),
    path('Collection', view.Collection),
    path('updatePuzzle', backup.updatePuzzle),
    path('ImportQuestion', quiz.ImportQuestion),
    path('ImportKnowledge', knowledge.ImportKnowledge),
    path('getQuestion', quiz.getQuestion),
    path('getKnowledge', knowledge.getKnowledge),
    path('getAnswer', quiz.getAnswer),
    path('getKnwoledgeAnswer', knowledge.getKnowledgeAnswer),
    path('getPuzzlePieces', backup.getPuzzlePieces),
    path('GetPuzzles', collection.GetPuzzles),
    path('4f64e309f2a712bf', view.WHUPass),
    path('', view.HomePage),
]

from django.urls import path

from .views import *

  
urlpatterns = [
    path('governorates/', GovernoratesView.as_view(), name="governorates"),
    path('governorate/<int:id>/', GovernorateDetailView.as_view(), name="governorate"),


]
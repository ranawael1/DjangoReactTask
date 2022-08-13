from .models import *
from .serializers import GovSerializer, UniSerializer
from django.http import HttpResponse

# REST
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny
from rest_framework import status

class GovernoratesView(APIView): 
    permission_classes = [AllowAny]
    serializer_class = GovSerializer
    def get(self, request):
        governorates = Governorate.objects.all()
        serializer = GovSerializer(governorates, many= True)
        return Response(serializer.data, )

class GovernorateDetailView(APIView): 
    permission_classes = [AllowAny]
    def get_object(self, id):
        try:
            return Governorate.objects.get(id=id)
        except Governorate.DoesNotExist:
            return HttpResponse(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, id):
        governorate = self.get_object(id)
        universities = governorate.universities.all()
        serializer = UniSerializer(universities, many= True)
        return Response(serializer.data)

    def put(self, request, id):
        article = self.get_object(id)
        serializer = GovSerializer(article, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)




 
